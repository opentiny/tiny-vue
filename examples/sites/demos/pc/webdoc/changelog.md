# 更新日志

Tiny Vue 团队在正常情况下使用 每月 发布策略。

在此页面上，您只能看到我们的 更新日志 最新三个迭代的日志记录，如您要查看完整记录可以查看：[Release](https://github.com/opentiny/tiny-vue/releases)

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

## v3.25.0/v2.25.0

`2025/07/15`

## What's Changed

### Exciting New Features 🎉

- feat: add svgs by @kagol in <https://github.com/opentiny/tiny-vue/pull/3522>
- feat(grid): edit-config add blurOutside by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3521>
- feat(calendar-view): [calendar-view]add attributes by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3525>
- feat(grid): add expand trigger slot by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3518>
- feat(common): use the hotspot function provided by the ArkWeb JS engine to optimize the execution of defineProperties function in the common adaptation layer by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3530>
- feat(button): [button] add custom-style attribute by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3535>
- feat: add new hot svg by @kagol in <https://github.com/opentiny/tiny-vue/pull/3562>
- feat(grid): add filter root attrs by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3565>
- feat(grid): add tree-node button bubbling setting by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3570>

### Bug Fixes 🐛

- fix(input):Fix the saas theme by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3499>
- fix(date-picker):fix timezone format by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3503>
- fix(tag): tag remove inline-block by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3506>
- fix(modal): add icon status style by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3504>
- fix(loading): fix loading occur error when change frequently by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3513>
- fix(grid): Limit the size attribute value of the paging component to 'mini' or an empty string to prevent warnings by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3516>
- fix(anchor): fix anchor roll back issue by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3519>
- fix(theme-saas): refresh theme-saas tailwind token by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3523>
- fix(grid): fix custom setting style error at mobile-first by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3524>
- fix(grid): Fix the table css in saas mode. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3520>
- fix(grid): fix bug after refactor by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3527>
- fix(file-upload): Fix the issue of uploading components with an empty accept error by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3529>
- fix(grid): fix grid scroll to bottom error when only set max-height by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3531>
- fix(grid): Fix the table css in saas mode by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3532>
- fix(grid): fix resize bar cover by header by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3536>
- fix(cascader): fix When using slots in cascader-panel, the mf template will error by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3537>
- fix(grid): fix drag error when tbody not render by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3538>
- fix(grid): fix scroll to bottom header not visible by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3539>
- fix(tag): resolve the issue of style deviation when tag components have null values under the SaaS theme by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3540>
- fix(grid): fix data undefined in mobile-first by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3541>
- fix(grid): fix tree table children edit revert error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3542>
- fix: adapt to tree children use splice to add row by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3543>
- fix(examples/sites/demos/apis): 修复 issue #3030 中提到的图表配置项拼写错误 by @Lingchen111 in <https://github.com/opentiny/tiny-vue/pull/3547>
- fix(carousel): hide touch screen slideshow demo by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3545>
- fix(grid): fix document does not have getAttribute error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3548>
- fix(input): fix the problem of one more redraw caused by the immediate parameter by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3544>
- fix(grid): fix cell click event error on edit mode by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3549>
- fix(grid): fix popper edit element blur when set edit-config blurOutside by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3550>
- fix(autocomplete,search,base-select,cascader,date-panel, date-range,date-picker,dropdown,input,select,tree): The component under the shadowRoot node event is invalid. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3546>
- fix(modal\notify): modifying the Color of the Information Icon in the SaaS File by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3552>
- fix(vue-common): [icon]resolves the loading icon after multiple calls to render function nesting levels by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3554>
- fix(autocomplete): add title native attributes by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3555>
- fix(grid): fix grid header divider error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3558>
- fix(tree-menu): adjusting the input box of the tree menu component can clear the symbol position by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3561>
- fix(grid): fix dirty flag not clear after refreshData by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3560>
- fix: fix login typo by @kagol in <https://github.com/opentiny/tiny-vue/pull/3564>
- fix(grid): clear input value after click custom extend item by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3563>
- fix(pager): fix init pager-size error when not match page-sizes by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3566>
- fix(grid): fix right position error when resize multi header grid by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3569>
- fix(milestone):fix the milestone color matching logic is in saas mode. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3568>
- fix(auto-tip): fixed the bug that a message is displayed on the page when the element displayed in the tooltip needs to be removed and uninstalled. by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3574>
- fix(tag): When the tag is a space, the tag is misplaced in the form scenario by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3572>
- fix(grid):fix filter icon size in saas mode by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3576>
- fix(input):fix the textarea height in single row by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3573>
- fix(theme): fix dark theme in shadow dom by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3579>
- fix(grid): add grid radio class name by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3578>
- fix(select): update select's e2e test for grid update by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3577>
- fix(input):fix single row textarea in saas mode by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3580>
- fix(base-select): fix e2e test case error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3581>
- fix(color-select-panel): 颜色类型选择下拉框样式异常 by @vaebe in <https://github.com/opentiny/tiny-vue/pull/3575>
- fix(date-picker):date-range should return an empty array when click clear button by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3582>
- fix(select): fix select's e2e by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3584>

### Other Changes

- refactor: optimize table performance and refactor the table by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3514>

## New Contributors

- @Lingchen111 made their first contribution in <https://github.com/opentiny/tiny-vue/pull/3547>
