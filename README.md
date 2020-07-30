# contentco-components

> Shared components for Content.co platform

[![NPM](https://img.shields.io/npm/v/contentco-components.svg)](https://www.npmjs.com/package/contentco-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save contentco-components
```

## Usage

```jsx
import React, { Component } from 'react';

import { MyComponent } from 'contentco-components';
// alt
// import MyComponent from 'contentco-components/lib/MyComponent'

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

## Development

In order to components while running them we have to run two commands

1. Watching and rebuilding the components:

```
npm run start
```

2. Viewing the output via the example:

```
cd example
npm run start
```
