<template>
  <div>
    <div class="page__hd">
      <h1 class="page__title">MultiSelect</h1>
      <p class="page__desc">下拉选择器</p>
    </div>
    <div class="page__content">
      <tiny-multi-select ref="multiSelect" :dataSource="data" :defaultSelectedArray="defaultSelectedArray" @confirm="confirm" @reset="reset">
      </tiny-multi-select>
    </div>
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
          children: [
            {
              label: '2020年',
              value: '0',
              children: [
                {
                  label: '2020全年',
                  value: '0-0',
                  children: [
                    {
                      label: '年',
                      value: '0-0-0',
                    }
                  ]
                },
                {
                  label: '2020年Q1',
                  value: '0-1',
                  children: [
                    {
                      label: '2020年Q1一月',
                      value: '0-1-0',
                    },
                    {
                      label: '2020年Q1二月',
                      value: '0-1-1',
                    },
                    {
                      label: '2020年Q1三月',
                      value: '0-1-2',
                    }
                  ]
                },
                {
                  label: '2020年Q2',
                  value: '0-2',
                  children: [
                    {
                      label: '2020年Q2四月',
                      value: '0-2-0',
                    },
                    {
                      label: '2020年Q2五月',
                      value: '0-2-1',
                    },
                    {
                      label: '2020年Q2六月',
                      value: '0-2-2',
                    }
                  ]
                }
              ]
            },
            {
              label: '2021年',
              value: '1',
              children: [
                {
                  label: '2021全年',
                  value: '1-0',
                  children: [
                    {
                      label: '年',
                      value: '1-0-0',
                    }
                  ]
                },
                {
                  label: '2021年Q1',
                  value: '1-1',
                  children: [
                    {
                      label: '2021年Q1一月',
                      value: '1-1-0',
                    },
                    {
                      label: '2021年Q1二月',
                      value: '1-1-1',
                    },
                    {
                      label: '2021年Q1三月',
                      value: '1-1-2',
                    }
                  ]
                },
                {
                  label: '2021年Q2',
                  value: '1-2',
                  children: [
                    {
                      label: '2021年Q2四月',
                      value: '1-2-0',
                    },
                    {
                      label: '2021年Q2五月',
                      value: '1-2-1',
                    },
                    {
                      label: '2021年Q2六月',
                      value: '1-2-2',
                    }
                  ]
                }
              ]
            },
            {
              label: '2022年',
              value: '2',
              children: [
                {
                  label: '2022全年',
                  value: '2-0',
                  children: [
                    {
                      label: '年',
                      value: '2-0-0',
                    }
                  ]
                },
                {
                  label: '2022年Q1',
                  value: '2-1',
                  children: [
                    {
                      label: '2022年Q1一月',
                      value: '2-1-0',
                    },
                    {
                      label: '2022年Q1二月',
                      value: '2-1-1',
                    },
                    {
                      label: '2022年Q1三月',
                      value: '2-1-2',
                    }
                  ]
                },
                {
                  label: '2022年Q2',
                  value: '2-2',
                  children: [
                    {
                      label: '2022年Q2四月',
                      value: '2-2-0',
                    },
                    {
                      label: '2022年Q2五月',
                      value: '2-2-1',
                    },
                    {
                      label: '2022年Q2六月',
                      value: '2-2-2',
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
              value: '0',
              children: [
                {
                  label: '欧洲巴黎',
                  value: '0-0',
                },
                {
                  label: '巴基斯坦',
                  value: '0-1',
                },
                {
                  label: '土耳其',
                  value: '0-2',
                }
              ]
            },
            {
              label: '中国',
              value: '1',
              children: [
                {
                  label: '北京',
                  value: '1-0',
                },
                {
                  label: '上海',
                  value: '1-1',
                },
                {
                  label: '南京',
                  value: '1-2',
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
              label: '公有云',
              value: '0',
            },
            {
              label: '私有云',
              value: '1',
            },
            {
              label: '伙伴云',
              value: '2',
            },
            {
              label: '公有云1',
              value: '3',
            },
            {
              label: '公有云2',
              value: '4',
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
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
.page__content {
  width: 375px;
  height: 48px;
  background-color: #fff;
}
</style>
