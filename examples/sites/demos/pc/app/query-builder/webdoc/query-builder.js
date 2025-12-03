export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': `
        <code>config</code>属性说明，<code>autoSelectField</code>：范围域是否会默认选择，勾选则默认为第一个选项；反之则默认为-----  \n <code>autoSelectOperator</code>：运算符是否会默认选择，勾选则默认选择第一个选项，反之则默认为-----  \n       <code>disabled</code>：禁用所有规则  \n       <code>parseNumbers</code>：数字会被转化为 Number 类型，而非 String 类型  \n       <code>showCloneButtons</code>：展示复制按钮，即整条规则可以被复制  \n       <code>showCombinatorsBetweenRules</code>：组合子数组统一修改，且不再展示在连线上，以下拉选择形式出现  \n       <code>showLockButtons</code>：展示锁定按钮，即整条规则可以被锁定  \n       <code>showNotToggle</code>：展示 not 条件切换框  \n       <code>displayOnlyField</code>：是否仅展示字段选择器  \n       </div>  \n fields 数据配置  \n      <pre> <code>fields 中的数据（只用于说明各字段含义，无业务特定性）  \n       {  \n name: 'isMusician', //name：格式化数据中的值（形参）  \n label: 'Is a musician', //label：范围域在规则生成器中对外展示名称  \n valueEditorType: 'checkbox', //placeholder：值域的默认缺省值  \n operators: [ //运算符自定义，name 为格式化数据中的值，label 为范围域对外展示的名称  \n   {  \n     name: '=',  \n     label: '='  \n   }  \n ],  \n bindProps: { // 通过 bindProps 参数可对某一类组件进行参数控制  \n   input:{  \n     clearable:true  \n   },  \n   select:{  \n     filterable:true  \n   }  \n },  \n defaultValue: false, //defaultOperator：运算符的默认缺省选择  \n validator: (r) => !!r.value //validator：校验规则（该功能点还在迭代开发中……）  \n inputType: 'number', //值域的数值类型  \n valueEditorType: 'radio' //值域编辑器的类型  \n defaultValue: false, //值域的默认值  \n values: [ //值域的可选域配置（下拉）  \n   {  \n      label: 'Percussion instruments',  \n      options: [  \n       {  \n            name: 'Clapstick',  \n            label: 'Clapstick'  \n       }  \n     ]  \n   }  \n ],  \n values: [ //值域的可选域配置（单选）  \n   {  \n      name: 'M',  \n      label: 'Male'  \n   },  \n   {  \n      name: 'F',  \n      label: 'Female'  \n   },  \n   {  \n      name: 'O',  \n      label: 'Other'  \n   }  \n ],  \n valueSources: ['field', 'value'], //值域类型可选择  \n comparator: 'groupNumber', //分组时的比较器  \n groupNumber: 'group1', //分组的组别  \n       },  \n       // 组合子数组配置，label 为展示字符，name 为数据值  \n       combinators: [  \n {  \n   name: 'and',  \n   label: '且'  \n },  \n {  \n   name: 'or',  \n   label: '或'  \n }  \n       ]  \n       </code></pre>  <br>`,
        'en-US': `<code>config</code> Attribute Description,  <code>autoSelectField</code>: Whether the range field is automatically selected by default. If checked, the first option will be selected by default; otherwise, it defaults to -----  <code>autoSelectOperator</code>: Whether the operator is automatically selected by default. If checked, the first option will be selected by default; otherwise, it defaults to -----  <code>disabled</code>: Disable all rules  <code>parseNumbers</code>: Numbers will be converted to the Number type, not the String type  <code>showCloneButtons</code>: Display copy buttons, allowing the entire rule to be copied  <code>showCombinatorsBetweenRules</code>: Uniformly modify the combinator array, which no longer appears on the connection line but instead appears as a dropdown selection  <code>showLockButtons</code>: Display lock buttons, allowing the entire rule to be locked  <code>showNotToggle</code>: Display the not condition toggle box  <code>displayOnlyField</code>: Whether only the field selector is displayed. \n  fields data configuration \n<pre><code>Data in fields (only used to explain the meaning of each field, no business specificity) \n {\n name: 'isMusician',//name: values (formal parameters) in formatted data \n label: 'Is a musician',//label: the external display name of the range field in the rule generator \n valueEditorType: 'checkbox',//placeholder: the default value of the value field \n operators: [//operator customization, name is the value in formatted data, label is the external display name of the range field \n {\n name: '=', \n label: '=' \n} \n], \n BindProps: {//The bindProps parameter can be used to control the parameters of a certain type of component\n   input:{  \n     clearable:true  \n   },  \n   select:{  \n     filterable:true  \n   }  \n },  \n defaultValue: false, //defaultOperator： The default selection for operators is validator: (r)=>!! r. Value//validator: validation rules (this feature is still under iterative development...) \n inputType: 'number',//numeric type of value range \n valueEditorType: 'radio'//type of value range editor \n defaultValue: false,//default value of value range \n values: [//optional range configuration of value range (drop-down))\n   {  \n      label: 'Percussion instruments',  \n      options: [  \n       {  \n            name: 'Clapstick',  \n            label: 'Clapstick'  \n       }  \n     ]  \n   }  \n ], \n values: [//Optional field configuration for value range (single choice)\n   {  \n      name: 'M',  \n      label: 'Male'  \n   },  \n   {  \n      name: 'F',  \n      label: 'Female'  \n   },  \n   {  \n      name: 'O',  \n      label: 'Other'  \n   }  \n ],  \n valueSources: ['field', 'value'], //The range type can be selected as \n comparator:'groupNumber ',//comparator for grouping \n groupNumber:'group1',//grouping group \n}, \n//combination subarray configuration, label is the display character, name is the data value \n combiners: [\n {\n name: 'and', \n label: 'and' \n}, \n {\n name: 'or', \n label: 'or' \n} \n] \n</code></press><br>`
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'display-only-field',
      name: {
        'zh-CN': '简易模式',
        'en-US': 'Simple Mode'
      },
      desc: {
        'zh-CN': '<code>config</code>配置添加<code>displayOnlyField</code>属性，开启简易模式仅展示字段选择器功能',
        'en-US':
          '<code>config</code>Configure to add<code>showOnlyField</code>attribute, enable simple mode to only display field selector function'
      },
      codeFiles: ['display-only-field.vue']
    },
    {
      demoId: 'tree-field',
      name: {
        'zh-CN': '树型字段选择器',
        'en-US': 'Basic'
      },
      desc: {
        'zh-CN':
          '<code>fields</code>数组配置项中存在<code>children</code>子数据项，则开启树型字段选择器功能，配置示例如下',
        'en-US':
          'If there is a <code>children</code> sub-item in the <code>fields</code> array configuration, the tree-type field selector function will be enabled. The configuration example is as follows'
      },
      codeFiles: ['tree-field.vue']
    },
    {
      demoId: 'max-height',
      name: {
        'zh-CN': '最大高度设置',
        'en-US': 'Basic'
      },
      desc: {
        'zh-CN':
          '添加<code>max-height</code>属性设置组件最大高度，超出内容显示滚动条，属性值支持 数值 和 数值 + 单位，如 500、500px、50rem 等。',
        'en-US':
          'Add <code>max-height</code> attribute to set the maximum height of the component. If the content exceeds the limit, a scroll bar will be displayed. The attribute value supports both numeric and numeric + unit, such as 500, 500px, 50rem, etc.'
      },
      codeFiles: ['max-height.vue']
    },
    {
      demoId: 'handle',
      name: {
        'zh-CN': '显示与禁用设置',
        'en-US': 'Display and Disable Settings'
      },
      desc: {
        'zh-CN':
          '添加 <code>disabled</code> 属性是否全部禁用，添加 <code>showNewRule</code> 属性是否显示新增条件，添加 <code>showNewGroup</code> 属性是否显示新增子条件组，添加 <code>isRuleDisable</code> 属性是否禁用新增条件，添加 <code>isGroupDisable</code> 属性是否禁用新增子条件组。',
        'en-US':
          'Add <code>disabled</code> property to disable all, add <code>showNewRule</code> property to show new condition, add <code>showNewGroup</code> property to show new sub-condition group, add <code>isRuleDisable</code> property to disable new rule, add <code>isGroupDisable</code> property to disable new group.'
      },
      codeFiles: ['handle.vue']
    },
    {
      demoId: 'limit',
      name: {
        'zh-CN': '限制数量',
        'en-US': 'Limit Settings'
      },
      desc: {
        'zh-CN':
          '添加 <code>ruleLimit</code> 属性设置新增条件的最大数量，<code>groupLimit</code> 属性设置新增子条件组的最大数量。',
        'en-US':
          'Add <code>ruleLimit</code> property to set the maximum number of new rules, <code>groupLimit</code> property to set the maximum number of new sub-condition groups.'
      },
      codeFiles: ['limit.vue']
    },
    {
      demoId: 'sub-component-param',
      name: {
        'zh-CN': '子组件传参',
        'en-US': 'Basic'
      },
      desc: {
        'zh-CN':
          '<code>config</code> 配置添加<code>bindProps</code>属性可控制某一类组件的参数，中间操作符类组件暂不支持传参，具体配置见以下说明： \n<div class="tip custom-block">\n<p class="custom-block-title">  <code>bindProps</code> 属性说明 </p>\n <code>leftSelect</code>：左侧 <code>Select</code> 参数，统一控制左侧所有 <code>Select</code> , 右侧 <code>Select</code> 参数：<code>input</code>输入框，包括 <code>textarea</code> \n<numeric>：计数器 \n<date>：日期选择器 \n<time>：时间选择器 \n<radio>：单选框 \n<checkbox>：多选框 \n</div> \n',
        'en-US':
          '<code>config</code> Configure to add <code>bindProps</code> attribute to control the parameters of a certain type of component. The middle operator type component does not support parameter passing for the time being. See the following description for specific configuration: \n<div class="tip custom-block">\n<p class="custom-block-title">  <code>bindProps</code> Attribute Description </p>\n <code>leftSelect</code>: Left <code>Select</code> parameters, uniformly control all left <code>Select</code>, right <code>Select</code> parameters: <code>input</code> input box, including <code>textarea</code> \n<numeric>: counter \n<date>: date picker \n<time>: time picker \n<radio>: radio button \n<checkbox>: checkbox \n</div> \n'
      },
      codeFiles: ['sub-component-param.vue']
    },
    {
      demoId: 'advanced-mode',
      name: {
        'zh-CN': '高级模式',
        'en-US': 'Advanced Mode'
      },
      desc: {
        'zh-CN':
          '高级模式，用法详见示例:<br> \n 自定义组件必须实现:<code> value</code>属性和<code>change</code>事件，<br> \n <code>自定义组件的其他额外属性：</code><br> \n <code>data-id: string</code>，数据 ID <br> \n <code>operator: string</code>, 操作符<br> \n <code>filed-name: string</code>, 字段名 <br> \n <code>path: Array<number> </code>字段在 <code>queryBuilder</code> 中的父子路径，<br> \n<code> key: to| from</code>',
        'en-US': ' '
      },
      codeFiles: ['advanced-mode.vue']
    }
  ]
}
