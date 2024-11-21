## Install

recommend using the `npm` or `yarn` methods for development

```javascript
npm i @opentiny/vue
# 或者
yarn add @opentiny/vue
```

## Used

`TinyChart` supports three methods: multi component introduction, single component introduction, and full introduction.

### Multi component introduction

`TinyChart` multi-component reference refers to referencing multiple components from the dependency package @ opentiny/vue. The reference example is as follows (taking `ChartLine`
and `ChartBar` components as examples):

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

### Single component introduction

Each component of `TinyChart` can be installed and used independently, that is, only the dependencies of a single component are installed and referenced separately. The reference example is as follows (taking `ChartLine` and `ChartBar` components as examples):

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

### Complete introduction

After the complete introduction and assembly, the desired chart can be obtained through the `type` attribute. We do not recommend using the complete introduction directly, as it will fully introduce all components and cannot achieve on-demand loading. But if there is indeed a need for a scenario, it can be referenced in the following way, with reference examples as follows (taking the `ChartLine` and `ChartBar` components as examples):

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

## Component usage

Here is a simple example

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
