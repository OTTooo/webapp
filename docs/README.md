# 知识点

## webpack

- 将依赖的模块单独打包为`vendor.[hash].js`,因为不经常修改，可以在浏览器缓存起来，经常修改的是`app.[hash].js`

## 其他

- 最终的容器组件`containers`是`index.jsx`, `containers`容器组件（智能组件）中`import` `components`展示组件（木偶组件）,展示组件可以在`subpage`或`components`中，`import`之后，就可以给展示组件传递参数或者函数了
