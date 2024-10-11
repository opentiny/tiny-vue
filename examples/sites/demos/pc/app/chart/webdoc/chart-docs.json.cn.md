## 安装

推荐使用`npm`或者`yarn`方式进行开发

```javascript
npm i @opentiny/vue
# 或者
yarn add @opentiny/vue
```

## 使用

`tinyChart`支持多组件引入、单组件引入以及完整引入三种方式。

### 多组件引入

`TinyChart`多组件引用即从依赖包 @opentiny/vue中引用多个组件,参考示例如下(以 `ChartLine` 和 `ChartBar` 组件为例):

```html
<template>
  <div>
    <tiny-chart-line></tiny-chart-line>
    <tiny-chart-bar></tiny-chart-bar>
  </div>
</template>
<script>
  import { HuichartsLine, ChartBar } from '@opentiny/vue'
  export default {
    components: {
      TinyChartLine: ChartLine,
      TinyChartBar: ChartBar
    }
  }
</script>
```

### 单组件引入

`TinyChart` 每个组件都可以独立安装、独立使用,即只安装单个组件的依赖并单独引用该组件，参考示例如下(以 `ChartLine`和`ChartBar` 组件为例):

```html
<template>
  <div>
    <tiny-chart-line></tiny-chart-line>
    <tiny-chart-bar></tiny-chart-bar>
  </div>
</template>
<script>
  import ChartLine from '@opentiny/vue/ChartLine'
  import ChartBar from '@opentiny/vue/chartBar'
  export default {
    components: {
      TinyChartLine: ChartLine,
      TinyChartBar: ChartBar
    }
  }
</script>
```

### 完整引入

完整引入组建后，可以通过 `type` 属性去获取想要的图表，我们并不推荐直接使用完整引入，这样会全量引入所有组件，无法实现按需加载。但如果确实有场景的需求，可以通过以下方式引用，参考示例如下(以 `ChartLine` 和 `ChartBar` 组件为例):

```html
<template>
  <div>
    <tiny-chart type="line"></tiny-chart>
    <tiny-chart type="bar"></tiny-chart>
  </div>
</template>
<script>
  import { Huicharts } from '@opentiny/vue'
  export default {
    components: {
      TinyChart: Chart
    }
  }
</script>
```

## 组件使用

下面是一个简单的小示例

```html
<template>
  <div>
    <tiny-chart-line></tiny-chart-line>
    <tiny-chart-bar></tiny-chart-bar>
  </div>
</template>
<script>
  import { HuichartsLine, ChartBar } from '@opentiny/vue'
  export default {
    components: {
      TinyChartLine: ChartLine,
      TinyChartBar: ChartBar
    },
    data() {
      return {
        options: {
          padding: [50, 30, 50, 20],
          legend: {
            show: true,
            icon: 'line'
          },
          data: [
            { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 1 },
            { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
            { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 20 },
            { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
            { 'Month': 'May', 'Domestic': 37, 'Abroad': 1 },
            { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
            { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
            { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
            { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
            { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
            { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
            { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 1 }
          ]
        }
      }
    }
  }
</script>
```
