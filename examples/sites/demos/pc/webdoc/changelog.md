# 更新日志

Tiny Vue 团队在正常情况下使用 每月 发布策略。

在此页面上，您只能看到我们的 更新日志 最新三个迭代的日志记录，如您要查看完整记录可以查看：[Release](https://github.com/opentiny/tiny-vue/releases)

## v3.32.0/v2.32.0

`2026/09/15`

## What's Changed

### Exciting New Features 🎉

- feat(form-item): [form-item] add no-style support by @guomengjia618-dot in https://github.com/opentiny/tiny-vue/pull/4300
- feat(fluent-editor): the issue of scrolling offset occurs when editing a table by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4311

### Bug Fixes 🐛

- fix: compatible with the click behavior of AUI-based foldable panels by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4271
- fix: compatible with the click behavior into saas-design by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4273
- fix(theme): update theme package version to 3.31.1 and improve CSS class selectors in reset.less by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/4274
- fix: 恢复指南菜单以及构建open模式，不带业务组件 by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4283
- fix: svg function supports a bottom padding style across multiple devices. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4289
- fix(slider-button-group): lost ref in pc.vue by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4292
- fix(input): 为密码可见性切换按钮补上 mousedown.prevent，修复连续点击时误选中页面文本 by @chujieHong in https://github.com/opentiny/tiny-vue/pull/4291
- fix(demos): 多选个数限制示例不再与自定义图标示例共用 v-model(#4285) by @chujieHong in https://github.com/opentiny/tiny-vue/pull/4286
- fix(color-select-panel): 修复直接输入颜色值时滑块和显示器不同步的问题(#4280)  by @chujieHong in https://github.com/opentiny/tiny-vue/pull/4267
- fix(clickoutside): 修复拖选文本时误触发外部点击关闭的问题  by @chujieHong in https://github.com/opentiny/tiny-vue/pull/4288
- fix(grid): When switching a multi-device table to mobile mode, it displays as blank. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4284
- fix(tabs): 修复 showMoreTabs 模式下 overflow 计算滞后导致下拉菜单未及时更新(#4279)  by @chujieHong in https://github.com/opentiny/tiny-vue/pull/4272
- fix(common): inject design into child components and add a fallback variable. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4293
- fix: saas-design write the wrong icon name by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4295
- fix: resolve i18n switching failure in the simplified column settings panel, and add i18n toggle for local debugging by @zzcr in https://github.com/opentiny/tiny-vue/pull/4298
- fix(grid): 修复固定列列显隐边界场景列错位及序列化报错 by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4302
- fix(fluent-editor): solve the problem of some title prompts disappearing from the toolbar by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4304
- fix: restore style by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4309
- fix: events cannot be broadcast into when a component is in a slot. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4306
- fix: add the resize and drag functionality for all four edges of the modal on mf template by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4307
- fix: optimize the type declaration of Message. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4301
- fix: the design saas, an incorrect icon package is referenced by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4308
- fix(icon): remove unnecessary elements from the icon by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4303
- fix: avoid ts warning by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4313
- fix(tag-group): delayed calculation of the tag's height by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4312
- fix(upload-list): When maxNameLength is not set, excessively long file names are displayed using CSS ellipsis. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4315
- fix(pager): solve the problem that the current page does not change after the total number of pages changes by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4316
- fix(doc): optimize documents with custom grid sorting by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4314
- fix(alert): remove the height restriction for the large mode of the alert component. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4324
- fix(vue/grid): [grid] guard requestIdleCallback for Safari by @lhuans in https://github.com/opentiny/tiny-vue/pull/4325
- fix(vue/grid): [grid] split rowspan at expand row (#4200) by @Huauauaa in https://github.com/opentiny/tiny-vue/pull/4319
- fix(docs): close body poppers on doc layout scroll (opentiny#4290) by @Huauauaa in https://github.com/opentiny/tiny-vue/pull/4317
- fix(utils): parse iso datetime without timezone in toDate (#4176) by @Huauauaa in https://github.com/opentiny/tiny-vue/pull/4321
- fix(vue-renderless/date-range): clamp end time without rewriting start time (#4185) by @Huauauaa in https://github.com/opentiny/tiny-vue/pull/4322
- fix(sites): [color-select-panel, select, dropdown] skip popper close in e2e by @zzcr in https://github.com/opentiny/tiny-vue/pull/4327
- fix(docs): avoid static saas theme less import in pages build by @zzcr in https://github.com/opentiny/tiny-vue/pull/4329

### Other Changes

- docs: add 3.31.0's changelog by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4275

## New Contributors

- @chujieHong made their first contribution in https://github.com/opentiny/tiny-vue/pull/4291
- @guomengjia618-dot made their first contribution in https://github.com/opentiny/tiny-vue/pull/4300
- @Huauauaa made their first contribution in https://github.com/opentiny/tiny-vue/pull/4323
- @lhuans made their first contribution in https://github.com/opentiny/tiny-vue/pull/4325

**Full Changelog**: https://github.com/opentiny/tiny-vue/compare/v3.31.0...v3.32.0

## v3.31.0/v2.31.0

`2026/07/29`

## What's Changed

### Exciting New Features 🎉

- feat(modal): [modal] added the before-close attribute by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4204
- feat(drawer): add destroyOnClose to drawer by @Yujing613 in https://github.com/opentiny/tiny-vue/pull/4153
- feat: the image component supports URL encoding SVG by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4241
- feat(tag): [tag] add round attribute by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4247
- feat(flowchart): example and documentation for adding Flowchart component by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4240
- feat: add SliderButton component by @zzcr in https://github.com/opentiny/tiny-vue/pull/4250
- feat(alert): [alert] add small and medium sizes by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4248
- feat(slider-button): add slieder-button e2e by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4254
- feat(switch): [switch] add display-only attribute by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4259

### Bug Fixes 🐛

- fix(common): solve the problem of reactive property loss in the provide scenario caused by the Longque API in the HarmonyOS environment by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4175
- fix(dropdown): the style after clicking the unified button by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4174
- fix(pager): adjust the spacing issue by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4170
- fix: solve the problem of not finding the package during packaging by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4179
- fix(sites): conditionally apply icon source plugins based on config mode by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/4181
- fix(file-upload): solve the problem of multiple commas appearing in the prompt for uploading files by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4188
- fix(form-item): solve the overlap between strong prompts and verification prompt content by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4190
- fix(tabs-mf): beforeLeave trigger twice by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4191
- fix(grid): optimize operation cache by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/4192
- fix: standardize the disabled color for multi-input fields by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4199
- fix(reset.css): restore [class*=~'@{css-prefix}'] in reset.css by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4203
- fix: fix form-item-inline's padding-top eq 12px by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4202
- fix(file-upload): Uploading the component name "group" causes it to become invalid. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4193
- fix(form-item): fix the issue of the width of the tiny-cascader, which is affected by the multi-end form-item by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4194
- fix(color-picker): auto flip by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/4187
- fix(space): [space] modify the Space Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4184
- fix(drawer): [drawer] modify the bugs in the drawer component and provide additional property testing examples by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4195
- fix: add size prop for collapse by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4197
- fix(input): remove input mf outline, which is black border by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4196
- fix(numeric): add parse-input prop by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4205
- fix(tooltip): more secure execution of the renderContent function by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4207
- fix: development harness documentation for components by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4213
- fix(form): tooltip and prop support dynamic change by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/4221
- fix(grid): grid event add dynamic support by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/4224
- fix: enhance components prop dynamic change by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/4225
- fix(uploader): fix webkitGetAsEntry() return null cause error by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4226
- fix(vue-renderless/tab-nav): delay initial mounted to nextTick by @KevinAndrewDong in https://github.com/opentiny/tiny-vue/pull/4220
- fix: add getStateSelection api for old code by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4214
- fix: the table height remains unchanged when modifying maxheight by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4216
- fix(grid): update attribute spelling errors by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4236
- fix: 修复属性拼写错误 by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4235
- fix(space): remove reference to fix Vue 3 console warning by @kagol in https://github.com/opentiny/tiny-vue/pull/4222
- feat(date-picker): solve the problem of panel data not being cleared during half-select by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4234
- fix(nav-menu): fix the issue where before-skip returns false, but the component still updates its active state by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4227
- fix: fix the issue where the menu cannot be collapsed due to the simultaneous activation of the attributes "menu-collapsible" and "width-adapt" by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4229
- fix(nav-menu): [nav-menu] fix the occasional issue of menu hiding when refreshing the page by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4228
- fix(form-item): solve the problem that the size attribute of the button in the form component does not take effect by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4206
- fix(vue-renderless/dialog-select):[dialog-select] 修复首次打开多选勾选不同步 by @Malusnow in https://github.com/opentiny/tiny-vue/pull/4201
- fix: base-select 在清除时，hover-expand 面板不隐藏收起按钮 by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4243
- fix(grid): modify saas theme by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4246
- fix: modify the problem of lazy load root node not triggering in tree-menu component vue3 by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4242
- fix(vue-renderless/file-upload): accept 支持 video/_、audio/_ 通配符 (fixes #4237) by @xuxiao1797 in https://github.com/opentiny/tiny-vue/pull/4239
- fix(vue-renderless/fluent-editor): Fix lineheight formatting to use '… by @cfljue in https://github.com/opentiny/tiny-vue/pull/4212
- fix(nav-menu): modify the misalignment issue of dropdown content by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4171
- fix(drawer): add drag and drop icon(mobile-first) by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4249
- fix(numeric): 移除 numeric 增减按钮 z-index，解决表格内层级冲突问题 by @Yujing613 in https://github.com/opentiny/tiny-vue/pull/4244
- fix(file-upload): 增强 accept 属性的适配算法 by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4253
- fix: fix e2e errors of dialog-select and modal by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4256
- fix(transfer):The table header of the Transfer component does not support fixing. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4257
- fix: rewrite the path of e2e test's fold by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4260
- fix: sync theme-saas's tailwind classname of rounded-\* by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4264
- fix(date-picker,date-panel):fix the issue where the selected date is offset by one day in multi-time zone scenarios. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4266

### Other Changes

- fix: supplement development document specifications by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4218
- fix: 添加 grid column 组件的 type="operation" 和 operationConfig 的文档, 删除无用缓存代码 by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4231
- fix(grid): solve the error issue of clearSelected method by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4217

## New Contributors

- @Malusnow made their first contribution in https://github.com/opentiny/tiny-vue/pull/4201
- @xuxiao1797 made their first contribution in https://github.com/opentiny/tiny-vue/pull/4239
- @cfljue made their first contribution in https://github.com/opentiny/tiny-vue/pull/4212

**Full Changelog**: https://github.com/opentiny/tiny-vue/compare/v3.30.0...v3.31.0

## v3.30.0/v2.30.0

`2026/04/02`

## What's Changed

### Exciting New Features 🎉

- feat(link): adapt link components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4095
- feat(cascader): adapt to Cascader Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4112
- feat(search): adapt to Search Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4124
- feat(breadcrumb): adapt breadcrumb components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4098
- feat(steps): adapt to Steps Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4122
- feat(dialog-box): adapt to Dialog Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4126
- feat(popover): adapt to Popover Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4132
- feat(notify): adapt to Notify Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4130
- feat(form): adapt to Form Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4123
- feat(radio,radio-group): adapt to Radio Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4119
- feat(modal): adapt to Modal Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4144
- feat(action-menu): adapt action-menu components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4097
- feat(button,button-group): adapt to Button Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4100
- feat(dropdown): adapt dropdown components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4105
- feat(base-select): adaptation of Base-Select Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4110
- feat(drawer): adapt to Drawer Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4127
- feat(checkbox): adapt to CheckBox Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4113
- feat(numeric): adapt to Numeric Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4118
- feat(alert): adapt to Alert Components by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4120
- feat(drawer): add appendToBody to drawer by @Yujing613 in https://github.com/opentiny/tiny-vue/pull/4107
- feat(CalendarView): Added custom color support for CalendarView and u… by @ourcx in https://github.com/opentiny/tiny-vue/pull/4012
- feat: introduce the responsive file and modify error reporting issues by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4147
- feat(fluent-editor): Intercepting redirection before a rich text hyperlink is followed by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4141
- feat: Add AGENTS.md programming assistance file by @zzcr in https://github.com/opentiny/tiny-vue/pull/4155
- feat(rich-text): i18n support for rich text and fixing the editor's pop-up border display. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4146
- feat: fix the issue where the color of the other half does not change when half of the rate component is selected by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4156

### Bug Fixes 🐛

- fix(input): more dialog, add whitespace-pre-wrap class for content by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4087
- fix(input): fixed an issue where multiple lines exceeding the ellipsis value in read-only input mode would display incorrectly in Safari. by @zzcr in https://github.com/opentiny/tiny-vue/pull/4089
- fix(button,button-group): adapting the button component to small screens by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4080
- fix(fluent-editor): Image files can be uploaded in the disabled state. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4092
- fix(grid): operation column add cache by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/4093
- fix(grid): fix selection dropdown style by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/4096
- fix(input): add popMore dialog's content with break-words rule by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4094
- fix: 修复 input 只读状态多行 在 safari 浏览器中有大段空白的问题 by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4101
- fix(web-doc): optimized the description of some English documents. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4102
- fix(api): 优化 dialogBox，modal 的英文 api 描述 by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4103
- fix(icon-saas): simplifying the width and height numeric values in svg by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4104
- fix(tag): add a span tag to the tag and insert a CSS rule for long el… by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4117
- fix(grid): ensure safe deletion of defaultRowId in record object by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/4116
- fix(grid): fix cell not update at row change by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/4115
- fix(grid): enhance filter layout processing by trimming and filtering empty items by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/4114
- fix(fluent-editor): Fixed an issue where the binary content of uploaded images is lost. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4108
- fix(base-select): title [object object] error by @ga163 in https://github.com/opentiny/tiny-vue/pull/4125
- fix(select-dropdown): after the mf template is loaded, the focus element in the input select is actively out of focus to avoid the cursor in safari by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4133
- fix(build-icon): add the \_\_flag to the built icond by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4136
- fix(input): calculating the height of multiple lines of text in the input must be executed at the beginning and at the end by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4134
- fix(user): change the cache method to sessionStorage by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4135
- fix(tabs): the modelValue updated when the dialog was closed. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4128
- fix(time-picker): An anomaly occurs when the time component is opened for the first time. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4139
- fix(date-picker):The time component displays labels under non-filtered. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4137
- fix(numeric): modify spacing by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4111
- fix(grid): add field existence check and corresponding warning message in grid methods by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/4140
- fix(tree-select): handle modelValue change in single selection mode by @zhengshui in https://github.com/opentiny/tiny-vue/pull/4131
- fix(modal): Abnormal spacing of li elements caused by CSS overflow when modal modal is show by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4142
- fix: Fixed the startup error issue on the SaaS website and hid the tree-menu component. by @zzcr in https://github.com/opentiny/tiny-vue/pull/4151
- fix(anchor): events compatible with Vue 2 by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4149
- fix(docs): add documentation for the select slot. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/4150
- fix(base-select,carousel,date-picker,pager.select,steps,tabs): Isolation is added to the group class in the SaaS mode. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4152
- fix(dropdown): The playground of the SaaSDropdown component is displayed abnormally. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/4148
- fix(button-group): adaptation components and modification errors by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4154
- fix(playwright): modify the test case viewport configuration by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4157
- fix(drawer): [drawer] modify e2e-test by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4158
- fix: add whether to load responsive file judgment by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4160
- fix: fix the issue of horizontal scrollbars appearing in Firefox tables by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/4161
- fix: change import from responsive-index.less to responsive-index.css… by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/4165

### Other Changes

- docs: Added a usage guide for the TinyVue component skills, and removed documentation related to mcp. by @zzcr in https://github.com/opentiny/tiny-vue/pull/4090
- docs: add "Build with AI" content to README.md by @kagol in https://github.com/opentiny/tiny-vue/pull/4121
- docs(tabs): optimize demo by @James-9696 in https://github.com/opentiny/tiny-vue/pull/4106

## New Contributors

- @ga163 made their first contribution in https://github.com/opentiny/tiny-vue/pull/4125
- @zhengshui made their first contribution in https://github.com/opentiny/tiny-vue/pull/4131

