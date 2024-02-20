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
        'zh-CN':
          "\n          <div class=\"tip custom-block\">\n           <p class=\"custom-block-title\"> config 属性说明 </p>\n       <code>autoSelectField</code>：范围域是否会默认选择，勾选则默认为第一个选项；反之则默认为-----  <br>\n       <code>autoSelectOperator</code>：运算符是否会默认选择，勾选则默认选择第一个选项，反之则默认为-----  <br>\n       <code>disabled</code>：禁用所有规则  <br>\n       <code>parsenumbers</code>：数字会被转化为 Number 类型，而非 String 类型  <br>\n       <code>showCloneButtons</code>：展示复制按钮，即整条规则可以被复制  <br>\n       <code>showCombinatorsBetweenRules</code>：组合子数组统一修改，且不再展示在连线上，以下拉选择形式出现  <br>\n       <code>showLockButtons</code>：展示锁定按钮，即整条规则可以被锁定  <br>\n       <code>showNotToggle</code>：展示 not 条件切换框  <br>\n       <code>displayOnlyField</code>：是否仅展示字段选择器  <br>\n       </div>  <br>\n       二、fields 数据配置  <br>\n      <pre> <code>\n       fields中的数据（只用于说明各字段含义，无业务特定性）  <br>\n       {  <br>\n         name: 'isMusician', //name：格式化数据中的值（形参）  <br>\n         label: 'Is a musician', //label：范围域在规则生成器中对外展示名称  <br>\n         valueEditorType: 'checkbox', //placeholder：值域的默认缺省值  <br>\n         operators: [ //运算符自定义，name为格式化数据中的值，label为范围域对外展示的名称  <br>\n           {  <br>\n             name: '=',  <br>\n             label: '='  <br>\n           }  <br>\n         ],  <br>\n         bindProps: { // 通过bindProps参数可对某一类组件进行参数控制  <br>\n           input:{  <br>\n             clearable:true  <br>\n           },  <br>\n           select:{  <br>\n             filterable:true  <br>\n           }  <br>\n         },  <br>\n         defaultValue: false, //defaultOperator：运算符的默认缺省选择  <br>\n         validator: (r) => !!r.value //validator：校验规则（该功能点还在迭代开发中……）  <br>\n         inputType: 'number', //值域的数值类型  <br>\n         valueEditorType: 'radio' //值域编辑器的类型  <br>\n         defaultValue: false, //值域的默认值  <br>\n         values: [ //值域的可选域配置（下拉）  <br>\n           {  <br>\n              label: 'Percussion instruments',  <br>\n              options: [  <br>\n               {  <br>\n                    name: 'Clapstick',  <br>\n                    label: 'Clapstick'  <br>\n               }  <br>\n             ]  <br>\n           }  <br>\n         ],  <br>\n         values: [ //值域的可选域配置（单选）  <br>\n           {  <br>\n              name: 'M',  <br>\n              label: 'Male'  <br>\n           },  <br>\n           {  <br>\n              name: 'F',  <br>\n              label: 'Female'  <br>\n           },  <br>\n           {  <br>\n              name: 'O',  <br>\n              label: 'Other'  <br>\n           }  <br>\n         ],  <br>\n         valueSources: ['field', 'value'], //值域类型可选择  <br>\n         comparator: 'groupNumber', //分组时的比较器  <br>\n         groupNumber: 'group1', //分组的组别  <br>\n       },  <br>\n       // 组合子数组配置，label为展示字符，name为数据值  <br>\n       combinators: [  <br>\n         {  <br>\n           name: 'and',  <br>\n           label: '且'  <br>\n         },  <br>\n         {  <br>\n           name: 'or',  <br>\n           label: '或'  <br>\n         }  <br>\n       ]  <br>\n       </code></pre>  <br>\n       ",
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
          '添加 max-height 属性设置组件最大高度，超出内容显示滚动条，属性值支持 数值 和 数值+单位，如 500、500px、50rem 等。',
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
          'config 配置添加 bindProps 属性可控制某一类组件的参数，中间操作符类组件暂不支持传参，具体配置见以下说明： <br>\n        <div class="tip custom-block">\n        <p class="custom-block-title">  bindProps 属性说明 </p>\n        leftSelect：左侧 Select 参数，统一控制左侧所有 Select <br>\n        select：右侧 Select 参数 <br>\n        input：输入框参数，包括 textarea <br>\n        numeric：计数器 <br>\n        date：日期选择器 <br>\n        time：时间选择器 <br>\n        radio：单选框 <br>\n        checkbox：多选框 <br>\n        </div> <br>\n        ',
        'en-US': ' '
      },
      codeFiles: ['sub-component-param.vue']
    }
  ]
}
