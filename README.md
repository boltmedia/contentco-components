# contentco-components

> Shared components for Content.co platform

[![NPM](https://img.shields.io/npm/v/contentco-components.svg)](https://www.npmjs.com/package/contentco-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save git+https://github.com/boltmedia/contentco-components.git
```

or

```bash
yarn add git+https://github.com/boltmedia/contentco-components.git
```

## Usage

```jsx
import React, { Component } from 'react';

import { MyComponent } from 'contentco-components';

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

## Development

1. To add a new component, you can create it manually or use the built-in helper to generate the base files.

```bash
yarn generate [ComponentName]
```

2. Watching and rebuilding the components:

```bash
yarn dev
```

3. To create a build:

```bash
yarn build
```

## Storybook

To watch and rebuild via Storybook:

```bash
yarn storybook
```
