export const data = [
  {
    label: '1级学科',
    field: 'subjects',
    replace: true,
    options: [
      {
        label: '哲学'
      },
      {
        label: '经济学'
      },
      {
        label: '教育学'
      },
      {
        label: '文学'
      },
      {
        label: '历史学'
      },
      {
        label: '理学'
      },
      {
        label: '工学'
      },
      {
        label: '农学'
      }
    ]
  },
  {
    groupKey: '前端搜索',
    label: '名称',
    field: 'testName',
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
    groupKey: '前端搜索',
    label: '名称1',
    field: 'testName1'
  },
  {
    groupKey: '前端搜索',
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
      }
    ]
  },
  {
    groupKey: '后端搜索',
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
    groupKey: '后端搜索',
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
    groupKey: '后端搜索',
    label: '规格/镜像/磁盘',
    field: 'testMirror',
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
      }
    ]
  },
  {
    groupKey: '前端搜索',
    label: '私有IP地址',
    field: 'testIp',
    // 单选可以设置此参数，设置false
    replace: false,
    options: [
      {
        label: '110.110.110.1'
      },
      {
        label: '110.110.110.2'
      },
      {
        label: '110.110.110.3'
      },
      {
        label: '110.110.110.4'
      }
    ]
  },
  {
    groupKey: '后端搜索',
    label: '标签',
    field: 'testTag',
    type: 'map',
    options: [
      {
        label: 'aaa',
        allValues: false,
        options: [
          {
            label: 'ddd'
          },
          {
            label: 'eee'
          },
          {
            label: 'fff'
          }
        ]
      },
      {
        label: 'bbb',
        options: [
          {
            label: 'hhh'
          },
          {
            label: 'iii'
          },
          {
            label: 'jjj'
          }
        ]
      },
      {
        label: 'ccc',
        options: [
          {
            label: 'kkk'
          },
          {
            label: 'lll'
          },
          {
            label: 'mmm'
          }
        ]
      }
    ]
  },
  {
    groupKey: '前端搜索',
    label: '大小',
    field: 'size',
    type: 'numRange',
    unit: 'GB',
    start: 4,
    min: 3,
    max: 20
  },
  {
    groupKey: '后端搜索',
    label: '日期',
    field: 'date',
    type: 'dateRange',
    // 默认开始时间
    start: new Date(2020, 5, 10),
    // 默认结束时间
    end: new Date(2020, 5, 25),
    // 最小时间
    min: new Date(2020, 5, 5),
    max: undefined
  },
  {
    groupKey: '后端搜索',
    label: '时间日期',
    field: 'datetime',
    type: 'datetimeRange',
    // 默认开始时间
    start: new Date(2020, 5, 10, 10, 23, 45),
    // 默认结束时间
    end: new Date(2020, 5, 25, 10, 25, 46),
    // 最小时间
    min: new Date(2020, 5, 5, 10, 5, 5),
    max: undefined
  }
]
