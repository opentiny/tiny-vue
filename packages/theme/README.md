# @opentiny/vue-theme

### 调试技巧：
- 1、安装 `onchange` 依赖：
```bash
npm i onchange -g
```
- 2、执行如下命令，实现保存文件自动编译后更新到 `opentiny-vue` 工程 `node_modules/@opentiny/vue-theme` 依赖
```bash
onchange -k '**/*.less' -- npm run build:copy-remote
```