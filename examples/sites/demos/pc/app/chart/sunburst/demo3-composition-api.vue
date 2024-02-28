<template>
  <div>
    <tiny-sunburst :extend="extend" theme-type="ict"></tiny-sunburst>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ChartSunburst as TinySunburst } from '@opentiny/vue'

const data = [
  {
    name: '展示平台',
    children: [
      {
        name: '手机端',
        children: [
          {
            name: '安卓',
            children: [
              {
                name: 'SVG ↑↑↑',
                value: 1
              }
            ]
          },
          {
            name: 'iOS',
            children: [
              {
                name: 'SVG ↑',
                value: 1
              }
            ]
          }
        ]
      },
      {
        name: '电脑端',
        children: [
          {
            name: 'Mac',
            children: [
              {
                name: 'Chrome',
                children: [
                  {
                    name: 'SVG ↑',
                    value: 1
                  }
                ]
              },
              {
                name: 'Safari',
                children: [
                  {
                    name: '-',
                    value: 1
                  }
                ]
              },
              {
                name: 'Firefox',
                children: [
                  {
                    name: '-',
                    value: 1
                  }
                ]
              }
            ]
          },
          {
            name: 'Windows',
            children: [
              {
                name: 'IE',
                children: [
                  {
                    name: 'Canvas ↑↑',
                    value: 1
                  }
                ]
              },
              {
                name: 'Chrome',
                children: [
                  {
                    name: '-',
                    value: 1
                  }
                ]
              },
              {
                name: 'Firefox',
                children: [
                  {
                    name: 'SVG ↑',
                    value: 1
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '特殊\n渲染\n需求',
    children: [
      {
        name: '仅 Canvas\n支持',
        value: 1
      }
    ]
  }
]

const extend = reactive({
  series: {
    center: ['50%', '50%'],
    data,
    label: {
      show: true,
      rotate: 0,
      color: '#191919'
    }
  }
})
</script>
