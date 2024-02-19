<template>
  <div>
    <tiny-tree-chart :data="chartData" :settings="chartSettings"></tiny-tree-chart>
  </div>
</template>

<script lang="jsx">
import { ChartTree } from '@opentiny/vue'

const treeData = {
  name: 'f',
  value: 1,
  link: '',
  children: [
    {
      name: 'a',
      value: 1,
      link: '',
      children: [
        {
          name: 'a-a',
          link: '',
          value: 2
        },
        {
          name: 'a-b',
          link: '',
          value: 2
        }
      ]
    },
    {
      name: 'b',
      value: 1,
      link: '',
      children: [
        {
          name: 'b-a',
          link: '',
          value: 2
        },
        {
          name: 'b-b',
          link: '',
          value: 2
        }
      ]
    },
    {
      name: 'c',
      value: 3,
      link: '',
      children: [
        {
          name: 'c-a',
          link: '',
          value: 4
        },
        {
          name: 'c-b',
          link: '',
          value: 2
        }
      ]
    },
    {
      name: 'd',
      value: 3,
      link: '',
      children: [
        {
          name: 'd-a',
          link: '',
          value: 4
        },
        {
          name: 'd-b',
          link: '',
          value: 2
        }
      ]
    }
  ]
}

export default {
  components: {
    TinyTreeChart: ChartTree
  },
  data() {
    return {
      // 多树图
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [treeData]
          },
          {
            name: 'tree2',
            value: [treeData]
          }
        ]
      },
      chartSettings: {
        seriesMap: {
          tree1: {
            top: '5%',
            left: '7%',
            bottom: '2%',
            right: '60%'
          },
          tree2: {
            top: '20%',
            left: '60%',
            bottom: '22%',
            right: '18%'
          }
        }
      }
    }
  }
}
</script>
