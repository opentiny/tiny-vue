# Update Log

## v2.1.0/v3.1.0

`2023 / 02 / 19`

###'Destructive Change

- [Theme variable] If the version is upgraded, the referenced theme variable becomes invalid. Due to this upgrade, theme variables are standardized and rectified. If theme variables are used in old projects, click [Subject Replacement](https://tinyuidesign.cloudbu.huawei.com/tiny-vue/en-US/os-theme/docs/theme) to enter the tutorial and replace the old and new theme variables of the project.

### New Features

- [Global scrolling switch] The PopupManager.globalScroll attribute is added to solve the problem that the pop-up layer does not follow the scrolling in some scenarios. [Reference Case] (https://w3.huawei.com/servicedesk/itservice/casemanage/#/agent?docId=KT00206971)
- [Grid component] Add the function of dragging rows and setting the drag range. The toolbar provides the function of filtering columns by drop-down list.
- [Select component] Add a trigger source slot.

### Defect fixing

- [Numeric component] The component reports an error when the input value of the Numeric component is too long.
- [Form Component] Fixed an issue where required of the FormItem component cannot be aligned when the first item is not in the first item.
- [Dropdown component] Fixed issues related to the Dropdown component.
- [ActionMenu] Fixed an issue where the pop-up of the ActionMenu component cannot be selected.
- [Select component] The options that are selected and disabled by default for multiple selections can be deleted. The searchable function is invalid in vue2. The search box complies with HUAWEI CLOUD specifications. Filtering can be triggered when you enter a value.
- [Grid component] Fixed the issue that the pagination setting and style of the personalized panel are invalid.

###'Optimization

- [Popover component] Popover component loading is optimized.
- [Tree component] Optimize the highlight effect of the target element when the tree node is dragged.
- [Pager component] The Go button is dimmed and hovered. The simple mode is optimized. Optimized the display of numbers in the pagination list.
- [FileUpload] Added the function of hiding the button when the number of uploaded files reaches the limit.
- [Official website] Added the mapping table of old and new theme variables and the tutorial on replacing old and new theme variables.
- [Official website] Added the description of the width attribute of the PopEditor component.
- [Official website] Added the API title of the DropDown component.
- [Official website] Anchor redirection of the Upload component is fixed.
- [Official Website] Repair Milestone Title
- [Official website] Fileupload image upload optimization function
- [Official website] Optimized the example of hiding pagination when only one page button is available for the pager component. Optimized the style of the buttons on the up and down pages.

---

## v2.4.0/v3.4.0

`2023 / 01 / 13`

###'Destructive Change

- None.

### New Features

- [ActionMenu] The ActionMenu component is added.

### Defect fixing

- [BulletinBoard component] The function of adding more links to the BulletinBoard component is fixed.
- [CreditCardForm Credit Card Form] Fixed an issue where the latest value cannot be changed when the number is edited when the card number is displayed.
- [Dropdown component] The visible-change event of the Dropdown component is not triggered.
- [Grid component] Fixed the issue that the paging setting and style of the personalized panel of the grid component are invalid.
- [Grid component] Rectify the problem that the big data virtual scroll bar is incorrectly calculated after the setAllTreeExpansion method is executed in a tree table and all rows are expanded.
- [Popover component] When modelValue of popover is set to true, popover display is triggered by default.
- [Select component] The option that is selected by default and disabled for multiple selections of the Select component is fixed. The deletion of the option needs to be prohibited.
- [ToggleMemu component] Fixed the bug that the togglememu component can obtain only the label field.
- [ToggleMemu component] Discard getMenuDataSync and change it to asynchronous getMenuDataAsync.

###'Optimization

- [Grid component] Added the default table pagination example and optimized the table refresh example.
- [Grid component] The interaction and style of the table in editing state are consistent with HUAWEI CLOUD specifications.
- [Grid component] The built-in pagination of tables is optimized. The pagination component can be displayed even when the pagination component is not introduced.
- [Pager component] Copywriting internationalization of the redirection button of the pagination component
- [TreeMenu component] In the expanded state, the expanded arrow turns blue only when it is changed to hover. The expanded arrow turns gray when it is moved away.
- [Official website] Add smart customer service on the homepage
- [Official Website] Upload Jump Anchor Fix
- [Official website] The upload code example is optimized.
- [Official website] Responsive layout adjustment

---

## v2.3.0/v3.3.0

`2022 / 12 / 16`

###'Destructive Change

- None.

### New Features

- The verticalOffset attribute is added to the Notify component.
- [FormItem component] Add the validate-icon attribute to FormItem.
- The searchable attribute is added to the Select component. You can search for information in the lower pane.
- [Official website] Add English documents and switch between Chinese and English.
- [Official Website] Added the customized configuration document for internationalization.

### Defect fixing

- [RadioGroup] The problem that the value assigned to a class is not rendered to the DOM is resolved.
- [Notify component, which solves the problem that a new component will overlap with an existing component if a component disappears after consecutive clicks.
- [Slider component] Modify the text position of the slider.
- [Search component] Fixed the issue that v-model values cannot be updated in real time. To listen to real-time changes of input values, use the @update:modelValue event.
- [TreeMenu component] Restore the background color of the treemenu when it is hovering.
- [Grid component] Fixed an issue where the position of the scroll bar is incorrectly calculated for the table component in a multi-layer tree table structure.
- [Grid component] Fixed an issue where the multi-field sorting function of the table component is invalid.
- [Grid Component] Fixed an issue where the table component invokes the clear filter method, but the filter parameter in the fetchData parameter still exists.
- [Official website] Fixed an issue where the anchor point of the left component jumps in the internationalization function.

###'Optimization

- [Notify component] style optimization
- Deleted the description of the size attribute from the FileUpload component.
- [Popover component] Added the document update of the height attribute.
- [Message component] Modify the height of a message.
- [Icon component] Add the corresponding class for the icon.
- [Official website] Compression of larger sample images in vue documents
- [Official website] Underline is added to the open-source official website, and the native scroll bar hovers.
- [Official Website] Open the Update Log Menu on Open Source Websites
- [Official website] Remove the top progress bar during route switchover.
- [Official website] Optimize the theme color of the website

---

## v2.2.0/v3.2.0

`2022 / 12 / 2`

###'Destructive Change

- None.

### New Features

- The visible attribute is added to the Tooltip component.
- The options, textField, and select events are added to the Breadcrumb component. The breadcrumb component supports profiles!
- The label attribute and select event are added to the BreadcrumbItem component.
- [Dropdown component] Added the menuOptions and title attributes. The drop-down menu component supports profiles!
- The options and textField attributes are added to the DropdownMenu component.
- [DropdownItem component] Added the label attribute.
- [Notify component] The debounceDelay attribute is added to enable the anti-jitter function.

### Defect fixing

- [Search component] Fixed an issue where the height is incorrect due to layout modification. Default theme 30px, unlimited theme 32px
- [Pager component] Fixed an issue where the display is abnormal in the webcomponents environment.
- [Popover component] Fixed an issue where the display is abnormal in the webcomponents environment.
- [Form component] Fixed an issue where an error is reported during form validation in the webcomponents environment.
- [Form component] Fixed the align-lable style problem.
- [Chart component] The extend configuration is partially invalid.

---

## v2.1.0/v3.1.0

`2022/10/31`

### 📢 Breaking changes

- Remove the `rich-text` component, because the third-party plug-in `quill` introduced by the component is an overdue high-risk dependency, and if you want to continue to use it, you can use the old version： `@opentiny/vue-rich-text@3.0.0`

### ✨ New characteristics

- The TinyVue component library supports type declarations and can be used normally in projects`typescript`
- TinyVue component library has completed the theme configuration transformation of multiple components, and currently provides two sets of default themes: default theme and unlimited theme
- [Added Dropdown dropdown drop-down component](https://rnd-think.huawei.com/tiny-vue/zh-CN/os-theme/components/dropdown)
- [Added the Notify notification component](https://rnd-think.huawei.com/tiny-vue/zh-CN/os-theme/components/notify)

### 🐞 Bug fixes

- Tabs component, which solves the bug of uneven underline pairs of titles
- Numeric counter component, fixed the bug that when the mouse wheel scrolls to change the value, the scroll bar of the page will also scroll with it
- Grid table, fix the bug that merged cells and overflow was added to the table column, resulting in style exceptions
- Grid table, fix the bug that the table data does not change after binding a static data source (array), push, splice and other operations
- DatePicker date picker, fix the bug that the time zone selection drop-down box cannot come out
- Select component, fix the bug of creating an entry, creating an entry selected, and then re-creating the checked, or the last selected data selected
- Slider widget to solve the bug that cannot be dragged

---

## v2.0.0/v3.0.0

`2022/09/19`

### 📢 Breaking changes

not

### ✨ New characteristics

- [Select component to add the scroll event](http://3ms.huawei.com/hi/group/3955273/thread_9057711.html?mapId=10888105&t_type=ask)

### 🐞 Bug fixes

- [Search component, fixed the issue that the change event fired 2 times](http://3ms.huawei.com/hi/group/3955273/thread_9057203.html?mapId=10887597&t_type=ask)
- [Tabs component, fix the tab component set tab component, the internal tab item will show the bug on the outer tab](https://codehub-g.huawei.com/Tiny/TinyComponent/tiny-vue/issues/14)
- [PopEditor' component, which solves the problem that the query conditions in the pop-up box cannot be entered](http://3ms.huawei.com/hi/group/3955273/thread_9057057.html?mapId=10887445&t_type=ask)
- Cascader component, which solves the problem of clicking on the selected option to close the selector
- RichText component, which solves the problem of console error reporting when quickly deleting variables through v-model
