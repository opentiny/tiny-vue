export default {
  mode: ['pc'],
  apis: [
    {
      name: 'process-designer',
      type: 'component',
      props: [
        {
          name: 'data',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '静态数据',
            'en-US': 'static data'
          },
          pcDemo: 'basic-usage'
        },
        {
          name: 'getData',
          type: '()=>Promise<string>',
          defaultValue: '',
          desc: {
            'zh-CN': '如果提供, 组件将会调用该函数, 并渲染该函数的返回值',
            'en-US': 'If provided, the component will call the function and render the return value of the function'
          },
          pcDemo: 'getter'
        },
        {
          name: 'additionalModules',
          type: 'Function[]',
          desc: {
            'zh-CN': '追加模块, 更多请参考 bpmn-js 官方文档',
            'en-US': 'Additional modules, please refer to the official bpmn-js documentation for more information'
          },
          pcDemo: 'additional-modules'
        },
        {
          name: 'modeler',
          type: 'Modeler',
          defaultValue: 'Modeler',
          desc: {
            'zh-CN': '建模, 更多请参考 bpmn-js 官方文档',
            'en-US': 'Modeling, please refer to the official bpmn-js documentation for more information'
          },
          pcDemo: 'custom'
        },
        {
          name: 'showProperties',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否显示 properties panel',
            'en-US': 'Do you want to display the properties panel'
          },
          pcDemo: 'showProperties'
        },
        {
          name: 'readonly',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否只读',
            'en-US': 'Readonly or not'
          },
          pcDemo: 'readonly'
        },
        {
          name: 'keyboard',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否启用快捷键',
            'en-US': 'Enable keyboard or not'
          },
          pcDemo: 'keyboard'
        }
      ],
      events: [
        {
          name: 'mounted',
          type: 'MountedFunction',
          typeAnchorName: 'MountedFunction',
          desc: {
            'zh-CN': '当加载完毕后触发',
            'en-US': 'Triggered after loading is complete'
          },
          mode: ['pc'],
          pcDemo: 'export-xml'
        },
        {
          name: 'import-xml-error',
          type: '(err: {warnings: string[]} & Error)=>void',
          desc: {
            'zh-CN': '导入 xml 出错的时候将会触发该事件',
            'en-US': 'This event will be triggered when there is an error importing XML'
          },
          mode: ['pc'],
          pcDemo: 'events'
        },
        {
          name: 'import-xml-success',
          type: '(warnings: string) => void',
          desc: {
            'zh-CN': '导入 xml 成功时候会触发该事件, 第一个参数为解析时出现的警告信息',
            'en-US':
              'When importing XML successfully, this event will be triggered, with the first parameter being a warning message that appears during parsing'
          },
          mode: ['pc'],
          pcDemo: 'evnets'
        }
      ]
    }
  ],
  types: [
    {
      name: 'MountedFunction',
      type: 'type',
      code: `
type MountedFunction = (exposed: IProcessDesignerExpose) => void;
type On = (name: string, f: (e: InternalEvent) => void) => void;
interface IProcessDesignerExpose {
  modeler: Object | null;
  eventBus: Object | null;
  on: On | null;
  canvas: Object | null;
}
`
    }
  ]
}
