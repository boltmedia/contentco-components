module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';


import "./${componentName}.scss";

const ${componentName} = ({ foo }) => (
    <div data-testid="${componentName}" className="foo-bar">{foo}</div>
);

export default ${componentName};

`,
  extension: `.jsx`
});
