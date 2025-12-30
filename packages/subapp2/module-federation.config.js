const packageJson = require("./package.json")

exports.default = {
  name: packageJson.name,
  remotes: [{
    name: "hostapp",
    origin: "http://localhost:3000"
  },{
    name: "subapp1",
    origin: "http://localhost:3001"
  }],
  exposes: {
    "./Subapp2SharedComp": "./src/Shared.tsx"
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
    name: "subapp1",
    publicPath: "http://localhost:3001"
  }, {
    name: "hostapp",
    publicPath: "http://localhost:3000"
  }],
};