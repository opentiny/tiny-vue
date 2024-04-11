# 更新日志

## v2.15.0/v3.15.0

`2024/04/08`

## What's Changed

### Exciting New Features 🎉

- feat(sites): add theme route by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1478
- Cgm/add theme route by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1479
- fix(transfer ): update transfer xdesign by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1496
- feat(form): [form] add xDesign theme by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1507
- feat(action-menu): [action-menu] add XDesign theme by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1514
- feat(date-picker): [date-picker] date picker add quarter type by @kagol in https://github.com/opentiny/tiny-vue/pull/1513
- feat(statistic): statistic component by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1491
- feat(select): add show-proportion props of select component by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1503
- feat(rich-text-editor): [rich-text-editor] add image drag adjustment by @HAOUEHF in https://github.com/opentiny/tiny-vue/pull/1504
- feat(grid): [grid] add XDesign theme by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1518
- feat: Adapting to the X-design theme by @zzcr in https://github.com/opentiny/tiny-vue/pull/1534
- feat(charts): refactor chart components and replace chart-core with hui-charts by @Davont
  - refactored the underlying chart-core library which is used by all chart components
  - chart-core uses hui-charts instead of echarts as the underlying logic of the chart
  - chart components add a unified entry `option` based on the original API to facilitate unified calls
  - improved documentation and demos for all chart components
  - add theme switching function to adapt to different business needs
  - add chart status function `chartInstance`, providing 5 states: `loading`, `error`, `empty`, `stateEmpty`, `customize`

### Bug Fixes 🐛

- fix(site): anchor offset by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/1477
- fix(select): fix select/picker bugs by @zzcr in https://github.com/opentiny/tiny-vue/pull/1487
- fix(vue-component): [mind-map] border-radius & border by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/1510
- fix(quarter-panel): [date-picker] add mono: true by @kagol in https://github.com/opentiny/tiny-vue/pull/1519
- fix: Custom header height of dialog-box by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1530
- fix(search): [search] fixed the maxlength attribute bug in search by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1528
- fix(rich-text-editor): fix right package name by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1535
- fix(docs): fix the issue of the theme switch button not being centered by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1533
- fix(AMap): fix the problem of failure to display the AMap case in the document by @Davont
- fix(chart-heatMap): fix tooltip display error in bar-chart by @Davont
- fix(chart-bar): fix the problem of abnormal gap display when the histogram width is too low by @Davont
- fix(chart-histogram): fix the problem of histogram chart displaying blank in special scenarios by @Davont

### Other Changes

- docs(sites): add deep style in scoped by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1473
- fix(ip-address): [ip-address] add spaces by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1475
- docs(steps): optimization of steps docs by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/1474
- docs: add project name to issue template by @kagol in https://github.com/opentiny/tiny-vue/pull/1486
- docs(grid): [grid] fix tree-grid-insert-delete-update demo by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1495
- docs(sites): fix site overview input error by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1499
- docs: update changelog by @kagol in https://github.com/opentiny/tiny-vue/pull/1501
- [select] Optimized remote search demo by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/1488
- ci(publish): add github action auto publish by @zzcr in https://github.com/opentiny/tiny-vue/pull/1512
- docs(date-picker): [date-picker] fix format docs by @kagol in https://github.com/opentiny/tiny-vue/pull/1522
- docs(Numeric): [examples] add the description of change-compat for ch… by @AcWrong02 in https://github.com/opentiny/tiny-vue/pull/1521
- docs(sites): add aui adapter document by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1516
- ci(publish): add dispatch publish action by @zzcr in https://github.com/opentiny/tiny-vue/pull/1517
- fix: update numeric demo style by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1526

## New Contributors

- @HAOUEHF made their first contribution in https://github.com/opentiny/tiny-vue/pull/1504

## v2.14.0/v3.14.0

`2024/03/07`

## What's Changed

### Exciting New Features 🎉

- feat(vue): [mind-map] mindmap by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/1207
- feat(skeleton): skeleton component by @mengqiuleo in https://github.com/opentiny/tiny-vue/pull/1345
- feat(float-button): [float-button] add float-button by @fanbingbing16 in https://github.com/opentiny/tiny-vue/pull/1394
- feat(card): add card component by @shenjunjian
- feat auto import plugin by @mengqiuleo in https://github.com/opentiny/tiny-vue/pull/1397
- feat(time-line): refresh ui by @MNZhu in https://github.com/opentiny/tiny-vue/pull/1281
- feat(numeric): refresh ui by @MNZhu in https://github.com/opentiny/tiny-vue/pull/1258
- styles(action-sheet): [action-sheet] add action-sheet type by @jxhhdx in https://github.com/opentiny/tiny-vue/pull/1307
- styles(amount): [amount] add amount types by @jxhhdx in https://github.com/opentiny/tiny-vue/pull/1310
- styles(fall-menu): [fall-menu] add fall-menu types by @jxhhdx in https://github.com/opentiny/tiny-vue/pull/1315
- styles(tree-menu): [tree-menu] add tree-menu types by @jxhhdx in https://github.com/opentiny/tiny-vue/pull/1316
- styles(collapse): [collapse] add collapse types by @jxhhdx in https://github.com/opentiny/tiny-vue/pull/1317
- styles(drawer): [drawer] add drawer types by @jxhhdx in https://github.com/opentiny/tiny-vue/pull/1318
- styles(autocomplete): [autocomplete] add autocomplete types by @jxhhdx in https://github.com/opentiny/tiny-vue/pull/1322
- style(tag-group): [tag-group] improve ts types of components by @Floyd-bit in https://github.com/opentiny/tiny-vue/pull/1323
- styles(cascader): [cascader] add cascader types by @jxhhdx in https://github.com/opentiny/tiny-vue/pull/1324
- style(popconfirm): [popconfirm] improve typescript declaration of components by @Floyd-bit in https://github.com/opentiny/tiny-vue/pull/1325
- style(rate): [rate] improve typescript declaration of components by @Floyd-bit in https://github.com/opentiny/tiny-vue/pull/1328
- styles(ip-address): [ip-address] add ip-address types by @jxhhdx in https://github.com/opentiny/tiny-vue/pull/1329
- styles(async-flowchart): [async-flowchart] add async-flowchart types by @jxhhdx in https://github.com/opentiny/tiny-vue/pull/1312
- styles(area): [area] add area types by @jxhhdx in https://github.com/opentiny/tiny-vue/pull/1311
- feat(dialog-box): [dialog-box] make the dialogBox drag outside the window by @wNing50 in https://github.com/opentiny/tiny-vue/pull/1268
- style(user-head): [user-head] improve typescript declaration of compo… by @Floyd-bit in https://github.com/opentiny/tiny-vue/pull/1380
- fix(carousel ): [carousel] update carousel xdesign by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1422
- fix(badge): [badge] update badge xdesign by @You-Hw-Y in https://github.com/opentiny/tiny-vue/pull/1420
- feat(date-picker): [date-picker] support xdesign by @kagol in https://github.com/opentiny/tiny-vue/pull/1417
- feat(slider): [slider] marks supported, input range supported by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1429
- [drawer] fix smb theme by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/1411
- feat(vue): add vue sub packages dependencies by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1424
- fix(transfer ): [transfer] update transfer xdesign by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1419
- fix(skeleton): [skeleton]add skeleton of smb theme by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1410
- feat(loading): [loading] smb theme by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1431
- fix(Switch): [Switch] add keydown support and improth the accessibility by @AcWrong02 in https://github.com/opentiny/tiny-vue/pull/1428
- feat(vue): [popconfirm] add popper-options props by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1439
- feat(theme/input): [input] smb theme by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1463
- feat(search): [search] Increase input maximum character limit attribu… by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1457
- feat(search): refresh ui by @MNZhu in https://github.com/opentiny/tiny-vue/pull/1469

### Bug Fixes 🐛

- fix(build): fix build error and update versions by @zzcr in https://github.com/opentiny/tiny-vue/pull/1254
- fix(calendar-view): [calendar-view] week display error by @Jevin0 in https://github.com/opentiny/tiny-vue/pull/1241
- fix(time): [time-picker] Scroll to the specified position on the second click by @wNing50 in https://github.com/opentiny/tiny-vue/pull/1169
- fix(slider): [slider] In input box mode, set the min attribute to a n… by @AcWrong02 in https://github.com/opentiny/tiny-vue/pull/1202
- feat(relase) sync relase to dev by @zzcr in https://github.com/opentiny/tiny-vue/pull/1306
- fix: fix tsconfig for not Vue projects by @xiejay97 in https://github.com/opentiny/tiny-vue/pull/1342
- fix(cli): package.json missing dependency when create ui by @mengqiuleo in https://github.com/opentiny/tiny-vue/pull/1339
- fix(site): async-highlight lost reactivity by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/1344
- fix(grid): [grid] fix the abnornal blank block when quantity from 500… by @wNing50 in https://github.com/opentiny/tiny-vue/pull/1321
- fix(pull-refresh): fix pull up by @MNZhu in https://github.com/opentiny/tiny-vue/pull/1235
- fix(col): [layout] Fix Vue warning with configuration span of 24 by @falcon-jin in https://github.com/opentiny/tiny-vue/pull/1272
- fix(numeric): [numeric] Fix Bug caused by initial value greater than maximum by @wkif in https://github.com/opentiny/tiny-vue/pull/1284
- fix(timeline): [time-line] fix console error about `event click undefined` by @gweesin in https://github.com/opentiny/tiny-vue/pull/1297
- fix(dropdown): [dropdown] Fix the issue of dropdown component causing warning messages in the console: Component emitted event "is-disabled" but it is neither declared in the emits option by @liumingxiy in https://github.com/opentiny/tiny-vue/pull/1356
- fix(tree-menu): [tree-menu]fix treeMenu error in vue2 by @zzcr in https://github.com/opentiny/tiny-vue/pull/1371
- fix(anchor):[anchor]When the anchor component has a default currentLink, the style is not the expected style by @fanbingbing16 in https://github.com/opentiny/tiny-vue/pull/1368
- fix(date-picker): [date-picker] fixed the issue that entering date did not work by @kagol in https://github.com/opentiny/tiny-vue/pull/1386
- fix(modal): [modal] The Modal Modal box component should not automatically close when hovering over a message with type="message" by @AcWrong02 in https://github.com/opentiny/tiny-vue/pull/1377
- fix(mobile-first): fix mobile-first components bugs by @zzcr in https://github.com/opentiny/tiny-vue/pull/1426
- fix(renderless): fix designConfig error by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1423
- fix(types): fix button group ts type warning by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1430
- fix(watermark): [watermark] fix the pic watermark above the content by @wNing50 in https://github.com/opentiny/tiny-vue/pull/1425
- fix(theme/notify): [notify] fix notify title white-space by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1413
- style(rich-text-editor): [rich-text-editor] css variable error by @Jevin0 in https://github.com/opentiny/tiny-vue/pull/1367
- fix: fix theme tool by @kagol in https://github.com/opentiny/tiny-vue/pull/1433
- fix(ci): delete e2e-comment useless 'echo' by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1440
- fix(vue/grid/src/edit/src/methods): [grid] fix-1383 The activeMethod … by @David-TechNomad in https://github.com/opentiny/tiny-vue/pull/1407
- fix(ci): fix e2e test pr commment by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1466
- fix(time-picker): fix time-picker components bug by @You-Hw-Y in https://github.com/opentiny/tiny-vue/pull/1461
- fix(theme/notify): [notify] word-break by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1464

### Other Changes

