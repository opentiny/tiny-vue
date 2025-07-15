# Changelog

The Tiny Vue team uses a monthly release strategy under normal circumstances.

On this page, you can only see the log records of the latest three iterations of our changelog. If you want to see the full record, you can view: [Release](https://github.com/opentiny/tiny-vue/releases)

## v3.25.0/v2.25.0

`2025/07/15`

## What's Changed

### Exciting New Features 🎉

- feat: add svgs by @kagol in https://github.com/opentiny/tiny-vue/pull/3522
- feat(grid): edit-config add blurOutside by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3521
- feat(calendar-view): [calendar-view]add attributes by @James-9696 in https://github.com/opentiny/tiny-vue/pull/3525
- feat(grid): add expand trigger slot by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3518
- feat(common): use the hotspot function provided by the ArkWeb JS engine to optimize the execution of defineProperties function in the common adaptation layer by @zzcr in https://github.com/opentiny/tiny-vue/pull/3530
- feat(button): [button] add custom-style attribute by @James-9696 in https://github.com/opentiny/tiny-vue/pull/3535
- feat: add new hot svg by @kagol in https://github.com/opentiny/tiny-vue/pull/3562
- feat(grid): add filter root attrs by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3565
- feat(grid): add tree-node button bubbling setting by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3570

### Bug Fixes 🐛

- fix(input):Fix the saas theme by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3499
- fix(date-picker):fix timezone format by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3503
- fix(tag): tag remove inline-block by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3506
- fix(modal): add icon status style by @James-9696 in https://github.com/opentiny/tiny-vue/pull/3504
- fix(loading): fix loading occur error when change frequently by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3513
- fix(grid): Limit the size attribute value of the paging component to 'mini' or an empty string to prevent warnings by @zzcr in https://github.com/opentiny/tiny-vue/pull/3516
- fix(anchor): fix anchor roll back issue by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/3519
- fix(theme-saas): refresh theme-saas tailwind token by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3523
- fix(grid): fix custom setting style error at mobile-first by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3524
- fix(grid): Fix the table css in saas mode. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3520
- fix(grid): fix bug after refactor by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3527
- fix(file-upload): Fix the issue of uploading components with an empty accept error by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/3529
- fix(grid): fix grid scroll to bottom error when only set max-height by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3531
- fix(grid): Fix the table css in saas mode by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3532
- fix(grid): fix resize bar cover by header by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3536
- fix(cascader): fix When using slots in cascader-panel, the mf template will error by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3537
- fix(grid): fix drag error when tbody not render by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3538
- fix(grid): fix scroll to bottom header not visible by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3539
- fix(tag): resolve the issue of style deviation when tag components have null values under the SaaS theme by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/3540
- fix(grid): fix data undefined in mobile-first by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3541
- fix(grid): fix tree table children edit revert error by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3542
- fix: adapt to tree children use splice to add row by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3543
- fix(examples/sites/demos/apis): 修复 issue #3030 中提到的图表配置项拼写错误 by @Lingchen111 in https://github.com/opentiny/tiny-vue/pull/3547
- fix(carousel): hide touch screen slideshow demo by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/3545
- fix(grid): fix document does not have getAttribute error by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3548
- fix(input): fix the problem of one more redraw caused by the immediate parameter by @zzcr in https://github.com/opentiny/tiny-vue/pull/3544
- fix(grid): fix cell click event error on edit mode by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3549
- fix(grid): fix popper edit element blur when set edit-config blurOutside by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3550
- fix(autocomplete,search,base-select,cascader,date-panel, date-range,date-picker,dropdown,input,select,tree): The component under the shadowRoot node event is invalid. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3546
- fix(modal\notify): modifying the Color of the Information Icon in the SaaS File by @James-9696 in https://github.com/opentiny/tiny-vue/pull/3552
- fix(vue-common): [icon]resolves the loading icon after multiple calls to render function nesting levels by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3554
- fix(autocomplete): add title native attributes by @James-9696 in https://github.com/opentiny/tiny-vue/pull/3555
- fix(grid): fix grid header divider error by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3558
- fix(tree-menu): adjusting the input box of the tree menu component can clear the symbol position by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/3561
- fix(grid): fix dirty flag not clear after refreshData by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3560
- fix: fix login typo by @kagol in https://github.com/opentiny/tiny-vue/pull/3564
- fix(grid): clear input value after click custom extend item by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3563
- fix(pager): fix init pager-size error when not match page-sizes by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3566
- fix(grid): fix right position error when resize multi header grid by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3569
- fix(milestone):fix the milestone color matching logic is in saas mode. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3568
- fix(auto-tip): fixed the bug that a message is displayed on the page when the element displayed in the tooltip needs to be removed and uninstalled. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3574
- fix(tag): When the tag is a space, the tag is misplaced in the form scenario by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3572
- fix(grid):fix filter icon size in saas mode by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3576
- fix(input):fix the textarea height in single row by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3573
- fix(theme): fix dark theme in shadow dom by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3579
- fix(grid): add grid radio class name by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3578
- fix(select): update select's e2e test for grid update by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3577
- fix(input):fix single row textarea in saas mode by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3580
- fix(base-select): fix e2e test case error by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3581
- fix(color-select-panel): 颜色类型选择下拉框样式异常 by @vaebe in https://github.com/opentiny/tiny-vue/pull/3575
- fix(date-picker):date-range should return an empty array when click clear button by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3582
- fix(select): fix select's e2e by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3584

### Other Changes

- refactor: optimize table performance and refactor the table by @zzcr in https://github.com/opentiny/tiny-vue/pull/3514

## New Contributors

- @Lingchen111 made their first contribution in https://github.com/opentiny/tiny-vue/pull/3547

## v3.24.0/v2.24.0

`2025/06/12`

## What's Changed

### Exciting New Features 🎉

- feat(pager): reconstruct the multi-terminal template of the pager component from the vue template by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3422>
- feat(steps): Add style functionality for multi terminal custom step blocks by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3435>
- feat(dialog-select): add support for clear and delete events, update related documents and sample codes by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3437>
- feat(qr-code): Add the necessary attributes to the responsive by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3456>
- feat(common): add support for MCP configuration in component setup by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3469>
- feat(site): add the tiny-robot drawer to the official website. by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3467>
- feat(dialog-select): [dialog-select] add attribute lock-scroll by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3489>
- feat(popeditor): [popeditor] add attribute lock-scroll by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3490>
- feat(grid): optimize mcp configuration usage and sample code by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3494>

### Bug Fixes 🐛

- fix(file-upload): Fix bug in file-upload component where multiple selections are merge-service and uploaded by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3424>
- fix(steps): Modify the multi terminal rendering logic and style of steps by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3441>
- fix(drowdown): add tiny-\* className to drowdown-menu's wrapper dom by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3445>
- fix(select): fix can not set grid rowId in select by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3448>
- fix(tree-menu): change the color of the dark mode icon by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3457>
- fix(tiny-split):The panel split animation is not displayed properly by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3452>
- fix(search): Fix the margin issue of multi terminal mode dropdown type by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3453>
- fix(icon):Fixed the icon color issue in dark mode by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3460>
- fix(autocomplete): autocomplete component defaults to 100% of the width by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3462>
- fix(tag): theme saas warning token value refresh, tag component style specification refresh by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3463>
- fix(form): fix the textarea style issue under the form by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3468>
- fix(select): fix the malfunction of the select component when automatically pulling down focus by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3464>
- fix(robot): add the role message markdown and upgrade the tiny-robot version by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3471>
- fix(basic-usage): update SSE URL to use HTTPS for secure connection by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3472>
- fix(date-picker):fix the init panel width and month name by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3466>
- fix: the issue of modifying line breaks for display by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3470>
- fix(grid): increase the length of drag and drop lines in the grid and remove empty values when filtering by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3475>
- fix(robot): add examples of Perfecting AI Agents by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3476>
- fix(dialog):fix dialog title line-height by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3477>
- fix(icon):delete the iconPushPinSolid default color by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3479>
- fix(calendar-view):fix the E2E test by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3483>
- fix(robot): optimized the example and added sessions and UI adjustment. by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3484>
- fix(robot): add the API tab of the MCP and adjust the display control of the robot. by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3485>
- fix(package): update @opentiny/tiny-vue-mcp version to 0.0.1-alpha.1 by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3487>
- fix(robot): message processing of the robot is optimized. by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3491>
- fix(select): modify the DOM structure of all options in the select to be consistent with that of the regular options to solve the text alignment issue by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3488>
- fix(grid): add a border to the last row of the grid under the saas theme by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3492>

## New Contributors

- @afkdsghk211331 made their first contribution in <https://github.com/opentiny/tiny-vue/pull/3447>

## v2.23.0/v3.23.0

`2025/05/21`

## What's Changed

### Exciting New Features 🎉

- feat(number-animation): Add NumberAnimation component by @lcy0620 in <https://github.com/opentiny/tiny-vue/pull/3301>
- feat(design-config): design-config adds arbitrary attribute features of global configuration components by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3419>
- feat(config-provider): config-provider adds theme configuration function by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3353>
- feat(release): add vue3 version option to release:aurora command and update related logic by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3280>
- feat(calendar-view):[calendar-view]The calendar view tip time support configure by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3274>
- feat:[calendar-view]The calendar view supports click events by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3279>
- feat(popconfirm): [popconfirm] enable message slot by @betavs in <https://github.com/opentiny/tiny-vue/pull/3176>
- feat(transfer): [transfer] adds the ability to customize the panel width for the transfer component by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3285>
- feat(date-picker):[date-picker]The first selected date will be displayed in the output box. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3300>
- feat(card-group): modify saas style by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3305>
- feat(card-group): modify sass style by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3310>
- feat(vue-hooks): add type annotations to multiple files to enhance type safety by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3302>
- feat: [tabs] Add left button for mobile-first mode by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3317>
- feat: [form] add type definitions to utils to enhance type safety by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3322>
- feat: Add utils test commands and add utils package change check in CI by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3327>
- feat: [input]update E2E test workflow to automatically detect changed components by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3331>
- feat(grid): the renderer configuration of the table supports events event collections by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3342>
- feat(flowchart): add automatic prompt instructions so that prompt pop-ups will appear when necessary by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3360>
- feat(flowchart): Add the property configuration to display the hand-shaped mouse function by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3366>
- feat(dialog-select): supports transparent transmission of selectAll, selectChange and radioChange events by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3398>
- feat(calendar-view):The schedule mode support hidden the time by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3405>
- feat(calendar-view):Mobile-first supports the hidden time in schedule mode. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3408>
- feat(modal): change the text size from md to default by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3412>

### Bug Fixes 🐛

- fix: [file-upload] Fix font style issue in file list by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3266>
- fix(grid): [grid] resolve the issue of empty icon by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3269>
- fix:[time-picker] fix e2e test by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3272>
- fix(collapse): adjust the padding style within the mobile-first component to optimize the visual effect by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3267>
- fix(grid): [grid] fix viewType change table column width error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3273>
- fix(transfer): [transfer] fixed a bug in the tree mode of transfer by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3277>
- fix(input): [input] fix input text word no break after warp span by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3281>
- fix: [file-upload] Optimize the position of mobile icons by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3278>
- fix(grid): [grid] fix modal not import by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3283>
- fix(card-group): [card-group] add empty icon by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3299>
- fix(grid): [grid] fix not import error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3306>
- fix(tree): [tree] elevate the priority #3119 by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3284>
- fix(date-picker):[date-picker]Fix partially disabled in the same year year not selectable by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3307>
- fix:[docs]Hide the plus document drill field button by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3309>
- fix: modifying the tree-menu component document #3069 by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3314>
- fix(button): fixed the border color and text color of the multi-ended button disabled button by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3311>
- fix: modifying the steps component document #3076 by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3312>
- fix: [file-upload] Fix the bug of uncontrollable file name length in SaaS mode and mobile first mode by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3318>
- fix(picker): range-picker add tabindex by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3313>
- fix: modifying the tag component document #3074 by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3315>
- fix(from-item): fixed the problem that there would be an extra space in template compilation under vue2 by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3316>
- fix(tag): fix tag component multi-terminal template running error by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3320>
- fix: [fluent-editor] Fix the issue where tables can still be edited when disabled by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3297>
- fix(form): fix form-item margin bottom by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3319>
- fix: fix textarea displayOnly word break by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3330>
- fix(numeric): in the mobilefirst of the numeric component, the default width is set to fill the available space by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3326>
- fix(autocomplete): [autocomplete] fix dispatch form-item validate error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3329>
- fix(grid): [grid]Fixed the problem of invalid event monitoring for configuration table selection by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3328>
- fix(numeric): [numeric] fixed the issue that numberic reported an error when processing scientific notation with BigInt syntax by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3325>
- fix(tree-select): [base-select, tree-select] fix deleteTag not working by @kagol in <https://github.com/opentiny/tiny-vue/pull/3332>
- fix(picker): [date-picker]enhance the compatibility of the date picker on mobile and PC, add isPCMode parameter to control the display logic by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3336>
- fix(form): fix small size form validation position by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3334>
- fix(grid): [grid] fix input no cursor when dropConfig set filter by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3343>
- fix(grid): [grid] fix grid overflow-scroll when browser scale by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3341>
- fix(grid): [grid] fix grid not visible at custom apply by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3339>
- fix(transfer): fix the default selection does not checked in the tree component under Vue 2 by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3344>
- fix(examples): 修正 autocomplete 案例标题 size 值与示例文字不符，容易误导用户。 by @sakurajiajia in <https://github.com/opentiny/tiny-vue/pull/3351>
- fix(grid,dropdown,select, pager,tooltip):fix the saas theme by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3347>
- fix(grid): fix date-picker input style error in filter panel by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3346>
- fix(utils): fix tooltip arrow safe padding by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3354>
- fix(grid,tooltip,select,tag):Fix saas theme by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3358>
- fix(flowchart): The hand mouse is not displayed when the component node is unavailable, and the error reporting problem of flowchart drill field is fixed by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3356>
- fix: fix tsconfig paths not working by @kagol in <https://github.com/opentiny/tiny-vue/pull/3362>
- fix(tooltip,grid):Fix the saas theme by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3361>
- fix: [grid] Add a scroll bar at the bottom of the SaaS theme table to be placed inside the table, with only one border at the bottom by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3365>
- fix(input): [input] modify the border issue of the input component under the saas theme by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3367>
- fix(grid): [grid] modify the size of the grid component header icon under the saas theme by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3370>
- fix(time-spinner): [time-spinner] fix startDate & endDate prop type issue when isRan… by @Darkingtail in <https://github.com/opentiny/tiny-vue/pull/3296>
- fix: [image] Fixed the bug of previewing large blank images during asynchronous initialization operations by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3371>
- fix(select): remove the binding of dropStyle to the scrollbar by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3381>
- fix: modify the SaaS theme style of the dialog-box window by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3380>
- fix(cascader): Fixes the issue where cascader components use asynchronous data in hover mode, but cannot accurately locate the selected item when binding value updates by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3374>
- fix(input): Modify the color of the placeholder in the bottom right corner of the input component textarea type in the SaaS theme by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3375>
- fix: fixed the problem that fullscreen style would pollute the global by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3379>
- fix: Fixed the issue of misalignment between the clear and search buttons for four different sizes in mobile first mode of the search component by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3378>
- fix(utils): fix popper flip error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3386>
- fix: Fix the title line height of mobile first steps by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3385>
- fix(dropdown,tooltip):Fix the saas theme by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3384>
- fix(textarea): Update the background color and related styles of the counter by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3387>
- fix(number-animation): add version information for the number animation component and fix the loading error problem under the SaaS theme by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3390>
- fix(date-picker):Fix the default time zone is not displayed by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3389>
- fix(theme-saas): add margin-bottom:4px for select-dropdown flip to top by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3388>
- fix(file-upload): Modify the import method of e2e test case path for file-upload component by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3393>
- fix(pop-upload): Change the pop-upload e2e test case to ES6 import mode by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3395>
- fix(site): rewrite the theme of code highlight by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3397>
- fix(site): use purple for attr's color by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3406>
- fix(grid):Fix the table bottom border display exception. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3402>
- fix(steps): Modify the rendering logic of the steps component based on the design draft by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3399>
- fix(upload): add the "relative" style to the root node of "upload" by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3409>
- fix(popper): [tooltip,popover] enhance the isScrollElement function to add judgment on element type and scroll bar by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3411>
- fix(popeditor): add three slot to popeditor by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3416>
- fix(export): handle special values ​​in CSV export, ensure null, undefined and NaN are displayed correctly by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3418>
- fix: fix grid width error when grid has scrollbar by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3421>
- fix(tooltip): fix tooltip's box-shadow and invalid text of form-item's style by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3420>
- fix(vue-common): compatible with camel case format and mutton string format of transferred attributes, optimized attribute overwriting logic by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3427>
- fix(date-picker):Fix the e2e test by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3430>
- fix(popeditor): fix popeditor can not set grid props by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3431>

### Other Changes

- docs: add hu-qi as a contributor for doc by @allcontributors in <https://github.com/opentiny/tiny-vue/pull/3287>
- docs: add tsinghua-lau as a contributor for doc by @allcontributors in <https://github.com/opentiny/tiny-vue/pull/3288>
- docs: add Darkingtail as a contributor for doc by @allcontributors in <https://github.com/opentiny/tiny-vue/pull/3290>
- docs: add hashiqi12138 as a contributor for bug by @allcontributors in <https://github.com/opentiny/tiny-vue/pull/3291>
- docs: add discreted66 as a contributor for code by @allcontributors in <https://github.com/opentiny/tiny-vue/pull/3292>
- docs: add lcy0620 as a contributor for code by @allcontributors in <https://github.com/opentiny/tiny-vue/pull/3293>
- docs: [anchor] Add offsetTop API documentation and optimize example documentation by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3298>
- docs: add changelog v3.22.0 by @kagol in <https://github.com/opentiny/tiny-vue/pull/3303>
- docs: update runtime usage documentation to avoid misleading user by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3368>
- docs: added configuration examples to improve all TinyVue related dependencies to solve the problem that pnpm projects need to install multiple sub-packages by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3377>
- docs: add sakurajiajia as a contributor for doc by @allcontributors in <https://github.com/opentiny/tiny-vue/pull/3400>
- docs: add 552847957 as a contributor for doc by @allcontributors in <https://github.com/opentiny/tiny-vue/pull/3401>

## New Contributors

- @sakurajiajia made their first contribution in <https://github.com/opentiny/tiny-vue/pull/3351>
- @552847957 made their first contribution in <https://github.com/opentiny/tiny-vue/pull/3352>
