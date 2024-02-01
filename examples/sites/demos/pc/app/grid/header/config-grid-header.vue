<template>
  <tiny-grid v-bind="op"></tiny-grid>
</template>

<script>
import { Grid } from '@opentiny/vue'

const tableData = [
  {
    id: '1',
    transDate: '2014-04-30',
    a01: 0,
    a02: 0,
    a03: 0,
    a04: 0,
    a05: 0,
    a06: 0,
    a07: 0,
    a08: 0,
    a09: 0,
    a10: 0,
    a11: 0,
    a12: 0,
    a13: 0,
    a14: 0
  }
]

export default {
  components: {
    TinyGrid: Grid
  },
  data() {
    return {
      op: {
        columns: [
          {
            type: 'index',
            width: 60
          },
          {
            type: 'selection',
            width: 60
          },
          {
            field: 'transDate',
            title: '交易日期'
          },
          {
            title: '支付机构业务系统中已反映的入金业务',
            children: [
              {
                title: '备付金账户已入金金额',
                children: [
                  {
                    title: '本期系统反映，本期入金',
                    children: [
                      {
                        title: '业务系统中贷记客户账户金额',
                        children: [
                          {
                            field: 'a01',
                            title: 'A01'
                          }
                        ]
                      },
                      {
                        title: '手续费收入（支出）',
                        children: [
                          {
                            field: 'a02',
                            title: 'A02'
                          }
                        ]
                      },
                      {
                        title: '其他',
                        children: [
                          {
                            field: 'a03',
                            title: 'A03'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    title: '前期系统反映，本期入金',
                    children: [
                      {
                        title: '业务系统中贷记客户账户金额',
                        children: [
                          {
                            field: 'a04',
                            title: 'A04'
                          }
                        ]
                      },
                      {
                        title: '手续费收入（支出）',
                        children: [
                          {
                            field: 'a05',
                            title: 'A05'
                          }
                        ]
                      },
                      {
                        title: '其他',
                        children: [
                          {
                            field: 'a06',
                            title: 'A06'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                title: '应收入金业务金额',
                children: [
                  {
                    title: '本期业务系统中已贷记客户账户金额',
                    children: [
                      {
                        field: 'a07',
                        title: 'A07'
                      }
                    ]
                  },
                  {
                    title: '本期手续费收入（支出）',
                    children: [
                      {
                        field: 'a08',
                        title: 'A08'
                      }
                    ]
                  },
                  {
                    title: '其他',
                    children: [
                      {
                        field: 'a09',
                        title: 'A09'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            title: '支付机构业务系统中未反映但备付金账户已收到款项',
            children: [
              {
                title: '本期收到的金额',
                children: [
                  {
                    field: 'a10',
                    title: 'A10'
                  }
                ]
              },
              {
                title: '当期处理',
                children: [
                  {
                    title: '补入账',
                    children: [
                      {
                        title: '业务系统中贷记客户账户金额',
                        children: [
                          {
                            field: 'a11',
                            title: 'A11'
                          }
                        ]
                      },
                      {
                        title: '手续费收入（支出）',
                        children: [
                          {
                            field: 'a12',
                            title: 'A12'
                          }
                        ]
                      },
                      {
                        title: '其他',
                        children: [
                          {
                            field: 'a13',
                            title: 'A13'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    title: '退回',
                    children: [
                      {
                        field: 'a14',
                        title: 'A14'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        data: tableData
      }
    }
  }
}
</script>
