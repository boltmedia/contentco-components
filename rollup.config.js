import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import copy from 'rollup-plugin-copy';
import clear from 'rollup-plugin-clear';
import external from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import scss from 'rollup-plugin-scss';
import multi from '@rollup/plugin-multi-entry';
import rename from 'rollup-plugin-rename';

const packageJson = require('./package.json');
export default {
  input: ['src/index.jsx', 
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
      format: 'cjs'
    }
  ],
  preserveModules: false,
  plugins: [
    commonjs(),
    scss(),
    svgr(),
    external({ includeDependencies: true }),
    postcss({
      // extract: true,
      plugins: [autoprefixer]
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    }),
    resolve({
      browser: true,
      extensions: ['.js', '.jsx']
      // resolveOnly: [/^(?!react$)/, /^(?!react-dom$)/, /^(?!prop-types)/]
    }),
    rename({
      include: ['**/*.js'],
      map: (name) =>
        name
          .replace('src/', '')
          .replace('node_modules/', 'external/')
          .replace('../../external', '../external')
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
    })
  ]
};

// {
//   ...settings,
//   preserveModules: true,
//   output: [
//     {
//       dir: `build/lib`,
//       format: 'esm',
//       sourcemap: true
//     }
//   ]
// }