- chore: [date-picker] config playwright timezoneId by @kagol in https://github.com/opentiny/tiny-vue/pull/1253
- build(internal): fix inline chunk error by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1256
- feat(switch): [switch] amend demo and API bug of switch by @You-Hw-Y in https://github.com/opentiny/tiny-vue/pull/1257
- test(tag): [tag] improve unit testing of components by @Floyd-bit in https://github.com/opentiny/tiny-vue/pull/1261
- fix(build): fix build error and update versions by @zzcr in https://github.com/opentiny/tiny-vue/pull/1269
- docs(components): [anchor] Test document walkthrough by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1274
- test(wizard): [wizard] improve unit testing of components by @Floyd-bit in https://github.com/opentiny/tiny-vue/pull/1275
- fix(collapse): [collapse] fix collapse api type by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1271
- test(TimeSelect): improve unit testing of TimeSelect Component by @AcWrong02 in https://github.com/opentiny/tiny-vue/pull/1270
- docs(sites): [grid] add custom pager in grid demo by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1288
- docs(sites): add v3.13.0 changelog by @zzcr in https://github.com/opentiny/tiny-vue/pull/1278
- feat(playground): add 3.13 version and change layoutReverse default by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1291
- docs(progress): [progress] Optimization Merge Example by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1282
- feat(popconfirm): [popconfirm] optimize docs and API by @You-Hw-Y in https://github.com/opentiny/tiny-vue/pull/1301
- test(user-head): [user-head] improve unit testing of components by @Floyd-bit in https://github.com/opentiny/tiny-vue/pull/1296
- docs(modal/dialog-box): [modal,dialog-box] update docs by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1287
- docs(tree): [tree] Clear redundant default-expand-all attribute descripttions by @Jevin0 in https://github.com/opentiny/tiny-vue/pull/1285
- docs(time-picker): [time-picker] optimize docs and demos by @You-Hw-Y in https://github.com/opentiny/tiny-vue/pull/1273
- feat(badge): [badge] optimize docs and API by @You-Hw-Y in https://github.com/opentiny/tiny-vue/pull/1302
- docs(TimeSelect): [TimeSelect]improve ths docs of TimeSelect by @AcWrong02 in https://github.com/opentiny/tiny-vue/pull/1283
- docs(date-picker): [date-picker] optimize date-picker docs by @kagol in https://github.com/opentiny/tiny-vue/pull/1320
- docs(container): [container] optimize docs and demos by @You-Hw-Y in https://github.com/opentiny/tiny-vue/pull/1333
- docs(site/notify): [notify] specification document by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1337
- docs(site/input): [input] specification document by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1336
- docs(site/loading): [loading] specification document by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1338
- docs(anchor):[anchor]Fixed mode on and off with text reversed by @fanbingbing16 in https://github.com/opentiny/tiny-vue/pull/1304
- feat(ci): add pr preview action by @mengqiuleo in https://github.com/opentiny/tiny-vue/pull/1351
- fix(site/loading): [loading] rectify loading size prop description by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1353
- docs(CONTRIBUTING): supplement the pr title description document by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1360
- docs(sites): add saas sites env by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1370
- fix(sites): add saas sites env by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1385
- chore(ci): add pr preview through vercel deploy by @kagol in https://github.com/opentiny/tiny-vue/pull/1388
- docs: optimize contributing guide docs by @kagol in https://github.com/opentiny/tiny-vue/pull/1382
- docs(time-select): [time-select] optimize docs and demos by @You-Hw-Y in https://github.com/opentiny/tiny-vue/pull/1403
- feat(autocomplete): [autocomplete] adapt to autocomplete smb themes by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1421
- docs(steps): optimize demo by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/1415
- fix(ci): delete pr github action by @mengqiuleo in https://github.com/opentiny/tiny-vue/pull/1393
- ci: chat gpt code review by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/1391
- (docs): update drag-outside-window of dialog-box by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1376
- feat(collapse): [collapse] updata collapse xdesign by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1427
- feat(ci): e2e add vue2 by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1398
- docs(time-select): [time-select] optimize docs and demos by @You-Hw-Y in https://github.com/opentiny/tiny-vue/pull/1418
- fix(docs): update docs of fall-menu by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1432
- fix(docs): update docs of dialog-box by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1434
- fix(modal): [modal]optimize modal demo by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1437
- docs(site/loading): [loading] improve documentation by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1451
- docs(site/popeditor): improve documentation by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1438
- test(e2e): [grid]fix grid e2e test error by @zzcr in https://github.com/opentiny/tiny-vue/pull/1458
- docs(radio): [radio] optimize demo by @You-Hw-Y in https://github.com/opentiny/tiny-vue/pull/1462
- docs(sites): change apis doc and hidden form menu by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1472
- docs(sites): add 3.14 version playground by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1470

## New Contributors

- @Jevin0 made their first contribution in https://github.com/opentiny/tiny-vue/pull/1241
- @mengqiuleo made their first contribution in https://github.com/opentiny/tiny-vue/pull/1340
- @liumingxiy made their first contribution in https://github.com/opentiny/tiny-vue/pull/1356

## v2.13.0/v3.13.0

`2024/01/05`

## What's Changed

### Exciting New Features 🎉

- feat(sites): add 3.12 version runtime by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1001
- feat(docs): add bulletin feature on site by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1010
- feat(container): add mobile-container by @MNZhu in https://github.com/opentiny/tiny-vue/pull/958
- feat(action-menu): [action-menu] New Theme Adaptation by @shonen7 in https://github.com/opentiny/tiny-vue/pull/771
- feat(button): [button] add ghost props by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1029
- feat(pull-refresh): refresh pull-refresh UI by @MNZhu in https://github.com/opentiny/tiny-vue/pull/965
- feat(action-menu): [dropdown,action-menu] ActionMenu component adds showIcon and suffixIcon attributes，supplemented the documents and examples. by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/1051
- feat(charts) update docs and chart components by @zzcr in https://github.com/opentiny/tiny-vue/pull/1070
- build(theme): Add the index.less file package of the root directory by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1078
- feat(openinula): add openinula base structure by @zzcr in https://github.com/opentiny/tiny-vue/pull/1093
- feat(react): optimize react file structure by @zzcr in https://github.com/opentiny/tiny-vue/pull/1099
- feat(common): Compatible with yy/MM/dd HH: mm: ss time format by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1121
- feat(tag): add tag-mobile by @MNZhu in https://github.com/opentiny/tiny-vue/pull/976
- feat(label): add label mobile by @MNZhu in https://github.com/opentiny/tiny-vue/pull/1098
- feat(file-upload): [file-upload] Add new features to the progress bar by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1139
- feat(solid): add solid file structure by @zzcr in https://github.com/opentiny/tiny-vue/pull/1140
- feat(button-group): [button-group] add default empty text by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1155
- feat(icon): [icon] Add add-picture svg by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1146
- feat(automate): add script projects such as statistics and document a… by @zzcr in https://github.com/opentiny/tiny-vue/pull/1179
- feat(internals): add demos scan script to find demos problem by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1180
- feat(input): [input] add memorySpace props which can set max number of addMemory by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1188
- feat(option): [select] Option text display with extra long dots and dots，Added icon attribute, supporting custom icons. by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/1190
- feat(button): refresh button ui by @MNZhu in https://github.com/opentiny/tiny-vue/pull/1171
- feat(theme): [select] The DesignCloud theme adapts to scenarios such as empty data, error status, grouping, and search box of the Select component by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/1224
- feat(playground): add playground support mobile mode by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1226
- feat(alert): [alert] Add unlimited theme switching function to adapt to alert unlimited themes by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1229
- feat(theme): Add two basic variables for the theme by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1213
- feat(theme):[carousel,transfer,divider]Add SMB theme and Style fixed by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1195

### Bug Fixes 🐛

- fix(tag): [tag] Fix the pre deletion operation function by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1057
- fix(select): [select] Fixed an issue where a blank area is displayed when the select component uses the optimization attribute. by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/988
- fix: fix bulletin text by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1014
- fix(sites): demo fill the row when it is only one by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1015
- fix(Link): [Link]Link text link theme style, when the mouse is placed on it, the same color is displayed by @AcWrong02 in https://github.com/opentiny/tiny-vue/pull/1005
- fix(e2e): avoid bulletin when doing e2e test by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1019
- fix(file-upload): [file-upload] Fix issues with warnings and errors in vue3 examples by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1026
- fix(site): fix single mode, click name and demo not jump by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1030
- ci(e2e): fix e2e install error by @zzcr in https://github.com/opentiny/tiny-vue/pull/1032
- fix(renderless/input): [input] fix value become empty when the input type changed by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1025
- fix(sites): fix console warning by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1042
- fix(grid): [grid] fix grid valid support promise by @zzcr in https://github.com/opentiny/tiny-vue/pull/1045
- fix(sites): change demo default mode and delete bulletin by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1049
- fix(renderless/slider): [slider] fix range value has changed but style has not changed by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1046
- fix(grid): [grid] fix grid sort-by bug by @zzcr in https://github.com/opentiny/tiny-vue/pull/1055
- fix(form): [form] fix form item size height by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1054
- fix(slider): [slider] value of input does not change when using max and min by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1056
- fix(theme): [button-group] fix button group css var name by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1072
- fix(tree): [tree, tooltip] fix tree's tooltip's compositions demo by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1103
- fix(select): [select] Fix the issue of ineffective use of noMatchText attribute in custom filtering of select component by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/1118
- fix(theme): [alert, popconfirm] pc template remove tailwind merge by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1120
- fix(chart-beta): Update dependencies and imports in chart modules by @Davont in https://github.com/opentiny/tiny-vue/pull/1115
- fix(time-line): [time-line] fixed time-field props can't link to demo by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/1126
- feat: Error reported when the maximum value is less than the minimum value by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/973
- fix(components): [slider] prevent default event when bind keydown event by @betavs in https://github.com/opentiny/tiny-vue/pull/1038
- fix(calendar-view): fix import clause by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1138
- 🐞 fix(button): fix loading style by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/1124
- [steps] solved the problem that click item and then open new window by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/1040
- fix(components): fix some bugs by @zzcr in https://github.com/opentiny/tiny-vue/pull/1148
- fix(playground): update unpkg url by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1145
- fix(theme/src/input): [input] fix input append slot css when select is in it by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1165
- fix(slider): [slider] Show the tooltip after dragging the Slider component. by @wNing50 in https://github.com/opentiny/tiny-vue/pull/1123
- fix(slider): [slider]The Slider component should prompt an error when min > max by @AcWrong02 in https://github.com/opentiny/tiny-vue/pull/1156
- build(theme): Patch theme packaging and generation function by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1162
- fix(select): [select] fix event retargeting in debounce by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1154
- fix(tag): fix color value by @MNZhu in https://github.com/opentiny/tiny-vue/pull/1170
- fix(automate): fix reviews comments by @zzcr in https://github.com/opentiny/tiny-vue/pull/1187
- fix(toast): fix text padding by @MNZhu in https://github.com/opentiny/tiny-vue/pull/1185
- fix(pull-refresh): 调整 foot 高度 by @MNZhu in https://github.com/opentiny/tiny-vue/pull/1181
- [drawer]: fixed docs bug of drawer. by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/1201
- fix(col): [layout] fix layout cols=24 can't use by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1223
- docs(progress): [progress] Fix Test Sheet: Document Error by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1221
- fix(mobile): some css bugs of input and alert by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/1220
- fix(grid): [grid] fix the problem that the view is not updated after… by @zzcr in https://github.com/opentiny/tiny-vue/pull/1193
- fix(radio): [radio] amend demo and API bug of radio by @You-Hw-Y in https://github.com/opentiny/tiny-vue/pull/1219
- fix(toggle-menu): [toggle-menu] ToggleMenu's get-menu-data-async doesn't work at all. close #328 by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1232
- fix(components): [grid] repeatedly requesting data by @betavs in https://github.com/opentiny/tiny-vue/pull/1208
- fix(components):[numeric]Fixed a bug where manually entering values does not change according to step after fixing the stepStrictly property setting by @fanbingbing16 in https://github.com/opentiny/tiny-vue/pull/1003
- fix(popper): [popover]add stopPropagation for wheel event by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1245

### Other Changes

