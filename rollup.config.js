import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

import copy from 'rollup-plugin-copy';
import external from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
// import scss from 'rollup-plugin-scss';
import analyze from 'rollup-plugin-analyzer';
import { terser } from 'rollup-plugin-terser';
import cleaner from 'rollup-plugin-cleaner';

const packageJson = require('./package.json');
const plugins = [
  external({ includeDependencies: true }),
  analyze(),
  commonjs(),
  // scss({
  //   sourceMap: true
  // }),
  svgr(),
  postcss({
    modules: true,
    sourceMap: 'inline',
    namedExports: true,
    // extract: true,
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
    // resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/, /^(?!prop-types)/]
  }),
  copy({
    targets: [
      {
        src: 'src/variables.scss',
        dest: 'build',
        rename: 'variables.scss'
      },
      {
        src: 'src/typography.scss',
        dest: 'build',
        rename: 'typography.scss'
      }
    ]
  }),
  terser()
];
export default [
  {
    input: [
      // 'src/index.jsx',
      'src/Action/Action.jsx',
      'src/Button/Button.jsx',
      'src/Card/Card.jsx',
      'src/Form/InputContainer.jsx',
      'src/Form/InputGroup.jsx',
      // TODO: File, References
      'src/Icon/Icon.jsx',
      'src/Input/TextInput.jsx',
      'src/Input/TextArea.jsx',
      'src/Input/DateInput.jsx',
      'src/Input/DateSelector.jsx',
      'src/Input/Select.jsx',
      'src/Input/OrderableSelect/OrderableSelect.jsx',
      'src/Input/DualInput.jsx',
      'src/Input/Quill.jsx',
      'src/Input/Password/Password.jsx',

      'src/Loader/Loader.jsx',
      'src/Logo/Logo.jsx',
      'src/Text/Text.jsx'
    ],
    output: {
      dir: 'build',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [
      cleaner({
        targets: ['./build/']
      }),
      ...plugins
    ]
  },
  {
    input: 'src/index.jsx',
    output: {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    },
    plugins
  }
];
