<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-ui-CalendarBar wapi-container-CalendarBar wapi-navigation-steps"/>
</p>

## CalendarBar 日历栏

</div>

### 基本用法

组件 `v-model` 只接受字符串值，例如 `2022-12-18`

<nova-demo-view link="calendar-bar/basic-usage.vue"></nova-demo-view>

### 禁用

使用 `config.disabled` 配置一个方法，用于判断参数日期是否禁用。
使用 `config.disabledColorClass` 配置禁用日期的字体颜色类名。
使用 `config.disabledBackgroundColorClass` 配置禁用日期的背景颜色类名。

<nova-demo-view link="calendar-bar/disabled.vue"></nova-demo-view>


### 日期标记

使用 `config.mark` 配置一个方法，用于判断参数日期是否存在标记。
此方法返回空字符串表示不存在标记，返回非空字符串表示存在标记，且标记内容就是该字符串。
使用 `config.markBackgroundColorClass` 配置标记的颜色类名。
使用 `config.showMarkMessage` 配置是否开启标记 `title` 提示，默认值为 `false`。

<nova-demo-view link="calendar-bar/marked.vue"></nova-demo-view>

### 当前日期

用户传入的日期为 `当前日期`。
使用 `config.currentColorClass` 配置 `当前日期` 的字体颜色类名；
使用 `config.currentBackgroundColorClass` 配置 `当前日期` 的背景颜色类名。

<nova-demo-view link="calendar-bar/render-current.vue"></nova-demo-view>

### 今天

使用 `config.renderItem` 可以配置一个方法，对日期面板的某些项进行定制渲染。

<nova-demo-view link="calendar-bar/render-today.vue"></nova-demo-view>

### 周起始

使用 `config.weekFirst` 配置每周的起始天。默认值为 `0`，表示周起始为 `周日`。也可以配置为 `1 ~ 6`，分别表示 `周一 ~ 周六`。

<nova-demo-view link="calendar-bar/week-first.vue"></nova-demo-view>

### 工作日

用户传入的日期为 `当前日期`，当前日期所在月份为 `当前月份`，当前月份周六周日为 `周末`，非周六周日为 `工作日`。
使用 `config.workday` 配置一个方法，用于判断 `工作日` 是否作为真正的工作日；
使用 `config.holiday` 配置一个方法，用于判断 `周末` 是否作为真正的周末；
使用 `config.workdayColorClass` 和 `config.holidayColorClass` 配置工作日和周末的字体颜色类。

<nova-demo-view link="calendar-bar/workday.vue"></nova-demo-view>
