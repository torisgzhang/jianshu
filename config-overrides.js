const LESS_VARIABLES = require('./src/common/styles/variable-less.js');
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const addCustomize = () => config => {
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false; //delete map files in production mode.
    if (config.plugins) {
      config.plugins.push(new BundleAnalyzerPlugin());//detecting file size in production mode.
    }
    const splitChunksConfig = config.optimization.splitChunks;
    if (config.entry && config.entry instanceof Array) { //What is this 'if' for?
      config.entry = {
        main: config.entry,
        //这里要删除下面的vendor, 否则npm run build 报错 'path undefined'
        // vendor: ["react", "react-dom", "react-router-dom", "react-redux", "redux", 'react-router-config',
        //   "lodash", "moment", 'react-intl', 'react-addons-pure-render-mixin', 'redux-promise-middleware', "react-router",
        // ]
      }
    } else if (config.entry && typeof config.entry === 'object') {
      config.entry.vendor = ["react", "react-dom", "react-router-dom", "react-redux", "redux", 'react-router-config',
        "lodash", "moment", 'react-intl', 'react-addons-pure-render-mixin', 'redux-promise-middleware', "react-router",
      ];
    }
    

    Object.assign(splitChunksConfig, {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: 'vendors',
          priority: -10,
        },
        common: {
          name: 'common',
          minChunks: 2,
          minSize: 30000,
          chunks: 'all'
        }
      }
    })
  }
  return config;
}
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // "@icon-url": `${path.resolve(__dirname,'build/assets/font/iconfont')}`, //使用本地字体文件
      ...LESS_VARIABLES
    },
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  addDecoratorsLegacy(),
  addCustomize()
);