export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'validation-editing-validation',
      'name': { 'zh-CN': '编辑时校验', 'en-US': 'Verify during editing' },
      'desc': {
        'zh-CN':
          '<p>grid 标签配置 edit-config 对象，并配置 edit-rules 对象来设置校验对象和校验规则。具体参考下面示例。</p>\n',
        'en-US':
          'The <p>grid tag configures the edit-config object, and configures the edit-rules object to set the validation object and validation rule. For details, see the following example. </p>\n'
      },
      'codeFiles': ['validation/editing-validation.vue']
    },
    {
      'demoId': 'validation-editing-isvalidalways-validation',
      'name': { 'zh-CN': '常显编辑器校验', 'en-US': 'Verify hidden columns during editing' },
      'desc': {
        'zh-CN':
          '<p>grid 标签配置 edit-config 对象且列配置type：visible 且配置isValidAlways属性时, 即列总是显示可编辑状态时，支持编辑时校验,并配置 edit-rules 对象来设置校验对象和校验规则。具体参考下面示例。</p>\n',
        'en-US':
          '<p>When the edit-config object is configured for the grid tag, type is set to visible, and isValidAlways is configured for the column, that is, the column is always editable, verification during editing is supported. Configure the edit-rules object to set the verification object and verification rule. For details, see the following example. </p>\n'
      },
      'codeFiles': ['validation/editing-isvalidalways-validation.vue']
    },
    {
      'demoId': 'validation-row-data-valid',
      'name': { 'zh-CN': '数据关联校验', 'en-US': 'Data Association Verification' },
      'desc': {
        'zh-CN':
          '<p>在自定义校验时，<code>validator</code>方法<code>rule</code>参数中可获取到当前行与列的信息。可以按业务的需求实现数据关联的校验逻辑</p>\n',
        'en-US':
          '<p> During customized validation, the <code>validator</code> method <code>rule</code> parameter can obtain the current row and column information. The verification logic of data association can be implemented based on service requirements.</p>\n'
      },
      'codeFiles': ['validation/row-data-valid.vue']
    },
    {
      'demoId': 'validation-custcomp',
      'name': {
        'zh-CN': '自定义组件校验',
        'en-US': 'Verify the customized component with the slot editor'
      },
      'desc': {
        'zh-CN':
          '<p>在使用自定义组件时，组件需要实现<code>v-model</code>的功能。在使用插槽时想要实时校验需要手动触发组件的校验方法</p>\n',
        'en-US':
          '<p>When using a custom component, the component needs to implement the <code>v-model</code> function. If you want to verify the slot in real time, you need to manually trigger the verification method of the component.</p>\n'
      },
      'codeFiles': ['validation/custcomp.vue']
    },
    {
      'demoId': 'validation-select-validation',
      'name': { 'zh-CN': '选中时校验', 'en-US': 'Verify when selected' },
      'desc': {
        'zh-CN':
          '<p>grid 标签配置 edit-config 对象，并配置 edit-rules 对象来设置校验对象和校验规则，通过按钮点击事件调用 this.$refs.basicGrid.validate()方法来触发表格校验，具体参考下面示例。</p>\n',
        'en-US':
          'The <p>grid tag configures the edit-config object, configures the edit-rules object to set the validation object and validation rule, and invokes the this.$refs.basicGrid.validate() method to trigger table validation through the button click event. For details, see the following example. </p>\n'
      },
      'codeFiles': ['validation/select-validation.vue']
    },
    {
      'demoId': 'validation-before-submit-validation',
      'name': { 'zh-CN': '提交前校验', 'en-US': 'Verify Before Submission' },
      'desc': {
        'zh-CN':
          '<p>grid 标签配置 edit-config 对象，并配置 edit-rules 对象来设置校验对象和校验规则，通过按钮点击事件调用 this.$refs.basicGrid.validate()方法来触发表格校验，具体参考下面示例。</p>\n',
        'en-US':
          'The <p>grid tag configures the edit-config object, configures the edit-rules object to set the validation object and validation rule, and invokes the this.$refs.basicGrid.validate() method to trigger table validation through the button click event. For details, see the following example. </p>\n'
      },
      'codeFiles': ['validation/before-submit-validation.vue']
    },
    {
      'demoId': 'validation-bubbling',
      'name': {
        'zh-CN': '校验提示跟随单元格移动',
        'en-US': 'When the verification is triggered, the current verification cell is automatically located.'
      },
      'desc': {
        'zh-CN':
          '<p>通过配置 tooltipConfig.popperOptions.bubbling 为 true ，可实现表格的校验提示跟随其外部的滚动条滚动。</p>\n',
        'en-US':
          '<p>The grid editor introduces the tiny.0 component, configures the edit-config object in the tag, and configures the edit-rules object to set the verification object and verification rule. Invoke the this.$refs.basicGrid.validate() method through the button click event to trigger table validation. For details, see the following example. </p>\n'
      },
      'codeFiles': ['validation/bubbling.vue']
    },
    {
      'demoId': 'validation-validation-scroll-to-col',
      'name': { 'zh-CN': '触发校验时自动定位到当前校验的单元格', 'en-US': 'Error prompt configuration item' },
      'desc': {
        'zh-CN':
          '<p>grid 编辑器引入 tiny 组件，标签配置 edit-config 对象，并配置 edit-rules 对象来设置校验对象和校验规则，通过按钮点击事件调用 this.$refs.basicGrid.validate()方法来触发表格校验，具体参考下面示例。</p>\n',
        'en-US':
          '<p>The default error message is displayed on <code>body</code>. You can set <code>appendTobody</code> in <code>tooltip-config</code> to <code>false</code> to solve the problem that the tip position is incorrect during page scrolling. Set the <code>placement</code> property to adjust the default display direction. For details about the <code>tooltip-config</code> configuration, see the tooltip component</p>\n'
      },
      'codeFiles': ['validation/validation-scroll-to-col.vue']
    },
    {
      'demoId': 'validation-tipconfig',
      'name': { 'zh-CN': '错误提示配置项', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>表格默认错误提示显示在 <code>body</code> 上， 可以通过设置 <code>tooltip-config</code> 的 <code>appendTobody</code> 设置为 <code>false</code> 来解决页面滚动时tip位置错误的问题。设置 <code>placement</code> 属性调整默认显示方向。<code>tooltip-config</code> 的配置可参参考 tooltip 组件</p>\n',
        'en-US': ''
      },
      'codeFiles': ['validation/tipconfig.vue']
    },
    {
      'demoId': 'validation-asterisk-method',
      'name': { 'zh-CN': '隐藏必填星号', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>通过表格属性 <code>editRules</code> 可以配置表格的编辑规则，如果指定某一字段的 <code>required</code> 为 <code>true</code>，就会在表头显示必填星号。如果想要隐藏掉必填星号，可以通过表格属性 <code>validConfig</code> 配置一个方法 <code>asteriskMethod</code> 来控制，返回 <code>false</code> 则隐藏。参考示例：</p>\n',
        'en-US': ''
      },
      'codeFiles': ['validation/asterisk-method.vue']
    }
  ],
  apis: [{ 'name': 'grid-validation', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
