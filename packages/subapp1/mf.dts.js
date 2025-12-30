const { QiankunModuleFederationPlugin } = require('qiankun-module-federation-plugin')
const mfConfig = require('./module-federation.config').default;

exports.default = QiankunModuleFederationPlugin.getOptions(mfConfig)