<template>
  <div class="demo-multi-select">
    <tiny-multi-select
      type="wheel"
      :data-source="data"
      :default-selected-array="defaultSelectedArray"
      @confirm="confirm"
      @reset="reset"
    >
    </tiny-multi-select>
  </div>
</template>

<script>
import { MultiSelect, Toast } from '@opentiny/vue'

export default {
  components: {
    TinyMultiSelect: MultiSelect
  },
  data() {
    return {
      data: [
        {
          title: '时间',
          hasFooter: true,
          options: [
            {
              label: '2020年',
              children: [
                {
                  label: '全年'
                },
                {
                  label: 'Q1',
                  children: [
                    {
                      label: '一月'
                    },
                    {
                      label: '二月'
                    },
                    {
                      label: '三月'
                    }
                  ]
                },
                {
                  label: 'Q2',
                  children: [
                    {
                      label: '四月'
                    },
                    {
                      label: '五月'
                    },
                    {
                      label: '六月'
                    }
                  ]
                }
              ]
            },
            {
              label: '2021年',
              children: [
                {
                  label: '全年'
                },
                {
                  label: 'Q1',
                  children: [
                    {
                      label: '一月'
                    },
                    {
                      label: '二月'
                    },
                    {
                      label: '三月'
                    }
                  ]
                },
                {
                  label: 'Q2',
                  children: [
                    {
                      label: '四月'
                    },
                    {
                      label: '五月'
                    },
                    {
                      label: '六月'
                    }
                  ]
                }
              ]
            },
            {
              label: '2022年',
              children: [
                {
                  label: '全年'
                },
                {
                  label: 'Q1',
                  children: [
                    {
                      label: '一月'
                    },
                    {
                      label: '二月'
                    },
                    {
                      label: '三月'
                    }
                  ]
                },
                {
                  label: 'Q2',
                  children: [
                    {
                      label: '四月'
                    },
                    {
                      label: '五月'
                    },
                    {
                      label: '六月'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: '区域',
          hasFooter: true,
          options: [
            {
              label: '海外',
              children: [
                {
                  label: '欧洲巴黎'
                },
                {
                  label: '巴基斯坦'
                },
                {
                  label: '土耳其'
                }
              ]
            },
            {
              label: '中国',
              children: [
                {
                  label: '北京'
                },
                {
                  label: '上海'
                },
                {
                  label: '南京'
                }
              ]
            }
          ]
        },
        {
          title: '云类型',
          hasFooter: false,
          options: [
            {
              label: '公有云'
            },
            {
              label: '私有云'
            },
            {
              label: '伙伴云'
            },
            {
              label: '公有云1'
            },
            {
              label: '公有云2'
            }
          ]
        }
      ],
      defaultSelectedArray: []
    }
  },
  methods: {
    confirm(selectedOptions, headerIndex, columnIndices) {
      const selectVal = selectedOptions.reduce((prev, current) => `${prev} - ${current.label}`, '')
      Toast.service({
        text: `选中值: ${selectVal}`
      })
    },
    reset(currentValue, headerIndex, columnIndices) {
      Toast.service({
        text: '已重置为初始值'
      })
    }
  }
}
</script>

<style scoped>
.demo-multi-select {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
