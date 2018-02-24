# vuemenu

> 用Vue-cli打造的菜单栏组件，使用了vue动画 、vuex进行兄弟组件之间的数据传输。
## 简介
### API
#### Props

参数 | 类型 | 说明
---|---|---
type | String | 指明菜单的类型,有4种left,right,middle,middle-around
number | String | 指定子菜单的个数,有2，4这两种情况
btnStyle | boolean | 菜单按钮是否为圆角，默认为方形按钮
mask	|String	|遮罩层，有两种："white"和"black"
animate	| String |	子菜单动画,可以引入外部css动画库，比如Animate.css


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
