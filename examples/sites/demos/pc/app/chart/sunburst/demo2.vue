<template>
  <div>
    <tiny-sunburst :options="options"></tiny-sunburst>
  </div>
</template>

<script lang="jsx">
import { HuichartsSunburst } from '@opentiny/vue'

export default {
  components: {
    TinySunburst: ChartSunburst
  },
  data() {
    return {
      options: {
        series: {
          radius: [60, '65%'], // 自定义旭日图半径
          label: {
            show: false
          },
          emphasis: {
            focus: 'ancestor'
          }
        },
        tipHtml: (params) => {
          let name = params.name === '' ? '--' : params.name
          let value = params.Value
          let htmlString = `<div>
      <span style="display:inline-block;min-width:50px;">名称：</span>
      <span style="font-weight:bold">${name}</span>
      </div>`
          htmlString += `<div>
      <span style="display:inline-block;min-width:50px;">总数：</span>
      <span style="font-weight:bold">${value}</span>
      </div>`
          return htmlString
        },
        data: [
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
            name: '图表类型',
            children: [
              {
                name: '折线图',
                children: [
                  {
                    name: 'SVG ↑↑',
                    value: 1
                  }
                ]
              },
              {
                name: '柱状图',
                children: [
                  {
                    name: 'Canvas ↑↑',
                    value: 1
                  }
                ]
              },
              {
                name: '饼图',
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
            name: '数据量',
            children: [
              {
                name: '< 1000',
                children: [
                  {
                    name: '-',
                    value: 1
                  }
                ]
              },
              {
                name: '>= 1000',
                children: [
                  {
                    name: 'Canvas ↑',
                    value: 1
                  }
                ]
              }
            ]
          },
          {
            name: '图表个数',
            children: [
              {
                name: '< 10',
                children: [
                  {
                    name: '-',
                    value: 1
                  }
                ]
              },
              {
                name: '>= 10',
                children: [
                  {
                    name: 'SVG ↑↑↑',
                    value: 1
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
      }
    }
  }
}
</script>
