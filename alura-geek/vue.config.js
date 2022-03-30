const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
});

const fs = require('fs');

const someFileContents = fs.readFileSync('my-path-to-the-file');

module.exports = {
  lintOnSave: true,

  configureWebpack: config => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          'somevar': someFileContents,
        })
      ]
    }
  },
}
