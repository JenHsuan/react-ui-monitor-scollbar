const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
import postcss from 'rollup-plugin-postcss';

const resolveFile = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const babelOptions = {
  "presets": [
    '@babel/preset-env',
    '@babel/preset-react'
  ]
}

module.exports = [
  {
    input: './src/MonitorScollBar.js',
    output: {
      file: './dist/MonitorScollBar.js',
      format: 'cjs',
    }, 
    plugins: [
      postcss({extensions: ['.css']}),
      nodeResolve(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'external',
        "presets": [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
      }),
      commonjs(),
      replace({
        'process.env.NODE_ENV': JSON.stringify( 'production' )
      })
    ],
  },
]