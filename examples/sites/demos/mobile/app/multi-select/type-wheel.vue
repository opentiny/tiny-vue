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
import { MultiSelect } from '@opentiny/vue'

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
                  label: '2020全年',
                  children: [
                    {
                      label: '年'
                    }
                  ]
                },
                {
                  label: '2020年Q1',
                  children: [
                    {
                      label: '2020年Q1一月'
                    },
                    {
                      label: '2020年Q1二月'
                    },
                    {
                      label: '2020年Q1三月'
                    }
                  ]
                },
                {
                  label: '2020年Q2',
                  children: [
                    {
                      label: '2020年Q2四月'
                    },
                    {
                      label: '2020年Q2五月'
                    },
                    {
                      label: '2020年Q2六月'
                    }
                  ]
                }
              ]
            },
            {
              label: '2021年',
              children: [
                {
                  label: '2021全年',
                  children: [
                    {
                      label: '年'
                    }
                  ]
                },
                {
                  label: '2021年Q1',
                  children: [
                    {
                      label: '2021年Q1一月'
                    },
                    {
                      label: '2021年Q1二月'
                    },
                    {
                      label: '2021年Q1三月'
                    }
                  ]
                },
                {
                  label: '2021年Q2',
                  children: [
                    {
                      label: '2021年Q2四月'
                    },
                    {
                      label: '2021年Q2五月'
                    },
                    {
                      label: '2021年Q2六月'
                    }
                  ]
                }
              ]
            },
            {
              label: '2022年',
              children: [
                {
                  label: '2022全年',
                  children: [
                    {
                      label: '年'
                    }
                  ]
                },
                {
                  label: '2022年Q1',
                  children: [
                    {
                      label: '2022年Q1一月'
                    },
                    {
                      label: '2022年Q1二月'
                    },
                    {
                      label: '2022年Q1三月'
                    }
                  ]
                },
                {
                  label: '2022年Q2',
                  children: [
                    {
                      label: '2022年Q2四月'
                    },
                    {
                      label: '2022年Q2五月'
                    },
                    {
                      label: '2022年Q2六月'
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
          children: [
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
          children: [
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
    confirm(...arg) {
      console.log(...arg)
    },
    reset(...arg) {
      console.log(...arg)
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
