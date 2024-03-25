<template>
  <div class="demo-multi-select">
    <h4 class="title">1. 组件禁用:</h4>
    <tiny-multi-select :data-source="data1" disabled> </tiny-multi-select>
    <br />

    <h4 class="title">2. 菜单项禁用:</h4>
    <tiny-multi-select :data-source="data2" v-model="value1"> </tiny-multi-select>
    <br />

    <h4 class="title">3. 选项禁用:</h4>
    <tiny-multi-select :data-source="data3" v-model="value2"> </tiny-multi-select>
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
      value1: ['', '', ''],
      value2: [''],

      data1: [
        {
          title: '时间',
          options: [
            {
              label: '2020年',
              value: '2020年',
              children: [
                {
                  label: '全年',
                  children: [],
                  value: '全年'
                },
                {
                  label: 'Q1',
                  children: [
                    {
                      label: '一月',
                      value: '一月'
                    },
                    {
                      label: '二月',
                      value: '二月'
                    },
                    {
                      label: '三月',
                      value: '三月'
                    }
                  ],
                  value: 'Q1'
                },
                {
                  label: 'Q2',
                  children: [
                    {
                      label: '四月',
                      value: '四月'
                    },
                    {
                      label: '五月',
                      value: '五月'
                    },
                    {
                      label: '六月',
                      value: '六月'
                    }
                  ],
                  value: 'Q2'
                }
              ]
            },
            {
              label: '2021年',
              children: [
                {
                  label: '全年',
                  value: '全年'
                },
                {
                  label: 'Q1',
                  children: [
                    {
                      label: '一月',
                      value: '一月'
                    },
                    {
                      label: '二月',
                      value: '二月'
                    },
                    {
                      label: '三月',
                      value: '三月'
                    }
                  ],
                  value: 'Q1'
                },
                {
                  label: 'Q2',
                  children: [
                    {
                      label: '四月',
                      value: '四月'
                    },
                    {
                      label: '五月',
                      value: '五月'
                    },
                    {
                      label: '六月',
                      value: '六月'
                    }
                  ],
                  value: 'Q2'
                }
              ],
              value: '2021年'
            },
            {
              label: '2022年',
              children: [
                {
                  label: '全年',
                  value: '全年'
                },
                {
                  label: 'Q1',
                  children: [
                    {
                      label: '一月',
                      value: '一月'
                    },
                    {
                      label: '二月',
                      value: '二月'
                    },
                    {
                      label: '三月',
                      value: '三月'
                    }
                  ],
                  value: 'Q1'
                },
                {
                  label: 'Q2',
                  children: [
                    {
                      label: '四月',
                      value: '四月'
                    },
                    {
                      label: '五月',
                      value: '五月'
                    },
                    {
                      label: '六月',
                      value: '六月'
                    }
                  ],
                  value: 'Q2'
                }
              ],
              value: '2022年'
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
      ],
      data2: [
        {
          title: '时间',
          options: [
            {
              label: '2020年',
              value: '2020年',
              children: [
                {
                  label: '全年',
                  children: [],
                  value: '全年'
                },
                {
                  label: 'Q1',
                  children: [
                    {
                      label: '一月',
                      value: '一月'
                    },
                    {
                      label: '二月',
                      value: '二月'
                    },
                    {
                      label: '三月',
                      value: '三月'
                    }
                  ],
                  value: 'Q1'
                },
                {
                  label: 'Q2',
                  children: [
                    {
                      label: '四月',
                      value: '四月'
                    },
                    {
                      label: '五月',
                      value: '五月'
                    },
                    {
                      label: '六月',
                      value: '六月'
                    }
                  ],
                  value: 'Q2'
                }
              ]
            },
            {
              label: '2021年',
              children: [
                {
                  label: '全年',
                  value: '全年'
                },
                {
                  label: 'Q1',
                  children: [
                    {
                      label: '一月',
                      value: '一月'
                    },
                    {
                      label: '二月',
                      value: '二月'
                    },
                    {
                      label: '三月',
                      value: '三月'
                    }
                  ],
                  value: 'Q1'
                },
                {
                  label: 'Q2',
                  children: [
                    {
                      label: '四月',
                      value: '四月'
                    },
                    {
                      label: '五月',
                      value: '五月'
                    },
                    {
                      label: '六月',
                      value: '六月'
                    }
                  ],
                  value: 'Q2'
                }
              ],
              value: '2021年'
            },
            {
              label: '2022年',
              children: [
                {
                  label: '全年',
                  value: '全年'
                },
                {
                  label: 'Q1',
                  children: [
                    {
                      label: '一月',
                      value: '一月'
                    },
                    {
                      label: '二月',
                      value: '二月'
                    },
                    {
                      label: '三月',
                      value: '三月'
                    }
                  ],
                  value: 'Q1'
                },
                {
                  label: 'Q2',
                  children: [
                    {
                      label: '四月',
                      value: '四月'
                    },
                    {
                      label: '五月',
                      value: '五月'
                    },
                    {
                      label: '六月',
                      value: '六月'
                    }
                  ],
                  value: 'Q2'
                }
              ],
              value: '2022年'
            }
          ]
        },
        {
          title: '区域',
          disabled: true,
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
      ],
      data3: [
        {
          title: '区域',
          options: [
            {
              label: '中国',
              children: [
                {
                  label: '北京',
                  value: '北京'
                },
                {
                  label: '上海',
                  value: '上海',
                  disabled: true
                },
                {
                  label: '南京',
                  value: '南京'
                }
              ],
              value: '中国'
            },
            {
              label: '海外',
              disabled: true,
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
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.demo-multi-select {
  height: 100%;
  padding: 12px 0;
  background-color: #f5f5f5;
}

.title {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bold;
}
</style>
