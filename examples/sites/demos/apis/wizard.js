export default {
  mode: ['pc'],
  apis: [
    {
      name: 'wizard',
      type: 'component',
      props: [
        {
          name: 'data',
          typeAnchorName: 'IDataItem',
          type: 'IDataItem[]',
          defaultValue: '',
          desc: {
            'zh-CN': '设置节点数据',
            'en-US': 'Setting Node Data'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        },
        {
          name: 'page-guide',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置页向导模式',
            'en-US': 'Set Page Wizard Mode'
          },
          mode: ['pc'],
          pcDemo: 'page-guide'
        },
        {
          name: 'time-line-flow',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置时间线',
            'en-US': 'Set timeline'
          },
          mode: ['pc'],
          pcDemo: 'time-line-flow'
        },
        {
          name: 'vertical',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '设置为垂直模式',
            'en-US': 'Set to vertical mode'
          },
          mode: ['pc'],
          pcDemo: 'vertical'
        }
      ],
      events: [
        {
          name: 'btn-next',
          typeAnchorName: 'IDataItem',
          type: '(datas: IDataItem[]) => void',
          desc: {
            'zh-CN': '页向导模式下，点击“下一步”按钮触发的回调事件',
            'en-US': 'Callback event triggered by clicking the "Next" button in page wizard mode'
          },
          mode: ['pc'],
          pcDemo: 'btn-events'
        },
        {
          name: 'btn-prev',
          typeAnchorName: 'IDataItem',
          type: '(datas: IDataItem[]) => void',
          desc: {
            'zh-CN': '页向导模式下，点击“上一步”按钮触发的回调事件',
            'en-US': 'Callback event triggered by clicking the "Previous" button in page wizard mode'
          },
          mode: ['pc'],
          pcDemo: 'btn-events'
        },
        {
          name: 'btn-save',
          typeAnchorName: 'IDataItem',
          type: '(datas: IDataItem[]) => void',
          desc: {
            'zh-CN': '页向导模式下，点击“保存”按钮触发的回调事件',
            'en-US': 'Callback event triggered by clicking the "Save" button in page wizard mode'
          },
          mode: ['pc'],
          pcDemo: 'btn-events'
        },
        {
          name: 'btn-submit',
          typeAnchorName: 'IDataItem',
          type: '(datas: IDataItem[]) => void',
          desc: {
            'zh-CN': '页向导模式下，点击“下一步”导致最后一个节点的状态为 "doing" 时，点击“提交”按钮触发的回调事件',
            'en-US':
              'In page wizard mode, when clicking "Next" causes the status of the last node to be "doing", the callback event triggered by clicking the "Submit" button'
          },
          mode: ['pc'],
          pcDemo: 'btn-events'
        },
        {
          name: 'node-click',
          typeAnchorName: 'IDataItem',
          type: '(node: IDataItem, index: number, event: Event) => void',
          desc: {
            'zh-CN': '节点点击事件',
            'en-US': 'Node click event'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage'
        }
      ],
      methods: [],
      slots: [
        {
          name: 'base',
          defaultValue: '',
          desc: {
            'zh-CN': '基本插槽',
            'en-US': 'Basic Slot'
          },
          mode: ['pc'],
          pcDemo: 'slot-base'
        },
        {
          name: 'stepbutton',
          defaultValue: '',
          desc: {
            'zh-CN': '页向导模式按钮插槽',
            'en-US': 'Page Wizard Mode Button Slot'
          },
          mode: ['pc'],
          pcDemo: 'slot-step-button'
        }
      ]
    }
  ],
  types: [
    {
      name: 'IDataItem',
      type: 'interface',
      code: `
interface IDataItem {
  name: string
  status: string
  showNode?: boolean
  content?: string
  imgUrl?: string
  users?: string
  userName?: string
  roleNumber?: string
  date?: string
  values?: IDataItemValuesItem[]
}

interface IDataItemValuesItem {
  text: string
  value: string
}`
    }
  ]
}
