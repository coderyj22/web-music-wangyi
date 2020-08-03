const CracoLessPlugin = require('craco-less');
const path = require('path')
function resolve(dir) {
  return path.resolve(__dirname, dir)
}
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // 别名配置
  webpack: {
    alias: {
      "@": resolve('src'),
      "component": resolve('src/component')
    }
  }
};
