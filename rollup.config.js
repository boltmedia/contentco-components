import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import clear from 'rollup-plugin-clear';
import reactSvg from 'rollup-plugin-react-svg';

import scss from 'rollup-plugin-scss';

const packageJson = require('./package.json');

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    },
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    scss(),
    reactSvg(),
    postcss({
      // extract: true,
      plugins: [autoprefixer]
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    }),
    resolve({
      browser: true
      // resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/, /^(?!prop-types)/]
    }),
    commonjs(),
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
    clear({
      targets: ['build'],
      watch: true // default: false
    })
  ]
};
