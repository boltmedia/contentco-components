import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Input.module.scss';
import QuillStyles from './Quill.module.scss';
import classNames from 'classnames';
//import ReactQuill from 'react-quill';
//import ReactQuill from './QuillDynamic';
import ReactQuill from './QuillBase';
import 'react-quill/dist/quill.bubble.css'; // ES6

const QuillEditor = (props) => {
  const fieldClassName = classNames(
    Styles.container,
    props.className,
    props.locked && Styles.locked
  );

  const handleChange = (content, delta, source, editor) => {
    let updateContent;
    if (content === '<p><br></p>') {
      updateContent = '';
    } else {
      updateContent = content;
    }
    // this.setState({ value: updateContent });
    try {
      props.onChange({
        target: { name: props.name, value: updateContent },
      });
    } catch (err) {
      return;
    }
  };
  return (
    <div className={fieldClassName} style={props.style}>
      <ReactQuill
        className={classNames(Styles.base, Styles.quill, QuillStyles.editor)}
        id={props.name}
        name={props.name}
        defaultValue={props.defaultValue}
        value={props.value}
        theme='bubble'
        placeholder={props.placeholder}
        scrollingContainer='#scrollContainer'
        onChange={handleChange}
        readOnly ={props.locked}
      />
      <label htmlFor={props.name} className={classNames(Styles.label, props.error && Styles.error)}>
        {props.error || props.label}
      </label>
    </div>
  );
};

QuillEditor.props = {
  name: PropTypes.string.isRequired,
  locked: PropTypes.bool,
  active: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  predicted: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  className: PropTypes.string,
};

export default QuillEditor;
