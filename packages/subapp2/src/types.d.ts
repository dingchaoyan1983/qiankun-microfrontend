declare module '*.module.less' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

interface Window {
  __POWERED_BY_QIANKUN__: boolean,
  __webpack_public_path__: string,
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: string
}
