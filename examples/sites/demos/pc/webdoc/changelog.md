# 更新日志

Tiny Vue 团队在正常情况下使用 每月 发布策略。

在此页面上，您只能看到我们的 更新日志 最新三个迭代的日志记录，如您要查看完整记录可以查看：[Release](https://github.com/opentiny/tiny-vue/releases)

## v3.28.0/v2.28.0

`2025/12/29`

## What's Changed

### Exciting New Features 🎉

- feat: update SaaS icon by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3823>
- feat: modify document prompt style by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3826>
- feat(base-select): [base-select] Synchronize the select component code to the base-select component by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3834>
- feat(grid-select):Development of the grid-select table component by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3832>
- feat: modify image reference path and size by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3840>
- feat: removes file entries from the ignore list, reducing the number of commands that need to be executed during development by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3841>
- feat: add saas.html entry to Vite configuration by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3855>
- feat(theme): add global animation configuration by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3843>
- feat(select,tree-select,grid-select,base-select):reconstruct the selec component into the select-wrapper component. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3862>
- feat(select-wrapper,tree-select,grid-select,base-select): Add the demo and case of the select-wrapper component. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3863>
- feat(select-wrapper,base-select,grid-select): mobile-first base-select and grid-select development by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3871>
- feat(base-select,grid-select): moobile-first base-select and grid-select doc by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3872>
- feat(tree-select): mobile-frist tree-select and demo by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3877>
- feat(dropdown): add contextmenu trigger support by @IKEYCY in <https://github.com/opentiny/tiny-vue/pull/3861>
- feat(tree-menu): [tree-menu] Can adding nodes be clicked on the document by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3878>
- feat(vue-renderless/drawer): add close-on-press-escape api by @IKEYCY in <https://github.com/opentiny/tiny-vue/pull/3900>
- feat: add auto-build-main-module-docs yml by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3910>
- feat: automatically trigger updates to the docs document by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3906>
- feat(switch): add width property to support custom switch width by @IKEYCY in <https://github.com/opentiny/tiny-vue/pull/3879>
- feat(select-wrapper, base-select, tree-select, grid-select):select-wrapper mobile-first development by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3881>
- feat:select-wrapper mobile-first example and documentation by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3882>
- feat(select-wrapper,base-select,tree-select,grid-select):tree-select support lazy loading by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3915>
- feat: add triggering conditions by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3922>
- feat(guide): triggered only when showStep is true by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3926>
- feat(modal): supports setting the headerDragable property by @gausszhou in <https://github.com/opentiny/tiny-vue/pull/3918>
- feat(autocomplete):add accessibility information by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3929>
- feat(checkbox):add accessibility information by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3930>
- feat(radio): add accessibility information by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3932>
- feat(input): Add accessibility information. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3936>
- feat(version):release 3.28.0 by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3945>

### Bug Fixes 🐛

- fix(grid): remove last visible row border by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3809>
- fix: Fixed an issue where icon-saas depended on the wrong version of the theme-saas package. by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3808>
- fix(query-builder): document supplement by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3814>
- fix(space): [space]default spacing for overlay button components by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3816>
- fix(file-upload): The file size limit in the EDM upload mode is invalid. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3813>
- fix: fixed an issue where pipeline errors were caused by the gradient-parser package dependency. by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3825>
- fix(site): site provides examples of both SaaS and non-SaaS filter modes by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3827>
- fix: fixed an error in the github-action build script by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3828>
- fix: fixed an issue where icon-multicolor failed to build. by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3830>
- fix(tabs): fix the tab width update issue. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3839>
- fix(build): remove create-iconsaas command, add saas-icon builded result by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3838>
- fix(date-picker):fix system time zone conversion logic by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3837>
- fix(auto-tip): add popperClass for AutoTip directive by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3836>
- fix(saas): update button component size attribute by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3849>
- fix: optimization and Modification of SaaS Official Website by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3848>
- fix: fix case error IconSubScript => IconSubscript by @kagol in <https://github.com/opentiny/tiny-vue/pull/3852>
- fix: fix build:saas by @kagol in <https://github.com/opentiny/tiny-vue/pull/3853>
- fix: fix tiny-vue playground error and tiny-vue-saas error after deploy obs by @kagol in <https://github.com/opentiny/tiny-vue/pull/3856>
- fix(icons): add rewrite icons export ,rename subscript to sub-script by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3857>
- fix(grid): fix title is not reactive by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3858>
- fix(saas-api): hide some props in saas mode by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3842>
- fix(rich-text): fixed the font size setting failure. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3859>
- fix(timeline): add description prop for configuration mode display Fixes #3070 by @IKEYCY in <https://github.com/opentiny/tiny-vue/pull/3822>
- fix(form-item): fix input append slot wrap in form item by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3864>
- fix(grid): fix undefined field can't be marked change at grid edit by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3860>
- fix(icons): add single icon's js file, rename icon from SubScript to Subscript by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3868>
- fix(grid): fix insert row can't change to edit mode by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3876>
- fix(saas): increase the demonstration function of screens of different sizes in the training field by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3880>
- fix(vite.config): remove unused saas.html input from Rollup configuration by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3885>
- fix(grid): fix grid prop editConfig is null by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3887>
- fix(file-upload): Delete extra spaces in the copywriting of the uploaded file. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3888>
- fix(tabs): Fixed the display exception when deleting tabs in the mobile-first vue2 environment. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3886>
- fix(svg): compatible with the original icon behavior. by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3891>
- fix(grid): fix columnIndex error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3890>
- fix(grid): fix data not update and optimize insert and remove by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3892>
- fix(icons): remove error fill=none for new specification icon by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3894>
- fix(icons): add the third batch of icon-saas icons. by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3889>
- fix(icon): add rename icon-- writeProductioPlan by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3895>
- fix(popover): fix the clickoutside bug in the pop-up component by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3899>
- fix(select): add some aria-\* props for ai by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3875>
- fix(chart): Hide Baidu Maps and Amap from the document and Repair the chart document by @Davont in <https://github.com/opentiny/tiny-vue/pull/3867>
- fix(grid): add border-top when set border is true by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3896>
- fix: fixed a build error in saas-common. by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3901>
- fix(saas-icon): add a renamed icon for saas-icon by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3903>
- fix(grid): fix visible columns change wloud delete insert row by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3897>
- fix(split): add saas style by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3908>
- fix(e2e): fix e2e error caused by select refactor by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3905>
- fix: optimize the training ground by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3911>
- fix(transfer): fix it works when item data receive empty object by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3912>
- fix(dropdown): add aria information to the dropdown component by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3913>
- fix(modal): 修复 modal 组件在 alert, confirm 的弹窗场景下标题图标没有垂直局中的问题 by @gausszhou in <https://github.com/opentiny/tiny-vue/pull/3917>
- fix(tabs): fixed the tab content cannot be loaded. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3920>
- fix(grid): fix insert rowIndex error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3916>
- fix(dropdown): Fix the background color of the drop-down menu icon. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3923>
- fix(select): fix the dropdown panel width cannot follow the input width by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3925>
- fix(date-picker): The time selection is abnormal when the timestamp is used. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3927>
- fix(file-upload): The upload prompt contains spaces. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3928>
- fix(grid): fix grid scroll will rerender all table by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3935>
- fix(select,select-wrapper,grid-select,tree-select,base-select):fix E2E by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3937>
- fix(grid): fix loadData resolve timing by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3940>
- fix(select,tree-menu):fix E2E by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3939>
- fix(tree):fix e2e by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3942>
- fix(transfer,time-picker):fix E2E by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3944>
- fix(theme-saas): add a token named bg-color-9 by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3943>
- fix(FormItem): 修复 FormItem 不在 Form 中使用报错的问题(#3947) by @neostfox in <https://github.com/opentiny/tiny-vue/pull/3948>

### Other Changes

- docs: add ask deepwiki in README by @kagol in <https://github.com/opentiny/tiny-vue/pull/3812>
- docs(color-picker): change 'enable alpha selection' to 'support alpha… by @IKEYCY in <https://github.com/opentiny/tiny-vue/pull/3819>
- docs: add introduce doc by @kagol in <https://github.com/opentiny/tiny-vue/pull/3829>
- ci: split deploy-obs to build and deploy by @kagol in <https://github.com/opentiny/tiny-vue/pull/3893>
- docs: update introduce doc by @kagol in <https://github.com/opentiny/tiny-vue/pull/3914>

## New Contributors

- @IKEYCY made their first contribution in <https://github.com/opentiny/tiny-vue/pull/3806>
- @neostfox made their first contribution in <https://github.com/opentiny/tiny-vue/pull/3948>

## v3.27.0/v2.27.0

`2025/11/07`

## What's Changed

### Exciting New Features 🎉

- feat(date-picker ):adds footer slot by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3710>
- feat(calendar-view): The date can be specified to a day. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3719>
- feat(select): add autoSelect props by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3725>
- feat(steps): Add a single chain circular node icon slot API by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3732>
- feat(date-picker): supports line feed display. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3735>
- feat(exception): Add pc templates, document examples, and dark mode support by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3736>
- feat(guide): [guide] whether to display the mask layer when adding the guide component by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3743>
- feat: [tree-menu] change the demo data of tree menu by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3752>
- feat(grid): add valid-config add highlightError by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3751>
- feat(tree-menu): [tree-menu] provide tree-menu search events by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3729>
- feat(color-select-panel): linear-gradient by @GaoNeng-wWw in <https://github.com/opentiny/tiny-vue/pull/3738>
- feat(color-select): `color-mode` prop support by @GaoNeng-wWw in <https://github.com/opentiny/tiny-vue/pull/3763>
- feat(grid): add mouse hover show align lines by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3768>
- feat: add space component by @ynnnny in <https://github.com/opentiny/tiny-vue/pull/3783>
- feat(query-builder): add attribute values and add demo by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3784>
- feat(ip-address): modify Saas theme style by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3790>
- feat: add the hideSaas attribute to hide the demo and related properties by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3788>
- feat: Added the GitHub Pages SaaS build script by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3797>
- feat: update 3.27.0 version by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3798>
- feat(menus): add meta information for 'Space' menu item with stable version 3.27.0 by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3803>

### Bug Fixes 🐛

- fix(tag): Fix the issue where the tag on the mobile-first can be selected but does not take effect by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3688>
- fix(site): fix the package version number for tiny-remoter by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3692>
- fix(notify): Fix the vertical offset issue of the notify component by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3689>
- fix(tabs): Fix the issue of using both overflow-title and with-close simultaneously by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3709>
- fix(grid): fix filterStore.searchValue is not reactive by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3700>
- fix(select): repairing searchable, when frequent setSelected interrupts the search by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3699>
- fix(tabs): Optimize the rendering logic of multi terminal tabs by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3707>
- fix(slider): Fix the issue of horizontal and vertical mode conversion by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3696>
- fix(calendar-view): Multiple tasks display abnormally in the same time period by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3697>
- fix(form-item): The mobile disabled status is not obvious in saas mode by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3698>
- fix: fix the issue of missing the tiny prefix in CSS after packaging by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3695>
- fix: resolve the issue of button size not expanding with text by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3717>
- fix(tabs): Supplement SaaS modifications by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3726>
- fix: resolve the issue of token style in the example by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3730>
- fix(grid): fix grid loading-component error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3734>
- fix(auto-tip): determine boundingValue.content whether it is incoming and the priority of incoming is higher by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3740>
- fix(input): add debounce for api.resizeTextarea method by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3744>
- fix(grid): fix body height error after change pager size by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3753>
- fix(user): fix user for lost autoSelect prop define by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3741>
- fix: [infinite-scroll] resolve the issue of two InfiniteScroll components reporting errors on the same page by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3742>
- fix: [tree-menu] fix the issue of icons not being referenced by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3754>
- fix(vue-popup): fix v-modal animation is not working by @gausszhou in <https://github.com/opentiny/tiny-vue/pull/3701>
- fix(exception): Add the less file in SaaS mode by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3760>
- fix(user): fix padding change lead to shake on hover by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3764>
- fix(select): only when in the mf template, check the screen's breakpoint by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3766>
- fix: the error issue where the service cannot obtain information by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3780>
- fix(picker): add popperOptions props for Picker by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3769>
- fix(button): in theme-saas package, remove the button's max-width by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3765>
- fix(grid): gird simple custom config remove tooltip by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3770>
- fix(file-upload): fix file upload size limit and the vue2 date-panel example by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3777>
- fix(radio): modify the demo by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3774>
- fix(dialog-box): add before-close prop and event's doc by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3775>
- fix(divider): modify the SAAS theme style by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3772>
- fix(radio): change font size by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3781>
- fix(select): remove displayOnlyContent in slot-reference by @KevinAndrewDong in <https://github.com/opentiny/tiny-vue/pull/3779>
- fix(drawer): Fixed the problem that the table component in the drawer component cannot be displayed normally in full screen by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3782>
- fix(badge): modify the saas theme style by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3776>
- fix(dropdown):Manually controlled explicit and implicit compatibility problem by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3785>
- fix(switch): modify the saas theme style by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3773>
- fix(query-builder): update TinyButton import in RuleGroup component by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3794>
- fix(dialog-select): [dialog-select] modify e2e test by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3793>
- fix(input,notify):fix e2e by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3795>
- fix(drawer): modify the saas style by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3792>
- fix(crop): modify the saas theme style by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3791>
- fix: Fixed an error issue during the release of gitActionsalpha. by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3799>
- fix(numeric): numeric modelValue type should not include underfined by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3800>
- fix(load-list): add space after title in load-list.en.md to fix jekyl… by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3804>

## New Contributors

- @gausszhou made their first contribution in <https://github.com/opentiny/tiny-vue/pull/3701>
- @ynnnny made their first contribution in <https://github.com/opentiny/tiny-vue/pull/3653>

## v3.26.0/v2.26.0

`2025/09/15`

## What's Changed

### Exciting New Features 🎉

- feat(steps): Add wizard style step bar itemStyle differentiated configuration by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3594>
- feat(color-picker): refactoring the ColorPicker component style by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3595>
- feat: modify the resource file loading mode and add postcss plugin configuration. by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3615>
- feat(site): connect next-sdk and ai dialog box to realize dynamic switching routing function of large models by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3619>
- feat(grid): saas theme add filter select style by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3626>
- feat(grid): add cascader full width grid by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3627>
- feat(button): add a list of theme tokens to the component documentation by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3631>
- feat(silder-button): add displayed attribute by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3639>
- feat: Add table configuration slot example usage by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3649>
- feat(cascader): Add the tooltip function for cascading panels by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3665>
- feat(search): Add mini search box expansion and retraction hook callback API by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3664>
- feat(tabs): add header-only by @liangguanhui0117 in <https://github.com/opentiny/tiny-vue/pull/3638>

### Bug Fixes 🐛

- fix(dropdown):Fix the drop-down component menu spacing. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3586>
- fix: adapt mf list view when has not grid column by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3593>
- fix(select):Fix default multi-select tags color by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3591>
- fix(calendar-view):fix calendar view height setting does not take effect by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3592>
- fix: hot and new icon fill cannot transparent transmission by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3599>
- fix(modal): [modal] modify the messageClosable in Vue2 version to not display the close button by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3600>
- fix: internationalization-related modifications, temporarily hide the entry point by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3597>
- fix(tabs): Optimize multi terminal caching logic, add add add delete operations to trigger sub component destruction and reconstruction logic by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3601>
- fix(grid): Modify the spacing between the sorting buttons in saas mode. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3603>
- fix(grid): grid promise validate return value back to undefined by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3616>
- fix(grid,pager,cascader):Fixed the icon reference issue in the SaaS mode table. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3618>
- fix(grid): optimize render count by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3613>
- fix(dropdown): modify the responsive adaptation of the drop-down arrow in the mobile first template by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3614>
- fix(chart): fix chart bug, resolve memory leakage issues by @Davont in <https://github.com/opentiny/tiny-vue/pull/3610>
- fix(input):fix textarea height in saas model by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3608>
- fix(site): add MCP tools for query examples and jump examples by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3623>
- fix(PropType): fix import of PropType by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3620>
- fix(input): add pre=true for tiny-tooltip by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3625>
- fix(input):fix textarea height in Multiple line placeholders by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3624>
- fix(grid): fix index not update at drag row by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3622>
- fix(dropdown):Modifying the Default font size by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3629>
- fix(button):fix button padding in saas model by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3630>
- fix(lang): fix to be compatible with aui by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3628>
- fix(pager): fix pager init current page error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3640>
- fix(user): an error event is triggered if the user does not exist by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3641>
- fix(grid): grid can not validate on active by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3643>
- fix(grid): fix scroll bar error after load data by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3644>
- fix(file-upload):Unified button text document by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3647>
- fix(tag): restores the default color of the tag to blue by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3646>
- fix(popover): increase the priority of arrow class names by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3645>
- fix(grid): fix target error in shadow dom by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3651>
- fix(tabs): Fix the problem sheet and ensure that the dividing line is fully supported by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3663>
- fix(grid): fix operation buttons render error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3660>
- fix(tabs): Fix component font size to adapt to new specifications by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3662>
- fix(file-upload): Fix the issue of accept failure when using EDM by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3661>
- fix(popeditor): fix issue #2652 by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3656>
- fix(fluent-editor): Fix click issues with rich text components in Edge browser by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3655>
- fix(grid): fix user passed scrollY value is null by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3658>
- fix(modal): fix issue #3450 by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3650>
- fix(tabs): Fix the issue where multiple clicks on mobile-first tabs do not take effect by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3669>
- fix(pop-upload): Fix uploadTip slot error issue by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3668>
- fix(select): Add tooltip prompts by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3671>
- fix(grid): fix use title function text can not overflow ellipsis by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3670>
- fix(loading): Fix e2e error issue by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3674>
- fix(grid): fix rowspan border can not visible by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3673>
- fix(amount): Fix the issue of inconsistent currency input and display in the table by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3672>
- fix(grid): fix has footer last row border duplicate by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3678>
- fix(select): Fix the issue with the option two-layer prompts by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3680>
- fix(popeditor): fix popeditor's e2e by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3683>
- fix(vue): batch update version to 3.26 by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3684>
- fix(e2e): fix amount's e2e test by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3685>
- fix(build): fix themeSaas build errors, add LESS compilation and error handling, update gulp tasks to enhance readability and debug information by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3687>

### Other Changes

- refactor(site): use next-sdk and next-remoter to intelligentize the official website. by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3657>

## New Contributors

- @liangguanhui0117 made their first contribution in <https://github.com/opentiny/tiny-vue/pull/3638>

**Full Changelog**: <https://github.com/opentiny/tiny-vue/compare/v3.25.0...v3.26.0>
