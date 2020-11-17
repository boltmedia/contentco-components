import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TextInput from './Input/TextInput';
import DateInput from './Input/DateInput';
import TextArea from './Input/TextArea';

import SelectInput from './Input/Select';
import OrderableSelect from './Input/OrderableSelect/OrderableSelect';

import MultiLink from './Input/MultiLink';
import Password from './Password/Password';
import NewSingle from './File/NewSingle';
import NewMulti from './File/NewMulti';
import QuillEditor from './Input/Quill';
const Form = (props) => {
  return <form />;
};

Form.TextInput = TextInput;
Form.DateInput = DateInput;
Form.TextArea = TextArea;
Form.Select = SelectInput;
Form.SortableSelect = OrderableSelect;
Form.SingleUpload = NewSingle;

Form.MultiUpload = NewMulti;
Form.MultiLink = MultiLink;
Form.Password = Password;
Form.Quill = QuillEditor;

Form.propTypes = { className: PropTypes.string };
export default Form;
