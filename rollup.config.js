import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import external from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import scss from 'rollup-plugin-scss';
import analyze from 'rollup-plugin-analyzer'
import { terser } from "rollup-plugin-terser";

const packageJson = require('./package.json');
export default {
  input: [
    'src/index.jsx',
    'src/Action/Action.jsx',
    'src/Card/Card.jsx',
    'src/Form/InputContainer.jsx',
    'src/Form/InputGroup.jsx',
    'src/Button/Button.jsx',
    'src/Loader/Loader.jsx',
    'src/Text/Text.jsx'
  ],
  output: [
    {
      dir: 'build',
      format: 'cjs',
      sourceMaps:true
    }
  ],
  plugins: [
    external({ includeDependencies: true }),
    analyze(),
    commonjs(),
    scss(),
    svgr(),
    postcss({
      // extract: true,
      plugins: [autoprefixer]
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
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
  ]
 
};


