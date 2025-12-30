const packageJson = require("./package.json")

exports.default = {
  name: packageJson.name,
  remotes: [{
    name: "subapp2",
    origin: "http://localhost:3002"
  }, {
    name: "hostapp",
    origin: "http://localhost:3000"
  }],
  exposes: {
    "./Subapp1SharedComp": "./src/Shared.tsx",
    "./Subapp1Button": "./src/Button.tsx"
  },
  shareStrategy: "loaded-first",
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
  remoteDtsTypeUrls: [{
    name: "subapp2",
    publicPath: "http://localhost:3002"
  }, {
    name: "hostapp",
    publicPath: "http://localhost:3000"
  }],
};