import {
  Component,
  EventEmitter,
  Input,
  Output,
  afterNextRender,
  signal,
} from '@angular/core';
import { live2dJSString } from './utils/live2d';
import { ASSETS_TYPE, BUILTIN_MODEL, POSITION } from './ngx-live2d.constant';
import { Configuration } from './types';

@Component({
  selector: 'ngx-live2d',
  standalone: true,
  imports: [],
  templateUrl: './ngx-live2d.component.html',
  styleUrl: './ngx-live2d.component.less',
})
export class NgxLive2dComponent {
  /**
   * 模型展示位置
   * 默认值 BOTTOM_RIGTH
   * @TOP_LEFT 左上角
   * @BOTTOM_LEFT 左下角
   * @TOP_RIGTH 右上角
   * @BOTTOM_RIGTH 右下角
   */
  @Input() position: POSITION = POSITION.BOTTOM_RIGTH;

  /**
   * 配置
   * @assetsType 资源类型
   *
   * @assets 资源名称或资源链接
   */
  @Input() configuration: Configuration = {
    assetsType: ASSETS_TYPE.INTERIOR,
    assets: BUILTIN_MODEL.EPSILON2,
  };

  /**
   * 模型点击事件
   */
  @Output() modelClick = new EventEmitter<void>();

  /**
   * 当前浏览环境是否移动端
   */
  public isMobile = signal(false);

  ngOnInit() {
    afterNextRender(() => {
      if (this.isMobileJudge()) {
        return console.log('当前设备环境不支持live2d！');
      }
      this.live2dInit();
    });
  }

  /**
   * 初始化live2d环境
   */
  private live2dInit() {
    if (!window.loadlive2d) {
      const script = document.createElement('script');
      script.innerHTML = live2dJSString;
      document.body.appendChild(script);
      if (document.readyState === 'complete') {
        const url = this.getAssetsUrl();
        window.loadlive2d('ngx-live2d', url);
      }
    }
  }

  /**
   * 根据assetsType使用外部资源
   * @returns 资源地址
   */
  private getAssetsUrl(): string {
    const isExist = Object.values(BUILTIN_MODEL).some(
      (val) => val === this.configuration.assets
    );
    if (this.configuration.assetsType === ASSETS_TYPE.INTERIOR && !isExist) {
      return BUILTIN_MODEL.EPSILON2;
    }
    return this.configuration.assets;
  }

  /**
   * 判断是否移动设备环境
   * @returns boolean
   */
  private isMobileJudge(): boolean {
    const res =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    this.isMobile.set(res);
    return res;
  }

  /**
   * onModelClick 模型点击事件
   */
  public onModelClick() {
    this.modelClick.emit();
  }
}
