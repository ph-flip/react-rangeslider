const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const config = {
  entry: path.join(__dirname, 'src', 'index'),

  output: {
    library: 'ReactRangeslider',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: [
                      'last 2 versions'
                    ]
                  }
                }
              ],
              // '@babel/preset-env', // https://goo.gl/aAxYAq
              '@babel/preset-react' // https://goo.gl/4aEFV3
            ],

            // https://goo.gl/N9gaqc - List of Babel plugins.
            plugins: [
              '@babel/plugin-proposal-object-rest-spread', // https://goo.gl/LCHWnP
              '@babel/plugin-proposal-class-properties' // https://goo.gl/TE6TyG
            ]
          }
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      }
    ]
  },

  plugins: [new ExtractTextPlugin('RangeSlider.css')],

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
}

module.exports = config
