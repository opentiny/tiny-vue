export default {
  mode: ['pc'],
  apis: [
    {
      name: 'query-builder',
      type: 'component',
      props: [
        {
          name: 'showNewRule',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示新增条件',
            'en-US': 'Whether to show new conditions'
          },
          mode: ['pc'],
          pcDemo: 'handle',
          mfDemo: ''
        },
        {
          name: 'showNewGroup',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '是否显示新增子条件组',
            'en-US': 'Whether to show new sub-condition groups'
          },
          mode: ['pc'],
          pcDemo: 'handle',
          mfDemo: ''
        },
        {
          name: 'isRuleDisable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用新增条件',
            'en-US': 'Whether to disable new conditions'
          },
          mode: ['pc'],
          pcDemo: 'handle',
          mfDemo: ''
        },
        {
          name: 'isGroupDisable',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否禁用新增子条件组',
            'en-US': 'Whether to disable new sub-condition groups'
          },
          mode: ['pc'],
          pcDemo: 'handle',
          mfDemo: ''
        },
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否全部禁用',
            'en-US': 'Whether to disable all'
          },
          mode: ['pc'],
          pcDemo: 'handle',
          mfDemo: ''
        },
        {
          name: 'ruleLimit',
          type: 'number',
          defaultValue: 'infinity',
          desc: {
            'zh-CN': '设置新增条件的最大数量',
            'en-US': 'Set the maximum number of new conditions'
          },
          mode: ['pc'],
          pcDemo: 'limit',
          mfDemo: ''
        },
        {
          name: 'groupLimit',
          type: 'number',
          defaultValue: 'infinity',
          desc: {
            'zh-CN': '设置新增子条件组的最大数量',
            'en-US': 'Set the maximum number of new sub-condition groups'
          },
          mode: ['pc'],
          pcDemo: 'limit',
          mfDemo: ''
        },
        {
          name: 'config',
          typeAnchorName: 'IQueryBuilderConfig',
          type: 'IQueryBuilderConfig',
          desc: {
            'zh-CN': '设置查询构建器的配置',
            'en-US': 'Set the configuration for the query builder'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'autoSelectField',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '范围域是否会默认选择',
            'en-US': 'Whether the range field will be selected by default'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'autoSelectOperator',
          type: 'boolean',
          defaultValue: 'true',
          desc: {
            'zh-CN': '运算符是否会默认选择',
            'en-US': 'Whether the operator will be selected by default'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'parseNumbers',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '数字会被转化为 Number 类型',
            'en-US': 'Whether the numbers will be converted to Number type'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'showCloneButtons',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否展示复制按钮，即整条规则可以被复制',
            'en-US': 'Whether to show clone buttons, allowing entire rules to be cloned'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'showCombinatorsBetweenRules',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '组合子数组统一修改，且不再展示在连线上，以下拉选择形式出现',
            'en-US':
              'Whether to show combinators between rules, allowing unified modification and appearing as a dropdown selection instead of on the connecting line'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'showLockButtons',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '展示锁定按钮，即整条规则可以被锁定',
            'en-US': 'Whether to show lock buttons, allowing entire rules to be locked'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'showNotToggle',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '展示 not 条件切换框',
            'en-US': 'Whether to show not condition toggle'
          },
          mode: ['pc'],
          pcDemo: 'basic-usage',
          mfDemo: ''
        },
        {
          name: 'displayOnlyField',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否仅展示字段选择器功能',
            'en-US': 'Whether to display only the field selector functionality'
          },
          mode: ['pc'],
          pcDemo: 'display-only-field',
          mfDemo: ''
        },
        {
          name: 'max-height',
          type: 'number',
          desc: {
            'zh-CN': '设置组件最大高度',
            'en-US': 'Set the maximum height of the component'
          },
          mode: ['pc'],
          pcDemo: 'max-height',
          mfDemo: ''
        },
        {
          name: 'bindProps',
          type: 'object',
          desc: {
            'zh-CN': '控制某一类组件的参数',
            'en-US': 'Control the parameters of a certain type of component'
          },
          mode: ['pc'],
          pcDemo: 'sub-component-param',
          mfDemo: ''
        },
        {
          name: 'allowDelAll',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否允许删除所有规则',
            'en-US': 'Whether to allow deleting all rules'
          },
          mode: ['pc'],
          pcDemo: '',
          mfDemo: ''
        },
        {
          name: 'fields',
          type: 'Array',
          defaultValue: '[]',
          desc: {
            'zh-CN': '字段列表',
            'en-US': 'Field list'
          },
          mode: ['pc'],
          pcDemo: 'tree-field',
          mfDemo: ''
        },
        {
          name: 'validateQuery',
          type: 'boolean',
          defaultValue: 'false',
          desc: {
            'zh-CN': '是否启用查询校验',
            'en-US': 'Whether to enable query validation'
          },
          mode: ['pc'],
          pcDemo: 'advanced-mode',
          mfDemo: ''
        },
        {
          name: 'query',
          type: 'IQueryBuilderQuery',
          typeAnchorName: 'IQueryBuilderQuery',
          desc: {
            'zh-CN': '查询数据',
            'en-US': 'Query Data'
          },
          mode: ['pc'],
          pcDemo: 'display-only-field',
          mfDemo: ''
        },
        {
          name: 'on-query-change',
          type: 'function',
          desc: {
            'zh-CN': '查询数据改变时触发方法',
            'en-US': 'Triggered when query data changes'
          },
          mode: ['pc'],
          pcDemo: 'display-only-field',
          mfDemo: ''
        }
      ]
    }
  ],
  types: [
    {
      name: 'IQueryBuilderConfig',
      type: 'type',
      code: `type IQueryBuilderConfig = {
  ruleLimit?: number;  // 设置新增条件的最大数量
  groupLimit?: number;  // 设置新增子条件组的最大数量
  showNewRule?: boolean;  // 是否显示新增条件
  showNewGroup?: boolean;  // 是否显示新增子条件组
  isRuleDisable?: boolean;  // 是否禁用新增条件
  isGroupDisable?: boolean;  // 是否禁用新增子条件组
  disabled?: boolean;  // 是否全部禁用
  autoSelectField?: boolean;  // 范围域是否会默认选择
  autoSelectOperator?: boolean;  // 运算符是否会默认选择
  parseNumbers?: boolean;  // 数字会被转化为 Number 类型
  showCloneButtons?: boolean;  // 是否展示复制按钮，即整条规则可以被复制
  showCombinatorsBetweenRules?: boolean;  // 组合子数组统一修改，且不再展示在连线上，以下拉选择形式出现
  showLockButtons?: boolean;  // 展示锁定按钮，即整条规则可以被锁定
  showNotToggle?: boolean;  // 展示 not 条件切换框
  displayOnlyField?: boolean;  // 是否仅展示字段选择器功能
  bindProps?: { // 控制某一类组件的参数
    [key: string]: any;
  };
  allowDelAll?: boolean;  // 是否允许删除所有规则
  fields?: Array<{
    name: string; // 格式化数据中的值（形参）
    label: string; // 范围域在规则生成器中对外展示名称
    operators: Record<string, any>[]; // 运算符自定义
    defaultValue?: boolean; // 值域的默认值
    validator?: (r: Record<string, any>) => boolean; // 校验规则
    inputType?: string; // 值域的数值类型
    valueEditorType?: string; // 值域编辑器的类型
    values?: Array<Record<string, any>>;
    valueSources?: string[];  // 值域类型可选择
    comparator?: string; //分组时的比较器
    groupNumber?: string; //分组的组别
  }>;  // 字段列表
  combinators?: Array<{
    name: string;
    label: string;
  }>;  // 组合子数组配置
  validateQuery?: boolean;  // 是否启用查询校验
}`
    },
    {
      name: 'IQueryBuilderQuery',
      type: 'type',
      code: `type IQueryBuilderQuery = {
      id?: string;
      combinator: string;
      not?: boolean;
      rules: Array<IQueryBuilderQuery | IQueryBuilderRule>;
    }
    
    type IQueryBuilderRule = {
      id?: string; // 规则 id
      field: string;  // 字段
      operator: string; // 运算符
      value: any;   // 值域
      valueSource?: string; // 值域类型
}
      `
    }
  ]
}
