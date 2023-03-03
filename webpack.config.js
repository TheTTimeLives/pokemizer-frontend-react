const path = require('path');

// polyfill because webpack 5 removed stuff
module.exports = {
  resolve: {
    fallback: {
      "http": require.resolve("stream-http")
    }
  },

};
