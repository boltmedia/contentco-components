# contentco-components

> Shared components for Content.co platform

[![NPM](https://img.shields.io/npm/v/contentco-components.svg)](https://www.npmjs.com/package/contentco-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation in your packages

```bash
npm install --save git+https://github.com/boltmedia/contentco-components.git
```

or

```bash
yarn add git+https://github.com/boltmedia/contentco-components.git
```

If you are going to do active development on the components while testing it in the actual repo, you can also add the package locally:

```bash
yarn add file:../contentco-components
```

If you add it locally, ensure that you replace it with the Github package before commit it back to the repo.

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

## Notes

Fonts are included in the package but are not used in the components, only used for the Storybook previews. You should include the fonts in the actual project.

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
