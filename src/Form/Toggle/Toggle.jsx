import React, { useState } from 'react';
import { Switch } from 'evergreen-ui';

const Toggle = ({ defaultChecked, onChange, ...props }) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    onChange?.(e);
  };
  return <Switch height={24} checked={checked} onChange={handleChange} {...props} />;
};

export default Toggle;
