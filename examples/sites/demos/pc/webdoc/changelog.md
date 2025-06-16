# 更新日志

Tiny Vue 团队在正常情况下使用 每月 发布策略。

在此页面上，您只能看到我们的 更新日志 最新三个迭代的日志记录，如您要查看完整记录可以查看：[Release](https://github.com/opentiny/tiny-vue/releases)

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
- fix(examples): 修正autocomplete案例标题size值与示例文字不符，容易误导用户。 by @sakurajiajia in <https://github.com/opentiny/tiny-vue/pull/3351>
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

## v2.22.0/v3.22.0

`2025/04/07`

## What's Changed

### Exciting New Features 🎉

- feat: Support dark theme🎉 [#2946](https://github.com/opentiny/tiny-vue/pull/2946) [#2948](https://github.com/opentiny/tiny-vue/pull/2948) [#2951](https://github.com/opentiny/tiny-vue/pull/2951) and so on.
- feat(mobile): optimize the mobile common package name and import path and improve xss dependency by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2777>
- feat: go through the mobile packaging build and release process and fix the bugs found during the build and release by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2780>
- feat(theme-mobile): optimize the theme-mobile project css variable names and add undefined css variables by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2782>
- feat(pager): [pager] add change-compat to control whether trigger cha… by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2783>
- feat: add license to mobile components by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2802>
- feat(dropdown): [dropdown] add visible attribute to support user-defined panel display. by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/2774>
- feat(tree-menu): [tree-menu] Add static data and unused topic variables for rectification by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/2803>
- feat: add next/cloud-icons project by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2821>
- feat(theme-mobile): [button] Adjust the theme of mobile by @MomoPoppy in <https://github.com/opentiny/tiny-vue/pull/2820>
- feat(vue/image): [image]the image component supports binary stream base64 format by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2829>
- feat(date-panel): [date-panel,date-picker] DatePicker support using only date panel by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/2818>
- feat(modal): [modal] add show-close feature by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/2840>
- feat(image): [image] The image component supports base64 in svg format by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2858>
- feat(vue-hooks): add hooks package packaging logic by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2866>
- feat:[date-panel,date-range,date-picker]DatePicker support using only date range panel by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/2869>
- feat(utils): add a whitelist for xss in rich text components by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2879>
- feat:[month-range,year-range,date-panel,date-picker]The DatePanel supports the month/year range panel by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/2875>
- feat(theme): [button] add dark themes, modify other theme variables and component level variables by @MomoPoppy in <https://github.com/opentiny/tiny-vue/pull/2898>
- feat(theme): add tinyDarkTheme for themeTool and add dark-theme router for sites by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2904>
- feat(steps): add content-center prop to steps and add two saas icons by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2907>
- feat(site): the official website adds the function of dynamically switching between light and dark themes by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2911>
- feat(date-panel):[date-picker,date-panel] DatePanel supports the month and year panels by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/2909>
- feat: add huicharts runtime and update docs by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2981>
- feat(progress): [progress] add slot support for custom status icons by @gweesin in <https://github.com/opentiny/tiny-vue/pull/2979>
- feat(tag): [tag] improve close icon interaction by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3006>
- feat(grid): [grid] expose getTreeExpandeds function by @gweesin in <https://github.com/opentiny/tiny-vue/pull/2996>
- feat(grid): [grid] add mobile first empty slot by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3018>
- feat(calendar): [calendar] add year and month specification demo and tests by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3039>
- feat(utils): resolve common function ts error by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/2903>
- feat: Adds variable default value handling in build theme by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3122>
- feat: base var style adapt shadow-root by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3155>
- feat: optimize the dark mode switching method, reduce the size of non-dark theme user packages, and add dark theme switching documents by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3153>
- feat(theme): [select] modify the scrollbar and popper to unify the style by @MomoPoppy in <https://github.com/opentiny/tiny-vue/pull/3160>
- feat: Add default values to theme variables by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3162>
- feat(utils): use cursor to add comments, ts type declarations, and vitest test cases to utils functions by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3138>
- feat(utils): add comments, ts type declarations, and vitest test cases to utils functions by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3154>
- feat: [file-upload] Add file names to restricted prompt texts by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3171>
- feat(theme): [tag] adjust the common variable and adapt the tag component by @MomoPoppy in <https://github.com/opentiny/tiny-vue/pull/3173>
- feat(svg): update svg resource file to adapt dark theme by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3223>
- feat: [skeleton] Add Skeleton mobile first by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3222>
- feat(modal): [modal] enhance TINYModal functionality, add type definition andoption interface by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3247>
- feat(loading): [loading] added type definition and interface of Loading component to optimize loading style processing by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3253>
- feat(message): add Message component type definition and update the type annotation of the installation method by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3252>
- feat(notify): [notify] enhance notification function, add type definition and option interface, optimize code structure by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3251>

### Bug Fixes 🐛

- fix(select): [select] fix the problem that both tooltip and title are displayed when the select command is run in display-only mode. by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2772>
- fix(pager): [pager] fix pager type error by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2801>
- fix: modify the mobile layout and click the example/API. The browser address anchor is not defined, the composition code is hidden, and the home page icon is not found by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/2806>
- fix(e2e): fix all e2e test error by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2811>
- fix(grid): [grid] fix grid error e2e test by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2815>
- fix(vue2): fix vue2 dev startup error by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2822>
- fix(sites): fix the error when installing vue-docs dependencies in pnpm by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2816>
- fix(grid): [grid] fix amount label wrap bug by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2828>
- fix(utils): fixed the issue that the release version of the utils package could not correspond by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2837>
- fix(dialog-select): fixed an issue where grid data could not be loaded when initially visible was set to true by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2835>
- fix(color-picker): [color-picker] fix color-picker props valid error by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2841>
- fix(select): [select] fix component error caused by vue2 deep cleanup memory leak by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2843>
- fix(e2e): [pop-upload, file-upload] Fix e2e test case errors after internationalization by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/2847>
- fix(dialog-box): [dialog-box] right pop-up window height style issue by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/2844>
- fix(grid): [grid] validate successful add return value in promise sense by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2851>
- fix(user): [user] fix the issue of incorrect file names in the demo by @MomoPoppy in <https://github.com/opentiny/tiny-vue/pull/2855>
- fix(load-list): avoid tinyList and tinyTimeLine regisiter twice by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2854>
- fix(alert): move close icon to center by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2856>
- fix(time-line-new): [time-line-new] update timeline-new demos ,to avoid compiled error by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2859>
- fix(dialog-select): [dialog-select] fixed an issue where grid data could not be loaded when initially visible was set to true by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2862>
- fix(utils): delete the renderless/common directory and adjust all reference paths. by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2849>
- fix(vue-directive): unify the functions in vue-hooks into double-layer functions and optimize the infinite-scroll function by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2864>
- fix(vue): modify the correct package dependency by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2865>
- fix(fluent-editor): [fluent-editor] Fixed the bug where the cursor was out of focus when entering line breaks after modifying the font style of the rich text box by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/2880>
- fix(select):[select] fix the focus event is triggered and prevent the panel from failing to collapse by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2876>
- fix(grid): [grid] fix setActiveRow scroll to error position when set visual scroll by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2878>
- fix(renderless): restore the removed InfiniteScroll variable by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2882>
- fix(nav-menu): [nav-menu] fix the e2e error in the nav-menu component by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/2883>
- fix(radio): [radio] resolve the issue of text wrapping not being centered in radio components by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/2884>
- fix(huicharts): fix the script error of Huicharts saas theme by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2887>
- fix(fluent-editor): fix the error problem of vue-fluent-editor introduced in ssr environment by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2888>
- fix(renderless): fix wrong path of useEventListener by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2894>
- fix(calendar-view):[calendar-view] Verifying SaaS Theme Modification by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/2886>
- fix(input): [input] fix textarea word wrap style by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2896>
- fix(input): [input] fix textarea word wrap style by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2899>
- fix(date-picker):[date-picker] In the disabled state, can click the icon to activate the panel. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/2900>
- fix(select): [select] fix state.selected.state is empty object, and can't get the right displayText by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2902>
- fix(site): add the correct responsive position for .search-box by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2893>
- fix(tabs): [tabs] Fixed the bug where the use of separators in tabs resulted in misaligned buttons at both ends and separators not being centered by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/2912>
- fix(card): [card] Style pollution caused by modifying the card component by @Youyou-smiles in <https://github.com/opentiny/tiny-vue/pull/2910>
- fix: 编译入口名称调整 by @hashiqi12138 in <https://github.com/opentiny/tiny-vue/pull/2914>
- fix(upload-list):progress props width type issue in upload-list(#2915) by @Darkingtail in <https://github.com/opentiny/tiny-vue/pull/2916>
- fix(file-upload): [file-upload] Adjust the style of the mobile-first button for uploading components by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/2918>
- fix(charts): [charts]Pack and remove huicharts files by @Davont in <https://github.com/opentiny/tiny-vue/pull/2897>
- fix: fix the error when loading chart component by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2921>
- fix(grid): [grid] Fix bug where dragging and dropping in the expanded state of the table cannot render correctly by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/2901>
- fix: fix form item not align when set display-only by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2927>
- fix(button): [button,tag] fix the display problem of the button and tag components in dark mode by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2928>
- fix(cascader): [cascader,select] add the changeCompat attribute to the component by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2934>
- fix(icon): [icon] Fix bug where loading shadow icon size and margin do not comply with specifications by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/2935>
- fix(button): [select] add button's cssvar and fix select reference slot's problem by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2941>
- fix(pager): [pager] add Pager component internationalization by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/2939>
- fix(calendar-view): [calendar-view] modify the configuration of calendar view hours, minutes, and seconds, and adding an attribute by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/2932>
- fix(cascader): [cascader] fix cascader dont emit change by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2944>
- fix(dialog-box): [dialog-box] modify the full screen content height of the dialog box component not being fully supported by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/2947>
- fix: fix form item not align when set display-only by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2950>
- fix(grid): [grid] fix gird header tip error show by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2949>
- fix(date-picker):[date-picker]Formatted MMMs are displayed as abbreviations, and MMMMs are displayed as full spellings. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/2945>
- fix(renderless): [base-select] designConfig 未配置 spacingHeight时高度无法自动计算 by @hashiqi12138 in <https://github.com/opentiny/tiny-vue/pull/2926>
- fix(site): official website adapts to the dark mode. by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2956>
- fix: fix grid header style and tabs style in dark mode by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2957>
- fix: fix tabs background color style in dark mode by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2960>
- fix: fix mobile first input prepend content wrap by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2958>
- fix: fixed the background color of the official website API table expansion by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2962>
- fix(guide): [guide] resolve the situation where data cannot be bound when editing pop ups in tables by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/2961>
- fix(site): official website adapts to the dark mode. by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2963>
- fix(grid): [grid] resolve incomplete display of table icons by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/2966>
- fix(site): fix source code's highlight color by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2968>
- fix(datetime-picker): fix datetime-picker's display to flex in mobilefirst by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2969>
- fix(grid): [grid ] fix grid show overflow tip error when navigator scale by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2971>
- fix(renderless): fix renderless publish error and fix button-group apis by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2983>
- fix(vuerenderless/grid): 支持designConfig中配置tooltip by @hashiqi12138 in <https://github.com/opentiny/tiny-vue/pull/2977>
- fix(grid): [grid] fix error of grid component and fix huicharts being packaged and excluded by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2994>
- fix(e2e): [tag-group,skeleton] fix e2e by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3000>
- fix(badge): [badge] fixed the incorrect dot badge style for values by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3009>
- fix(docs):Fixed an issue where plus will display header search and description by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3002>
- fix(carousel): [carousel] modify color theme variables by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/2999>
- fix(site): refactor the implementation mode of switch dark theme by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2995>
- fix(site): remove css nests by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3011>
- fix(form): fix form array type message by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3017>
- fix(site): fix header's background color on dark theme by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3019>
- fix(docs):Modified the TinyVuePlus description. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3021>
- fix(calendar-view): [calendar-view] change month type from string to number by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3041>
- fix(button-group): [button-group] update size prop type and add validator by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3038>
- fix(docs): modify the path in the chart document by @Davont in <https://github.com/opentiny/tiny-vue/pull/3042>
- fix(color-select-panel): [color-select-panel] change theme by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3043>
- fix(docs): [file-upload] Fix the issue of uploading component documents by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3047>
- fix(site): document search box adapts to the dark theme. by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3046>
- fix(utils): add nanoid.ts to utils by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3050>
- fix(crop): [crop] change theme by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3015>
- fix(breadcrumb): [breadcrumb] update size prop type and add validator by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3037>
- fix(form): [form] modifying form validation sorting issues in asynchronous situations by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/2982>
- fix(grid): [grid] fix scrollLeft error after header drag resize by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3087>
- fix: make design parameter optional in getAlias function by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3090>
- fix(fluent-editor): [fluent-editor] change theme by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3051>
- fix(numeric): [numeric] update controls-position prop type and add validator by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3065>
- fix(input): [input] fix prop types for cols, rows, and input-box-type by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3066>
- fix(tree-menu): [tree-menu] resolve input box style issues during folding and hover status issues in dark mode by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3049>
- fix(site):Fixed the plus official website interface and type document display by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3062>
- fix(image): [image] fix 'appendToBody' definition placement error by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3067>
- fix(card): [card] fix card type definition error by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3088>
- fix(pager): [pager] fix align responsive cannot work and size docs by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3091>
- fix(file-upload): [file-upload] Fix the issue of incomplete prompts for uploading components by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3095>
- fix(datePicker):[date-picker]Fix the display of datePicker deletion icon in dark themes. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3094>
- fix(input): [input] fixed the abnormal display of the input box back icon in read-only mode by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3096>
- fix(select): [select] fix the issue where the `dropStyle` attribute of the `select` component is not passed through to the internal `scrollBar` component by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3100>
- fix(date-picker,steps):[date-picker,steps]Fix the width of the datePicker panel and the background of the step bar under the dark theme by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3110>
- fix(form): [form] Fix the popper-options page demo style issue by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3114>
- fix(docs): fixed the issue that the drop-down panel on the official website does not follow the scrolling by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3113>
- fix(input): [input] fix size attr with opposite description by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3064>
- fix(popover): [popover] make popover placement reactive by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3093>
- fix(nav-menu): [nav-menu] add parent-key prop description by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3101>
- fix: fix unit test cases cannot be scanned by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3102>
- fix(grid): [grid] fix grid drag error when set visual scroll by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3112>
- fix(datepicker):[date-picker]Fix the panel width is abnormal. by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3115>
- fix(ip-address): [ip-address] fix IPv6 display error when ipValidator not true by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3063>
- fix(datepicker):[date-picker]year panel disabling does not take effect by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3124>
- fix(tree): [tree] fix tree node slot radio cannot be displayed by @gweesin in <https://github.com/opentiny/tiny-vue/pull/3117>
- fix(popper): [tooltip,popover] fix popper doms in custom element, cant get zindex by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3126>
- fix(transfer): [transfer] add is-filterable className to transfer-panel's root dom by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3127>
- fix:[icon]Lightning icon hovers the whole blackening by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3132>
- fix(utils): fix the `crypt` function for missing `await` by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3139>
- fix(grid): [grid] fix mobile first empty slot by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3140>
- fix(base-select): [base-select,select] modify test cases by @MomoPoppy in <https://github.com/opentiny/tiny-vue/pull/3141>
- fix(carousel): [carousel] change demo of theme by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3149>
- fix(checkbox-group): sync theme-saas by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3156>
- fix(tag): [tag,select] tag add maxWidth prop, and select add maxTagWidth prop by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3158>
- fix: fix features page style by @kagol in <https://github.com/opentiny/tiny-vue/pull/3161>
- fix(utils): modify the date formatting function, remove redundant parameters and optimize the logic by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3169>
- fix(popconfirm): add handleDocumentClick to IPopconfirmApi interface by @betavs in <https://github.com/opentiny/tiny-vue/pull/3170>
- fix(cascader): [cascader] fix component theme by @lcy0620 in <https://github.com/opentiny/tiny-vue/pull/3184>
- fix(select): [select,base-select,tree-select,slider] fix component style issue by @MomoPoppy in <https://github.com/opentiny/tiny-vue/pull/3177>
- fix(tooltip): [tooltip] add a default value for the contentMaxHeight property by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3192>
- fix(calendar-view): [calendar-view] increase the maximum height and overflow handling of calendar-view tooltip content to optimize display effect by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3196>
- fix(theme-saas): fix theme-saas build error by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3197>
- fix(grid): [grid] fix grid custom saas tree check event by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3210>
- fix(grid): [grid] fix duplicate empty when set is-center-empty by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3217>
- fix(calendar-view): [calendar-view] fix popper cant mouse enter by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3218>
- fix(tree-select): [tree-select] fix e2e test by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3224>
- fix:[checkbox,time-line,steps] fix e2e test and icon modification by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3226>
- fix(calendar-view): [calendar-view] fix e2e erros by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3229>
- fix(alert): [alert] add variables to icons by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3236>
- fix(modal): [modal] modify icon by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/3244>
- fix: [file-upload,input] Fix the icon color by @discreted66 in <https://github.com/opentiny/tiny-vue/pull/3243>
- fix(svgs): [select] modify Icon by @MomoPoppy in <https://github.com/opentiny/tiny-vue/pull/3246>
- fix(query-builder): fix query builder style not align by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3227>
- fix: fix mobile-first long word bug by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3228>
- fix(grid): fix grid textarea editor hidden bug by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3230>
- fix: change mobile-first input suffix and prefix svg color by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3225>
- fix: [file-upload] Fix the display issue of uploading files without suffixes by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3233>
- fix(button): fix the issue where the loading attribute of the button's multi-terminal template does not take effect by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/3232>
- fix(installation): update Vue import path and add TinyVue component example by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3248>
- fix: Fix SaaS theme packaging error issue by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3250>
- fix(grid): [grid] add grid no-data icon by @wuyiping0628 in <https://github.com/opentiny/tiny-vue/pull/3257>
- fix: [search] Fix the problem of the search icon not being centered on MobileFirst by @chenxi-20 in <https://github.com/opentiny/tiny-vue/pull/3259>
- fix(checkbox): [checkbox,select,base-select] change the checkbox icon and synchronously modify the checkbox style by @MomoPoppy in <https://github.com/opentiny/tiny-vue/pull/3258>
- fix: fix the error in building the official website and add the default value of the theme by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3262>
- fix: fix build:runtime script by @kagol in <https://github.com/opentiny/tiny-vue/pull/3263>

### Other Changes

- refactor(mobile): remove @opentiny/mobile-utils package, and add alias path by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2767>
- refactor(mobile): add d.ts export files for mobile build by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2781>
- docs: added Vitepress packaging to FAQ section by @James-9696 in <https://github.com/opentiny/tiny-vue/pull/2776>
- docs: add mobile demo preview by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2807>
- refactor(utils): [grid,tree] rename log to logger by @shenjunjian in <https://github.com/opentiny/tiny-vue/pull/2826>
- docs(tiny-editor): fix TinyEditor website link by @kagol in <https://github.com/opentiny/tiny-vue/pull/2861>
- docs: convert the mobile demo to the composition-api format by @zzcr in <https://github.com/opentiny/tiny-vue/pull/2873>
- refactor: refactor mobile site by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/2808>
- docs: fix plus doc load error by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3016>
- docs(site): add webpack to parse vue-fluent-editor related dependencies FAQ by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3130>
- docs: add feature list by @kagol in <https://github.com/opentiny/tiny-vue/pull/3135>
- docs: optimize feature list page by @kagol in <https://github.com/opentiny/tiny-vue/pull/3137>
- docs: optimize features of action-menu/alert/anchor and so on by @kagol in <https://github.com/opentiny/tiny-vue/pull/3142>
- docs: add features of carousel/cascader/checkout and so on by @kagol in <https://github.com/opentiny/tiny-vue/pull/3144>
- docs: optimize features of dialog-select/divider/drawer and so on by @kagol in <https://github.com/opentiny/tiny-vue/pull/3145>
- docs: optimize features of guide/image/link and so on by @kagol in <https://github.com/opentiny/tiny-vue/pull/3147>
- docs: optimize features of popconfirm/popeditor/rate and so on by @kagol in <https://github.com/opentiny/tiny-vue/pull/3150>
- docs: optimize features of date-picker/dialog-box/dropdown and so on by @kagol in <https://github.com/opentiny/tiny-vue/pull/3151>
- docs: add XSS whitelist configuration FAQ by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3148>
- docs(select): [select] add dropdown menu top slot official website documen by @zzcr in <https://github.com/opentiny/tiny-vue/pull/3186>
- docs(api): [popeditor] update type for popselector by @betavs in <https://github.com/opentiny/tiny-vue/pull/3179>
- docs(api): [popupload] update type for size by @betavs in <https://github.com/opentiny/tiny-vue/pull/3180>
- docs(api): [popupload] update description for size by @betavs in <https://github.com/opentiny/tiny-vue/pull/3188>
- docs(guide): [guide] add show-step property and etc. by @hu-qi in <https://github.com/opentiny/tiny-vue/pull/3189>
- docs: optimize grid docs by @gimmyhehe in <https://github.com/opentiny/tiny-vue/pull/3215>
- docs: optimize cloud in the features page by @kagol in <https://github.com/opentiny/tiny-vue/pull/3254>
- docs: update checkbox icons by @kagol in <https://github.com/opentiny/tiny-vue/pull/3256>
- docs: add test in the features page by @kagol in <https://github.com/opentiny/tiny-vue/pull/3255>
- docs: update playground by @kagol in <https://github.com/opentiny/tiny-vue/pull/3264>

## New Contributors

- @hashiqi12138 made their first contribution in <https://github.com/opentiny/tiny-vue/pull/2914>
- @Darkingtail made their first contribution in <https://github.com/opentiny/tiny-vue/pull/2916>
- @lcy0620 made their first contribution in <https://github.com/opentiny/tiny-vue/pull/2964>
- @tsinghua-lau made their first contribution in <https://github.com/opentiny/tiny-vue/pull/2992>
- @hu-qi made their first contribution in <https://github.com/opentiny/tiny-vue/pull/3189>
