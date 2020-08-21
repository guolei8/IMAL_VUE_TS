# IMAL

### 组件代码的组织方式
  1. @Prop
  2. @PropSync
  3. @Model
  4. @Watch
  5. @Provide
  6. @Inject
  7. @ProvideReactive
  8. @InjectReactive
  9. @Emit
  10. @Ref

### git提交规范
  * feat: 新功能 (feature)
  * fix: 修补bug
  * docs: 文档 (documentation)
  * style: 格式 (不影响代码运行的变动)
  * refactor: 重构(既不是新增功能，也不是修改bug的代码改动)
  * test: 增加测试
  * chore: 构建过程或辅助工具的变动

### 主要库的链接
  * [class-component](https://npm.im/capsid)
  * [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator#readme)
  * [vuex-module-decorator](https://github.com/championswimmer/vuex-module-decorators#readme)


```
# 安装依赖
npm i
# or
cnpm i

# 启动项目
npm run dev
# or
npm run serve

#启动beta环境
npm run serve:beta

# 启动prod环境
npm run serve:prod

# 构建dev版本
npm run build:dev

# 构建beta版本
npm run build:beta

# 构建预生产版本
npm run build:prep

# 运行unit
npm run test:unit

#运行e2e
npm run test:e2e

```

| 命名 | 说明 |
| - | :- | :- | :-: |
| 文件夹命名 | 遵循驼峰命名规则 |
| 组件命名 | 驼峰+首字母大写 |
| 基础组件 | 以Base开头 |


.项目结构树
|----App.vue
|----main.ts
|----layout
| |----components
| | |----index.vue
| | |----AppHead.vue
| | |----AppMain.vue
| |----index.ts
|----utils
| |----request.ts
| |----index.ts
| |----token.ts
|----shims-tsx.d.ts
|----styles
| |----public.less
| |----transition.less
| |----reset.less
| |----index.less
| |----customTheme.less
|----components
| |----BaseButton
| | |----index.vue
| |----index.ts
|----api
| |----index.ts
| |----modules
| | |----account.ts
| | |----kbData.ts
|----fonts
| |----iconfont.js
| |----iconfont.json
| |----iconfont.woff
| |----iconfont.eot
| |----iconfont.ttf
| |----iconfont.woff2
| |----iconfont.svg
| |----iconfont.css
|----views
| |----kbAnalyse
| | |----index
| | | |----index.vue
| |----ohter
| | |----404.vue
| |----download
| | |----index.vue
| |----login
| | |----index.vue
| |----kbData
| | |----index
| | | |----index.vue
|----assets
| |----video
| |----images
| | |----common
| | | |----404.png
| | | |----datanone.png
| | | |----loadingfail.png
| | | |----logo.png
| |----audio
|----tree.txt
|----shims-vue.d.ts
|----store
| |----constant.ts
| |----index.ts
| |----mutation-types.ts
| |----modules
| | |----account.ts
| | |----download.ts
| |----store.ts
|----router
| |----permission.ts
| |----index.ts
| |----modules
| | |----other.ts
| | |----download.ts
| | |----index.ts
| | |----kbData.ts
| | |----kbAnalyse.ts
