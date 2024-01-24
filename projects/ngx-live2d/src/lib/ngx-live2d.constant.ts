/**
 * 模型展示位置
 * @enum {string}
 * @default BOTTOM_RIGTH 右下角
 * @TOP_LEFT 左上角
 * @BOTTOM_LEFT 左下角
 * @TOP_RIGTH 右上角
 * @BOTTOM_RIGTH 右下角
 */
export enum POSITION {
  TOP_LEFT = 'position_top_left',
  BOTTOM_LEFT = 'position_bottom_left',
  TOP_RIGTH = 'position_top_rigth',
  BOTTOM_RIGTH = 'position_bottom_rigth',
}

/**
 * 内置模型资源地址
 * @enum {string}
 * 模型预览 @link https://ngx-live2d.asnyc.cn
 */
export enum BUILTIN_MODEL {
  Z16 = 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-z16/assets/z16.model.json',
  EPSILON2 = 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-epsilon2_1/assets/Epsilon2.1.model.json',
  IZUMI = 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-izumi/assets/izumi.model.json',
  KOHARU = 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-koharu/assets/koharu.model.json',
  SHIZUKU = 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-shizuku/assets/shizuku.model.json',
  MIKU = 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-miku/assets/miku.model.json',
  HIJIKI = 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-hijiki/assets/hijiki.model.json',
  TORORO = 'https://cdn.jsdelivr.net/gh/QiShaoXuan/live2DModel@1.0.0/live2d-widget-model-tororo/assets/tororo.model.json',
}

/**
 * 资源类型
 * @enum {number}
 *
 * @INTERIOR 内部资源
 *
 * @EXTERNAL 外部资源
 */
export enum ASSETS_TYPE {
  INTERIOR,
  EXTERNAL,
}
