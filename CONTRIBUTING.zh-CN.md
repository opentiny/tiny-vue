# 贡献指南

很高兴你有意愿参与 TinyVue 开源项目的贡献，参与贡献的形式有很多种，你可以根据自己的特长和兴趣选择其中的一个或多个：

- 报告[新缺陷](https://github.com/opentiny/tiny-vue/issues/new?template=bug-report.yml)
- 为[已有缺陷](https://github.com/opentiny/tiny-vue/labels/bug)提供更详细的信息，比如补充截图、提供更详细的复现步骤、提供最小可复现 demo 链接等
- 提交 Pull requests 修复文档中的错别字或让文档更清晰和完善
- 添加官方小助手微信 opentiny-official，加入技术交流群参与讨论

当你亲自使用 TinyVue 组件库，并参与多次以上形式的贡献，对 TinyVue 逐渐熟悉之后，可以尝试做一些更有挑战的事情，比如：

- 修复缺陷，可以先从 [Good-first issue](https://github.com/opentiny/tiny-vue/labels/good%20first%20issue) 开始
- 实现新特性
- 完善单元测试
- 翻译文档
- 参与代码检视

## 提交 Issue

如果你在使用 TinyVue 组件过程中遇到问题，欢迎给我们提交 Issue，提交 Issue 之前，请先仔细阅读相关的[官方文档](https://opentiny.design)，确认这是一个缺陷还是尚未实现的功能。

如果是一个缺陷，创建新 Issue 时选择 [Bug report](https://github.com/opentiny/tiny-vue/issues/new?template=bug-report.yml) 模板，标题遵循 `[componentName]缺陷简述` 的格式，比如：`[select]过滤功能中，选中的选项退格删除后，无法再次选中该选项`。

报告缺陷的 Issue 主要需要填写以下信息：

- tiny-vue 和 vue 的版本号
- 缺陷的表现，可截图辅助说明，如果有报错可贴上报错信息
- 缺陷的复现步骤，最好能提供一个最小可复现 demo 链接

如果是一个新特性，则选择 [Feature request](https://github.com/opentiny/tiny-vue/issues/new?template=feature-request.yml) 模板，标题遵循 `[componentName]新特性简述` 的格式，比如：`[select]选择框内容太长展示不下时，希望能支持配置tips提示`。

新特性的 Issue 主要需要填写以下信息：

- 该特性主要解决用户的什么问题
- 该特性的 api 是什么样的

## 提交 PR

提交 PR 之前，请先确保你提交的内容是符合 TinyVue 整体规划的，一般已经标记为 [bug](https://github.com/opentiny/tiny-vue/labels/bug) 的 Issue 是鼓励提交 PR 的，如果你不是很确定，可以创建一个 [Discussion](https://github.com/opentiny/tiny-vue/discussions) 进行讨论。

### Pull Request 规范

- commit 信息要以 `type(scope): 描述信息` 的形式填写，例如 `fix(vue-renderless): [scrollbar, action-menu] fix xxx bug`。

  1. type: 必须是 build, chore, ci, docs, feat, fix, perf, refactor, revert, release, style, test, improvement 其中的一个。

  2. scope:
  - `packages`目录下的包名，比如：`vue-design-aurora, vue-design-saas, react ......`
  - `packages`目录下的包名下的组件名，比如：`vue-design-aurora/alert, vue-design-saas/alert, react/alert ......`
  - 用文件夹的名称: 比如: `gulp, internals/playwright-config, sites`
  - 组件的名称(小写，中划线): 比如: `action-menu, alert ......`

  3. 运行e2e测试: 在提交信息里使用 `[componentName1, componentName2]`，将会执行componentName1，componentName2的测试用例，当改动的代码会影响组件时，需要声明这个结构。

  4. 示例:
  - 补充alert组件文档： `docs(alert): [alert] xxxxxxxxxxxxxxx`, `docs(site): [alert] xxxxxxxxxxxxxxx`
  - 补充alet组件测试用例: `test(alert): [alert] xxxxxxxxxxxxxx`
  - 修复alet组件@opentiny/vue-renderless下的缺陷: `fix(vue-renderless/alert): [alert] xxxxxxxxxxxxxx`

本地启动步骤：

- 点击 [TinyVue](https://github.com/opentiny/tiny-vue) 代码仓库右上角的 Fork 按钮，将上游仓库 Fork 到个人仓库
- Clone 个人仓库到本地
- 关联上游仓库，方便同步上游仓库最新代码
- 在 Tiny Vue 根目录下运行 `pnpm i`, 安装 node 依赖
- 运行 `pnpm dev`，启动组件库网站
- 打开浏览器访问：[http://127.0.0.1:7130/](http://127.0.0.1:7130/)

```shell
# username 为用户名，执行前请替换
git clone git@github.com:username/tiny-vue.git
cd tiny-vue

# 关联上游仓库
git remote add upstream git@github.com:opentiny/tiny-vue.git

# 安装依赖
pnpm i

# 启动 Vue3 项目
pnpm dev

# 启动 Vue2 项目
pnpm dev:vue2
```

提交 PR 的步骤：

- 请确保你已经完成本地启动中的步骤，并能正常访问：[http://127.0.0.1:7130/](http://127.0.0.1:7130/)
- 同步上游仓库 dev 分支最新代码：git pull upstream dev
- 从上游仓库 dev 分支创建新分支 `git checkout -b username/feature1 upstream/dev`，分支名字建议为 `username/feat-xxx` / `username/fix-xxx`
- 本地编码
- 遵循 [Commit Message Format](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范进行提交，不符合提交规范的 PR 将不会被合并
- 提交到远程仓库：git push origin branchName
- 打开 TinyVue 代码仓库的 [Pull requests](https://github.com/opentiny/tiny-vue/pulls) 链接，点击 New pull request 按钮提交 PR
- 项目 Committer 进行 Code Review，并提出意见
- PR 作者根据意见调整代码，请注意一个分支发起了 PR 后，后续的 commit 会自动同步，无需重新提交 PR
- 项目管理员合并 PR

贡献流程结束，感谢你的贡献！

## 加入开源社区

如果你对我们的开源项目感兴趣，欢迎通过以下方式加入我们的开源社区。

- 添加官方小助手微信：opentiny-official，加入我们的技术交流群
- 加入邮件列表：<opentiny@googlegroups.com>

如果你给 OpenTiny 提交过 Issue 或 PR，请通过以下方式添加自己到贡献者列表里。

```
@all-contributors please add @<username> for <contributions>
```

详细规则可以参考：[https://allcontributors.org/docs/en/bot/usage](https://allcontributors.org/docs/en/bot/usage)
