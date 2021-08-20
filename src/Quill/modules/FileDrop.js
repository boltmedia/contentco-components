// import Quill from 'quill';

/**
 * Custom module for quilljs to allow user to drag images from their file system into the editor
 * and paste images from clipboard (Works on Chrome, Firefox, Edge, not on Safari)
 * @see https://quilljs.com/blog/building-a-custom-module/
 */
export default class FileDrop {
  /**
   * Instantiate the module given a quill instance and any options
   * @param {Quill} quill
   * @param {Object} options
   */
  constructor(quill, options = {}) {
    // save the quill reference
    this.quill = quill;

    this.options = options;
    if (!this.options.fileHandler) {
      this.options.fileHandler = this.fileHandler;
    }
    // bind handlers to this instance
    this.handleDrop = this.handleDrop.bind(this);
    this.handlePaste = this.handlePaste.bind(this);
    this.fileHandler = this.fileHandler.bind(this);
    // listen for drop and paste events
    this.quill.root.addEventListener('drop', this.handleDrop, false);
    this.quill.root.addEventListener('paste', this.handlePaste, false);
  }

  /**
   * Default Filehandler, included in the constructor, but expected to be overridden
   * @param {Event} evt
   */
  fileHandler(files, callback) {
    // check each file for an image
    [].forEach.call(files, (file) => {
      if (!file.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp|vnd\.microsoft\.icon)/i)) {
        // file is not an image
        // Note that some file formats such as psd start with image/* but are not readable
        return;
      }
      // set up file reader
      const reader = new FileReader();
      reader.onload = (evt) => {
        callback(evt.target.result);
      };
      // read the clipboard item or file
      const blob = file.getAsFile ? file.getAsFile() : file;
      if (blob instanceof Blob) {
        reader.readAsDataURL(blob);
      }
    });
  }

  /**
   * Handler for drop event to read dropped files from evt.dataTransfer
   * @param {Event} evt
   */
  handleDrop(evt) {
    evt.preventDefault();
    if (evt.dataTransfer && evt.dataTransfer.files && evt.dataTransfer.files.length) {
      this.readFiles(evt.dataTransfer.files, this.insert.bind(this));
    }
  }

  /**
   * Handler for paste event to read pasted files from evt.clipboardData
   * @param {Event} evt
   */
  handlePaste(evt) {
    if (evt?.clipboardData?.files?.length) {
      // This will prevent adding of files from the clipboard, but allow if there is text.
      // FIXME: Edge case when clipboard has both text and files
      evt.preventDefault();
    }
    if (evt?.clipboardData?.items?.length) {
      this.readFiles(evt.clipboardData.items, (dataUrl) => {
        const selection = this.quill.getSelection();
        if (selection) {
          // we must be in a browser that supports pasting (like Firefox)
          // so it has already been placed into the editor
        } else {
          // otherwise we wait until after the paste when this.quill.getSelection()
          // will return a valid index
          setTimeout(() => this.insert(dataUrl), 0);
        }
      });
    }
  }

  /**
   * Insert the image into the document at the current cursor position
   * @param {String} dataUrl  The base64-encoded image URI
   */
  insert(dataUrl) {
    const index = (this.quill.getSelection() || {}).index || this.quill.getLength();
    this.quill.insertEmbed(index, 'image', dataUrl, 'user');
  }

  /**
   * Extract image URIs a list of files from evt.dataTransfer or evt.clipboardData
   * @param {File[]} files  One or more File objects
   * @param {Function} callback  A function to send each data URI to
   */
  readFiles(files, callback) {
    if (this.options && this.options.fileHandler) {
      this.options.fileHandler(files, (result) => {
        callback(result);
      });
    } else {
      this.fileHandler(files, (result) => {
        callback(result);
      });
    }
  }
}

// Quill.register('modules/FileDrop', FileDrop);
