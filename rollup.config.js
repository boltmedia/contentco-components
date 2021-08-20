import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

import copy from 'rollup-plugin-copy';
import external from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import analyze from 'rollup-plugin-analyzer';
import { terser } from 'rollup-plugin-terser';
import cleaner from 'rollup-plugin-cleaner';
import cleanup from 'rollup-plugin-cleanup';
import pkg from './package.json';

const plugins = [
  external(),
  // analyze(),
  commonjs({
    exclude: 'node_modules',
    ignoreGlobal: true
  }),
  svgr(),
  postcss({
    modules: true,
    sourceMap: 'inline',
    namedExports: true,
    plugins: [autoprefixer]
  }),
  babel({
    babelHelpers: 'runtime',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    exclude: 'node_modules/**'
  }),
  resolve({
    browser: true,
    extensions: ['.js', '.jsx']
  }),
  copy({
    targets: [
      {
        src: 'src/variables.scss',
        dest: 'dist',
        rename: 'variables.scss'
      },
      {
        src: 'src/typography.scss',
        dest: 'dist',
        rename: 'typography.scss'
      }
    ]
  }),
  terser(),
  cleanup({ comments: 'none' })
];
export default [
  {
    input: [
      'src/index.jsx',
      'src/Action/Action.jsx',
      'src/Button/Button.jsx',
      'src/Card/Card.jsx',
      'src/Form/InputContainer.jsx',
      'src/Form/InputGroup.jsx',
      // TODO: File, References
      'src/Icon/Icon.jsx',
      'src/Input/TextInput.jsx',
      'src/Input/TextArea.jsx',
      'src/Input/Select.jsx',
      'src/Input/OrderableSelect/OrderableSelect.jsx',
      'src/Input/DualInput.jsx',
      'src/Quill/Editor.jsx',
      'src/Input/Password/Password.jsx',
      'src/Loader/Loader.jsx',
      'src/Logo/Logo.jsx',
      'src/Text/Text.jsx'
    ],
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: false
    },
    plugins: [
      cleaner({
        targets: ['./dist/']
      }),
      ...plugins
    ],
    external: Object.keys({
      ...pkg.devDependencies,
      ...pkg.dependencies,
      ...pkg.peerDependencies
    })
  },
  {
    input: 'src/index.jsx',
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: false
    },
    plugins,
    external: Object.keys({
      ...pkg.devDependencies,
      ...pkg.dependencies,
      ...pkg.peerDependencies
    })
  }
];
