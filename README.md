# about

angular 下的 live2d 库

# Install

```bash
npm install --save ng-live2d
#or
yarn add ng-live2d
```

# Usage

```js
impor { NgLive2dModule } from 'ng-live2d';

@NgModule({
    "imports": [
        NgLive2dModule
    ]
})
```

```html
<lib-ng-live2d [modelNameOrUrl]="" [needToTop]="" [positionRight]=""></lib-ng-live2d>
```

# Params

### modelNameOrUrl string

模型名或地址,包含以下名字,可不传,默认 hijiki

`z16`,`Epsilon2_1`,`izumi`,`koharu`,`shizuku`,`miku`,`hijiki`,`tororo`

如果传入值没匹配到上面名字则视为传入的为模型 url,则加载传入的地址模型

### needToTop boolean

是否需要点击回到顶部功能,可不传默认 false

### positionRight boolean

是否右下角显示,默认 true,可不传;false 则右下角显示

# Change Log

0.0.1 初始版本--2020.3.5
0.0.2 增加支持传入模型地址,支持左下角显示--2020.3.6

# Demo

http://live2d.asnyc.cn

# License

MIT
