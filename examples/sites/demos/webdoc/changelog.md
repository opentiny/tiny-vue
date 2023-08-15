# 更新日志

## v2.10.0/v3.10.0

### Other Changes

- fix: 主题变量 token 命名变更，默认按钮最小宽度 --ti-button-size-normal-mini-width 改为 --ti-button-size-normal-min-width
- fix: 主题变量 token 命名变更，超大按钮最小宽度 --ti-button-size-large-mini-width 改为 --ti-button-size-large-min-width
- fix: 主题变量 token 命名变更，中等按钮最小宽度 --ti-button-size-medium-mini-width 改为 --ti-button-size-medium-min-width
- fix: 主题变量 token 命名变更，小尺寸按钮最小宽度 --ti-button-size-small-mini-width 改为 --ti-button-size-small-min-width
- fix: 主题变量 token 命名变更，迷你尺寸按钮最小宽度 --ti-button-size-mini-mini-width 改为 --ti-button-size-mini-min-width
- fix: 主题变量 token 命名变更， 默认按钮悬浮背景色 --ti-button-normal-hover-background-color 改为 --ti-button-normal-hover-bg-color
- fix: 主题变量 token 命名变更，默认按钮点击瞬间背景色 --ti-button-normal-active-background-color 改为 --ti-button-normal-active-bg-color
- fix: 主题变量 token 命名变更，禁用类默认按钮背景色 --ti-button-normal-disabled-background-color 改为 --ti-button-normal-disabled-bg-color
- fix: 主题变量 token 命名变更，文字按钮图标填充色 --ti-button-text-svg-fill 改为 --ti-button-text-svg-fill-color
- fix: 主题变量 token 命名变更，文字按钮图标悬浮填充色 --ti-button-text-svg-hover-fill 改为 --ti-button-text-svg-hover-fill-color
- fix: 主题变量 token 命名变更，文字按钮禁用时图标填充色 --ti-button-text-svg-fill-disabled 改为 --ti-button-text-svg-disabled-fill-color
- fix: 主题变量 token 命名变更，分页上一页和下一页图标填充色 --ti-pager-btn-svg-color 改为 --ti-pager-btn-svg-fill-color
- fix: 主题变量 token 命名变更，文字按钮禁用时图标填充色 --ti-pager-total-svg-color 改为 --ti-pager-total-svg-fill-color
- fix: 主题变量 token 命名变更，IP 地址输入框图标尺寸 --ti-ip-address-icon-width 改为 --ti-ip-address-icon-size

## v2.9.0/v3.9.0

`2023/06/30`

### Exciting New Features 🎉

- feat: 新增 Popconfirm 气泡确认框、Drawer 抽屉、Guide 引导三个全新组件 🎊
- feat: 支持 vitepress 工程服务器端渲染 SSR 🎊
- feat: ButtonGroup 按钮组新增选块角标功能 🎊
- feat: 新增 Alert 组件新增关闭 Alert 后，控制再次 Alert 的显示或隐藏功能 🎊
- feat: 为每个组件添加运行时的版本号，方便用户查看当前组件版本号 🎊
- feat: Dropdown 组件新增 inheritWidth 属性，支持弹框最小宽度继承触发源宽度 🎊

### Bug Fixes 🐛

- fix(grid): 修复鼠标悬浮表格组件排序和筛选按钮时不应该出现 tooltip 提示问题
- fix(grid): 修复表格组件冻结列在 border 模式下，上边框被影藏的问题
- fix(grid): 修复表头冻结列在有滚动条时显示异常的 bug
- fix(grid): 修复表格右侧冻结列大于两个显示异常问题
- fix(search): 修复搜索组件无法在 popover 中自适应宽度的 bug
- fix(slider): 修复组件 slider 基础用法中设置值不生效的问题
- fix(grid): 修复 grid-column 组件 ts 类型声明报错问题
- fix(anchor): 修复线上环境产生的锚点监听偏移量不准引起的 bug
- fix(icon): 修复 IconEyeopen 颜色不可设置问题
- fix(datepick): 修改月份的计算范围的 bug 和无禁用色的 bug
- fix(datepick): 修复 DatePicker 组件部分选中日期颜色不正确的问题
- fix(ipAddress): 修复 ipAddress 组件 input 事件不生效
- fix(input): 修复 Input 组件 type=textarea 时文本框不响应 drag/drop 事件

