const packageJson = require("./package.json")

exports.default = {
  name: packageJson.name,
  exposes: {
    "./HostSharedComp": "./src/Shared.tsx",
    "./HostProvider": "./src/provider/index.tsx"
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
};