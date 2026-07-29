# 更新日志

Tiny Vue 团队在正常情况下使用 每月 发布策略。

在此页面上，您只能看到我们的 更新日志 最新三个迭代的日志记录，如您要查看完整记录可以查看：[Release](https://github.com/opentiny/tiny-vue/releases)

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

## v3.29.0/v2.29.0

`2026/02/25`

## What's Changed

### Exciting New Features 🎉

- feat(tree-menu): resolve the issue of not displaying icons after folding the bottom by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3949>
- feat:Synchronize release-3.28.0 to dev by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3954>
- feat(tag-input): tag-input component by @zhaoxiaofeng876 in <https://github.com/opentiny/tiny-vue/pull/3951>
- feat(from): mobile-first mode tag text increases the number of displayed lines by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3946>
- feat(search-box): Add the search-box document on the SaaS official website. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3963>
- feat(button): add accessibility information to the button component by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3968>
- feat(upload): [file-upload] The fileSize of the string type supports unit conversion. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3993>
- feat(static): 为统计数值增加数字增长动画 by @ourcx in <https://github.com/opentiny/tiny-vue/pull/3996>
- feat(file-upload, input, numeric, search, switch): Add accessibility information by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3974>
- feat(docs): add me by @ourcx in <https://github.com/opentiny/tiny-vue/pull/4008>
- feat(modal): 为 ModalOptions 的 message 字段增加函数类型支持 by @Yujing613 in <https://github.com/opentiny/tiny-vue/pull/3995>
- feat(rate): feat score clearing function by @IKEYCY in <https://github.com/opentiny/tiny-vue/pull/3987>
- feat(form): add custom-validation-string-length demo and e2e test by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/4021>
- feat(slider): update roles and add aria attributes for accessibility in mobile and PC components by @zzcr in <https://github.com/opentiny/tiny-vue/pull/4023>
- feat(rate): enhance accessibility by adding ARIA attributes to rate component by @zzcr in <https://github.com/opentiny/tiny-vue/pull/4022>
- feat(form): add accessibility information for form and form-item by @zzcr in <https://github.com/opentiny/tiny-vue/pull/4019>
- feat(tabs): enhance accessibility with ARIA attributes and keyboard navigation support by @zzcr in <https://github.com/opentiny/tiny-vue/pull/4020>
- feat(search-box): supports drill fields and HUAWEI CLOUD-style documents. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/4030>
- feat: added the filter-popper-option attribute to control the filter panel by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/4034>
- feat(filter-panel): add 'size' prop and corresponding styles for filter box component by @zzcr in <https://github.com/opentiny/tiny-vue/pull/4043>
- feat(drawer): 补充 closed 事件，用于标识抽屉关闭动画完成 by @Yujing613 in <https://github.com/opentiny/tiny-vue/pull/4017>
- feat: add show-close functionality to Guide component by @IKEYCY in <https://github.com/opentiny/tiny-vue/pull/4039>
- feat(breadcrumb): increase accessibility information by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/4018>
- feat: Add comments to multiple component theme variables by @zzcr in <https://github.com/opentiny/tiny-vue/pull/4055>
- feat: Adds automatic alignment when viewport boundaries overflow in the time selection panel. by @zzcr in <https://github.com/opentiny/tiny-vue/pull/4052>
- feat(dropdown): dropdown-item support effect. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/4054>
- feat(tree-menu): add aria-\* attribute by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/4073>
- feat(nav-menu): add aria-\* attribute by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/4074>
- feat(anchor): add aria-\* attribute by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/4075>
- feat(link): add aria-\* attribute by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/4076>
- feat: 按钮组增加了一个 props by @ourcx in <https://github.com/opentiny/tiny-vue/pull/4032>

### Bug Fixes 🐛

- fix(icon-saas): add icons of batch4 by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3955>
- fix(dialog-select): fix show selected box when props.showSelectedBox false by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3956>
- fix(tag-input): add tag-input's css file into theme-saas by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3961>
- fix: fixed an issue where using constant strings or boolean values ​​for v-model caused build errors on the official website. by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3959>
- fix(theme): fix input show 2 eye icons when focus in password mode by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3957>
- fix(grid): fix slot default lead to table rerender by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3967>
- fix(icon-saas): restore mobile-radio.svg by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3971>
- fix(icon-saas): update two icon of batch3 by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3972>
- fix(dialog-box): [dialog-box] add aria-\* attribute by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3952>
- fix(modal): align close delay time with animation duration by @Yujing613 in <https://github.com/opentiny/tiny-vue/pull/3970>
- fix(modal): [modal] add aria-\* attribute by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3941>
- fix(date-panel): remove unnecessary border style for body-wrapper by @Yujing613 in <https://github.com/opentiny/tiny-vue/pull/3966>
- fix(tabs): remove redundant border-bottom styles by @Yujing613 in <https://github.com/opentiny/tiny-vue/pull/3969>
- fix(drawer): [drawer] add aria-\* attribute by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3973>
- fix(vitest): allow passing with no tests found in configuration by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3980>
- fix(icon-saas): update three icons in icon-saas batch4 by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3982>
- fix(select): add max-height:50% for select-dropdown by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3978>
- fix(App.vue): add import mapping for @opentiny/vue-icon-saas and refactor getDemoCode parameters by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3999>
- fix(grid): remove cache row at not scrollYLoad sence by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3998>
- fix(pager): fix simplest-pager saas theme style by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3997>
- fix(popover): [popover] add aria-\* attribute by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3979>
- fix(message): [message] add the message component to the menu by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3986>
- fix(notify): [notify] add aria-\* attribute by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3992>
- fix(tooltip): [tooltip] add aria-\* attribute by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3988>
- fix(modal): mask fade animation by @GaoNeng-wWw in <https://github.com/opentiny/tiny-vue/pull/3984>
- fix(qr-code): add watch deep by @ourcx in <https://github.com/opentiny/tiny-vue/pull/4000>
- fix(icon): fix build:ui icon and dont generate dts files by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/4003>
- fix(alert): [alert] add aria-\* attribute by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/4002>
- fix(icon): adjust the format of the renamed file by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/4009>
- fix(modal): 当 duration 为 0 时不自动关闭弹窗 by @Yujing613 in <https://github.com/opentiny/tiny-vue/pull/3994>
- fix(theme): select-dropdown's wrap dom add overflow = auto by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/4015>
- fix(exception): Fixes the issue of missing styles. by @zzcr in <https://github.com/opentiny/tiny-vue/pull/4013>
- fix(popconfirm): [popconfirm] add aria-\* attribute by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3983>
- fix(grid): fix custom type not show sort icon by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/4016>
- fix(grid): copy old row to insert can not show the insert row by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/4014>
- fix(radio): [radio] modify radio mobile display issues by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/4025>
- fix(tabs): tabs 排除 card 类型的 tiny-tabs\_\_header 的::after 样式 by @Yujing613 in <https://github.com/opentiny/tiny-vue/pull/3989>
- fix(picker): add aria-\* for datepicker by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/4028>
- fix: modify style by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/4036>
- fix(saas-icon): add IconFavorites by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/4035>
- fix(form-item): fixed an issue where validation would fail to trigger after continuous input when form items were configured with validation stabilization and the focus would quickly drop. by @zzcr in <https://github.com/opentiny/tiny-vue/pull/4038>
- fix(radio): add truncate for radio\_\_label by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/4041>
- fix(date-picker): Roll back and clear the time range change. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3981>
- fix(vue2-common): createComponent function add parent param by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/4040>
- fix: update tiny-editor version to fix outlook image paste by @kagol in <https://github.com/opentiny/tiny-vue/pull/4046>
- fix(auto-tip): fix auto-tip in Vue2， the directive value may be true by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/4045>
- fix: Fixed the issue where the grid operation column slots failed to render in Vue 2. by @zzcr in <https://github.com/opentiny/tiny-vue/pull/4047>
- fix(fluent-editor): Rich text editor tables cannot be centered in batches. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/4044>
- fix(grid): fix sort logic not effect while use custom type by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/4048>
- fix(mobile): add mobile dark theme switching by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/4033>
- fix: add size prop to tiny-filter-box in various components for improved responsiveness by @zzcr in <https://github.com/opentiny/tiny-vue/pull/4049>
- fix(grid): fix setActiveRow will error when editConfig is null by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/4050>
- fix(tag-group): fix calculation errors caused by element positioning by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/4057>
- fix(select,base-select): Replaces the select API to obtain the width. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/4062>
- fix(fluent-editor): The table cannot be centered in batches. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/4059>
- fix(huicharts): fix the double-layer donut chart error in charts by @Davont in <https://github.com/opentiny/tiny-vue/pull/4029>
- fix(grid): fix $rowIndex in tree table is not same as before refactor by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/4060>
- fix(input): fix textarea height resize after mounted by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/4067>
- fix: set the default value of bubbling by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/4071>
- fix(tag): Set the maximum width not to display the ellipsis. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/4070>
- fix(fluent-editor): z-index is applied only when the screen is in full-screen mode by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/4078>
- fix(tag-group): fix e2e test of tag-group by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/4079>
- fix(select): fix select's tooltip has scrollbar by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/4077>
- fix(file-upload): Fixed the problem that the tip of the file list to be uploaded does not wrap. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/4083>
- fix(base-select,tag-group): e2e test by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/4084>

### Other Changes

- docs: basic example of hiding anchor components in SaaS mode by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3958>
- docs: add component doc entry by @kagol in <https://github.com/opentiny/tiny-vue/pull/4081>

## New Contributors

- @zhaoxiaofeng876 made their first contribution in <https://github.com/opentiny/tiny-vue/pull/3951>
- @Yujing613 made their first contribution in <https://github.com/opentiny/tiny-vue/pull/3970>
- @ourcx made their first contribution in <https://github.com/opentiny/tiny-vue/pull/4000>

**Full Changelog**: <https://github.com/opentiny/tiny-vue/compare/v3.28.0...v3.29.0>