- Fixed input error and repeated import TinySwitch by @ichynul in https://github.com/opentiny/tiny-vue/pull/984
- test(Numeric): [Numeric] add unit test to Numeric Component by @AcWrong02 in https://github.com/opentiny/tiny-vue/pull/983
- docs(site): add vetsion Tip. deprecated credit-card-form, slide-bar. experimental rich-text-editor. new qr-code, watermark by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/987
- test(tabs): [tabs] update tabs E2E test dragger by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/985
- fix(site):text error, change 'bate' ->' beta' by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/993
- fix(ci): [select] fix dirname generate in e2e github action by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/995
- docs(button): [button] optimize button demo by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/999
- docs(grid): [grid] update grid docs by @zzcr in https://github.com/opentiny/tiny-vue/pull/996
- docs(changelog): add v3.12.0 changelog by @zzcr in https://github.com/opentiny/tiny-vue/pull/998
- docs(tree): fix demo's description by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1022
- ci(eslint): add husky and commitlint to eslint code by @zzcr in https://github.com/opentiny/tiny-vue/pull/1021
- feat(sites): add attribute api is sorted by dictionary by @zzcr in https://github.com/opentiny/tiny-vue/pull/1028
- test(file-upload): [file-upload] update file-upload E2E test by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/960
- docs(link): [link] e2e and docs demos optimize by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1023
- chore(site): [input, cascader, autocomplete] Perfect document format by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1044
- docs(search): [search] Optimization search docs event demo by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1043
- docs(sites): optimize docs md by @zzcr in https://github.com/opentiny/tiny-vue/pull/1034
- docs(site): Optimization description block by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1041
- Fix some bugs of demo by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/1037
- fix(guide):[guide] fix guide documents by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1047
- docs(carousel/color-picker/color-select-panel/config-provider/crop/divider/link-menu/slide-bar/toggle-menu/user-contact/user-head/):update text correction description by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1027
- fix(breadcrumb):[breadcrumb] fix breadcrumb documents by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1061
- docs(cascader): [cascader, cascader-panel] Improve documentation by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1065
- docs(wizard): [wizard] Increase the top outer margin of node names by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1053
- docs(milestone): [milestone] Optimization milestone docs based on testing by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1052
- docs(grid): [grid] add grid custom loading demos and api by @zzcr in https://github.com/opentiny/tiny-vue/pull/1048
- docs(sites): [button, button-group]: demo style optimize by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1067
- docs(modal/numeric/dialog-box/tree-menu):update text correction description. by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1062
- chore: update xdesign basic tokens by @kagol in https://github.com/opentiny/tiny-vue/pull/1071
- docs(action-menu,dropdown): [action-menu,dropdown] The Dropdown and ActionMenu component documents are optimized, and the warning message is removed. by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/1068
- docs(transfer): [transfer] remove queryclear demo, and add some e2e test by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1066
- docs: clarify the specification of Pull Request Title by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1080
- fix(grid): [grid] optimize grid apis by @zzcr in https://github.com/opentiny/tiny-vue/pull/1069
- fix(pop-upload): [pop-upload] Optimized the document and added e2e test cases. by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1079
- test(infinite-scroll):[infinite-scroll] update infinite-scroll E2E test by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1106
- docs(site): methods api do not show defaultValue by @zzcr in https://github.com/opentiny/tiny-vue/pull/1105
- docs(site): [detail-page, scroll-text] Improve documentation by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1109
- docs(tabs): [tabs] Add documentation for using tab items by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1107
- chore(site): deprecated DetailPage by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1110
- fix(filter-panel): [filter-panel] Optimize documenet and e2e by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1104
- test(bulletin-board):[bulletin-board] update bulletin-board E2E test by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1114
- docs(sites): change api properties to props by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1117
- test(text-popup):[text-popup] update text-popup E2E test by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1119
- perf(common): Make the twMeger function support shake tree by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1116
- docs(sites): [pager, form] optimize docs and demos by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1135
- fix: [cascader, loading] fix docs api jump demo by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/1129
- docs(carousel,color-picker,color-select-panel,config-provider,crop):Update docs text by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1130
- docs(fix): [tree,popover,transfer] fix docs by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1128
- docs(components): [anchor,file-upload,pop-upload,tabs,wizard] Document Optimization by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1127
- docs(components): [select,action-menu] Select and ActionMenu and DialogSelect component document optimization. by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/1136
- docs(grid): [grid] fix grid docs by @zzcr in https://github.com/opentiny/tiny-vue/pull/1137
- test(qr-code):[qr-code] update qr-code E2E test by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1143
- test(fullscreen):[fullscreen] update fullscreen E2E test by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1131
- docs(anchor): [anchor] optimized the document by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1149
- test(watermark):[watermark] update watermark E2E test by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1150
- docs(sites): [drop-times,time-select] optimize docs and demos by @You-Hw-Y in https://github.com/opentiny/tiny-vue/pull/1151
- docs(sites): [checkbox] optimize docs and demos by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1161
- docs(sites): [form, alert] fix not pass e2e case by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1172
- docs(select): [select] Optimize the select component documentation and fix error issues by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/1167
- docs(fix):Update dialog-box docs by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1173
- fix(collapse):[collapse] fix collapse documents by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1174
- docs(components): [file-upload]Adding single quotes to the default value of a stri… by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1176
- fix(nav-menu):[nav-menu] fix nav-menu documents by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1175
- fix(qr-code):[qr-code] fix qr-code documents by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1178
- refactor(grid): [grid] add grid plugins by @zzcr in https://github.com/opentiny/tiny-vue/pull/1168
- docs(grid): update grid docs by @zzcr in https://github.com/opentiny/tiny-vue/pull/1189
- test(time-select): [time-select] amend time-select e2e test by @You-Hw-Y in https://github.com/opentiny/tiny-vue/pull/1196
- docs(file-upload): [file-upload] Optimize documents based on user needs by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1194
- feat(icon): [icon] add sorting function by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1182
- docs(image):[image,transfer,tree] update image\transfer's docs by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/1209
- test(Switch): [Switch]improve unit testing of components by @AcWrong02 in https://github.com/opentiny/tiny-vue/pull/1205
- docs(form): [form] form docs demo optimize by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1225
- fix(rate): [rate] fix rate documents by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1227
- docs: add credits to README by @kagol in https://github.com/opentiny/tiny-vue/pull/1108
- fix(ip-address): [ip-address] fix ip-address documents by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1218
- docs: add license of vue-docs by @kagol in https://github.com/opentiny/tiny-vue/pull/1231
- docs(dialog-select): Complete change event documentation.close #612 by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/1230
- refactor(pager): [pager] pager component refactor by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1198
- fix(watermark): [watermark] fix watermark documents by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1234
- fix(tag-group): [tag-group] fix tag-group documents by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/1233
- docs(fix): update(numeric/config-provider/dialog-box/modal/fall-menu/user-head) docs by @James-9696 in https://github.com/opentiny/tiny-vue/pull/1215
- docs(components): [progress, search] Repair progress bar document optimization test sheet by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1236
- docs(form): [form] form docs add trigger usage by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/1240
- docs(anchor): [anchor] Fix test sheets, optimize anchor component documentation by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/1239
- docs(grid): [grid] fix-grid-docs by @zzcr in https://github.com/opentiny/tiny-vue/pull/1243
- docs: change props type VueComponent to Component by @kagol in https://github.com/opentiny/tiny-vue/pull/1244
- test(container): [container] improve unit testing of components by @Floyd-bit in https://github.com/opentiny/tiny-vue/pull/1246

## New Contributors

- @ichynul made their first contribution in https://github.com/opentiny/tiny-vue/pull/984
- @Davont made their first contribution in https://github.com/opentiny/tiny-vue/pull/1115
- @wNing50 made their first contribution in https://github.com/opentiny/tiny-vue/pull/1123
- @Floyd-bit made their first contribution in https://github.com/opentiny/tiny-vue/pull/1246

## v2.12.0/v3.12.0

`2023/11/30`

### Exciting New Features 🎉

- feat: 新增 QrCode 二维码、Watermark 水印两个全新组件 🎊
- feat(Timeline): Timeline component adapts to new themes by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/615
- feat(grid-slot):Add Table Header Slot by @ianxinnew in https://github.com/opentiny/tiny-vue/pull/674
- feat(components): [date-picker] add props time-editable by @kagol in https://github.com/opentiny/tiny-vue/pull/696
- feat(components):[tree-menu]The placeholder of the search box can be customized by @fanbingbing16 in https://github.com/opentiny/tiny-vue/pull/686
- feat(theme): [playground] add design theme in playground by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/679
- refactor(test-e2e): the e2e tests in example/site/pc/app support baseURL by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/693
- feat: update mobile-first and saas by @zzcr in https://github.com/opentiny/tiny-vue/pull/702
- feat(component): [file-upload] add form error verification an… by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/690
- feat(react): use api of @vue/runtime-core in tiny-react by @pe-3 in https://github.com/opentiny/tiny-vue/pull/710
- feat(components):[color-picker] add props size、predefine and history by @fanbingbing16 in https://github.com/opentiny/tiny-vue/pull/711
- Fileupload/cryptojs version by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/775
- feat(react): add render stack to build parent-child relationship by @pe-3 in https://github.com/opentiny/tiny-vue/pull/770
- feat(color-picker): dynamic trigger background color by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/793
- feat(theme): Add default values for theme variables by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/842
- feat(internals/playwright-config): [input] Change the default e2e test environment to site by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/855
- feat(sites): add mobile-first playground by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/864
- Add new token for TinyVueMobile by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/829
- fix(button): [button] delete duplicate css var by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/874
- Add new token and delete unused code by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/877
- feat(vue-theme): add theme-tool version in style attribute by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/872
- feat(toast): add mobile-toast by @MNZhu in https://github.com/opentiny/tiny-vue/pull/751
- feat(sites): add saas playground by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/893
- build(internal): build all template when run build:runtime by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/895
- feat(radio): refresh radio UI by @MNZhu in https://github.com/opentiny/tiny-vue/pull/845
- feat(switch): refresh switch UI by @MNZhu in https://github.com/opentiny/tiny-vue/pull/852
- feat(react): reimplementing Vue instance in React by @pe-3 in https://github.com/opentiny/tiny-vue/pull/783
- feat(color-select-panel): add color-update event by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/884
- feat(grid): [grid] add dynamic filter by @zzcr in https://github.com/opentiny/tiny-vue/pull/912
- feat(theme): Add Chinese descriptions of theme variables by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/932
- fix(color-picker): [color-picker] Standardize Style Files by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/950
- build(theme): [theme] Theme package structure optimization by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/949
- feat(site): added component version prompting by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/977

### Bug Fixes 🐛

