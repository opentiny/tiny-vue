<template>
  <div>
    <tiny-button @click="add">增加</tiny-button>
    <tiny-button @click="del">删除</tiny-button>
    <tiny-graph :extend="extend" @dblclick="handleDbclick"></tiny-graph>
  </div>
</template>

<script lang="jsx">
import { ChartGraph, Button } from '@opentiny/vue'

export default {
  components: {
    TinyGraph: ChartGraph,
    TinyButton: Button
  },
  data() {
    return {
      data: [
        {
          x: -739.36383,
          y: -404.26147,
          id: 'jquery',
          name: 'jquery',
          symbolSize: 40,
          itemStyle: {
            normal: {
              color: '#4f19c7'
            }
          },
          force: {
            repulsion: 600
          }
        },
        {
          x: -799.74493,
          y: -263.90924,
          id: 'jsdom',
          name: 'jsdom',
          symbolSize: 20,
          itemStyle: {
            normal: {
              color: '#4f19c7'
            }
          },
          force: {
            repulsion: 200
          }
        },
        {
          x: -831.295,
          y: -388.15134,
          id: 'xmlhttprequest',
          name: 'xmlhttprequest',
          symbolSize: 25,
          itemStyle: {
            normal: {
              color: '#4f19c7'
            }
          },
          force: {
            repulsion: 300
          }
        },
        {
          x: -881.295,
          y: -308.15134,
          id: 'xmlhttprequest.io',
          name: 'xmlhttprequest.io',
          symbolSize: 15,
          itemStyle: {
            normal: {
              color: '#4f003d'
            }
          },
          force: {
            repulsion: 550
          }
        },
        {
          x: -981.295,
          y: -428.15134,
          id: 'xmlhttprequest.io1',
          name: 'xmlhttprequest.io1',
          symbolSize: 10,
          itemStyle: {
            normal: {
              color: '#4f003d'
            }
          },
          force: {
            repulsion: 300
          }
        },
        {
          x: -546.95193,
          y: -405.9647,
          id: 'htmlparser',
          name: 'htmlparser',
          symbolSize: 62,
          label: {
            normal: {
              show: true
            },
            emphasis: {
              position: ['0%', '41%']
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(253, 156, 53)'
            }
          }
        },
        {
          x: -646.95193,
          y: -305.9647,
          id: 'htmlpar',
          name: 'htmlpar',
          symbolSize: 22,
          itemStyle: {
            normal: {
              color: '#4f19c7'
            }
          }
        },
        {
          x: -967.41296,
          y: -187.65944,
          id: 'contextify',
          name: 'contextify',
          symbolSize: 12,
          itemStyle: {
            normal: {
              color: '#4f19c7'
            }
          }
        }
      ],
      edges1: [
        {
          source: 'htmlparser',
          target: 'htmlpar',
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: {
              color: 'rgb(255, 171, 58)'
            }
          }
        },
        {
          source: 'htmlparser',
          target: 'jquery',
          label: {
            normal: {
              show: true
            }
          },
          lineStyle: {
            normal: {
              color: 'rgb(255, 171, 58)'
            }
          }
        },
        {
          source: 'jquery',
          target: 'jsdom',
          lineStyle: {
            normal: {
              color: 'rgb(97, 160, 168)'
            }
          }
        },
        {
          source: 'jquery',
          target: 'xmlhttprequest',
          lineStyle: {
            normal: {
              color: 'rgb(97, 160, 168)'
            }
          }
        },
        {
          source: 'jquery',
          target: 'contextify',
          lineStyle: {
            normal: {
              color: 'rgb(97, 160, 168)'
            }
          }
        },
        {
          source: 'xmlhttprequest',
          target: 'xmlhttprequest.io'
        },
        {
          source: 'xmlhttprequest',
          target: 'xmlhttprequest.io1'
        },
        {
          source: 'jquery',
          target: 'xmlhttprequest1',
          lineStyle: {
            normal: {
              color: 'rgb(97, 160, 168)'
            }
          }
        }
      ]
    }
  },
  computed: {
    extend() {
      return {
        title: {
          text: 'NPM Dependencies'
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            force: {
              repulsion: 500,
              gravity: 0.1
            },
            type: 'graph',
            layout: 'none',
            data: this.data,
            edges: this.edges1,
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 10],
            label: {
              emphasis: {
                position: 'right',
                show: true
              }
            },
            roam: true,
            focusNodeAdjacency: true,
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    random(max) {
      return parseInt(max * Math.random(), 10)
    },
    add() {
      const randomNumber = this.random(10000)
      const x = '-' + this.random(1000)
      const y = '-' + this.random(400)
      const id = 'random' + randomNumber
      const color = `rgb(${this.random(255)}, ${this.random(255)}, ${this.random(255)})`
      const source = this.data[this.random(this.data.length)].name
      const symbolSize = this.random(100)

      this.data.push({
        x,
        y,
        id,
        name: id,
        symbolSize,
        itemStyle: { normal: { color } }
      })
      this.edges1.push({
        source,
        target: id,
        lineStyle: { normal: { color } }
      })
    },
    deleteFn(arr, index) {
      if (this.$delete) {
        this.$delete(arr, index)
      } else {
        arr.splice(index, 1)
      }

      return arr
    },
    handleDbclick(params) {
      if (params.dataType === 'node') {
        this.del(params.data.id)
      } else if (params.dataType === 'edge') {
        this.edges1.filter((_, i) => {
          if (params.data.target === _.target) {
            this.deleteFn(this.edges1, i)
          }
        })
        this.data.filter((_, i) => {
          if (params.data.target === _.id) {
            this.deleteFn(this.data, i)
          }
        })
      }
    },
    del() {
      if (this.data.length <= 1) {
        return
      }

      const index = this.random(this.data.length)

      this.data.filter((_, i) => {
        if (i === index) {
          this.deleteFn(this.data, i)
          this.data[i] && this.doDel(this.data[i].id)
        }
      })
    },
    doDel(id) {
      const color = {
        htmlparser: 'rgb(255, 171, 58)',
        jquery: 'rgb(97, 160, 168)'
      }
      let rela = { fa: '', son: [], del: [] }

      this.edges1.filter((_, i) => {
        if (_.target === id) {
          rela.fa = _.source
          rela.del.push(i)
        }

        if (_.source === id) {
          rela.son.push(_.target)
          rela.del.push(i)
        }
      })

      if (rela.fa) {
        rela.del.map((_, i) => this.deleteFn(this.edges1, _ - i))
        rela.son.filter((_) =>
          this.edges1.push({
            source: rela.fa,
            target: _,
            lineStyle: {
              normal: {
                color: color[rela.fa]
              }
            }
          })
        )
      }
    }
  }
}
</script>
