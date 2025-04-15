# 更新日志

Tiny Vue 团队在正常情况下使用 每月 发布策略。

在此页面上，您只能看到我们的 更新日志 最新三个迭代的日志记录，如您要查看完整记录可以查看：[Release](https://github.com/opentiny/tiny-vue/releases)

## v2.22.0/v3.22.0

`2025/04/07`

## What's Changed

### Exciting New Features 🎉

- feat: Support dark theme🎉 [#2946](https://github.com/opentiny/tiny-vue/pull/2946) [#2948](https://github.com/opentiny/tiny-vue/pull/2948) [#2951](https://github.com/opentiny/tiny-vue/pull/2951) and so on.
- feat(mobile): optimize the mobile common package name and import path and improve xss dependency by @zzcr in https://github.com/opentiny/tiny-vue/pull/2777
- feat: go through the mobile packaging build and release process and fix the bugs found during the build and release by @zzcr in https://github.com/opentiny/tiny-vue/pull/2780
- feat(theme-mobile): optimize the theme-mobile project css variable names and add undefined css variables by @zzcr in https://github.com/opentiny/tiny-vue/pull/2782
- feat(pager): [pager] add change-compat to control whether trigger cha… by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2783
- feat: add license to mobile components by @zzcr in https://github.com/opentiny/tiny-vue/pull/2802
- feat(dropdown): [dropdown] add visible attribute to support user-defined panel display. by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2774
- feat(tree-menu): [tree-menu] Add static data and unused topic variables for rectification by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2803
- feat: add next/cloud-icons project by @zzcr in https://github.com/opentiny/tiny-vue/pull/2821
- feat(theme-mobile): [button] Adjust the theme of mobile by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2820
- feat(vue/image): [image]the image component supports binary stream base64 format by @zzcr in https://github.com/opentiny/tiny-vue/pull/2829
- feat(date-panel): [date-panel,date-picker] DatePicker support using only date panel by @discreted66 in https://github.com/opentiny/tiny-vue/pull/2818
- feat(modal): [modal] add show-close feature by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2840
- feat(image): [image] The image component supports base64 in svg format by @zzcr in https://github.com/opentiny/tiny-vue/pull/2858
- feat(vue-hooks): add hooks package packaging logic by @zzcr in https://github.com/opentiny/tiny-vue/pull/2866
- feat:[date-panel,date-range,date-picker]DatePicker support using only date range panel by @discreted66 in https://github.com/opentiny/tiny-vue/pull/2869
- feat(utils): add a whitelist for xss in rich text components by @zzcr in https://github.com/opentiny/tiny-vue/pull/2879
- feat:[month-range,year-range,date-panel,date-picker]The DatePanel supports the month/year range panel by @discreted66 in https://github.com/opentiny/tiny-vue/pull/2875
- feat(theme): [button] add dark themes, modify other theme variables and component level variables by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2898
- feat(theme): add tinyDarkTheme for themeTool and add dark-theme router for sites by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2904
- feat(steps): add content-center prop to steps and add two saas icons by @zzcr in https://github.com/opentiny/tiny-vue/pull/2907
- feat(site): the official website adds the function of dynamically switching between light and dark themes by @zzcr in https://github.com/opentiny/tiny-vue/pull/2911
- feat(date-panel):[date-picker,date-panel] DatePanel supports the month and year panels by @discreted66 in https://github.com/opentiny/tiny-vue/pull/2909
- feat: add huicharts runtime and update docs by @zzcr in https://github.com/opentiny/tiny-vue/pull/2981
- feat(progress): [progress] add slot support for custom status icons by @gweesin in https://github.com/opentiny/tiny-vue/pull/2979
- feat(tag): [tag] improve close icon interaction by @gweesin in https://github.com/opentiny/tiny-vue/pull/3006
- feat(grid): [grid] expose getTreeExpandeds function by @gweesin in https://github.com/opentiny/tiny-vue/pull/2996
- feat(grid): [grid] add mobile first empty slot by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3018
- feat(calendar): [calendar] add year and month specification demo and tests by @gweesin in https://github.com/opentiny/tiny-vue/pull/3039
- feat(utils): resolve common function ts error by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2903
- feat: Adds variable default value handling in build theme by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/3122
- feat: base var style adapt shadow-root by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3155
- feat: optimize the dark mode switching method, reduce the size of non-dark theme user packages, and add dark theme switching documents by @zzcr in https://github.com/opentiny/tiny-vue/pull/3153
- feat(theme): [select] modify the scrollbar and popper to unify the style by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/3160
- feat: Add default values to theme variables by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/3162
- feat(utils): use cursor to add comments, ts type declarations, and vitest test cases to utils functions by @zzcr in https://github.com/opentiny/tiny-vue/pull/3138
- feat(utils): add comments, ts type declarations, and vitest test cases to utils functions by @zzcr in https://github.com/opentiny/tiny-vue/pull/3154
- feat: [file-upload] Add file names to restricted prompt texts by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/3171
- feat(theme): [tag] adjust the common variable and adapt the tag component by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/3173
- feat(svg): update svg resource file to adapt dark theme by @zzcr in https://github.com/opentiny/tiny-vue/pull/3223
- feat: [skeleton] Add Skeleton mobile first by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/3222
- feat(modal): [modal] enhance TINYModal functionality, add type definition andoption interface by @zzcr in https://github.com/opentiny/tiny-vue/pull/3247
- feat(loading): [loading] added type definition and interface of Loading component to optimize loading style processing by @zzcr in https://github.com/opentiny/tiny-vue/pull/3253
- feat(message): add Message component type definition and update the type annotation of the installation method by @zzcr in https://github.com/opentiny/tiny-vue/pull/3252
- feat(notify): [notify] enhance notification function, add type definition and option interface, optimize code structure by @zzcr in https://github.com/opentiny/tiny-vue/pull/3251

### Bug Fixes 🐛

- fix(select): [select] fix the problem that both tooltip and title are displayed when the select command is run in display-only mode. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2772
- fix(pager): [pager] fix pager type error by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2801
- fix: modify the mobile layout and click the example/API. The browser address anchor is not defined, the composition code is hidden, and the home page icon is not found by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2806
- fix(e2e): fix all e2e test error by @zzcr in https://github.com/opentiny/tiny-vue/pull/2811
- fix(grid): [grid] fix grid error e2e test by @zzcr in https://github.com/opentiny/tiny-vue/pull/2815
- fix(vue2): fix vue2 dev startup error by @zzcr in https://github.com/opentiny/tiny-vue/pull/2822
- fix(sites): fix the error when installing vue-docs dependencies in pnpm by @zzcr in https://github.com/opentiny/tiny-vue/pull/2816
- fix(grid): [grid] fix amount label wrap bug by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2828
- fix(utils): fixed the issue that the release version of the utils package could not correspond by @zzcr in https://github.com/opentiny/tiny-vue/pull/2837
- fix(dialog-select): fixed an issue where grid data could not be loaded when initially visible was set to true by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2835
- fix(color-picker): [color-picker] fix color-picker props valid error by @zzcr in https://github.com/opentiny/tiny-vue/pull/2841
- fix(select): [select] fix component error caused by vue2 deep cleanup memory leak by @zzcr in https://github.com/opentiny/tiny-vue/pull/2843
- fix(e2e): [pop-upload, file-upload] Fix e2e test case errors after internationalization by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2847
- fix(dialog-box): [dialog-box] right pop-up window height style issue by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2844
- fix(grid): [grid] validate successful add return value in promise sense by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2851
- fix(user): [user] fix the issue of incorrect file names in the demo by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2855
- fix(load-list): avoid tinyList and tinyTimeLine regisiter twice by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2854
- fix(alert): move close icon to center by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2856
- fix(time-line-new): [time-line-new] update timeline-new demos ,to avoid compiled error by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2859
- fix(dialog-select): [dialog-select] fixed an issue where grid data could not be loaded when initially visible was set to true by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2862
- fix(utils): delete the renderless/common directory and adjust all reference paths. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2849
- fix(vue-directive): unify the functions in vue-hooks into double-layer functions and optimize the infinite-scroll function by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2864
- fix(vue): modify the correct package dependency by @zzcr in https://github.com/opentiny/tiny-vue/pull/2865
- fix(fluent-editor): [fluent-editor] Fixed the bug where the cursor was out of focus when entering line breaks after modifying the font style of the rich text box by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2880
- fix(select):[select] fix the focus event is triggered and prevent the panel from failing to collapse by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2876
- fix(grid): [grid] fix setActiveRow scroll to error position when set visual scroll by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2878
- fix(renderless): restore the removed InfiniteScroll variable by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2882
- fix(nav-menu): [nav-menu] fix the e2e error in the nav-menu component by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2883
- fix(radio): [radio] resolve the issue of text wrapping not being centered in radio components by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2884
- fix(huicharts): fix the script error of Huicharts saas theme by @zzcr in https://github.com/opentiny/tiny-vue/pull/2887
- fix(fluent-editor): fix the error problem of vue-fluent-editor introduced in ssr environment by @zzcr in https://github.com/opentiny/tiny-vue/pull/2888
- fix(renderless): fix wrong path of useEventListener by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2894
- fix(calendar-view):[calendar-view] Verifying SaaS Theme Modification by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2886
- fix(input): [input] fix textarea word wrap style by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2896
- fix(input): [input] fix textarea word wrap style by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2899
- fix(date-picker):[date-picker] In the disabled state, can click the icon to activate the panel. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/2900
- fix(select): [select] fix state.selected.state is empty object, and can't get the right displayText by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2902
- fix(site): add the correct responsive position for .search-box by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2893
- fix(tabs): [tabs] Fixed the bug where the use of separators in tabs resulted in misaligned buttons at both ends and separators not being centered by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2912
- fix(card): [card] Style pollution caused by modifying the card component by @Youyou-smiles in https://github.com/opentiny/tiny-vue/pull/2910
- fix: 编译入口名称调整 by @hashiqi12138 in https://github.com/opentiny/tiny-vue/pull/2914
- fix(upload-list):progress props width type issue in upload-list(#2915) by @Darkingtail in https://github.com/opentiny/tiny-vue/pull/2916
- fix(file-upload): [file-upload] Adjust the style of the mobile-first button for uploading components by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2918
- fix(charts): [charts]Pack and remove huicharts files by @Davont in https://github.com/opentiny/tiny-vue/pull/2897
- fix: fix the error when loading chart component by @zzcr in https://github.com/opentiny/tiny-vue/pull/2921
- fix(grid): [grid] Fix bug where dragging and dropping in the expanded state of the table cannot render correctly by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2901
- fix: fix form item not align when set display-only by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2927
- fix(button): [button,tag] fix the display problem of the button and tag components in dark mode by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2928
- fix(cascader): [cascader,select] add the changeCompat attribute to the component by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2934
- fix(icon): [icon] Fix bug where loading shadow icon size and margin do not comply with specifications by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2935
- fix(button): [select] add button's cssvar and fix select reference slot's problem by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2941
- fix(pager): [pager] add Pager component internationalization by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2939
- fix(calendar-view): [calendar-view] modify the configuration of calendar view hours, minutes, and seconds, and adding an attribute by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2932
- fix(cascader): [cascader] fix cascader dont emit change by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2944
- fix(dialog-box): [dialog-box] modify the full screen content height of the dialog box component not being fully supported by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2947
- fix: fix form item not align when set display-only by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2950
- fix(grid): [grid] fix gird header tip error show by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2949
- fix(date-picker):[date-picker]Formatted MMMs are displayed as abbreviations, and MMMMs are displayed as full spellings. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/2945
- fix(renderless): [base-select] designConfig 未配置 spacingHeight时高度无法自动计算 by @hashiqi12138 in https://github.com/opentiny/tiny-vue/pull/2926
- fix(site): official website adapts to the dark mode. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2956
- fix: fix grid header style and tabs style in dark mode by @zzcr in https://github.com/opentiny/tiny-vue/pull/2957
- fix: fix tabs background color style in dark mode by @zzcr in https://github.com/opentiny/tiny-vue/pull/2960
- fix: fix mobile first input prepend content wrap by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2958
- fix: fixed the background color of the official website API table expansion by @zzcr in https://github.com/opentiny/tiny-vue/pull/2962
- fix(guide): [guide] resolve the situation where data cannot be bound when editing pop ups in tables by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2961
- fix(site): official website adapts to the dark mode. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2963
- fix(grid): [grid] resolve incomplete display of table icons by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2966
- fix(site): fix source code's highlight color by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2968
- fix(datetime-picker): fix datetime-picker's display to flex in mobilefirst by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2969
- fix(grid): [grid ] fix grid show overflow tip error when navigator scale by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2971
- fix(renderless): fix renderless publish error and fix button-group apis by @zzcr in https://github.com/opentiny/tiny-vue/pull/2983
- fix(vuerenderless/grid): 支持designConfig中配置tooltip by @hashiqi12138 in https://github.com/opentiny/tiny-vue/pull/2977
- fix(grid): [grid] fix error of grid component and fix huicharts being packaged and excluded by @zzcr in https://github.com/opentiny/tiny-vue/pull/2994
- fix(e2e): [tag-group,skeleton] fix e2e by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/3000
- fix(badge): [badge] fixed the incorrect dot badge style for values by @gweesin in https://github.com/opentiny/tiny-vue/pull/3009
- fix(docs):Fixed an issue where plus will display header search and description by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3002
- fix(carousel): [carousel] modify color theme variables by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2999
- fix(site): refactor the implementation mode of switch dark theme by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2995
- fix(site): remove css nests by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3011
- fix(form): fix form array type message by @zzcr in https://github.com/opentiny/tiny-vue/pull/3017
- fix(site): fix header's background color on dark theme by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3019
- fix(docs):Modified the TinyVuePlus description. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3021
- fix(calendar-view): [calendar-view] change month type from string to number by @gweesin in https://github.com/opentiny/tiny-vue/pull/3041
- fix(button-group): [button-group] update size prop type and add validator by @gweesin in https://github.com/opentiny/tiny-vue/pull/3038
- fix(docs): modify the path in the chart document by @Davont in https://github.com/opentiny/tiny-vue/pull/3042
- fix(color-select-panel): [color-select-panel] change theme by @James-9696 in https://github.com/opentiny/tiny-vue/pull/3043
- fix(docs): [file-upload] Fix the issue of uploading component documents by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/3047
- fix(site): document search box adapts to the dark theme. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3046
- fix(utils): add nanoid.ts to utils by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3050
- fix(crop): [crop] change theme by @James-9696 in https://github.com/opentiny/tiny-vue/pull/3015
- fix(breadcrumb): [breadcrumb] update size prop type and add validator by @gweesin in https://github.com/opentiny/tiny-vue/pull/3037
- fix(form): [form] modifying form validation sorting issues in asynchronous situations by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2982
- fix(grid): [grid] fix scrollLeft error after header drag resize by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3087
- fix: make design parameter optional in getAlias function by @gweesin in https://github.com/opentiny/tiny-vue/pull/3090
- fix(fluent-editor): [fluent-editor] change theme by @James-9696 in https://github.com/opentiny/tiny-vue/pull/3051
- fix(numeric): [numeric] update controls-position prop type and add validator by @gweesin in https://github.com/opentiny/tiny-vue/pull/3065
- fix(input): [input] fix prop types for cols, rows, and input-box-type by @gweesin in https://github.com/opentiny/tiny-vue/pull/3066
- fix(tree-menu): [tree-menu] resolve input box style issues during folding and hover status issues in dark mode by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/3049
- fix(site):Fixed the plus official website interface and type document display by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3062
- fix(image): [image] fix 'appendToBody' definition placement error by @gweesin in https://github.com/opentiny/tiny-vue/pull/3067
- fix(card): [card] fix card type definition error by @gweesin in https://github.com/opentiny/tiny-vue/pull/3088
- fix(pager): [pager] fix align responsive cannot work and size docs by @gweesin in https://github.com/opentiny/tiny-vue/pull/3091
- fix(file-upload): [file-upload] Fix the issue of incomplete prompts for uploading components by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/3095
- fix(datePicker):[date-picker]Fix the display of datePicker deletion icon in dark themes. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3094
- fix(input): [input] fixed the abnormal display of the input box back icon in read-only mode by @zzcr in https://github.com/opentiny/tiny-vue/pull/3096
- fix(select): [select] fix the issue where the `dropStyle` attribute of the `select` component is not passed through to the internal `scrollBar` component by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3100
- fix(date-picker,steps):[date-picker,steps]Fix the width of the datePicker panel and the background of the step bar under the dark theme by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3110
- fix(form): [form] Fix the popper-options page demo style issue by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/3114
- fix(docs): fixed the issue that the drop-down panel on the official website does not follow the scrolling by @zzcr in https://github.com/opentiny/tiny-vue/pull/3113
- fix(input): [input] fix size attr with opposite description by @gweesin in https://github.com/opentiny/tiny-vue/pull/3064
- fix(popover): [popover] make popover placement reactive by @gweesin in https://github.com/opentiny/tiny-vue/pull/3093
- fix(nav-menu): [nav-menu] add parent-key prop description by @gweesin in https://github.com/opentiny/tiny-vue/pull/3101
- fix: fix unit test cases cannot be scanned by @gweesin in https://github.com/opentiny/tiny-vue/pull/3102
- fix(grid): [grid] fix grid drag error when set visual scroll by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3112
- fix(datepicker):[date-picker]Fix the panel width is abnormal. by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3115
- fix(ip-address): [ip-address] fix IPv6 display error when ipValidator not true by @gweesin in https://github.com/opentiny/tiny-vue/pull/3063
- fix(datepicker):[date-picker]year panel disabling does not take effect by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3124
- fix(tree): [tree] fix tree node slot radio cannot be displayed by @gweesin in https://github.com/opentiny/tiny-vue/pull/3117
- fix(popper): [tooltip,popover] fix popper doms in custom element, cant get zindex by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3126
- fix(transfer): [transfer] add is-filterable className to transfer-panel's root dom by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3127
- fix:[icon]Lightning icon hovers the whole blackening by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3132
- fix(utils): fix the `crypt` function for missing `await` by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3139
- fix(grid): [grid] fix mobile first empty slot by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3140
- fix(base-select): [base-select,select] modify test cases by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/3141
- fix(carousel): [carousel] change demo of theme by @James-9696 in https://github.com/opentiny/tiny-vue/pull/3149
- fix(checkbox-group): sync theme-saas by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3156
- fix(tag): [tag,select] tag add maxWidth prop, and select add maxTagWidth prop by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3158
- fix: fix features page style by @kagol in https://github.com/opentiny/tiny-vue/pull/3161
- fix(utils): modify the date formatting function, remove redundant parameters and optimize the logic by @zzcr in https://github.com/opentiny/tiny-vue/pull/3169
- fix(popconfirm): add handleDocumentClick to IPopconfirmApi interface by @betavs in https://github.com/opentiny/tiny-vue/pull/3170
- fix(cascader): [cascader] fix component theme by @lcy0620 in https://github.com/opentiny/tiny-vue/pull/3184
- fix(select): [select,base-select,tree-select,slider] fix component style issue by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/3177
- fix(tooltip): [tooltip] add a default value for the contentMaxHeight property by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3192
- fix(calendar-view): [calendar-view] increase the maximum height and overflow handling of calendar-view tooltip content to optimize display effect by @zzcr in https://github.com/opentiny/tiny-vue/pull/3196
- fix(theme-saas): fix theme-saas build error by @zzcr in https://github.com/opentiny/tiny-vue/pull/3197
- fix(grid): [grid] fix grid custom saas tree check event by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3210
- fix(grid): [grid] fix duplicate empty when set is-center-empty by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3217
- fix(calendar-view): [calendar-view] fix popper cant mouse enter by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3218
- fix(tree-select): [tree-select] fix e2e test by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3224
- fix:[checkbox,time-line,steps] fix e2e test and icon modification by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3226
- fix(calendar-view): [calendar-view] fix e2e erros by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3229
- fix(alert): [alert] add variables to icons by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/3236
- fix(modal): [modal] modify icon by @James-9696 in https://github.com/opentiny/tiny-vue/pull/3244
- fix: [file-upload,input] Fix the icon color by @discreted66 in https://github.com/opentiny/tiny-vue/pull/3243
- fix(svgs): [select] modify Icon by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/3246
- fix(query-builder): fix query builder style not align by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3227
- fix: fix mobile-first long word bug by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3228
- fix(grid): fix grid textarea editor hidden bug by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3230
- fix: change mobile-first input suffix and prefix svg color by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3225
- fix: [file-upload] Fix the display issue of uploading files without suffixes by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/3233
- fix(button): fix the issue where the loading attribute of the button's multi-terminal template does not take effect by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/3232
- fix(installation): update Vue import path and add TinyVue component example by @zzcr in https://github.com/opentiny/tiny-vue/pull/3248
- fix: Fix SaaS theme packaging error issue by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/3250
- fix(grid): [grid] add grid no-data icon by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/3257
- fix: [search] Fix the problem of the search icon not being centered on MobileFirst by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/3259
- fix(checkbox): [checkbox,select,base-select] change the checkbox icon and synchronously modify the checkbox style by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/3258
- fix: fix the error in building the official website and add the default value of the theme by @zzcr in https://github.com/opentiny/tiny-vue/pull/3262
- fix: fix build:runtime script by @kagol in https://github.com/opentiny/tiny-vue/pull/3263

### Other Changes

- refactor(mobile): remove @opentiny/mobile-utils package, and add alias path by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2767
- refactor(mobile): add d.ts export files for mobile build by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2781
- docs: added Vitepress packaging to FAQ section by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2776
- docs: add mobile demo preview by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2807
- refactor(utils): [grid,tree] rename log to logger by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2826
- docs(tiny-editor): fix TinyEditor website link by @kagol in https://github.com/opentiny/tiny-vue/pull/2861
- docs: convert the mobile demo to the composition-api format by @zzcr in https://github.com/opentiny/tiny-vue/pull/2873
- refactor: refactor mobile site by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2808
- docs: fix plus doc load error by @zzcr in https://github.com/opentiny/tiny-vue/pull/3016
- docs(site): add webpack to parse vue-fluent-editor related dependencies FAQ by @zzcr in https://github.com/opentiny/tiny-vue/pull/3130
- docs: add feature list by @kagol in https://github.com/opentiny/tiny-vue/pull/3135
- docs: optimize feature list page by @kagol in https://github.com/opentiny/tiny-vue/pull/3137
- docs: optimize features of action-menu/alert/anchor and so on by @kagol in https://github.com/opentiny/tiny-vue/pull/3142
- docs: add features of carousel/cascader/checkout and so on by @kagol in https://github.com/opentiny/tiny-vue/pull/3144
- docs: optimize features of dialog-select/divider/drawer and so on by @kagol in https://github.com/opentiny/tiny-vue/pull/3145
- docs: optimize features of guide/image/link and so on by @kagol in https://github.com/opentiny/tiny-vue/pull/3147
- docs: optimize features of popconfirm/popeditor/rate and so on by @kagol in https://github.com/opentiny/tiny-vue/pull/3150
- docs: optimize features of date-picker/dialog-box/dropdown and so on by @kagol in https://github.com/opentiny/tiny-vue/pull/3151
- docs: add XSS whitelist configuration FAQ by @zzcr in https://github.com/opentiny/tiny-vue/pull/3148
- docs(select): [select] add dropdown menu top slot official website documen by @zzcr in https://github.com/opentiny/tiny-vue/pull/3186
- docs(api): [popeditor] update type for popselector by @betavs in https://github.com/opentiny/tiny-vue/pull/3179
- docs(api): [popupload] update type for size by @betavs in https://github.com/opentiny/tiny-vue/pull/3180
- docs(api): [popupload] update description for size by @betavs in https://github.com/opentiny/tiny-vue/pull/3188
- docs(guide): [guide] add show-step property and etc. by @hu-qi in https://github.com/opentiny/tiny-vue/pull/3189
- docs: optimize grid docs by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/3215
- docs: optimize cloud in the features page by @kagol in https://github.com/opentiny/tiny-vue/pull/3254
- docs: update checkbox icons by @kagol in https://github.com/opentiny/tiny-vue/pull/3256
- docs: add test in the features page by @kagol in https://github.com/opentiny/tiny-vue/pull/3255
- docs: update playground by @kagol in https://github.com/opentiny/tiny-vue/pull/3264

## New Contributors

- @hashiqi12138 made their first contribution in https://github.com/opentiny/tiny-vue/pull/2914
- @Darkingtail made their first contribution in https://github.com/opentiny/tiny-vue/pull/2916
- @lcy0620 made their first contribution in https://github.com/opentiny/tiny-vue/pull/2964
- @tsinghua-lau made their first contribution in https://github.com/opentiny/tiny-vue/pull/2992
- @hu-qi made their first contribution in https://github.com/opentiny/tiny-vue/pull/3189

## v2.21.0/v3.21.0

`2025/01/15`

## What's Changed

### Exciting New Features 🎉

- feat(tiny-vue-nuxt): [tiny-vue-nuxt] add tiny-vue-nuxt module and add… by @18003228289 in https://github.com/opentiny/tiny-vue/pull/1761
- feat(tiny-vue-nuxt): [tiny-vue-nuxt] finish importing all components to nuxt module by @18003228289 in https://github.com/opentiny/tiny-vue/pull/1838
- fix(random): [random] use Math.random() instead to support SSR by @18003228289 in https://github.com/opentiny/tiny-vue/pull/1868
- feat: add nuxt dev environment by @zzcr in https://github.com/opentiny/tiny-vue/pull/1993
- feat: add mobile dependence by @zzcr in https://github.com/opentiny/tiny-vue/pull/2609
- feat: sync 3.20.0 to dev by @zzcr in https://github.com/opentiny/tiny-vue/pull/2639
- feat: support nuxt by @zzcr in https://github.com/opentiny/tiny-vue/pull/2635
- feat(dropdown): [dropdown] add right side expansion function for dropdown by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2608
- feat: support nuxt by @kagol in https://github.com/opentiny/tiny-vue/pull/2641
- feat: add @opentiny/utils package by @zzcr in https://github.com/opentiny/tiny-vue/pull/2661
- feat(fluent-editor): add before-editor-init props by @kagol in https://github.com/opentiny/tiny-vue/pull/2670
- feat: [grid,alert,form]use catalog to globally upgrade vite and vitest; and add mobile build config by @zzcr in https://github.com/opentiny/tiny-vue/pull/2680
- feat(site): Optimize site documentation typesetting by @dufu1991 in https://github.com/opentiny/tiny-vue/pull/2688
- feat(site): optimize the performance of the official website, use lazy loading for document examples by @zzcr in https://github.com/opentiny/tiny-vue/pull/2713
- feat(nav-menu): [nav-menu] Add custom selected mode by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2718
- feat(nav-menu): [nav-menu] Simplify the demo data by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2728
- feat: add utils packages type module by @zzcr in https://github.com/opentiny/tiny-vue/pull/2731
- feat: update version to 3.21.0 by @zzcr in https://github.com/opentiny/tiny-vue/pull/2734
- feat: remove chart e2e-test cases by @zzcr in https://github.com/opentiny/tiny-vue/pull/2742
- feat(alert): [alert] display title when size is large by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2744
- feat: enhance the divider dialogbox treemenu function by @zzcr in https://github.com/opentiny/tiny-vue/pull/2758
- feat: update playground versions by @zzcr in https://github.com/opentiny/tiny-vue/pull/2763
- feat(alert): [alert] display title when size is large in mobile-first by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2765

### Bug Fixes 🐛

- fix(crypto): [crypto] use nanoid instead to support SSR by @18003228289 in https://github.com/opentiny/tiny-vue/pull/1860
- fix(ssr): [ssr] fix ssr problems by @18003228289 in https://github.com/opentiny/tiny-vue/pull/1935
- fix(nuxt): update vue version to fix button slot error by @zzcr in https://github.com/opentiny/tiny-vue/pull/2026
- fix(plugin): [plugin] fix nuxt plugin by @18003228289 in https://github.com/opentiny/tiny-vue/pull/2220
- fix(plugin): [plugin] fix nuxt plugin by @18003228289 in https://github.com/opentiny/tiny-vue/pull/2212
- fix(chart): huiCharts 打包替换为 Chart by @Davont in https://github.com/opentiny/tiny-vue/pull/2622
- fix: fix slider compilation error in vue2 by @zzcr in https://github.com/opentiny/tiny-vue/pull/2625
- fix(tabbar): modify mobile tabbar problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2638
- fix(dropdown-menu): fix mobile problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2642
- fix(form): modify mobile form problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2643
- fix(container): modify mobile problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2646
- fix(dialog-box): modify mobile dialog-box problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2644
- fix(select): [select] fix the vertical centering of the suffix icon by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2645
- fix(tree-select): solve the problem of tree attributes not being passed through by @kagol in https://github.com/opentiny/tiny-vue/pull/2659
- fix(label): modify mobile bug by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2672
- fix(input): modify mobile problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2671
- fix(slider): modify mobile problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2669
- fix(tree): default-expanded-keys description is wrong by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2667
- fix(checkbox): modify mobile problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2666
- fix(form): modify mobile problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2665
- fix(popover): remove aria-hidden by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2664
- fix(progress): modify mobile problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2654
- fix(button): modify mobile problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2660
- fix(auto-import-plugin): support functional components by @mengqiuleo in https://github.com/opentiny/tiny-vue/pull/2511
- fix: fix warning in cascader component by @zzcr in https://github.com/opentiny/tiny-vue/pull/2662
- fix(nuxt): fix the error when starting the nuxt project by @zzcr in https://github.com/opentiny/tiny-vue/pull/2668
- fix(unplugin-tiny-vue): fix error TinyVueResolver name by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2676
- fix(action-sheet): modify mobile problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2692
- fix(pull-refresh): modify mobile bug by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2677
- fix(exception): modify mobile problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2690
- fix(file-upload): [file-upload] Optimized the usage of the customized upload example. by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2694
- fix(vue-renderless): [action-menu, alert] fix site: Optimize site documentation typesetting by @dufu1991 in https://github.com/opentiny/tiny-vue/pull/2693
- fix: fix change theme error when open playground by @zzcr in https://github.com/opentiny/tiny-vue/pull/2681
- fix(vue-renderless): [autocomplete,base-select,amount,anchor,area] fix site: Optimize site documentation typesetting by @dufu1991 in https://github.com/opentiny/tiny-vue/pull/2695
- fix(mobile): fix mobile components build error by @zzcr in https://github.com/opentiny/tiny-vue/pull/2696
- fix(site): fix error when build saas site by @zzcr in https://github.com/opentiny/tiny-vue/pull/2701
- fix(mini-picker): the demo on the mobile client is modified. by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2698
- fix(modal): modify the display and error issues of the mobile demo by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2704
- fix(user-head): the problem and type of the demo on the mobile client are modified by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2699
- fix(vue-renderless): [breadcrumb, bulletin-board, button, button-group,calendar, calendar-view, card, carousel, cascader, cascader-panel, chart,checkbox, collapse, color-picker, color-select-panel,company,config-provider,container,crop,currency,date-picker,dept,dialog-box,dialog-select,directives,divider,drawer,drop-roles,drop-times,dropdown,espace,fall-menu,file-upload,filter-panel,float-button,floatbar,flowchart,fluent-editor,form,fullscreen] fix site: Optimize site documentation typesetting by @dufu1991 in https://github.com/opentiny/tiny-vue/pull/2709
- fix(tabs): modify the issue of the mobile demo not displaying and reporting errors by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2710
- fix(vue-renderless): [grid] fix site: Optimize site documentation typesetting by @dufu1991 in https://github.com/opentiny/tiny-vue/pull/2714
- fix(grid): [grid] fix the initial position on the left when dragging … by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2719
- fix(statistic): [statistic] synchronize the statistic component of the release-3.18 version to the dev branch by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2717
- fix(file-upload): modify the error reported by the upload component on the mobile client and add the demo by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2724
- fix(input): [input] cancel bacground style of input count in textarea by @wNing50 in https://github.com/opentiny/tiny-vue/pull/2715
- fix(modal): [modal] repeatedly dispatch the close event by @betavs in https://github.com/opentiny/tiny-vue/pull/2573
- fix(vue-renderless): [grid-select,guide,hrapprover,hrapprover,icon,icon-multicolor,image,infinite-scroll,input,ip-address,layout,link,link-menu,loading,locales,logon-user,logout,milestone,mind-map,modal,nav-menu,notify,numeric,pager,pop-upload,popconfirm,popeditor,popover,progress,qr-code,query-builder] fix site: Optimize site documentation typesetting by @dufu1991 in https://github.com/opentiny/tiny-vue/pull/2721
- fix(modal): [modal] modifying the modal component and clicking the confirm button accidentally triggered the close event by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2727
- fix(vue-renderless): [radio,rate,rich-text-editor,roles,scroll-text,search,select,skeleton,slider,split,statistic,steps,sticky,switch,tabs,tag,tag-group,text-popup,time-line,time-line-new,time-picker,time-select,toggle-menu,tooltip,transfer,tree,tree-menu,tree-select] fix site: Optimize site documentation typesetting by @dufu1991 in https://github.com/opentiny/tiny-vue/pull/2729
- fix(vite-import): fix the issue of escaping comment code in on-demand packaging plugin by @zzcr in https://github.com/opentiny/tiny-vue/pull/2726
- fix(vue-renderless): [user,user-account,user-contact,user-head,user-link,virtual-scroll-box,virtual-tree,watermark,wizard] fix site: Optimize site documentation typesetting by @dufu1991 in https://github.com/opentiny/tiny-vue/pull/2732
- fix: supplement mistakenly deleted files by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2736
- fix(e2e): [tooltip,select] fix the security that causes e2e test failures. by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2743
- fix(e2e): [file-upload] Fix the error reported in the E2E test case of the upload component. by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2741
- fix(e2e): [cascader,color-picker,crop] fix cascader color-picker crop components e2e-test error by @zzcr in https://github.com/opentiny/tiny-vue/pull/2746
- fix(demos/checkbox): [checkbox] fix checkbox e2e-test error by @zzcr in https://github.com/opentiny/tiny-vue/pull/2745
- fix(modal): [modal] modify e2e test case error by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2747
- fix(date-picker): [date-picker] fix date-picker e2e test error by @zzcr in https://github.com/opentiny/tiny-vue/pull/2749
- fix(time-select): [time-select] Fix and optimize issues with invalid … by @Youyou-smiles in https://github.com/opentiny/tiny-vue/pull/2735
- fix(popeditor): the default width of the label in popeditor is added by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2750
- fix(modal): [modal] the style does not take effect by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2751
- fix(carousel): [carousel] modify the vertical arrow display issue of the carousel component by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2752
- fix(grid): [grid] fix can not select first option when value is empty by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2756
- fix(dialog-box): [dialog-box] modify the style of the dialog box by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2757
- fix(loading): [loading] v-loading's lifecycle name replace by inserted by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2759
- fix(grid): [grid] fix checkbox border become smaller when config show… by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2762
- fix: fix huichart build error by @zzcr in https://github.com/opentiny/tiny-vue/pull/2760
- fix(renderless): fix renderless package publish error by @zzcr in https://github.com/opentiny/tiny-vue/pull/2761
- fix(divider): [divider] modify e2e test cases for the divider component by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2766

### Other Changes

- docs: hide the search input on the left menu at open source sites by @kagol in https://github.com/opentiny/tiny-vue/pull/2607
- ci: auto deploy site by @kagol in https://github.com/opentiny/tiny-vue/pull/2617
- docs: add dufu1991 as a contributor for doc by @allcontributors in https://github.com/opentiny/tiny-vue/pull/2703
- docs(select): add the description of the filterMethod prop for Select by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2708
- docs: fix back to top does not work and the document tab title does n… by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2712
- test(grid): [grid] fix unit test error by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2754

## New Contributors

- @18003228289 made their first contribution in https://github.com/opentiny/tiny-vue/pull/1761
- @dufu1991 made their first contribution in https://github.com/opentiny/tiny-vue/pull/2688

## v2.20.0/v3.20.0

`2024/12/06`

## What's Changed

### Exciting New Features 🎉

- feat(grid): [grid] inline pager add padding left by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2449
- feat(card): [card] Optimize style by @Youyou-smiles in https://github.com/opentiny/tiny-vue/pull/2454
- feat(time-picker): [time-picker] Optimize and modify component style issues by @Youyou-smiles in https://github.com/opentiny/tiny-vue/pull/2452
- feat(locales): [locales] Optimize the style and demo by @Youyou-smiles in https://github.com/opentiny/tiny-vue/pull/2480
- feat(dept): [dept] Optimize style by @Youyou-smiles in https://github.com/opentiny/tiny-vue/pull/2487
- feat(card): Simplification and optimization of card components by @Youyou-smiles in https://github.com/opentiny/tiny-vue/pull/2496
- feat(theme): add old theme vars by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2503
- feat(grid-select): [grid-select] add grid select component and implement single/multiple select features by @kagol in https://github.com/opentiny/tiny-vue/pull/2509
- feat(grid-select): [grid-select] add filter/config features and optimize demo/api docs by @kagol in https://github.com/opentiny/tiny-vue/pull/2521
- feat(input): [input,date-picker] adapt input date-picker to the old theme style by @zzcr in https://github.com/opentiny/tiny-vue/pull/2524
- feat(pager): [pager] adapt to pager old theme by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2531
- feat(grid-select): [grid-select] add remote feature by @kagol in https://github.com/opentiny/tiny-vue/pull/2530
- feat(base-select): [base-select] optimize base select and fix some bugs by @kagol in https://github.com/opentiny/tiny-vue/pull/2532
- feat(theme): optimize the overall basic variables and update treeMenu css var by @zzcr in https://github.com/opentiny/tiny-vue/pull/2534
- feat(tree-select): [tree-select] add data init and optimize demo docs by @kagol in https://github.com/opentiny/tiny-vue/pull/2538
- feat(time-select): [time-select] Adapt to old components by @Youyou-smiles in https://github.com/opentiny/tiny-vue/pull/2525
- feat(date-picker): [date-picker] Adapt to the theme by @Youyou-smiles in https://github.com/opentiny/tiny-vue/pull/2544
- feat(guide): [guide] fix style issues in the old theme by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2547
- feat(steps): [steps] Adapting to the Default Theme by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2549
- feat(old-theme): [dropdown,grid,tree] modify incorrect css vars by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2551
- feat(grid): [grid] grid component adapt to old theme by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2554
- feat(milestone): [milestone] Adapting to the Default Theme by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2559
- feat: use catalog to uniformly manage pnpm project dependencies by @zzcr in https://github.com/opentiny/tiny-vue/pull/2560
- feat(milestone): [milestone] The example is modified to adapt to the default theme. by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2561
- feat(modal): [modal] add e2e-test and update modal demo of problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2567
- feat(form): [form] form component adapt to old theme by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2562
- feat(color-picker, color-select-panel): [color-picker,color-select-panel] format by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/2536
- feat(site): switch theme styles through routing by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2574
- feat(breadcrumb): [breadcrumb] modify delimiter by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2576
- feat(date-picker): [date-picker] Adapting to the old-theme by @Youyou-smiles in https://github.com/opentiny/tiny-vue/pull/2575
- feat: [select]reduce common package size by @zzcr in https://github.com/opentiny/tiny-vue/pull/2577
- feat(collapse): [collapse] fix style issues in the old theme by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2579
- feat: [config-provider] optimize global configuration component documentation by @zzcr in https://github.com/opentiny/tiny-vue/pull/2578
- feat: optimize basic variables and switch the overall rounded corner … by @zzcr in https://github.com/opentiny/tiny-vue/pull/2580
- feat: add space var to adapt to old theme by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2581
- feat: unified upgrade version number by @zzcr in https://github.com/opentiny/tiny-vue/pull/2589
- feat: add design smb packages by @zzcr in https://github.com/opentiny/tiny-vue/pull/2591
- feat(numeric): [numeric] add step strategy of props by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2584
- feat(locale): use Object.assign for better tree shaking by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2595
- feat(theme): [button] submit the initial version of aurora-theme-vars by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2596
- fix(site): add smb design-config support by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2599
- feat(bulletin-board): [bulletin-board] Add click events #2143 by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/2601

### Bug Fixes 🐛

- fix(popper-arrow): [tooltip, popover,dropdown] fix arrow's z-index, and remove popper-arrow class from popover,dropdown by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2446
- fix(tree): [tree] remove red color from demos by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2455
- fix(steps): repair bar step bar small gray dots by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2459
- fix(tag): update tag's padding,border-radius by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2458
- fix(drawer): [drawer] modify icon and demo problem by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2460
- fix(tree-select): add emit modelValue by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2461
- fix(milestone): [milestone] repair component sample document by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2463
- fix(drawer): [drawer] modify demo and icon by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2465
- fix(steps): [steps] fix vertical single chain text styles by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2466
- fix: grid radio add white background by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2467
- fix(tag): remove mini size of tag by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2468
- fix(tree): [button,tree] update tree demos and the plain button's border color by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2470
- fix(dialog-box): [dialog-box] modify demo by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2472
- fix(time-range): [date-picker,time-picker,select,action-menu] optimization demo and modify style for time-range by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2481
- fix(drawer): [drawer] modify height props,setting the height of the left and right sliders by @James-9696 in https://github.com/opentiny/tiny-vue/pull/2484
- fix: [virtual-scroll-box] fixed the wrong class and horizontal scrol… by @zzcr in https://github.com/opentiny/tiny-vue/pull/2482
- fix: [grid] release319, update website to fix layout in small screen by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2493
- fix(tabs): [tabs] Optimize the tabs document by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2497
- fix(site): fix Popper layers separate when scrolling through document by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2502
- fix(input): [input] fix input container 1px higher than input by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2504
- fix(docs): [anchor] Optimize the anchor document. by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2495
- fix(tree): [tree] fix parent node toggle when click child node margin by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2501
- fix(site): fix scroll bugs by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2506
- fix(site): fix site api table style by @zzcr in https://github.com/opentiny/tiny-vue/pull/2507
- fix(docs): fix the wrong filename by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2510
- fix(tree-select): [tree-select] fix tree-select can't load data dynamically close #2287 by @kagol in https://github.com/opentiny/tiny-vue/pull/2500
- fix(time-select): [time-select]After manually modifying the time, the initial time cannot be selected again. by @mengqiuleo in https://github.com/opentiny/tiny-vue/pull/2415
- fix(input): [input] fixed the error when using v-if to switch back and forth after configuring the displayOnly attribute by @zzcr in https://github.com/opentiny/tiny-vue/pull/2527
- fix(calendar-view): [calendar-view] Fix bug with invalid calendar hei… by @Youyou-smiles in https://github.com/opentiny/tiny-vue/pull/2520
- fix(docs): Fixed an issue where the document demo disappears in github-markdown-css5.8.0. by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2537
- fix(tabs): [tabs] Adapt to the old theme style by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2523
- fix(base-select): [base-select] fix style issues in the old theme by @kagol in https://github.com/opentiny/tiny-vue/pull/2535
- fix(base-select): fix size style by @kagol in https://github.com/opentiny/tiny-vue/pull/2541
- fix(steps): [steps] Added the visibleNum prop. by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2542
- fix(dropdown): [dropdown] fixed the data disorder issue caused by the composite scenario of two-layer components and self-invoking groups. by @zzcr in https://github.com/opentiny/tiny-vue/pull/2553
- fix(dialog-select): fix demos for dislog-select by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2552
- fix(chart): Fix chart dataZoom bug and colors bug by @Davont in https://github.com/opentiny/tiny-vue/pull/2513
- fix(dropdown): [dropdown] fix icon shaking when hover by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2557
- fix(option): [select] restore hoverItem method and fix the issue of i… by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2558
- fix(icon): [icon] The icon search algorithm is optimized. by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2563
- fix(icon): [icon] The icon search algorithm is optimized. by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/2569
- fix(notify): [notify] missing title parameter style exception by @betavs in https://github.com/opentiny/tiny-vue/pull/2571
- fix(button): [button,cascader] fix button's radius and cascader bgcolor by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2572
- fix(select): [select] fix the problem of multiple selection of hover … by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2566
- fix: fix grid, flowchart, grid, tree-menu bugs by @zzcr in https://github.com/opentiny/tiny-vue/pull/2588
- fix: remove mathlive demo to fixed site build error by @zzcr in https://github.com/opentiny/tiny-vue/pull/2587
- fix: fix color-select-panel error when publish by @zzcr in https://github.com/opentiny/tiny-vue/pull/2583
- fix(date-picker): [date-picker] Fix the issue of icons not being cent… by @Youyou-smiles in https://github.com/opentiny/tiny-vue/pull/2592
- fix(site): fix catalog flashing by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2593
- fix: [button-group] fixed the bug that multiple clicks on the same button would trigger multiple events by @zzcr in https://github.com/opentiny/tiny-vue/pull/2590
- fix: fix the error when starting the saas official website by @zzcr in https://github.com/opentiny/tiny-vue/pull/2594
- fix(transfer): [transfer] fix uncorrect vars for transfer by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/2598
- fix: fix build all components error by @zzcr in https://github.com/opentiny/tiny-vue/pull/2602
- fix(site): the aurora-theme switch function is added to the official website by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/2604

### Other Changes

- docs: fix error demos after add prefix by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2456
- refactor(grid): [grid] refactor grid radio style by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2462
- docs: optimize i18n docs by @kagol in https://github.com/opentiny/tiny-vue/pull/2483
- docs: add common footer and optimize demos scroll by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/2485
- style(action-menu): misspelled word by @betavs in https://github.com/opentiny/tiny-vue/pull/2431
- refactor(base-select): [base-select] remove tree/grid code from base-select by @kagol in https://github.com/opentiny/tiny-vue/pull/2522
- refactor: [color-select-panel] color select panel by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/2529
- refactor(mobile): refactor mobile components by @zzcr in https://github.com/opentiny/tiny-vue/pull/2548
- ci: add auto deploy site by @kagol in https://github.com/opentiny/tiny-vue/pull/2582
- docs: add algolia search by @kagol in https://github.com/opentiny/tiny-vue/pull/2603
- docs: optimize algolia search style by @kagol in https://github.com/opentiny/tiny-vue/pull/2605
