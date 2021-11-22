import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useQuill } from 'react-quilljs';

import Styles from './Editor.module.scss';
import QuillStyles from './Quill.module.scss';

// import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

const QuillEditor = ({
  legacyCompat,
  className,
  style,
  disabled,
  locked,
  name,
  value,
  placeholder,
  onChange,
  onSubmit,
  currentUser,
  toolbar = [
    ['bold', 'italic', 'underline', 'strike', 'link'],
    ['blockquote', 'image']
  ],
  isContent = false,
  enterToSend = false,
  inputClassName,
  mentionList: initialMentionList,
  theme = 'bubble',
  plugins = {
    mention: false,
    fileDrop: true,
    magicUrl: true
  },
  onSaveAttachment,
  ...props
}) => {
  const formats = [
    'mention',
    'blockquote',
    'bold',
    'italic',
    'underline',
    'strike',
    'align',
    'list',
    'indent',
    'size',
    'header',
    'link',
    'image',
    'video',
    'color',
    'background',
    'clean',
    'script'
  ];
  const modules = {
    toolbar: toolbar,
    mention: plugins.mention
      ? {
          source: null,
          isolateCharacter: true,
          appendToParent: false,
          parentElem: null,
          dataAttributes: [
            'id',
            'value',
            'denotationChar',
            'link',
            'target',
            'username',
            'uuid'
          ]
        }
      : undefined,
    fileDrop: plugins.fileDrop ? { fileHandler: null } : undefined,
    magicUrl: plugins.magicUrl
  };

  const { quill, quillRef, Quill } = useQuill({
    theme,
    placeholder,
    modules,
    formats
  });

  if (Quill && !quill) {
    try {
      const MagicUrl = require('quill-magic-url').default;
      const Mention = require('quill-mention').default;
      const FileDrop = require('./modules/FileDrop').default;
      Quill.register('modules/magicUrl', MagicUrl, true);
      Quill.register('modules/fileDrop', FileDrop, true);
      Quill.register('modules/mention', Mention, true);
      // For executing this line only once
    } catch (err) {
      console.log(err);
    }
  }

  const mentionHandler = (searchTerm, renderList, mentionChar) => {
    const mentionList = initialMentionList
      ?.filter((u) => u.uuid !== currentUser?.uuid)
      .map((u, idx) => {
        return { id: idx, uuid: u.uuid, value: u.name, username: u.username };
      });

    if (searchTerm.length === 0) {
      renderList(mentionList, searchTerm);
    } else {
      let matches = [];
      for (var i = 0; i < mentionList.length; i++) {
        if (
          ~mentionList[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
        ) {
          matches.push(mentionList[i]);
        } else if (
          ~mentionList[i].username
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase())
        ) {
          matches.push(mentionList[i]);
        }
      }
      renderList(matches, searchTerm);
    }
  };

  // Insert Image(selected by user) to quill
  const insertLinkToEditor = (url, preview) => {
    const range = quill.getSelection();

    const fileName = url.substr(url.lastIndexOf('/') + 1);
    quill.insertText(range.index, fileName, 'link', url);

    if (preview.match(/\.(gif|jpe?g|a?png|svg|webp|bmp)/i)) {
      // Show preview if preview is image
      quill.insertText(range.index, '\n');
      quill.insertEmbed(range.index, 'image', preview);
    }
  };

  // Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
  const saveToServer = async (file) => {
    try {
      const { data } = await onSaveAttachment(file);
      insertLinkToEditor(data.attachment, data.preview);
    } catch (err) {
      console.error(err);
    }
  };

  // Open Dialog to select Image File
  const selectLocalImage = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('multiple', 'true');
    input.setAttribute('accept', 'image/*, application/pdf');
    input.click();
    input.onchange = () => {
      [].forEach.call(input.files, function (file) {
        saveToServer(file);
      });
    };
  };

  const handleLink = (value) => {
    const range = quill.getSelection();
    if (range == null || range.length == 0) {
      return;
    }
    let preview = quill.getText(range);
    if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
      preview = 'mailto:' + preview;
    }
    const tooltip = quill.theme.tooltip;
    tooltip.edit('link', preview);
    if (quill.theme.tooltip.root.offsetLeft < 0) {
      quill.theme.tooltip.root.style.left = '0px';
      quill.theme.tooltip.textbox.placeholder = 'hiredigital.com';
    }

    console.log('link', preview);
  };

  const fileDropHandler = (files, callback) => {
    [].forEach.call(files, function (file) {
      if (file) {
        const blob = file.getAsFile ? file.getAsFile() : file;
        saveToServer(blob);
      }

      // if (isContent) {
      //   // handle special content generation methods
      //   var attachment = {
      //     attachment: file,
      //     type: Enum.ContentType.ATTACHMENT,
      //     title: file.name,
      //   };
      //   createInlineContent(vm.parentModel.content, attachment).then(
      //     function (res) {
      //       $rootScope.$broadcast('content:image-added', vm.parentModel.uuid);
      //       LoaderService.stop();
      //       var attachment = res.$response.data.preview
      //         ? res.$response.data.preview
      //         : res.$response.data.attachment;
      //       var image = res.$response.data.preview;
      //       callback(image);
      //     },
      //     function (err) {
      //       LoaderService.stop();
      //       var reader = new FileReader();
      //       reader.onload = function (evt) {
      //         callback(evt.target.result);
      //       };
      //       // read the clipboard item or file
      //       var blob = file.getAsFile ? file.getAsFile() : file;
      //       if (blob instanceof Blob) {
      //         reader.readAsDataURL(blob);
      //       }
      //     }
      //   );
      // } else {
      //   CommonAttachment.$createAttachment(file).$then(
      //     function (res) {
      //       callback(res.$response.data.attachment);
      //       LoaderService.stop();
      //     },
      //     function (err) {
      //       // Fallback handler if image upload fails

      //       // set up file reader
      //       var reader = new FileReader();
      //       reader.onload = function (evt) {
      //         callback(evt.target.result);
      //       };
      //       // read the clipboard item or file
      //       var blob = file.getAsFile ? file.getAsFile() : file;
      //       if (blob instanceof Blob) {
      //         reader.readAsDataURL(blob);
      //       }
      //       LoaderService.stop();
      //     }
      //   );
      // }
    });
  };

  useEffect(() => {
    if (quill) {
      // Paste initial value
      quill.clipboard.dangerouslyPasteHTML(value);

      // Add text change handler
      quill.on('text-change', (e) => {
        let html = quill.container.firstChild.innerHTML;
        if (html === '<p><br></p>') {
          html = ' ';
        }
        onChange({ target: { name, value: html } });
      });

      // Set Key Bindings

      if (quill.getModule('mention')) {
        quill.getModule('mention').options.source = mentionHandler;
        quill.getModule('mention').options.parentElem = quillRef.current;
      }

      if (quill.getModule('fileDrop')) {
        quill.getModule('fileDrop').options.fileHandler = fileDropHandler;
      }

      quill.getModule('toolbar').addHandler('image', selectLocalImage);

      quill.getModule('toolbar').addHandler('link', handleLink);

      return () => {
        quill.off('text-change');
      };
    }
  }, [quill]);

  useEffect(() => {
    if (!value && quill) {
      quill.setContents('');
    }
  }, [quill, value]);

  return (
    <div
      className={classNames(
        Styles.container,
        className,
        (disabled || locked) && Styles.locked,
        legacyCompat && Styles.legacy
      )}
      style={style}
    >
      <div
        className={classNames(Styles.quill, QuillStyles.editor, inputClassName)}
        id={name}
        name={name}
        ref={quillRef}
        placeholder={placeholder}
      />
      <label
        htmlFor={props.name}
        className={classNames(Styles.label, props.error && Styles.error)}
      >
        {props.error || props.label}
      </label>
    </div>
  );
};

QuillEditor.props = {
  legacyCompat: PropTypes.bool,
  name: PropTypes.string.isRequired,
  locked: PropTypes.bool,
  active: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  predicted: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  mentionList: PropTypes.array,
  plugins: PropTypes.shape({
    mention: PropTypes.bool,
    fileDrop: PropTypes.bool,
    magicUrl: PropTypes.bool
  })
};

export default QuillEditor;
