/**
 * @interface
 *
 * @assetsType资源类型
 *
 * 内部资源 ASSETS_TYPE.INTERIOR，将使用内部资源
 *
 * 外部资源 ASSETS_TYPE.EXTERNAL，将使用外部资源
 *
 * @assets 资源名称或资源链接
 */
export interface Configuration {
  assetsType: ASSETS_TYPE;
  assets: BUILTIN_MODEL | string;
}

/**
 * @interface
 */
declare global {
  interface Window {
    loadlive2d: any;
  }
}
