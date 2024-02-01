<template>
  <div>
    <tiny-button @click="add">增加</tiny-button>
    <tiny-button @click="del">删除</tiny-button>
    <tiny-chart-graph :extend="extend" @dblclick="handleDbclick"></tiny-chart-graph>
  </div>
</template>

<script setup lang="jsx">
import { ref, computed } from 'vue'
import { ChartGraph as TinyChartGraph, Button as TinyButton } from '@opentiny/vue'

const data = ref([
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
])
const edges1 = ref([
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
])
const extend = computed(() => {
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
        data: data.value,
        edges: edges1.value,
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
})

function random(max) {
  return parseInt(max * Math.random(), 10)
}

function add() {
  const randomNumber = random(10000)
  const x = '-' + random(1000)
  const y = '-' + random(400)
  const id = 'random' + randomNumber
  const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
  const source = data.value[random(data.value.length)].name
  const symbolSize = random(100)

  data.value.push({
    x,
    y,
    id,
    name: id,
    symbolSize,
    itemStyle: { normal: { color } }
  })
  edges1.value.push({
    source,
    target: id,
    lineStyle: { normal: { color } }
  })
}

function deleteFn(arr, index) {
  if ($delete) {
    $delete(arr, index)
  } else {
    arr.splice(index, 1)
  }

  return arr
}

function handleDbclick(params) {
  if (params.dataType === 'node') {
    del(params.data.id)
  } else if (params.dataType === 'edge') {
    edges1.value.filter((_, i) => {
      if (params.data.target === _.target) {
        deleteFn(edges1.value, i)
      }
    })
    data.value.filter((_, i) => {
      if (params.data.target === _.id) {
        deleteFn(data.value, i)
      }
    })
  }
}

function del() {
  if (data.value.length <= 1) {
    return
  }

  const index = random(data.value.length)

  data.value.filter((_, i) => {
    if (i === index) {
      deleteFn(data.value, i)
      data.value[i] && doDel(data.value[i].id)
    }
  })
}

function doDel(id) {
  const color = {
    htmlparser: 'rgb(255, 171, 58)',
    jquery: 'rgb(97, 160, 168)'
  }
  let rela = { fa: '', son: [], del: [] }

  edges1.value.filter((_, i) => {
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
    rela.del.map((_, i) => deleteFn(edges1.value, _ - i))
    rela.son.filter((_) =>
      edges1.value.push({
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
</script>