- fix(playground): fix CDN url by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/624
- fix(rich-text-editor): Add mono:true params by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/626
- fix(check-select-demo): Unify Check Demo Optimize Example Show Style by @Xppp0217 in https://github.com/opentiny/tiny-vue/pull/625
- fix(modlue): When repairing on-demand installation of components, no … by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/660
- fix(dev2): when run dev2, fix the mode value by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/673
- fix mobile-first's demo config error by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/675
- fix(components): [date-picker] fix year type current year color by @kagol in https://github.com/opentiny/tiny-vue/pull/698
- fix(select-events-merge):Select Multiple Events Merge by @Xppp0217 in https://github.com/opentiny/tiny-vue/pull/663
- fix(amount): fix custom-currency demo disabled by @dyh333 in https://github.com/opentiny/tiny-vue/pull/667
- fix(form): remove native modifiy on DOM element by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/701
- fix(component): [anchor] fix anchor not updating in real-time when clicking and j… by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/706
- fix(internals): fix playwright-config syntax bug by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/705
- fix(components): [cascader] fix cascader node active style using smb aurora theme by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/713
- fix(tabs): [tabs] fix tab content padding not work close #735 by @kagol in https://github.com/opentiny/tiny-vue/pull/736
- fix(components): [tooltip] when type is error, the background is not as expected by @betavs in https://github.com/opentiny/tiny-vue/pull/719
- fix(sites): fix api table link error by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/754
- fix(components): [drawer] The animation direction of left/top/bottom … by @AcWrong02 in https://github.com/opentiny/tiny-vue/pull/738
- fix(sites): fix english mode doc by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/784
- fix(theme): [slider] fix css var not effective by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/790
- fix: fix the error caused by not setting defaultValue by @kagol in https://github.com/opentiny/tiny-vue/pull/791
- fix resolveMode and remove outer initComponent() by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/803
- fix(components): [file-upload] Fixed an issue where the deletio… by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/769
- fix(vue/grid/edit): [grid] fix Number input box returns string type data by @David-TechNomad in https://github.com/opentiny/tiny-vue/pull/772
- fix(components): [Collapse] Collapse The foldable panel can only be e… by @AcWrong02 in https://github.com/opentiny/tiny-vue/pull/758
- docs(wizard): [wizard] docs optimization, add Events Api, fixed Event Bug by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/805
- fix(components): [collapse] fix overflow by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/835
- fix: Deserialization problem by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/836
- docs(components): Further optimize the document, add empty default value display,and add API anchor dynamic display function by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/859
- fix(col): [col] fix error when col not use in layout by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/858
- fix(package.json): [input] pnpm site by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/869
- fix(components): [tabs] Fix bug when dynamically switching tab style to default in tabs by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/846
- fix(components): [anchor] fix anchor change event warnning by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/870
- fix(sites): fix mobile-first playground icon style by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/883
- fix(dcos): Fixed the slow initial loading of resources in official we… by @zzcr in https://github.com/opentiny/tiny-vue/pull/887
- David/fix 722 by @David-TechNomad in https://github.com/opentiny/tiny-vue/pull/811
- fix(vite): update Vite version and delete useless package by @zzcr in https://github.com/opentiny/tiny-vue/pull/892
- fix(e2e): modify playwright retry times by @zzcr in https://github.com/opentiny/tiny-vue/pull/898
- fix(grid): [grid] fix grid fixed style error when config prop border by @zzcr in https://github.com/opentiny/tiny-vue/pull/889
- fix(grid): [grid] Fix the filtering function problem of grid componen… by @zzcr in https://github.com/opentiny/tiny-vue/pull/897
- fix(renderless/common): [autocomplete] fix poperOptions undefind bug by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/899
- fix(vue-renderless): [cascader] fix cascade component multiple selection configuration emitPath: false does not echo the selected name by @falcon-jin in https://github.com/opentiny/tiny-vue/pull/844
- docs(i18n): fix vue2 i18n’s docs error by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/911
- fix(grid): [grid] fix tree table expand slowly bug by @zzcr in https://github.com/opentiny/tiny-vue/pull/906
- fix(docs): Fix the abnormal display of anchor component after officia… by @zzcr in https://github.com/opentiny/tiny-vue/pull/917
- fix(input): [input] Fixed the clearable attribute being invalid when the append slot was opened by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/922
- fix(vue-theme): fix popconfirm css var incorrect name by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/940
- fix(tree): misalignment issue by @GaoNeng-wWw in https://github.com/opentiny/tiny-vue/pull/936
- perf(rich-text-editor): Optimized component code to add v-model echo by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/947
- fix(renderless): synchronize release code to dev by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/954
- fix(sites): not display types anchor when doc has not types by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/969
- fix(rich-text): delete repeat import by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/967
- fix(sites): fix error relative path in playground by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/959
- fix(sites): fix api table style error by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/975
- fix(link): fix link icon color error by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/982

### Other Changes

- ci(test-e2e): add github actions for E2E Testing by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/671
- fix components bug and update docs by @zzcr in https://github.com/opentiny/tiny-vue/pull/700
- fix(docs): [grid] update big data docs by @zzcr in https://github.com/opentiny/tiny-vue/pull/703
- docs(search): [search] Add types display area and Optimize search documents by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/720
- docs(sites): add faq doc in guidance by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/716
- docs: add commit message guideline by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/715
- feat(react): js to ts by @kagol in https://github.com/opentiny/tiny-vue/pull/733
- docs(menu): Adjust the category of list, imageViewer, table, dropdown… by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/718
- docs(site): [cascader] improve the cascader component documentation by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/728
- chore(mobile): add icon-mobile-error-white/icon-mobile-success-white by @kagol in https://github.com/opentiny/tiny-vue/pull/730
- feat: prompt the contributor to contributing guide when the e2e test by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/743
- fix(site): [split] correct the description of the event document by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/752
- chore(docs): [checkbox] optimize checkbox demo and api by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/750
- fix: avoid injection risks when parsing PR title by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/748
- docs(site): [autocomplete] complete the document by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/753
- chore(docs): [radio] optimize radio demo and api by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/761
- docs(grid): [grid] update grid docs by @zzcr in https://github.com/opentiny/tiny-vue/pull/762
- docs(date-picker): [date-picker] optimize date-picker api docs by @kagol in https://github.com/opentiny/tiny-vue/pull/767
- docs(milestone): [milestone] update milestone docs by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/765
- fix(docs): [modal] update default value docs by @betterdancing in https://github.com/opentiny/tiny-vue/pull/742
- docs(tag): [tag] tag docs optimization by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/768
- chore(docs): [pager] optimize pager demo and api by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/776
- docs(site): [loading] Supplementary document by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/777
- chore(docs): [badge] optimize badge demo and api by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/778
- chore(docs): [switch] optimize switch demo and api by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/782
- docs(anchor): [anchor] anchor docs optimization by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/781
- docs(icons): [icon] icon docs optimization by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/779
- docs(site): [input] Supplementary document by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/787
- docs(progress): [progress] progress docs optimization by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/789
- docs(time-picker): [time-picker] optimize time-picker api docs by @kagol in https://github.com/opentiny/tiny-vue/pull/795
- docs(collapse): [collapse] optimize collapse docs by @kagol in https://github.com/opentiny/tiny-vue/pull/798
- docs(guide): [guide] optimize guide docs by @kagol in https://github.com/opentiny/tiny-vue/pull/799
- docs(Steps): [Steps] optimize steps docs by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/801
- docs(popover): [popover]Improve the description of the role of the modelValue attribute by @AcWrong02 in https://github.com/opentiny/tiny-vue/pull/800
- docs(site): [slider] Improve documentation by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/807
- docs(button): [button] optimize button demo and api by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/819
- docs(site): [notify] Improve documentation by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/792
- Hyl/optimize timeline docs by @Huangyilin19 in https://github.com/opentiny/tiny-vue/pull/808
- docs(breadcrumb): [breadcrumb] docs optimization by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/810
- chore(docs): [form] optimize form demo and api by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/813
- docs(site): [rate] Improve documentation by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/814
- docs(ip-address): [ip-address] optimize ip-address demo and api by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/815
- docs(button-group): [button-group] optimize button-group demo and api by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/818
- docs(nav-menu): [nav-menu] docs optimization by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/816
- docs(site): [tag-group] Improve documentation by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/817
- docs(tabs): [tabs] docs optimization by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/821
- docs(grid): [grid] update grid docs and api by @zzcr in https://github.com/opentiny/tiny-vue/pull/822
- docs(container): Optimize Container's docs and demo by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/812
- docs(transfer): Optimize Transfer's docs and demo by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/827
- docs(laylout): Optimize Layout's docs and demos by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/806
- docs(sites) update docs by @zzcr in https://github.com/opentiny/tiny-vue/pull/839
- docs(tooltip): Optimize Tooltip's docs and demos by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/838
- test(pc/app/input): [input] Refine e2e test cases by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/837
- docs(alert): [alert] optimize alert demo and api by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/834
- docs(popconfirm): [popconfirm] optimize popconfirm demo and api by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/832
- test(pc/app/cascader-panel): [cascader-panel] Refine e2e test cases by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/841
- feat(select): [select] optimize select docs by @zzcr in https://github.com/opentiny/tiny-vue/pull/856
- doc(components): demo and api docs optimize by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/860
- perf(transition)： merge transition css to base.less by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/851
- docs(image): optimize image's docs by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/868
- docs(poppover): Optimize Popover's docs by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/866
- test(button-group): [button-group] update button E2E test by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/863
- test(button): [button] update button E2E test by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/862
- feat(grid): [grid]Update grid e2e test by @zzcr in https://github.com/opentiny/tiny-vue/pull/853
- docs(grid): change demoId of 'before-page-change' by @KevinAndrewDong in https://github.com/opentiny/tiny-vue/pull/824
- docs(pop-editor): [pop-editor] optimize pop editor docs by @kagol in https://github.com/opentiny/tiny-vue/pull/871
- docs(site): [cascader, cascader-panel] Optimize document6 by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/873
- docs(grid): [grid] update grid docs and apis by @zzcr in https://github.com/opentiny/tiny-vue/pull/878
- fix(site): Fix the problem that official website table type switching… by @zzcr in https://github.com/opentiny/tiny-vue/pull/879
- test(badge): [badge] update button E2E test by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/880
- Dev docs fix review by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/882
- docs(site): [autocomplete, loading, notify] Optimize document by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/885
- docs(site): [rate, tag-group] Optimize document by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/886
- test(site/loading): [loading] e2e test case completion by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/896
- docs(grid/export): [grid] update export docs by @zzcr in https://github.com/opentiny/tiny-vue/pull/900
- docs(drawer): [drawer] Optimize document and e2e test by @zzcr in https://github.com/opentiny/tiny-vue/pull/888
- docs(tree-menu): [tree-menu] Optimize TreeMenu component documentation and demos by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/905
- docs(modal): [modal] optimize modal demo and api by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/909
- Optimize Select/Dropdown/ActionMenu components documentation by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/908
- test(site/pc/app): [rate, tag-group, input] e2e test case completion by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/913
- test(form): [form] update button E2E test by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/914
- test(switch): [switch] update switch E2E test case by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/916
- docs(grid): optimize grid editor slots demo by @zzcr in https://github.com/opentiny/tiny-vue/pull/920
- test(radio): [radio] update radio E2E test by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/924
- docs(split): [split] optimize split docs and e2e by @zzcr in https://github.com/opentiny/tiny-vue/pull/923
- docs(grid): [grid] optimize drag control demo and e2e by @zzcr in https://github.com/opentiny/tiny-vue/pull/929
- test(alert): [alert] update alert E2E test by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/931
- test(popconfirm): [popconfirm] update popconfirm E2E test by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/928
- test(checkbox): [checkbox] update checkbox E2E test by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/927
- docs(container): fix container demo by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/933
- test(action-menu): [action-menu] Optimize action-menu component e2e test cases by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/934
- chore(site): [cascader, cascader-panel, loading] Make the file structure conform to the standard by @yoyo201626 in https://github.com/opentiny/tiny-vue/pull/937
- test(pager): [pager] update pager E2E test by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/938
- test(modal): [modal] update modal E2E test by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/939
- test(collapse):[collapse] update collapse E2E test by @wuyiping0628 in https://github.com/opentiny/tiny-vue/pull/944
- docs(icon): [icon] text correction by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/945
- test(ip-address): [ip-address] update ip-address E2E test by @gimmyhehe in https://github.com/opentiny/tiny-vue/pull/946
- docs(tree): Optimize tree docs/demos by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/941
- Add container/layout/popover/tooltip e2e tests by @shenjunjian in https://github.com/opentiny/tiny-vue/pull/971
- test(tabs): [tabs] update tabs E2E test by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/968
- test(search): [search] update search E2E test by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/972
- test(progress): [progress] update progress E2E test by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/974
- test(select): [select] Optimized the E2E test cases of the select component. Fixed an issue where the allowCopy and autoSearch attributes do not take effect by @MomoPoppy in https://github.com/opentiny/tiny-vue/pull/981
- test(milestone): [milestone] update milestone E2E test by @chenxi-20 in https://github.com/opentiny/tiny-vue/pull/980

## New Contributors

