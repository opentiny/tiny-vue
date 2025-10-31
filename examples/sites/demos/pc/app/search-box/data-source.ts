export const dataSource = [
  {
    label: '名称',
    field: 'testName',
    replace: true,
    options: [
      {
        label: 'ecs-1'
      },
      {
        label: 'obs-2'
      },
      {
        label: 'vpc-1'
      },
      {
        label: 'evs-2'
      },
      {
        label: 'tms-1'
      }
    ]
  },
  {
    // 该种单选情况没有可选项。
    label: '名称1',
    field: 'testName1'
  },
  {
    label: '可用地区',
    field: 'testRegion',
    type: 'checkbox',
    options: [
      {
        label: '华南区',
        id: '2-1'
      },
      {
        label: '华北区',
        id: '2-2'
      },
      {
        label: '西北区',
        id: '2-3'
      },
      {
        label: '西南区',
        id: '2-4'
      }
    ]
  },
  {
    label: '可用地区1',
    field: 'testRegion1',
    type: 'checkbox',
    options: [
      {
        label: '华南区1',
        id: '2-11'
      },
      {
        label: '华北区1',
        id: '2-21'
      },
      {
        label: '西北区1',
        id: '2-31'
      }
    ]
  },
  {
    label: '状态',
    type: 'checkbox',
    field: 'status',
    options: [
      {
        label: '运行中'
      },
      {
        label: '已关机'
      },
      {
        label: '已注销'
      }
    ]
  },
  {
    label: '产品规格',
    field: 'product',
    options: [
      {
        label: '1vCPUs'
      },
      {
        label: '2vCPUs'
      },
      {
        label: '3vCPUs'
      },
      {
        label: '2vGPUs'
      },
      {
        label: '3vGPUs'
      },
      {
        label: '4vGPUs'
      },
      {
        label: '5vGPUs'
      },
      {
        label: '6vGPUs'
      },
      {
        label: '7vGPUs'
      },
      {
        label: '8vGPUs'
      }
    ]
  },
  {
    label: '个人IP地址',
    field: 'ip',
    // 单选此类可以设置此参数为true
    replace: true,
    options: [
      {
        label: '192.168.0.1'
      },
      {
        label: '192.168.0.2'
      },
      {
        label: '192.168.0.3'
      },
      {
        label: '192.168.0.4'
      }
    ]
  },
  {
    label: '实例ID',
    field: 'id',
    options: [
      {
        label: 'huaweiyun-ID',
        allValues: false
      },
      {
        label: 'yunlingtuandui-ID'
      },
      {
        label: 'tiny-vue-plus-search-box-ID'
      }
    ]
  },
  {
    label: '大小',
    field: 'size',
    type: 'numRange',
    unit: 'GB',
    start: -1,
    min: -1,
    max: 20
  },
  {
    label: '日期',
    field: 'date',
    type: 'dateRange',
    format: 'yyyy/MM/dd', // 默认格式
    // 默认开始时间
    start: new Date(2024, 3, 10),
    // 默认结束时间
    end: undefined,
    // 最小时间
    min: new Date(2024, 3, 5),
    max: new Date(2024, 5, 5)
  },
  {
    label: '时间日期',
    field: 'datetime',
    type: 'datetimeRange',
    format: 'yyyy/MM/dd HH:mm:ss', // 默认格式
    // 默认开始时间
    start: new Date(2024, 3, 10, 10, 23, 45),
    // 默认结束时间
    end: new Date(2024, 5, 25, 10, 25, 46),
    // 最小时间
    min: new Date(2024, 3, 5, 10, 5, 5),
    max: undefined
  },
  {
    label: '标签',
    field: 'testTag',
    type: 'map',
    searchKeys: ['label', 'id'],
    options: [
      {
        label: 'aaa',
        id: 'id-1',
        allValues: false,
        options: [
          {
            label: '空值',
            id: 'aaa-ddd'
          },
          {
            label: '所有值',
            id: 'aaa-eee'
          },
          {
            label: '123',
            id: 'aaa-fff'
          }
        ]
      },
      {
        label: 'bbb',
        id: 'id-2',
        options: [
          {
            label: 'hhh',
            id: 'bbb-hhh'
          },
          {
            label: 'iii',
            id: 'bbb-iii'
          },
          {
            label: 'jjj',
            id: 'bbb-jjj'
          }
        ]
      },
      {
        label: 'ccc',
        id: 'id-3',
        options: [
          {
            label: 'kkk',
            id: 'ccc-kkk'
          },
          {
            label: 'lll',
            id: 'ccc-lll'
          },
          {
            label: 'mmm',
            id: 'ccc-mmm'
          }
        ]
      }
    ]
  }
]
