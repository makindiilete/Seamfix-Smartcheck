const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#49D3FF",
              "@font-family": "'muliregular' sans-serif",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