- @fanbingbing16 made their first contribution in https://github.com/opentiny/tiny-vue/pull/686
- @dyh333 made their first contribution in https://github.com/opentiny/tiny-vue/pull/667
- @betavs made their first contribution in https://github.com/opentiny/tiny-vue/pull/719
- @betterdancing made their first contribution in https://github.com/opentiny/tiny-vue/pull/742
- @David-TechNomad made their first contribution in https://github.com/opentiny/tiny-vue/pull/772
- @falcon-jin made their first contribution in https://github.com/opentiny/tiny-vue/pull/844
- @wuyiping0628 made their first contribution in https://github.com/opentiny/tiny-vue/pull/944
- @James-9696 made their first contribution in https://github.com/opentiny/tiny-vue/pull/970

## v2.11.0/v3.11.0

`2023/10/24`

### Exciting New Features 🎉

- feat(color-picker): add color-picker component by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#383](https://github.com/opentiny/tiny-vue/pull/383)
- feat: add rich-text-editor component by [@kagol](https://github.com/kagol) in [#401](https://github.com/opentiny/tiny-vue/pull/401)
- feat(rich-text-editor): add row height and merge h1-h6 and pargraph by [@Caesar-ch](https://github.com/Caesar-ch) in [#414](https://github.com/opentiny/tiny-vue/pull/414)
- feat(rich-text-editor): support code highlight by [@Caesar-ch](https://github.com/Caesar-ch) in [#440](https://github.com/opentiny/tiny-vue/pull/440)
- feat: optimize rich text editor toolbar style by [@kagol](https://github.com/kagol) in [#444](https://github.com/opentiny/tiny-vue/pull/444)
- feat(rich-text-editor): add font-size selection by [@Caesar-ch](https://github.com/Caesar-ch) in [#448](https://github.com/opentiny/tiny-vue/pull/448)
- feat(rich-text-editor): css style adjustment by [@Caesar-ch](https://github.com/Caesar-ch) in [#459](https://github.com/opentiny/tiny-vue/pull/459)
- feature(divider): 增加 Divider 组件 ([#354](https://github.com/opentiny/tiny-vue/issues/354) close) by [@vaebe](https://github.com/vaebe) in [#471](https://github.com/opentiny/tiny-vue/pull/471)
- feat(rich-text-editor): add vue2 support by [@Caesar-ch](https://github.com/Caesar-ch) in [#483](https://github.com/opentiny/tiny-vue/pull/483)
- feat(rich-text-editor): fix bug, add font-size and add api demo by [@Caesar-ch](https://github.com/Caesar-ch) in [#497](https://github.com/opentiny/tiny-vue/pull/497)
- feat(rich-text-editor): support media url by [@Caesar-ch](https://github.com/Caesar-ch) in [#508](https://github.com/opentiny/tiny-vue/pull/508)
- feat: color select panel component by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#492](https://github.com/opentiny/tiny-vue/pull/492)
- feat: scripts support cross-platform by [@gweesin](https://github.com/gweesin) in [#554](https://github.com/opentiny/tiny-vue/pull/554)
- feat(react): collect refs and children in one traverse by [@pe-3](https://github.com/pe-3) in [#551](https://github.com/opentiny/tiny-vue/pull/551)
- feat(color-select-panel): history & predefine color by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#530](https://github.com/opentiny/tiny-vue/pull/530)
- feat(react): add switch comp with mobile & pc mode by [@pe-3](https://github.com/pe-3) in [#565](https://github.com/opentiny/tiny-vue/pull/565)
- feat(react): add badge comp with mobile & pc mode by [@pe-3](https://github.com/pe-3) in [#566](https://github.com/opentiny/tiny-vue/pull/566)
- feat(react): ehance virtual comp，each comp has v-if，default as true by [@pe-3](https://github.com/pe-3) in [#564](https://github.com/opentiny/tiny-vue/pull/564)
- feat(popeditor): adds the autoreset property by [@wkif](https://github.com/wkif) in [#562](https://github.com/opentiny/tiny-vue/pull/562)
- feat(react): add mobile mode in tiny react alert by [@pe-3](https://github.com/pe-3) in [#550](https://github.com/opentiny/tiny-vue/pull/550)
- feat(anchor): Add anchor component dot type theme by [@chenxi-20](https://github.com/chenxi-20) in [#587](https://github.com/opentiny/tiny-vue/pull/587)
- feat(fileupload): Added the function of pasting and uploading files by [@chenxi-20](https://github.com/chenxi-20) in [#593](https://github.com/opentiny/tiny-vue/pull/593)
- feat(search): Add default selection function for search types and pre… by [@chenxi-20](https://github.com/chenxi-20) in [#614](https://github.com/opentiny/tiny-vue/pull/614)
- feat(calendar-view): add calendar-view component
- feat(search):增加搜索类型默认值属性
- feat(fileupload):增加粘贴上传功能
- feat(anchor): 增加锚点 dot 类型
- feat: 使用一套组件库包支持 vue2.6.x 和 vue2.7.x
- feat(form): XDesign 表单校验失败新增错误图标
- feat(select): Select 组件，新增 clearNoMatchValue 属性，自动清空不匹配值
- feat(tree): tree 组件适配 XDesign 设计规范
- feat(timeline): Timeline 组件增加 line-width 属性, 用以设置连接线长度

### Bug Fixes 🐛

- fix(sites): 切换 sites 引用 @opentiny/vue-repl 包 by [@shenjunjian](https://github.com/shenjunjian) in [#391](https://github.com/opentiny/tiny-vue/pull/391)
- fix:When nesting using Split, the mouse direction on the left and right split line is wrong when the upper and lower division is nested by [@jack-zishan](https://github.com/jack-zishan) in [#392](https://github.com/opentiny/tiny-vue/pull/392)
- fix: fix packages/vue/package.json format error when execute pnpm dev by [@kagol](https://github.com/kagol) in [#387](https://github.com/opentiny/tiny-vue/pull/387)
- fix(sites): change design config when change theme by [@gimmyhehe](https://github.com/gimmyhehe) in [#393](https://github.com/opentiny/tiny-vue/pull/393)
- fix(color-picker): 修复组件若干问题 by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#394](https://github.com/opentiny/tiny-vue/pull/394)
- fix Playground Page by [@shenjunjian](https://github.com/shenjunjian) in [#399](https://github.com/opentiny/tiny-vue/pull/399)
- fix(sites): fix by [@shenjunjian](https://github.com/shenjunjian) in [#400](https://github.com/opentiny/tiny-vue/pull/400)
- fix(playground): fix process.env \ changeVersion \sortablejs bugs by [@shenjunjian](https://github.com/shenjunjian) in [#422](https://github.com/opentiny/tiny-vue/pull/422)
- fix(sites): fix grid demo api link jump error url by [@gimmyhehe](https://github.com/gimmyhehe) in [#421](https://github.com/opentiny/tiny-vue/pull/421)
- fix(modal): fix css value error by [@Zz-ZzzZ](https://github.com/Zz-ZzzZ) in [#426](https://github.com/opentiny/tiny-vue/pull/426)
- fix(search): the enter bug of the search component is fixed by [@chenxi-20](https://github.com/chenxi-20) in [#439](https://github.com/opentiny/tiny-vue/pull/439)
- fix(checkbox): fix checkbox selected icon bug close [#450](https://github.com/opentiny/tiny-vue/issues/450) by [@gimmyhehe](https://github.com/gimmyhehe) in [#451](https://github.com/opentiny/tiny-vue/pull/451)
- fix: fix when datetime component in dialog-box, the popper scroll awa… by [@shenjunjian](https://github.com/shenjunjian) in [#455](https://github.com/opentiny/tiny-vue/pull/455)
- fix(time-picker): fix time-picker arrow-control bug by [@kagol](https://github.com/kagol) in [#464](https://github.com/opentiny/tiny-vue/pull/464)
- fix: alert mobile close should works by [@LinboLen](https://github.com/LinboLen) in [#478](https://github.com/opentiny/tiny-vue/pull/478)
- 🐛 fork tiny-vue 启动失败，添加字符串末尾缺少的引号 by [@allenli178](https://github.com/allenli178) in [#488](https://github.com/opentiny/tiny-vue/pull/488)
- fix(dialog-box): 修复右侧弹窗不能滚动问题 by [@Binks123](https://github.com/Binks123) in [#500](https://github.com/opentiny/tiny-vue/pull/500)
- fix(Cascader, DropDown, Popeditor): fixed Cascader component panel no… by [@yoyo201626](https://github.com/yoyo201626) in [#513](https://github.com/opentiny/tiny-vue/pull/513)
- feat(rich-text-editor): resolve svg viewbox by [@Caesar-ch](https://github.com/Caesar-ch) in [#515](https://github.com/opentiny/tiny-vue/pull/515)
- fix(collapse): 修复 collapse 未深度监听导致 Pc 端 tiny-collapse activeNames 直接 push 无法响… by [@wkif](https://github.com/wkif) in [#512](https://github.com/opentiny/tiny-vue/pull/512)
- fix(slider): slider range select bug ([#390](https://github.com/opentiny/tiny-vue/issues/390)) by [@chenguang1994](https://github.com/chenguang1994) in [#518](https://github.com/opentiny/tiny-vue/pull/518)
- fix(dialog-box): dialog mask err([#495](https://github.com/opentiny/tiny-vue/issues/495)) by [@Zuowendong](https://github.com/Zuowendong) in [#503](https://github.com/opentiny/tiny-vue/pull/503)
- fix(theme): 修复官网组件标题背景色异常 by [@vaebe](https://github.com/vaebe) in [#496](https://github.com/opentiny/tiny-vue/pull/496)
- fix: fix pnpm dev:site error by [@kagol](https://github.com/kagol) in [#536](https://github.com/opentiny/tiny-vue/pull/536)
- docs(guide): fix alert out of bounds by [@Binks123](https://github.com/Binks123) in [#541](https://github.com/opentiny/tiny-vue/pull/541)
- fix: fix extra highlight color when press button in mobile mode by [@gweesin](https://github.com/gweesin) in [#537](https://github.com/opentiny/tiny-vue/pull/537)
- docs: fix popover demo position error when toggle code block by [@gweesin](https://github.com/gweesin) in [#535](https://github.com/opentiny/tiny-vue/pull/535)
- fix(color-select-panel): z-index by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#560](https://github.com/opentiny/tiny-vue/pull/560)
- fix(guider): 箭头部分情况超出了指定位置，优化样式 ，解决计算问题([#454](https://github.com/opentiny/tiny-vue/issues/454)) by [@chenguang1994](https://github.com/chenguang1994) in [#539](https://github.com/opentiny/tiny-vue/pull/539)
- fix(tree): Click margin-top zoom will collapse treemenu([#559](https://github.com/opentiny/tiny-vue/issues/559)) by [@chenguang1994](https://github.com/chenguang1994) in [#568](https://github.com/opentiny/tiny-vue/pull/568)
- fix(popper): fix popper element offset error in micro-app by [@gimmyhehe](https://github.com/gimmyhehe) in [#570](https://github.com/opentiny/tiny-vue/pull/570)
- fix: Guide component mobile overflow by [@xlearns](https://github.com/xlearns) in [#574](https://github.com/opentiny/tiny-vue/pull/574)
- fix(numeric):numeric 修复输入超大数字变为科学计数法时失焦后组件消失的问题 by [@shonen7](https://github.com/shonen7) in [#563](https://github.com/opentiny/tiny-vue/pull/563)
- fix(rich-text-editor): fix Unsupported URL Type "link:" when execute npm i by [@kagol](https://github.com/kagol) in [#579](https://github.com/opentiny/tiny-vue/pull/579)
- fix：Added version import to component templates by [@wkif](https://github.com/wkif) in [#578](https://github.com/opentiny/tiny-vue/pull/578)
- fix(popper): remove window variable code by [@gimmyhehe](https://github.com/gimmyhehe) in [#586](https://github.com/opentiny/tiny-vue/pull/586)
- fix(rich-text-edtior):fix rich-text-edtior functionality and style issues by [@shonen7](https://github.com/shonen7) in [#592](https://github.com/opentiny/tiny-vue/pull/592)
- fix(doc): rename dom id avioding conflicts([#595](https://github.com/opentiny/tiny-vue/issues/595)) by [@chenguang1994](https://github.com/chenguang1994) in [#597](https://github.com/opentiny/tiny-vue/pull/597)
- chore: support alpha version and fix build error by [@kagol](https://github.com/kagol) in [#600](https://github.com/opentiny/tiny-vue/pull/600)
- fix(form): form tooltip append-to-body fix by [@gimmyhehe](https://github.com/gimmyhehe) in [#599](https://github.com/opentiny/tiny-vue/pull/599)
- fix(rich-text-editor): fix Unsupported URL Type link by [@kagol](https://github.com/kagol) in [#601](https://github.com/opentiny/tiny-vue/pull/601)
- fix: fix global registration error with rich-text-editor by [@zzcr](https://github.com/zzcr) in [#602](https://github.com/opentiny/tiny-vue/pull/602)
- fix(vue-icon_left-ward-arrow): Correct LeftWardArrow import path by [@yoyo201626](https://github.com/yoyo201626) in [#603](https://github.com/opentiny/tiny-vue/pull/603)
- fix: fix incorrect target in webComponent by [@gimmyhehe](https://github.com/gimmyhehe) in [#605](https://github.com/opentiny/tiny-vue/pull/605)
- fix: fix rich-text build error by [@zzcr](https://github.com/zzcr) in [#618](https://github.com/opentiny/tiny-vue/pull/618)
- fix(Rich Text Editor): Fix bugs in the Rich Text Editor by [@shonen7](https://github.com/shonen7) in [#616](https://github.com/opentiny/tiny-vue/pull/616)
- fix(color-picker、divider):Fix 'color picker' switch color failure, de… by [@shonen7](https://github.com/shonen7) in [#619](https://github.com/opentiny/tiny-vue/pull/619)
- fix(select-text-field): Select，text-fiel And value-field Example For One by [@Xppp0217](https://github.com/Xppp0217) in [#610](https://github.com/opentiny/tiny-vue/pull/610)
- Fix the issue of blocked headers in dialogBox by [@Huangyilin19](https://github.com/Huangyilin19) in [#620](https://github.com/opentiny/tiny-vue/pull/620)
- fix: add missing svg to fix build:ui error
- fix: fix vue-renderless/types path error
- fix(search): 修复 enter 回车键搜索报错问题
- fix(search): 修复搜索类型文字过长显示错位问题
- fix(fileupload):修复上传组件在文件上传时，点击取消上传报错问题
- fix(anchor):修复官网使用锚点时，固定模式闪现的问题\*\*
- fix(grid): 修复 grid 表格筛选手动调用 clearFilter 不会触发 filter-change 方法的问题
- fix(popeditor): 修复 popeditor 组件在 vue2.7 下报错 bug
- fix(form): 修复表单项下多个子元素导致 tooltip 重复
- fix(collapse): collspse 组件图标与文体间距修改
- fix(checkbox): 修复 checkbox 禁用态悬浮 bug
- fix(select): 修复 Select 组件，多选时初始化输入框高度不对
- fix(select): 修复 Select 组件下拉框没有默认添加到 body 上
- fix(select): 修复 Select 组件，折叠 Tag 时，位置够却换行了
- fix(dropdown): 修复 dropdownItem 禁用时触发 itemclick
- fix(dropdown): 修复 Dropdown 组件 smb 图标显示不正确
- fix(select): 修复 select 组件，大数据开启 optimization 时，未显示正确 label
- fix(Slider): fix slider 范围选择
- fix(input): 修复当 input 组件传入 id 时，造成内部标签会接收透传 id，造成双 id 问题
- fix(Cascader): 修复在验证 Cascader 单组件引入时面板不能正常关闭的问题
- fix(modal): Modal 组件不响应动态宽度与高度
- fix(tree-menu): TreeMenu 组件 Saas 主题下 TreeMenu 元素排布变形, 默认主题下图标位置不正确, 节点选中与悬浮的样式不对
- fix(tree-menu): TreeMenu 组件的 collapsible 属性同时控制多个功能
- fix(tabbar): 移动端 tabbar 组件点击事件报错
- fix(tree): Tree 组件自定义渲染内容时, 节点没对齐
- fix(steps): Steps 组件内容鼠标悬浮光标不正确; 节点序号与图标颜色不正确
- fix(tree): Tree 树懒加载数据无法渲染第一层节点

### Other Changes

- test(badge): add unit test by [@lyx-jay](https://github.com/lyx-jay) in [#388](https://github.com/opentiny/tiny-vue/pull/388)
- test(modal): add modal unit test by [@Zz-ZzzZ](https://github.com/Zz-ZzzZ) in [#374](https://github.com/opentiny/tiny-vue/pull/374)
- docs: update release notes by [@kagol](https://github.com/kagol) in [#397](https://github.com/opentiny/tiny-vue/pull/397)
- style(rich-text-editor): format code style by [@kagol](https://github.com/kagol) in [#402](https://github.com/opentiny/tiny-vue/pull/402)
- docs(rich-text-editor): add demo and api docs by [@kagol](https://github.com/kagol) in [#404](https://github.com/opentiny/tiny-vue/pull/404)
- docs(container): fix container composition demos fix [#425](https://github.com/opentiny/tiny-vue/issues/425) by [@kagol](https://github.com/kagol) in [#441](https://github.com/opentiny/tiny-vue/pull/441)
- test(modal): add surplus unit test by [@Zz-ZzzZ](https://github.com/Zz-ZzzZ) in [#435](https://github.com/opentiny/tiny-vue/pull/435)
- docs: fix the problem of missing container component style by [@kagol](https://github.com/kagol) in [#453](https://github.com/opentiny/tiny-vue/pull/453)
- feat(unit): add breadcrumb unit test by [@lyx-jay](https://github.com/lyx-jay) in [#457](https://github.com/opentiny/tiny-vue/pull/457)
- refactor(date-table): supplement the ts type declaration of the date-table component by [@kagol](https://github.com/kagol) in [#456](https://github.com/opentiny/tiny-vue/pull/456)
- feat(rich-text-editor): Add api design by [@Caesar-ch](https://github.com/Caesar-ch) in [#475](https://github.com/opentiny/tiny-vue/pull/475)
- docs: optimize time picker demo api docs by [@kagol](https://github.com/kagol) in [#482](https://github.com/opentiny/tiny-vue/pull/482)
- docs: optimzie date picker demo/api by [@kagol](https://github.com/kagol) in [#486](https://github.com/opentiny/tiny-vue/pull/486)
- optimize button docs by [@Binks123](https://github.com/Binks123) in [#522](https://github.com/opentiny/tiny-vue/pull/522)
- docs(anchor): optimize anchor demo api docs by [@Binks123](https://github.com/Binks123) in [#540](https://github.com/opentiny/tiny-vue/pull/540)
- docs(breadcrumb): optimize breadcrumb docs by [@Binks123](https://github.com/Binks123) in [#547](https://github.com/opentiny/tiny-vue/pull/547)
- feat(react): 添加贡献文档，readme 改名为 README by [@pe-3](https://github.com/pe-3) in [#538](https://github.com/opentiny/tiny-vue/pull/538)
- docs(README): correct misspellings by [@Zz-ZzzZ](https://github.com/Zz-ZzzZ) in [#561](https://github.com/opentiny/tiny-vue/pull/561)
- fix(divider,color-picker): divider 组件 content-position 描述完善，以及部分 api 关联示例变动；color-picker 组件修改错误变量 by [@shonen7](https://github.com/shonen7) in [#567](https://github.com/opentiny/tiny-vue/pull/567)
- feat: update pc/mobile/mobile-first docs by [@zzcr](https://github.com/zzcr) in [#583](https://github.com/opentiny/tiny-vue/pull/583)
- docs: update component number by [@kagol](https://github.com/kagol) in [#585](https://github.com/opentiny/tiny-vue/pull/585)
- feat: update docs api by [@zzcr](https://github.com/zzcr) in [#613](https://github.com/opentiny/tiny-vue/pull/613)
- feat(grid-size): table size integration by [@ianxinnew](https://github.com/ianxinnew) in [#617](https://github.com/opentiny/tiny-vue/pull/617)
- fix(grid-slot): Table Example Add Editor Slot by [@ianxinnew](https://github.com/ianxinnew) in [#608](https://github.com/opentiny/tiny-vue/pull/608)
- feat(grid-api): API Remove Default Text by [@ianxinnew](https://github.com/ianxinnew) in [#622](https://github.com/opentiny/tiny-vue/pull/622)
- fix(select-size): select component medium，small，mini Type For One by [@Xppp0217](https://github.com/Xppp0217) in [#607](https://github.com/opentiny/tiny-vue/pull/607)
- chore: examples/site demo support ts intellisense
- chore(picker): add picker ts declaration(vue.ts)
- chore(timeline): timeline 与 timelineItem 组件补充 ts 类型
- chore(modal): modal 组件补充 ts 类型声明
- chore(floatbar): floatbar 组件补充 ts 类型声明
- chore(dialog-box): dialog-box 组件补充 ts 类型声明
- chore(numeric): Numeric 补充 ts 类型声明
- chore(playground): 优化 playground 的编辑器和分享功能

## v2.10.0/v3.10.0

`2023/08/14`

### Exciting New Features 🎉

- feat(pop-editor): 当编辑框弹出时添加自定义事件 fix [#268](https://github.com/opentiny/tiny-vue/issues/268) by [@yuanningning](https://github.com/yuanningning) in [#315](https://github.com/opentiny/tiny-vue/pull/315)
- feat(ip-address): 更改 ipAddress 组件的 IPv6 类型 close [#272](https://github.com/opentiny/tiny-vue/issues/272) by [@yuanningning](https://github.com/yuanningning) in [#337](https://github.com/opentiny/tiny-vue/pull/337)
- feat(filter-panel): 新增过滤器面板组件
- feat(dialog-select): 新增 DialogSelect 组件
- feat(infinite-scroll): 新增 InfiniteScroll 无限滚动组件
- feat(tag-group): 新增 TagGroup 标签组组件
- feat(docs): 官网添加示例 composition-api 写法，支持切换 composition-api 和 option-api
- feat(docs): 组件 demo 支持 playground
- feat(grid): 表格增加快捷筛选面板，可以支持多选框筛选和日期筛选 ，同时支持用户配置默认筛选项
- feat(grid): 表格排序按钮默认为 x-design 最新规范图标
- feat(grid): 表格提示现在支持自定义 tooltip 内容显示，支持字符串或者 jsx
- feat(tree-menu): TreeMenu 新增设置与获取当前选中节点的方法
- feat(tree-menu): 树形菜单新增可折叠特性
- feat(tree): Tree 新增连接线设置
- feat(timeline-item): 新增 timeline-item 组件
- feat(modal): modal 支持配置底部按钮 props 与文字
- feat(button-group): 按钮组新增单个 disabled 特性
- feat(alert): 新增 close 插槽，实现外部控制显示或隐藏
- feat(alert): 组件图标取消垂直居中，采用固定定位
- feat(time-picker): 支持设置步长 `step`
- feat(date-picker): 增加 label 内置功能 `label`
- feat(date-picker): 支持设置时间选择的步长 `step`
- feat(date-picker): 支持显示周次 `show-week-number`
- feat(date-picker): 支持过滤器模式 `shape="filter"`
- feat(date-picker): 支持年份多选和年份范围选择 `type="years" | type="yearrange"`
- feat(date-picker): 支持某日起始/某日为止功能 `type: 'startFrom'`

### Bug Fixes 🐛

- fix(numeric): 修复当前值+Step>max 时不能取 max 的问题 by [@Huangyilin19](https://github.com/Huangyilin19) in [#297](https://github.com/opentiny/tiny-vue/pull/297)
- fix(grid): 修复了列冻结且没有滚动条时表格组件中的异常样式 by [@zzcr](https://github.com/zzcr) in [#298](https://github.com/opentiny/tiny-vue/pull/298)
- fix(button): 修复了朴素按钮图标禁用颜色的问题 by [@gimmyhehe](https://github.com/gimmyhehe) in [#299](https://github.com/opentiny/tiny-vue/pull/299)
- fix(grid): 修复了表过滤器面板的错误样式，修复了 webpack 本地环境下 ResizeWatch 接口的警告问题 by [@zzcr](https://github.com/zzcr) in [#305](https://github.com/opentiny/tiny-vue/pull/305)
- fix(theme): 从容器、布局中删除样式 by [@shenjunjian](https://github.com/shenjunjian) in [#306](https://github.com/opentiny/tiny-vue/pull/306)
- fix(vue-theme): 在文本区域组件中修复  `@apply` by [@shenjunjian](https://github.com/shenjunjian) in [#319](https://github.com/opentiny/tiny-vue/pull/319)
- fix(input): 修复了禁用的输入在表单错误中不生效的问题 by [@gimmyhehe](https://github.com/gimmyhehe) in [#322](https://github.com/opentiny/tiny-vue/pull/322)
- fix(checkbox): 修复了复选框标签为 0 时不显示错误的问题 by [@gimmyhehe](https://github.com/gimmyhehe) in [#331](https://github.com/opentiny/tiny-vue/pull/331)
- fix(select): 修复了计算选择组件的高度和错误创建项目的问题 by [@MomoPoppy](https://github.com/MomoPoppy) in [#358](https://github.com/opentiny/tiny-vue/pull/358)
- fix(carousel): 将箭头圆宽度调整为 28px by [@lyx-jay](https://github.com/lyx-jay) in [#376](https://github.com/opentiny/tiny-vue/pull/376)
- fix(drawer): 蒙版消失的速度比内容更快 by [@lyx-jay](https://github.com/lyx-jay) in [#375](https://github.com/opentiny/tiny-vue/pull/375)
- fix(badge): 修复显示重复内容的问题 by [@lyx-jay](https://github.com/lyx-jay) in [#382](https://github.com/opentiny/tiny-vue/pull/382)
- fix: 修复了执行 pnpm build:ui vue 命令时的 ts 声明错误 by [@kagol](https://github.com/kagol) in [#386](https://github.com/opentiny/tiny-vue/pull/386)
- fix(grid): 修复表格冻结列在 x-design 规范显示异常问题
- fix(grid): 修复表格冻结列在表格有纵向滚动条时
- fix(grid):修复表格 fetchdata 情况下，表格数据被处理两次问题
- fix(tree): 修复 isEmpty 属性在节点数据变化后没响应变化的问题
- fix(button-group): XDesign 主题朴素按钮字体颜色修复
- fix(input): 修复 input 在表单禁用状态时不生效 bug
- fix(popover): 避免初始加载时，触发的 hide 事件
- fix(dialog-box): 不在 body 上增加 class，可以避免引起的页面抖动
- fix(tabs): 取消初始化赋值，修复超出页签栏显示问题，优化更多弹出框
- fix(icons): 优化图标部分的自定义宽度和颜色
- fix(theme): 取消主题切换后自动刷新页面
- fix(anchor): 修复锚点异步获取数据导致监听 bug，增加切换动画效果
- fix(dropdown): 修复设置箭头显示不生效
- fix(select): 修复组件初始化创建条目的场景，同时设置 option 和 value，有匹配项却自动创建的问题
- fix(select): 修复 select 组件多选多行时 input 框高度计算有误的问题
- fix(popEditor): 编辑框关闭时先隐藏了内容的问题

### Other Changes

- perf(tooltip): Tooltip 组件性能优化 by [@shenjunjian](https://github.com/shenjunjian) in [#368](https://github.com/opentiny/tiny-vue/pull/368)
- chore(row): 恢复演示示例中的样式 by [@shenjunjian](https://github.com/shenjunjian) in [#311](https://github.com/opentiny/tiny-vue/pull/311)
- feat(pnpm-lock): 添加 pnpm-lock.ymal 文件 by [@zzcr](https://github.com/zzcr) in [#320](https://github.com/opentiny/tiny-vue/pull/320)
- feat(button): 完善单元测试 by [@chenqifeng66](https://github.com/chenqifeng66) in [#364](https://github.com/opentiny/tiny-vue/pull/364)
- test(alert): 增加 Alert 组件单元测试 by [@Zz-ZzzZ](https://github.com/Zz-ZzzZ) in [#369](https://github.com/opentiny/tiny-vue/pull/369)
- docs(tag): 增加标签灵活用法，超出隐藏，显示 title 示例

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

- fix: 修复 windows 下 pnpm install rm rf not found by [@coderbaozi](https://github.com/coderbaozi) in [#149](https://github.com/opentiny/tiny-vue/pull/149)
- 修复 build:ui 打包出来的产物有问题 bug，修复 input 组件本地开发报警告 bug by [@zzcr](https://github.com/zzcr) in [#150](https://github.com/opentiny/tiny-vue/pull/150)
- fix(tabs): fix tab header bottom border line close [#154](https://github.com/opentiny/tiny-vue/issues/154) by [@kagol](https://github.com/kagol) in [#155](https://github.com/opentiny/tiny-vue/pull/155)
- chore: Compatible with windows users by [@ErKeLost](https://github.com/ErKeLost) in [#151](https://github.com/opentiny/tiny-vue/pull/151)
- fix(carousel-item): 合并重复属性 by [@linxiang07](https://github.com/linxiang07) in [#152](https://github.com/opentiny/tiny-vue/pull/152)
- fix(checkbox): icon position when checked by [@zuixinwang](https://github.com/zuixinwang) in [#164](https://github.com/opentiny/tiny-vue/pull/164)
- fix(build:runtime): 修复打包 runtime 产物的脚本 by [@shenjunjian](https://github.com/shenjunjian) in [#183](https://github.com/opentiny/tiny-vue/pull/183)
- fix(build runtime) 修复打包运行时报错问题 by [@zzcr](https://github.com/zzcr) in [#185](https://github.com/opentiny/tiny-vue/pull/185)
- fix(carousel) 走马灯手动轮播切换到此处数据会偶现与实际不符 by [@WXC-Spring](https://github.com/WXC-Spring) in [#188](https://github.com/opentiny/tiny-vue/pull/188)
- fix(runtime-build) 修复：运行时多入口打包会抽取公共依赖，导致加载报错 by [@zzcr](https://github.com/zzcr) in [#191](https://github.com/opentiny/tiny-vue/pull/191)
- fix(dialog-box): 修复对话框移动后动态 style 没更新的 bug by [@Huangyilin19](https://github.com/Huangyilin19) in [#195](https://github.com/opentiny/tiny-vue/pull/195)
- fix(upload) 修复 upload 组件销毁时报错的 bug by [@zzcr](https://github.com/zzcr) in [#196](https://github.com/opentiny/tiny-vue/pull/196)
- fix(fileupload): 上传组件增加用户不配置 action 属性产生的报错，告知用户需要配置 by [@chenxi-20](https://github.com/chenxi-20) in [#199](https://github.com/opentiny/tiny-vue/pull/199)
- fix(button): 修复无内容的情况下上下错位的问题([#194](https://github.com/opentiny/tiny-vue/issues/194)) by [@qinwencheng](https://github.com/qinwencheng) in [#203](https://github.com/opentiny/tiny-vue/pull/203)
- fix: 修复 pullRefresh 组件，数据类型不匹配，导致控制台告警日志超大量打印，导致页面渲染慢的问题 by [@MrWang2016](https://github.com/MrWang2016) in [#211](https://github.com/opentiny/tiny-vue/pull/211)
- fix: 修复 Breadcrumb 配置 textField 的 demo 不显示面包屑内容  [#207](https://github.com/opentiny/tiny-vue/issues/207) by [@yuanningning](https://github.com/yuanningning) in [#210](https://github.com/opentiny/tiny-vue/pull/210)
- fix(rate) 修复组件 Rate 半选加禁选后，2.5 与 3 星实际不匹配的问题 by [@wwttff](https://github.com/wwttff) in [#200](https://github.com/opentiny/tiny-vue/pull/200)
- fix(build) 修复 grid、pager 组件 bug by [@zzcr](https://github.com/zzcr) in [#240](https://github.com/opentiny/tiny-vue/pull/240)
- fix: fix npm publish 402 error by [@kagol](https://github.com/kagol) in [#241](https://github.com/opentiny/tiny-vue/pull/241)

### Other Changes

- chore: 添加文件后缀名 by [@CatsAndMice](https://github.com/CatsAndMice) in [#160](https://github.com/opentiny/tiny-vue/pull/160)
- refactor(button): 优化 size 属性校验 by [@LadyChatterleyLover](https://github.com/LadyChatterleyLover) in [#162](https://github.com/opentiny/tiny-vue/pull/162)
- docs：中英文 README 和贡献指南文档中端口号的修正，以及 Issue 模板中的小助手微信号修正 by [@heygsc](https://github.com/heygsc) in [#171](https://github.com/opentiny/tiny-vue/pull/171)
- docs: 增加 all-contributors 机器人 🤖️ 用于自动添加贡献者 by [@kagol](https://github.com/kagol) in [#214](https://github.com/opentiny/tiny-vue/pull/214)
- docs: update README.zh-CN.md by [@kagol](https://github.com/kagol) in [#216](https://github.com/opentiny/tiny-vue/pull/216)
- doc: 修改文档示例 by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#224](https://github.com/opentiny/tiny-vue/pull/224)

## v2.6.6/v3.6.6

`2023/04/19`

### Exciting New Features 🎉

- feat: 增加 vue-vite-import 插件 by [@kagol](https://github.com/kagol) in [#135](https://github.com/opentiny/tiny-vue/pull/135)
- feat: 当 children 为空数组是认为是叶子节点 by [@GaoNeng-wWw](https://github.com/GaoNeng-wWw) in [#143](https://github.com/opentiny/tiny-vue/pull/143)

### Bug Fixes 🐛

- fix(ipaddress): 切换 tab 键会从 192 跳过 168 到 0 by [@rayhaoqin](https://github.com/rayhaoqin) in [#122](https://github.com/opentiny/tiny-vue/pull/122)
- fix: 修复 pnpm dev:docs 报错的问题。 by [@ygj6](https://github.com/ygj6) in [#123](https://github.com/opentiny/tiny-vue/pull/123)
- fix: fix vuepress-vite version error when execute pnpm i by [@kagol](https://github.com/kagol) in [#126](https://github.com/opentiny/tiny-vue/pull/126)
- fix(chart-line): fix line-chart tooltip.axisPointer.lineStyle does not take effect close [#130](https://github.com/opentiny/tiny-vue/issues/130) by [@kagol](https://github.com/kagol) in [#131](https://github.com/opentiny/tiny-vue/pull/131)
- fix(types): 修复 vue3-example 项目中的 ts 报错。 by [@ygj6](https://github.com/ygj6) in [#132](https://github.com/opentiny/tiny-vue/pull/132)
- fix(date-picker): fix date-picker style by [@kagol](https://github.com/kagol) in [#136](https://github.com/opentiny/tiny-vue/pull/136)
- Fix issue [#115](https://github.com/opentiny/tiny-vue/issues/115) by [@acyza](https://github.com/acyza) in [#116](https://github.com/opentiny/tiny-vue/pull/116)
- fix(table): table-misaligned when frozen columns by [@awspi](https://github.com/awspi) in [#140](https://github.com/opentiny/tiny-vue/pull/140)
- 修复 tooltip`append-to-body="false"`时在表格中位置计算错误 by [@acyza](https://github.com/acyza) in [#146](https://github.com/opentiny/tiny-vue/pull/146)
- fix(pull-refresh): 修复下拉刷新组件频繁触发的问题 by [@TC-twwang](https://github.com/TC-twwang) in [#145](https://github.com/opentiny/tiny-vue/pull/145)

### Other Changes

- refactor(tabs): optimize new tab button postion close [#127](https://github.com/opentiny/tiny-vue/issues/127) by [@kagol](https://github.com/kagol) in [#128](https://github.com/opentiny/tiny-vue/pull/128)

## v2.6.1/v3.6.1

`2023/04/08`

### Exciting New Features 🎉

- feat(timeline): 增加箭头点击区域 by [@MNZhu](https://github.com/MNZhu) in [#103](https://github.com/opentiny/tiny-vue/pull/103)

### Bug Fixes 🐛

- fix(radio): 修复主题配置 radio-button 无法继承属性的 bug，打开可继承属性 by [@chenxi-20](https://github.com/chenxi-20) in [#82](https://github.com/opentiny/tiny-vue/pull/82)
- fix: fix monorepo by [@kagol](https://github.com/kagol) in [#91](https://github.com/opentiny/tiny-vue/pull/91)
- fix(anchor): 修复父锚点指示异常的问题 by [@chenxi-20](https://github.com/chenxi-20) in [#93](https://github.com/opentiny/tiny-vue/pull/93)
- fix: Failed to resolve entry for package "@opentiny/vue" close [#99](https://github.com/opentiny/tiny-vue/issues/99) by [@kagol](https://github.com/kagol) in [#100](https://github.com/opentiny/tiny-vue/pull/100)
- fix(upload): 取消 fileupload 组件的自动隐藏和提示功能，修改成用户可自定义配置 by [@chenxi-20](https://github.com/chenxi-20) in [#95](https://github.com/opentiny/tiny-vue/pull/95)
- fix(exception): 优化定位布局样式 by [@MNZhu](https://github.com/MNZhu) in [#104](https://github.com/opentiny/tiny-vue/pull/104)
- fix(timeline): 修复单个节点数据显示线条问题 by [@MNZhu](https://github.com/MNZhu) in [#105](https://github.com/opentiny/tiny-vue/pull/105)
- fix: 修复打包，发布报错等问题，调整类型声明等问题 by [@zzcr](https://github.com/zzcr) in [#108](https://github.com/opentiny/tiny-vue/pull/108)
- fix(vue-common): 修复 adapter 中的 mode 的传值问题 by [@shenjunjian](https://github.com/shenjunjian) in [#110](https://github.com/opentiny/tiny-vue/pull/110)
- fix: 修复文档初始`pathname`错误 by [@acyza](https://github.com/acyza) in [#107](https://github.com/opentiny/tiny-vue/pull/107)
- fix: 修复国际化键值的问题 by [@shenjunjian](https://github.com/shenjunjian) in [#111](https://github.com/opentiny/tiny-vue/pull/111)
- fix: 添加打包前置脚本 by [@zzcr](https://github.com/zzcr) in [#112](https://github.com/opentiny/tiny-vue/pull/112)
- fix(vue-panel): 修复 panel 的问题 by [@shenjunjian](https://github.com/shenjunjian) in [#113](https://github.com/opentiny/tiny-vue/pull/113)
- fix: Removing the invalid resource path enables `pnpm dev` to succeed. by [@ygj6](https://github.com/ygj6) in [#109](https://github.com/opentiny/tiny-vue/pull/109)
- fix: fix build error by [@kagol](https://github.com/kagol) in [#119](https://github.com/opentiny/tiny-vue/pull/119)
- fix(grid): 使用 gpu 加速优化虚拟滚动性能，修复筛选面板单选框无法选中问题 by [@zzcr](https://github.com/zzcr) in [#121](https://github.com/opentiny/tiny-vue/pull/121)

### Other Changes

- refactor: Refactor project to Monorepo and TypeScript by [@kagol](https://github.com/kagol) in [#90](https://github.com/opentiny/tiny-vue/pull/90)
- refactor: remove useless files by [@kagol](https://github.com/kagol) in [#92](https://github.com/opentiny/tiny-vue/pull/92)
- docs: update README by [@kagol](https://github.com/kagol) in [#98](https://github.com/opentiny/tiny-vue/pull/98)

## v2.6.0/v3.6.0

`2023/03/22`

### Exciting New Features 🎉

- feat(anchor): 新增 anchor 组件第一个功能：基本使用 by [@chenxi-20](https://github.com/chenxi-20) in [#30](https://github.com/opentiny/tiny-vue/pull/30)
- feat(modal): 增加反馈弹窗 modal 组件 by [@MNZhu](https://github.com/MNZhu) in [#19](https://github.com/opentiny/tiny-vue/pull/19)
- feat(button): 按钮组件样式修改 by [@MNZhu](https://github.com/MNZhu) in [#21](https://github.com/opentiny/tiny-vue/pull/21)
- feat(multi-select): 增加下拉选择器 multi-select 组件 by [@TC-twwang](https://github.com/TC-twwang) in [#22](https://github.com/opentiny/tiny-vue/pull/22)
- feat(search): 搜索组件样式修改 by [@MNZhu](https://github.com/MNZhu) in [#33](https://github.com/opentiny/tiny-vue/pull/33)
- feat(anchor): 添加锚点 anchor 组件 onchange 事件 by [@chenxi-20](https://github.com/chenxi-20) in [#35](https://github.com/opentiny/tiny-vue/pull/35)
- feat(timeline): 时间线插槽作用域增加 index 属性 by [@chenxi-20](https://github.com/chenxi-20) in [#39](https://github.com/opentiny/tiny-vue/pull/39)
- feat(timeline): timeline 样式修改 by [@MNZhu](https://github.com/MNZhu) in [#38](https://github.com/opentiny/tiny-vue/pull/38)
- feat(form): form 组件增加自动换行 by [@TC-twwang](https://github.com/TC-twwang) in [#40](https://github.com/opentiny/tiny-vue/pull/40)
- feat(indexbar): 增加索引组件 by [@MNZhu](https://github.com/MNZhu) in [#47](https://github.com/opentiny/tiny-vue/pull/47)
- feat(form): form 组件增加自动换行-检视意见修改 by [@TC-twwang](https://github.com/TC-twwang) in [#54](https://github.com/opentiny/tiny-vue/pull/54)
- feat(anchor): 锚点组件增加固定模式，修复示例文档 bug 问题 by [@chenxi-20](https://github.com/chenxi-20) in [#49](https://github.com/opentiny/tiny-vue/pull/49)
- feat(anchor): 修复检视意见，同步远程代码 by [@chenxi-20](https://github.com/chenxi-20) in [#55](https://github.com/opentiny/tiny-vue/pull/55)
- feat(anchor): 调整 anchor 组件，让其可以适配主题配置 by [@chenxi-20](https://github.com/chenxi-20) in [#57](https://github.com/opentiny/tiny-vue/pull/57)
- feat(badge): add badge-class close [#50](https://github.com/opentiny/tiny-vue/issues/50) by [@kagol](https://github.com/kagol) in [#51](https://github.com/opentiny/tiny-vue/pull/51)
- feat(tag): add beforeDelete props by [@kagol](https://github.com/kagol) in [#52](https://github.com/opentiny/tiny-vue/pull/52)
- feat(form): form 组件增加自动换行-增加移动端条件校验 by [@TC-twwang](https://github.com/TC-twwang) in [#58](https://github.com/opentiny/tiny-vue/pull/58)
- feat(switch): add beforeChange props by [@kagol](https://github.com/kagol) in [#59](https://github.com/opentiny/tiny-vue/pull/59)
- feat(fullscreen): add beforeChange props by [@kagol](https://github.com/kagol) in [#61](https://github.com/opentiny/tiny-vue/pull/61)
- feat(badge): add offset props by [@kagol](https://github.com/kagol) in [#63](https://github.com/opentiny/tiny-vue/pull/63)
- feat(tabs): tabs 组件支持展开 by [@TC-twwang](https://github.com/TC-twwang) in [#60](https://github.com/opentiny/tiny-vue/pull/60)
- feat(split): add collapsible props by [@kagol](https://github.com/kagol) in [#64](https://github.com/opentiny/tiny-vue/pull/64)
- feat(pull-refresh): pull-refresh 组件支持上拉刷新 by [@TC-twwang](https://github.com/TC-twwang) in [#67](https://github.com/opentiny/tiny-vue/pull/67)
- feat(tabs): 增加 tabs 组件超出隐藏提示 tip 配置 by [@chenxi-20](https://github.com/chenxi-20) in [#68](https://github.com/opentiny/tiny-vue/pull/68)
- feat(action-menu): 修复 ActionMenu 下拉后箭头旋转向上 by [@MomoPoppy](https://github.com/MomoPoppy) in [#70](https://github.com/opentiny/tiny-vue/pull/70)
- feat(transfer): add beforeTransfer props by [@kagol](https://github.com/kagol) in [#75](https://github.com/opentiny/tiny-vue/pull/75)
- feat(search): add prefix/suffix slots by [@kagol](https://github.com/kagol) in [#77](https://github.com/opentiny/tiny-vue/pull/77)

### Bug Fixes 🐛

- fix(ipaddress): form 的示例增加 numeric,ipaddress 的校验示例 by [@shenjunjian](https://github.com/shenjunjian) in [#29](https://github.com/opentiny/tiny-vue/pull/29)
- fix: 修复构建错误 by [@kagol](https://github.com/kagol) in [#25](https://github.com/opentiny/tiny-vue/pull/25)
- fix: 修复 echarts 和 cropperjs 依赖版本落后问题 by [@yuanningning](https://github.com/yuanningning) in [#27](https://github.com/opentiny/tiny-vue/pull/27)
- fix(grid): 修复表格再虚拟滚动模式下，始终有横向滚动条问题 by [@zzcr](https://github.com/zzcr) in [#32](https://github.com/opentiny/tiny-vue/pull/32)
- fix(checkbox): 修复 vue3 模式下，checkbox-group 的 change 事件触发 2 次的问题 by [@shenjunjian](https://github.com/shenjunjian) in [#31](https://github.com/opentiny/tiny-vue/pull/31)
- fix(anchor): 修复 anchor 组件 MD 文档说明 by [@chenxi-20](https://github.com/chenxi-20) in [#34](https://github.com/opentiny/tiny-vue/pull/34)
- fix(milestone): 修复里程碑图标不对齐 bug by [@chenxi-20](https://github.com/chenxi-20) in [#37](https://github.com/opentiny/tiny-vue/pull/37)
- fix: 修复存在 2 个高度不一样的 notify 时，新增的 notify 高度错误 by [@rayhaoqin](https://github.com/rayhaoqin) in [#26](https://github.com/opentiny/tiny-vue/pull/26)
- fix(switch): switch 组件提示文字只在首次显示，切换开关状态后提示文字消失 by [@yuanningning](https://github.com/yuanningning) in [#42](https://github.com/opentiny/tiny-vue/pull/42)
- fix(tiny-loading): 修复 loading 组件在 vue2.0 版本报错 bug by [@zzcr](https://github.com/zzcr) in [#46](https://github.com/opentiny/tiny-vue/pull/46)
- fix(indexbar): 类命名整改 by [@MNZhu](https://github.com/MNZhu) in [#56](https://github.com/opentiny/tiny-vue/pull/56)
- fix(dropdown): 修复 dropdown 下拉后箭头旋转向上 by [@MomoPoppy](https://github.com/MomoPoppy) in [#45](https://github.com/opentiny/tiny-vue/pull/45)
- fix(cascader): 修复级联组件属性无法透传问题 by [@rayhaoqin](https://github.com/rayhaoqin) in [#66](https://github.com/opentiny/tiny-vue/pull/66)
- fix(dropdown-mobile): 修复移动端组件 dropdownMenu 无法正常渲染的问题，顺带修复 pc 端 dropDown 组件的警告 by [@chenxi-20](https://github.com/chenxi-20) in [#80](https://github.com/opentiny/tiny-vue/pull/80)
- fix: 修复 tabs 组件展开内容被遮盖，multi-slect 返回值增加 value by [@TC-twwang](https://github.com/TC-twwang) in [#81](https://github.com/opentiny/tiny-vue/pull/81)

### Other Changes

- docs: update CONTRIBUTING.md by [@kagol](https://github.com/kagol) in [#62](https://github.com/opentiny/tiny-vue/pull/62)
- docs: add english README and CONTRIBUTING by [@kagol](https://github.com/kagol) in [#79](https://github.com/opentiny/tiny-vue/pull/79)

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
