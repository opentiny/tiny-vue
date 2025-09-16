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
        <div class="tip custom-block"> 
          <p class=\"custom-block-title\"> config 属性说明 </p>
          <code>autoSelectField</code>：范围域是否会默认选择，勾选则默认为第一个选项；反之则默认为-----  \n <code>autoSelectOperator</code>：运算符是否会默认选择，勾选则默认选择第一个选项，反之则默认为-----  \n       <code>disabled</code>：禁用所有规则  \n       <code>parsenumbers</code>：数字会被转化为 Number 类型，而非 String 类型  \n       <code>showCloneButtons</code>：展示复制按钮，即整条规则可以被复制  \n       <code>showCombinatorsBetweenRules</code>：组合子数组统一修改，且不再展示在连线上，以下拉选择形式出现  \n       <code>showLockButtons</code>：展示锁定按钮，即整条规则可以被锁定  \n       <code>showNotToggle</code>：展示 not 条件切换框  \n       <code>displayOnlyField</code>：是否仅展示字段选择器  \n       </div>  \n       二、fields 数据配置  \n      <pre> <code>\n       fields 中的数据（只用于说明各字段含义，无业务特定性）  \n       {  \n name: 'isMusician', //name：格式化数据中的值（形参）  \n label: 'Is a musician', //label：范围域在规则生成器中对外展示名称  \n valueEditorType: 'checkbox', //placeholder：值域的默认缺省值  \n operators: [ //运算符自定义，name 为格式化数据中的值，label 为范围域对外展示的名称  \n   {  \n     name: '=',  \n     label: '='  \n   }  \n ],  \n bindProps: { // 通过 bindProps 参数可对某一类组件进行参数控制  \n   input:{  \n     clearable:true  \n   },  \n   select:{  \n     filterable:true  \n   }  \n },  \n defaultValue: false, //defaultOperator：运算符的默认缺省选择  \n validator: (r) => !!r.value //validator：校验规则（该功能点还在迭代开发中……）  \n inputType: 'number', //值域的数值类型  \n valueEditorType: 'radio' //值域编辑器的类型  \n defaultValue: false, //值域的默认值  \n values: [ //值域的可选域配置（下拉）  \n   {  \n      label: 'Percussion instruments',  \n      options: [  \n       {  \n            name: 'Clapstick',  \n            label: 'Clapstick'  \n       }  \n     ]  \n   }  \n ],  \n values: [ //值域的可选域配置（单选）  \n   {  \n      name: 'M',  \n      label: 'Male'  \n   },  \n   {  \n      name: 'F',  \n      label: 'Female'  \n   },  \n   {  \n      name: 'O',  \n      label: 'Other'  \n   }  \n ],  \n valueSources: ['field', 'value'], //值域类型可选择  \n comparator: 'groupNumber', //分组时的比较器  \n groupNumber: 'group1', //分组的组别  \n       },  \n       // 组合子数组配置，label 为展示字符，name 为数据值  \n       combinators: [  \n {  \n   name: 'and',  \n   label: '且'  \n },  \n {  \n   name: 'or',  \n   label: '或'  \n }  \n       ]  \n       </code></pre>  <br>`,
        'en-US': ''
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'display-only-field',
      name: {
        'zh-CN': '简易模式',
        'en-US': 'Basic'
      },
      desc: {
        'zh-CN': 'config 配置添加 displayOnlyField 属性，开启简易模式仅展示字段选择器功能',
        'en-US': ' '
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
        'zh-CN': 'fields 数组配置项中存在 children 子数据项，则开启树型字段选择器功能，配置示例如下',
        'en-US': ' '
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
          '添加 max-height 属性设置组件最大高度，超出内容显示滚动条，属性值支持 数值 和 数值 + 单位，如 500、500px、50rem 等。',
        'en-US': ' '
      },
      codeFiles: ['max-height.vue']
    },
    {
      demoId: 'sub-component-param',
      name: {
        'zh-CN': '子组件传参',
        'en-US': 'Basic'
      },
      desc: {
        'zh-CN':
          'config 配置添加 bindProps 属性可控制某一类组件的参数，中间操作符类组件暂不支持传参，具体配置见以下说明： \n<div class="tip custom-block">\n<p class="custom-block-title">  bindProps 属性说明 </p>\nleftSelect：左侧 Select 参数，统一控制左侧所有 Select \nselect：右侧 Select 参数 \ninput：输入框参数，包括 textarea \nnumeric：计数器 \ndate：日期选择器 \ntime：时间选择器 \nradio：单选框 \ncheckbox：多选框 \n</div> \n',
        'en-US': ' '
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
          '高级模式，用法详见示例:<br> \n 自定义组件必须实现:<strong> value</strong>属性和<strong>change</strong>事件，<br> \n <strong>自定义组件的其他额外属性：</strong><br> \n data-id: string，数据 ID <br> \n operator: string, 操作符<br> \n filed-name: string, 字段名 <br> \n path: Array<number> 字段在 queryBuilder 中的父子路径，<br> \n key: to| from',
        'en-US': ' '
      },
      codeFiles: ['advanced-mode.vue']
    }
  ]
}