## v2.8.0/v3.8.0

`2023/05/18`

### Exciting New Features 🎉

- feat: add XDesign 🎊
- feat: 升级 echarts 版本为最优版本 5.4.1 🎊

### Bug Fixes 🐛

- fix: 修复 windows 下 pnpm install rm rf not found by @coderbaozi in <https://github.com/opentiny/tiny-vue/pull/149>
- 修复 build:ui 打包出来的产物有问题 bug，修复 input 组件本地开发报警告 bug by @zzcr in <https://github.com/opentiny/tiny-vue/pull/150>
- fix(tabs): fix tab header bottom border line close #154 by @kagol in <https://github.com/opentiny/tiny-vue/pull/155>
- chore: Compatible with windows users by @ErKeLost in <https://github.com/opentiny/tiny-vue/pull/151>
- fix(carousel-item): 合并重复属性 by @linxiang07 in <https://github.com/opentiny/tiny-vue/pull/152>
- fix(checkbox): icon position when checked by @zuixinwang in <https://github.com/opentiny/tiny-vue/pull/164>
- fix(build:runtime): 修复打包 runtime 产物的脚本 by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/183>
- fix(build runtime) 修复打包运行时报错问题 by @zzcr in <https://github.com/opentiny/tiny-vue/pull/185>
- fix(carousel) 走马灯手动轮播切换到此处数据会偶现与实际不符 by @WXC-Spring in <https://github.com/opentiny/tiny-vue/pull/188>
- fix(runtime-build) 修复：运行时多入口打包会抽取公共依赖，导致加载报错 by @zzcr in <https://github.com/opentiny/tiny-vue/pull/191>
- fix(dialog-box): 修复对话框移动后动态 style 没更新的 bug by @Huangyilin19 in <https://github.com/opentiny/tiny-vue/pull/195>
- fix(upload) 修复 upload 组件销毁时报错的 bug by @zzcr in <https://github.com/opentiny/tiny-vue/pull/196>
- fix(fileupload): 上传组件增加用户不配置 action 属性产生的报错，告知用户需要配置 by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/199>
- fix(button): 修复无内容的情况下上下错位的问题(#194) by @qinwencheng in <https://github.com/opentiny/tiny-vue/pull/203>
- fix: 修复 pullRefresh 组件，数据类型不匹配，导致控制台告警日志超大量打印，导致页面渲染慢的问题 by @MrWang2016 in <https://github.com/opentiny/tiny-vue/pull/211>
- fix: 修复 Breadcrumb 配置 textField 的 demo 不显示面包屑内容 #207 by @yuanningning in <https://github.com/opentiny/tiny-vue/pull/210>
- fix(rate) 修复组件 Rate 半选加禁选后，2.5 与 3 星实际不匹配的问题 by @wwttff in <https://github.com/opentiny/tiny-vue/pull/200>
- fix(build) 修复 grid、pager 组件 bug by @zzcr in <https://github.com/opentiny/tiny-vue/pull/240>
- fix: fix npm publish 402 error by @kagol in <https://github.com/opentiny/tiny-vue/pull/241>

### Other Changes

- chore: 添加文件后缀名 by @CatsAndMice in <https://github.com/opentiny/tiny-vue/pull/160>
- refactor(button): 优化 size 属性校验 by @LadyChatterleyLover in <https://github.com/opentiny/tiny-vue/pull/162>
- docs：中英文 README 和贡献指南文档中端口号的修正，以及 Issue 模板中的小助手微信号修正 by @heygsc in <https://github.com/opentiny/tiny-vue/pull/171>
- docs: 增加 all-contributors 机器人 🤖️ 用于自动添加贡献者 by @kagol in <https://github.com/opentiny/tiny-vue/pull/214>
- docs: update README.zh-CN.md by @kagol in <https://github.com/opentiny/tiny-vue/pull/216>
- doc: 修改文档示例 by @GaoNeng-wWw in <https://github.com/opentiny/tiny-vue/pull/224>

## v2.6.6/v3.6.6

`2023/04/19`

### Exciting New Features 🎉

- feat: 增加 vue-vite-import 插件 by @kagol in <https://github.com/opentiny/tiny-vue/pull/135>
- feat: 当 children 为空数组是认为是叶子节点 by @GaoNeng-wWw in <https://github.com/opentiny/tiny-vue/pull/143>

### Bug Fixes 🐛

- fix(ipaddress): 切换 tab 键会从 192 跳过 168 到 0 by @rayhaoqin in <https://github.com/opentiny/tiny-vue/pull/122>
- fix: 修复 pnpm dev:docs 报错的问题。 by @ygj6 in <https://github.com/opentiny/tiny-vue/pull/123>
- fix: fix vuepress-vite version error when execute pnpm i by @kagol in <https://github.com/opentiny/tiny-vue/pull/126>
- fix(chart-line): fix line-chart tooltip.axisPointer.lineStyle does not take effect close #130 by @kagol in <https://github.com/opentiny/tiny-vue/pull/131>
- fix(types): 修复 vue3-example 项目中的 ts 报错。 by @ygj6 in <https://github.com/opentiny/tiny-vue/pull/132>
- fix(date-picker): fix date-picker style by @kagol in <https://github.com/opentiny/tiny-vue/pull/136>
- Fix issue #115 by @acyza in <https://github.com/opentiny/tiny-vue/pull/116>
- fix(table): table-misaligned when frozen columns by @awspi in <https://github.com/opentiny/tiny-vue/pull/140>
- 修复 tooltip`append-to-body="false"`时在表格中位置计算错误 by @acyza in <https://github.com/opentiny/tiny-vue/pull/146>
- fix(pull-refresh): 修复下拉刷新组件频繁触发的问题 by @TC-twwang in <https://github.com/opentiny/tiny-vue/pull/145>

### Other Changes

- refactor(tabs): optimize new tab button postion close #127 by @kagol in <https://github.com/opentiny/tiny-vue/pull/128>

## v2.6.1/v3.6.1

`2023/04/08`

### Exciting New Features 🎉

- feat(timeline): 增加箭头点击区域 by @MNZhu in <https://github.com/opentiny/tiny-vue/pull/103>

### Bug Fixes 🐛

- fix(radio): 修复主题配置 radio-button 无法继承属性的 bug，打开可继承属性 by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/82>
- fix: fix monorepo by @kagol in <https://github.com/opentiny/tiny-vue/pull/91>
- fix(anchor): 修复父锚点指示异常的问题 by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/93>
- fix: Failed to resolve entry for package "@opentiny/vue" close #99 by @kagol in <https://github.com/opentiny/tiny-vue/pull/100>
- fix(upload): 取消 fileupload 组件的自动隐藏和提示功能，修改成用户可自定义配置 by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/95>
- fix(exception): 优化定位布局样式 by @MNZhu in <https://github.com/opentiny/tiny-vue/pull/104>
- fix(timeline): 修复单个节点数据显示线条问题 by @MNZhu in <https://github.com/opentiny/tiny-vue/pull/105>
- fix: 修复打包，发布报错等问题，调整类型声明等问题 by @zzcr in <https://github.com/opentiny/tiny-vue/pull/108>
- fix(vue-common): 修复 adapter 中的 mode 的传值问题 by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/110>
- fix: 修复文档初始`pathname`错误 by @acyza in <https://github.com/opentiny/tiny-vue/pull/107>
- fix: 修复国际化键值的问题 by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/111>
- fix: 添加打包前置脚本 by @zzcr in <https://github.com/opentiny/tiny-vue/pull/112>
- fix(vue-panel): 修复 panel 的问题 by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/113>
- fix: Removing the invalid resource path enables `pnpm dev` to succeed. by @ygj6 in <https://github.com/opentiny/tiny-vue/pull/109>
- fix: fix build error by @kagol in <https://github.com/opentiny/tiny-vue/pull/119>
- fix(grid): 使用 gpu 加速优化虚拟滚动性能，修复筛选面板单选框无法选中问题 by @zzcr in <https://github.com/opentiny/tiny-vue/pull/121>

### Other Changes

- refactor: Refactor project to Monorepo and TypeScript by @kagol in <https://github.com/opentiny/tiny-vue/pull/90>
- refactor: remove useless files by @kagol in <https://github.com/opentiny/tiny-vue/pull/92>
- docs: update README by @kagol in <https://github.com/opentiny/tiny-vue/pull/98>

## v2.6.0/v3.6.0

`2023/03/22`

### Exciting New Features 🎉

- feat(anchor): 新增 anchor 组件第一个功能：基本使用 by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/30>
- feat(modal): 增加反馈弹窗 modal 组件 by @MNZhu in <https://github.com/opentiny/tiny-vue/pull/19>
- feat(button): 按钮组件样式修改 by @MNZhu in <https://github.com/opentiny/tiny-vue/pull/21>
- feat(multi-select): 增加下拉选择器 multi-select 组件 by @TC-twwang in <https://github.com/opentiny/tiny-vue/pull/22>
- feat(search): 搜索组件样式修改 by @MNZhu in <https://github.com/opentiny/tiny-vue/pull/33>
- feat(anchor): 添加锚点 anchor 组件 onchange 事件 by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/35>
- feat(timeline): 时间线插槽作用域增加 index 属性 by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/39>
- feat(timeline): timeline 样式修改 by @MNZhu in <https://github.com/opentiny/tiny-vue/pull/38>
- feat(form): form 组件增加自动换行 by @TC-twwang in <https://github.com/opentiny/tiny-vue/pull/40>
- feat(indexbar): 增加索引组件 by @MNZhu in <https://github.com/opentiny/tiny-vue/pull/47>
- feat(form): form 组件增加自动换行-检视意见修改 by @TC-twwang in <https://github.com/opentiny/tiny-vue/pull/54>
- feat(anchor): 锚点组件增加固定模式，修复示例文档 bug 问题 by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/49>
- feat(anchor): 修复检视意见，同步远程代码 by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/55>
- feat(anchor): 调整 anchor 组件，让其可以适配主题配置 by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/57>
- feat(badge): add badge-class close #50 by @kagol in <https://github.com/opentiny/tiny-vue/pull/51>
- feat(tag): add beforeDelete props by @kagol in <https://github.com/opentiny/tiny-vue/pull/52>
- feat(form): form 组件增加自动换行-增加移动端条件校验 by @TC-twwang in <https://github.com/opentiny/tiny-vue/pull/58>
- feat(switch): add beforeChange props by @kagol in <https://github.com/opentiny/tiny-vue/pull/59>
- feat(fullscreen): add beforeChange props by @kagol in <https://github.com/opentiny/tiny-vue/pull/61>
- feat(badge): add offset props by @kagol in <https://github.com/opentiny/tiny-vue/pull/63>
- feat(tabs): tabs 组件支持展开 by @TC-twwang in <https://github.com/opentiny/tiny-vue/pull/60>
- feat(split): add collapsible props by @kagol in <https://github.com/opentiny/tiny-vue/pull/64>
- feat(pull-refresh): pull-refresh 组件支持上拉刷新 by @TC-twwang in <https://github.com/opentiny/tiny-vue/pull/67>
- feat(tabs): 增加 tabs 组件超出隐藏提示 tip 配置 by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/68>
- feat(action-menu): 修复 ActionMenu 下拉后箭头旋转向上 by @MomoPoppy in <https://github.com/opentiny/tiny-vue/pull/70>
- feat(transfer): add beforeTransfer props by @kagol in <https://github.com/opentiny/tiny-vue/pull/75>
- feat(search): add prefix/suffix slots by @kagol in <https://github.com/opentiny/tiny-vue/pull/77>

### Bug Fixes 🐛

- fix(ipaddress): form 的示例增加 numeric,ipaddress 的校验示例 by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/29>
- fix: 修复构建错误 by @kagol in <https://github.com/opentiny/tiny-vue/pull/25>
- fix: 修复 echarts 和 cropperjs 依赖版本落后问题 by @yuanningning in <https://github.com/opentiny/tiny-vue/pull/27>
- fix(grid): 修复表格再虚拟滚动模式下，始终有横向滚动条问题 by @zzcr in <https://github.com/opentiny/tiny-vue/pull/32>
- fix(checkbox): 修复 vue3 模式下，checkbox-group 的 change 事件触发 2 次的问题 by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/31>
- fix(anchor): 修复 anchor 组件 MD 文档说明 by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/34>
- fix(milestone): 修复里程碑图标不对齐 bug by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/37>
- fix: 修复存在 2 个高度不一样的 notify 时，新增的 notify 高度错误 by @rayhaoqin in <https://github.com/opentiny/tiny-vue/pull/26>
- fix(switch): switch 组件提示文字只在首次显示，切换开关状态后提示文字消失 by @yuanningning in <https://github.com/opentiny/tiny-vue/pull/42>
- fix(tiny-loading): 修复 loading 组件在 vue2.0 版本报错 bug by @zzcr in <https://github.com/opentiny/tiny-vue/pull/46>
- fix(indexbar): 类命名整改 by @MNZhu in <https://github.com/opentiny/tiny-vue/pull/56>
- fix(dropdown): 修复 dropdown 下拉后箭头旋转向上 by @MomoPoppy in <https://github.com/opentiny/tiny-vue/pull/45>
- fix(cascader): 修复级联组件属性无法透传问题 by @rayhaoqin in <https://github.com/opentiny/tiny-vue/pull/66>
- fix(dropdown-mobile): 修复移动端组件 dropdownMenu 无法正常渲染的问题，顺带修复 pc 端 dropDown 组件的警告 by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/80>
- fix: 修复 tabs 组件展开内容被遮盖，multi-slect 返回值增加 value by @TC-twwang in <https://github.com/opentiny/tiny-vue/pull/81>

### Other Changes

- docs: update CONTRIBUTING.md by @kagol in <https://github.com/opentiny/tiny-vue/pull/62>
- docs: add english README and CONTRIBUTING by @kagol in <https://github.com/opentiny/tiny-vue/pull/79>

## v2.5.0/v3.5.0

`2023/02/27`

### 📢 破坏性变更

- 【Chart 组件】图表组件的谷歌地图和百度地图的数据接口改为由用户自行配置
- 【主题变量】如果升级版本，引用的主题变量会失效；因为此次升级，主题变量进行了规范化整改，如果老项目中有使用到主题变量，请参考主题替换文档，完成项目主题变量新旧替换。

### ✨ 新特性

- Grid
  - 增加行拖拽添加设置拖拽范围功能
  - 增加工具栏提供下拉筛选列的功能
- 【Loading 组件】新增移动端 Loading 组件
- 【Popover 组件】增加移动端 Popover 组件
- 【Select 组件】增加触发源插槽 reference
- 【全局的滚动开关】增加 PopupManager.globalScroll 属性，可以解决某些场景中，弹出层不跟随滚动的问题

### 🐞 缺陷修复

- 【ActionMenu 组件】修复 ActionMenu 组件的弹出无法选中等问题
- 【Checkbox 组件】移动端复选框组件样式修改
- 【Crop 组件】修复 crop 主题变量挂载，优先级被挂载在 dev.tiny-crop 的内部变量覆盖问题
- 【Dialog 组件】修复 dialog 低代码样式覆盖问题，并适配主题配置
- DialogBox
  - 修复右侧弹窗关闭按钮报错的问题
  - 修改 dialogBox 在控制台提示找不到 broadcast 的问题
- 【Dropdown 组件】修复 Dropdown 的禁用时，vnode 的 disable 没有传递进去的 bug
- 【Form 组件】修复 FormItem 组件的 required 不在第一项时，无法对齐的问题
- Grid
  - 修复表格-树表-键盘操作：Backspace 关闭节点操作无效问题
  - 修复 grid 组件配置主题变量 token 不生效
- 【Numeric 组件】修复 Numeric 组件的输入过长值时，组件报错的问题
- 【Pager 组件】修复分页 simple 模式 bug
- 【Slider 组件】修复 slider 滑块部分 token 不生效的问题
- Select
  - 修复 多选默认选中且禁用的选项，允许禁止删除
  - 修复 searchable 在 vue2 下失效的问题
  - 优化搜索框交互，在输入时可以直接触发过滤
- 主题配置
  - 修复主题化配置 token 不生效问题，组件类名统一放到最外层 div
  - 修复 CascaderPanel/Milestone/NavMenu/SliderBar/组件配置无法挂载的问题
  - 修复用户之前使用类名覆盖样式导致更新后样式失效 bug，并兼容主题配置
  - 修复 crop 组件， grid 组件配置主题变量 token 不生效问题
- 【构建】修复低代码页面预览组件国际化无法正常切换问题

### 🚀 优化

- 【ActionMenu 组件】优化`more-click`/`item-click`事件命名
- 【FileUpload 组件】增加上传文件达到 limit 时，隐藏按钮功能
- 【Icon 组件】补充 tiny-vue-icon 的 unknown 图标
- 【Input 组件】完善 input 组件类型声明
- 【Milestone 组件】优化`flag-click`事件命名
- 【Pager 组件】新增“前往”按钮置灰和 hover 高亮样式;优化 simple 模式;优化分页列表数字上下左右居中显示
- 【PopEditor 组件】去掉 popeditor 的 height 属性
- 【Popover 组件】优化 Popover 组件加载
- 【Select 组件】Select 面板搜索，支持国际化
- 【Tree 组件】优化 Tree 节点的拖动时，目标元素的高亮效果
- 官网
  - 新增新旧主题变量映射表，增加新旧主题变量替换教程
  - 补充 PopEditor 组件 的 width 属性描述
  - 补充 DropDown 组件 的 api 小标题
  - 修复 Upload 组件锚点跳转
  - 修复 里程碑标题
  - fileupload 图片上传优化功能
  - 优化 pager 组件‘只有一页按钮时隐藏分页’示例；优化上下页按钮样式
- 主题配置
  - 更新基础主题变量
  - 整改移动端主题，增加移动端主题变量保持 pc 端文件结构统一，以增加主题配置灵活度
  - 移动端主题增加常用色值

## v2.4.0/v3.4.0

`2023/01/13`

### 📢 破坏性变更

- 无

### ✨ 新特性

- 【ActionMenu 组件】新增 ActionMenu 组件

### 🐞 缺陷修复

- 【BulletinBoard 组件】修复 BulletinBoard 组件的更多链接的功能
- 【CreditCardForm 信用卡表单】修复 Card number 显示状态下编辑 number，无法在最近一次值上修改的问题
- 【Dropdown 组件】修复 Dropdown 组件 visible-change 事件没触发
- Grid
  - 修复 grid 组件个性化面板分页设置失效和样式失效问题
  - 修复树表执行 setAllTreeExpansion 方法，展开所有行之后大数据虚拟滚动滚动条计算错误问题
- 【Popover 组件】popover 的 modelValue 为 true 时，默认触发 popover 的显示
- 【Select 组件】修复 Select 组件多选默认选中且禁用的选项，需禁止删除
- ToggleMemu
  - 修复 togglememu 组件只能拿到 label 字段的 bug
  - 废弃 getMenuDataSync 改为异步名称 getMenuDataAsync

### 🚀 优化

- Grid
  - 添加表格默认分页示例，优化表格刷新示例
  - 表格编辑态校验交互与样式靠齐华为云规范
  - 优化表格内置分页，在用户不引入分页组件的情况下，也可以展示分页组件
- 【Pager 组件】分页组件跳转按钮文案国际化
- 【TreeMenu 组件】展开状态下，展开箭头从一直蓝色， 修改为 hover 时才变蓝色，移开为灰色
- 官网
  - 首页添加智能客服
  - upload 跳转锚点修复
  - 完善 upload 代码示例
  - 响应式布局调整

---

## v2.3.0/v3.3.0

`2022/12/16`

### 📢 破坏性变更

- 无

### ✨ 新特性

- 【FormItem 组件】为 FormItem 添加 validate-icon 属性
- 【Notify 组件】增加 verticalOffset 属性
- 【Select 组件】新增 searchable 属性，可以在下面面板搜索
- 官网
  - 增加英文文档，并实现中英文切换
  - 增加国际化自定义配置文档

### 🐞 缺陷修复

- Grid
  - 修复表格组件在多层树表结构下，滚动条的位置计算错误的问题
  - 修复表格组件多字段排序功能失效的问题
  - 修复表格组件调用清除筛选方法，但是 fetchData 参数中的筛选参数还存在的问题
- 【Notify 组件，解决连续点击弹出，如果有组件消失，新弹出组件会与现有组件重合的问题
- 【RadioGroup 组件】解决给 class 赋值未渲染到 dom 上的问题
- 【Search 组件】修复 v-model 无法实时更新值的问题，如果需要监听输入值的实时变化，可以使用事件：@update:modelValue
- 【Slider 组件】修改 slider 的文字位置
- 【TreeMenu 组件】修复 treemenu 在 hover 时的背景色
- 【官网】修复国际化功能中，左侧组件锚点跳转问题

### 🚀 优化

- 【Icon 组件】为图标添加相应的 class
- 【FileUpload 组件】去除 size 属性说明
- 【Message 组件】修改 message 的高度
- 【Notify 组件】样式优化
- 【Popover 组件】增加 height 属性的文档更新
- 官网
  - vue 文档中的较大示例图片的压缩
  - 开源官网增加下划线，原生滚动条 hover 显示
  - 开源网站放开更新日志菜单
  - 移除路由切换时的顶部进度条
  - 优化网站主题色

---

## v2.2.0/v3.2.0

`2022/12/2`

### 📢 破坏性变更

- 无

### ✨ 新特性

- 【Breadcrumb 组件】新增 options、textField、select 事件，面包屑组件支持配置式
- 【BreadcrumbItem 组件】组件新增 label 属性和 select 事件
- 【Dropdown 组件】新增 menuOptions，title 属性，下拉菜单组件支持配置式
- 【DropdownItem 组件】新增 label 属性
- 【DropdownMenu 组件】新增 options， textField 属性
- 【Notify 组件】新增 debounceDelay 属性，支持启用防抖功能
- 【Tooltip 组件】增加 visible 属性

### 🐞 缺陷修复

- 【Chart 组件】修复 extend 配置部分失效问题
- Form
  - 修复表单校验在 webcomponents 环境下报错的问题
  - 修复 align-lable 的样式问题
- 【Pager 组件】修复在 webcomponents 环境下显示异常的问题
- 【Popover 组件】修复在 webcomponents 环境下显示异常的问题
- 【Search 组件】修复修改布局导致高度不对的问题。默认主题 30px,无限主题 32px

---

## v2.1.0/v3.1.0

`2022/10/31`

### 📢 破坏性变更

- 移除 rich-text 组件，因为该组件引入的第三方插件 quill 属于超期高危依赖，如需继续使用，可以使用老版本： @opentiny/vue-rich-text@3.0.0

### ✨ 新特性

- 【Dropdown 组件】新增 Dropdown 下拉菜单组件
- 【Notify 组件】新增 Notify 通知组件
- 【工程优化】 组件库支持类型声明，可以在 typescript 工程中正常使用
- 【主题配置】 组件库已完成多有组件的主题配置化改造，目前提供默认两套主题：默认主题、无限主题

### 🐞 缺陷修复

- 【DatePicker 组件】修复时区选择下拉框出不来的 bug
- Grid
  - 修复合并单元格，表格列加了 overflow，导致样式异常的 bug
  - 修复绑定静态数据源（数组），push、splice 等操作后，表格数据无变化的 bug
- 【Numeric 组件】修复鼠标滚轮滚动改变值时，页面的滚动条也会跟着滚动的 bug
- 【Select 组件】修复创建条目，创建一个条目选中后，再重新创建选中，还是选中的上一次选中数据的 bug
- 【Slider 组件】解决无法拖动的 bug
- 【Tabs 组件】解决标题下划线对不齐的 bug

---

## v2.0.0/v3.0.0

`2022/09/19`

### 📢 破坏性变更

无

### ✨ 新特性

- 【Select 组件】增加 scroll 事件

### 🐞 缺陷修复

- 【Cascader 组件】解决点击已选中选项无法关闭选择器的问题
- 【PopEditor 组件】解决弹出框里的查询条件不能输入的问题
- 【RichText 组件】解决通过 v-model 绑定变量时快速删除时控制台报错的问题
- 【Search 组件】修复 change 事件触发 2 次的问题
- 【Tabs 组件】修复 tab 组件套 tab 组件，内部的 tab 项会显示在外部 tab 上的 bug
