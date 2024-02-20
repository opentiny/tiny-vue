<template>
  <div class="demo-multi-select">
    <tiny-multi-select :data-source="data" v-model="value" @item-click="handleItemClick"> </tiny-multi-select>
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
      value: ['', '', ''],
      data: [
        {
          title: '时间',
          options: [
            {
              label: '2020年',
              value: '2020年',
              children: [
                {
                  label: '2020全年',
                  children: [],
                  value: '2020全年'
                },
                {
                  label: '2020年Q1',
                  children: [
                    {
                      label: '2020年Q1一月',
                      value: '2020年Q1一月'
                    },
                    {
                      label: '2020年Q1二月',
                      value: '2020年Q1二月'
                    },
                    {
                      label: '2020年Q1三月',
                      value: '2020年Q1三月'
                    }
                  ],
                  value: '2020年Q1'
                },
                {
                  label: '2020年Q2',
                  children: [
                    {
                      label: '2020年Q2四月',
                      value: '2020年Q2四月'
                    },
                    {
                      label: '2020年Q2五月',
                      value: '2020年Q2五月'
                    },
                    {
                      label: '2020年Q2六月',
                      value: '2020年Q2六月'
                    }
                  ],
                  value: '2020年Q2'
                }
              ],
              value: '2020年'
            },
            {
              label: '2021年',
              children: [
                {
                  label: '2021全年',
                  children: [
                    {
                      label: '年',
                      value: '年'
                    }
                  ],
                  value: '2021全年'
                },
                {
                  label: '2021年Q1',
                  children: [
                    {
                      label: '2021年Q1一月',
                      value: '2021年Q1一月'
                    },
                    {
                      label: '2021年Q1二月',
                      value: '2021年Q1二月'
                    },
                    {
                      label: '2021年Q1三月',
                      value: '2021年Q1三月'
                    }
                  ],
                  value: '2021年Q1'
                },
                {
                  label: '2021年Q2',
                  children: [
                    {
                      label: '2021年Q2四月',
                      value: '2021年Q2四月'
                    },
                    {
                      label: '2021年Q2五月',
                      value: '2021年Q2五月'
                    },
                    {
                      label: '2021年Q2六月',
                      value: '2021年Q2六月'
                    }
                  ],
                  value: '2021年Q2'
                }
              ],
              value: '2021年'
            },
            {
              label: '2022年',
              children: [
                {
                  label: '2022全年',
                  children: [
                    {
                      label: '年',
                      value: '年'
                    }
                  ],
                  value: '2022全年'
                },
                {
                  label: '2022年Q1',
                  children: [
                    {
                      label: '2022年Q1一月',
                      value: '2022年Q1一月'
                    },
                    {
                      label: '2022年Q1二月',
                      value: '2022年Q1二月'
                    },
                    {
                      label: '2022年Q1三月',
                      value: '2022年Q1三月'
                    }
                  ],
                  value: '2022年Q1'
                },
                {
                  label: '2022年Q2',
                  children: [
                    {
                      label: '2022年Q2四月',
                      value: '2022年Q2四月'
                    },
                    {
                      label: '2022年Q2五月',
                      value: '2022年Q2五月'
                    },
                    {
                      label: '2022年Q2六月',
                      value: '2022年Q2六月'
                    }
                  ],
                  value: '2022年Q2'
                }
              ],
              value: '2022年'
            }
          ]
        },
        {
          title: '区域',
          multiple: true,
          options: [
            {
              label: '海外',
              children: [
                {
                  label: '欧洲巴黎',
                  value: '欧洲巴黎'
                },
                {
                  label: '巴基斯坦',
                  value: '巴基斯坦'
                },
                {
                  label: '土耳其',
                  value: '土耳其'
                }
              ],
              value: '海外'
            },
            {
              label: '中国',
              children: [
                {
                  label: '北京',
                  value: '北京'
                },
                {
                  label: '上海',
                  value: '上海'
                },
                {
                  label: '南京',
                  value: '南京'
                }
              ],
              value: '中国'
            }
          ]
        },
        {
          title: '云类型',
          options: [
            {
              label: '公有云',
              value: '公有云'
            },
            {
              label: '私有云',
              value: '私有云'
            },
            {
              label: '伙伴云',
              value: '伙伴云'
            },
            {
              label: '公有云1',
              value: '公有云1'
            },
            {
              label: '公有云2',
              value: '公有云2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleItemClick(data) {
      Toast.service({
        text: data.label
      })
    }
  }
}
</script>

<style scoped>
.demo-multi-select {
  height: 100%;
}

p {
  margin-top: 300px;
}
</style>
