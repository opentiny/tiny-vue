export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'grid_Example-gridEdit-inner-editor',
      'name': { 'zh-CN': 'Grid-编辑器-内置编辑器', 'en-US': 'Grid-editor-built-in editor' },
      'desc': {
        'zh-CN':
          '<p><code>grid</code> 标签上配置 <code>edit-config</code>。在 <code>grid-column</code> 列配置 <code>editor</code> 对象， <code>component</code> 渲染内置编辑组件， <code>events</code> 配置组件事件。具体参考下面示例。</p>\n<div class="tip custom-block"><p class="custom-block-title">说明</p>\n<p>3.0 内置编辑器只支持 <code>Input</code> 和 <code>Select</code> 组件，需要使用其他组件可参考自定义编辑器</p>\n</div>\n',
        'en-US':
          'Configure <code>edit-config</code> on the <p><code>grid</code> label. In the <code>grid-column</code> column, configure the <code>editor</code> object, <code>component</code> render the built-in editing component, and <code>events</code> configure component events. For details, see the following example. </p>\n<div class="tip custom-block"><p class="custom-block-title"> Description</p>\n<p>The built-in editor supports only the <code>Input</code> and <code>Select</code> components. For details about how to use other components, see the custom editor </p>\n</div>\n'
      },
      'codeFiles': ['grid_Example/gridEdit/inner-editor.vue']
    },
    {
      'demoId': 'grid_Example-gridEdit-custom-editor',
      'name': { 'zh-CN': 'Grid-编辑器-自定义编辑器', 'en-US': 'Grid-Editor-Custom Editor' },
      'desc': {
        'zh-CN':
          '<p><code>grid</code> 标签上配置 <code>edit-config</code>。\n在 <code>grid-column</code> 列配置 <code>editor</code> 对象， <code>component</code> 渲染自定义编辑组件。\n自定义编辑默认编辑框为小框，可以配合样式修改编辑框。\n具体参考下面示例。</p>\n',
        'en-US':
          'Configure <code>edit-config</code> on the <p><code>grid</code> label. \n Configure the <code>editor</code> object in the <code>grid-column</code> column and render the custom editing component. \nThe default edit box is a small box. You can modify the edit box based on the style. \nFor details, see the following example. </p>\n'
      },
      'codeFiles': ['grid_Example/gridEdit/custom-editor.vue']
    },
    {
      'demoId': 'grid_Example-gridEdit-custom-editor-select',
      'name': { 'zh-CN': '引入 3.0 组件作为编辑器', 'en-US': 'Introducing the 3.0 component as the editor' },
      'desc': {
        'zh-CN': '<p>通过 <code>属性配置</code> 方式引入 TinyVue <code>Select</code> 组件。</p>\n',
        'en-US':
          '<p>Introduces the TinyVue <code>Select</code> component through <code>attribute configuration</code>. </p>\n'
      },
      'codeFiles': ['grid_Example/gridEdit/custom-editor-select.vue']
    },
    {
      'demoId': 'edit-mutil-render',
      'name': { 'zh-CN': 'Grid-编辑器-下拉多选', 'en-US': 'Grid-editor-drop-down list' },
      'desc': {
        'zh-CN':
          '<p>配置列为下拉多选时，单元格渲染需要自行实现，如下例中使用<code>format-text</code>渲染多个枚举值。也可以使用<code>renderer</code>自己实现自定义的组件去渲染。</p>\n',
        'en-US':
          '<p> When multiple options are selected from the drop-down list box, cell rendering needs to be implemented. In the following example, <code>format-text</code> is used to render multiple enumerated values. You can also use <code>renderer</code> to implement customized components for rendering. </p>\n'
      },
      'codeFiles': ['edit/mutil-render.vue']
    },
    {
      'demoId': 'news-editor-events',
      'name': { 'zh-CN': 'Grid-编辑器-自定义编辑器', 'en-US': 'Grid-Editor-Custom Editor' },
      'desc': {
        'zh-CN':
          '<p><code>grid</code> 标签上配置 <code>edit-config</code>。\n在 <code>grid-column</code> 列配置 <code>editor</code> 对象， <code>component</code> 渲染自定义编辑组件， 通过其events选项配置编辑器组件的事件。\n自定义编辑默认编辑框为小框，可以配合样式修改编辑框。\n具体参考下面示例。</p>\n',
        'en-US':
          'Configure <code>edit-config</code> on the <p><code>grid</code> label. \n Configure the <code>editor</code> object in the <code>grid-column</code> column, <code>component</code> render the custom editing component, and configure the events of the editor component through its events option. \nThe default edit box is a small box. You can modify the edit box based on the style. \nFor details, see the following example. </p>\n'
      },
      'codeFiles': ['news/editor-events.vue']
    },
    {
      'demoId': 'grid_Example-gridEdit-popeditor-in-grid',
      'name': { 'zh-CN': 'Popeditor 弹窗编辑', 'en-US': 'Popeditor pop-up window editing' },
      'desc': {
        'zh-CN':
          '<p>在 <code>grid-column</code> 列元素上配置 <code>editor</code> 属性，该对象中可以指定 <code>component</code> 为 <code>Popeditor</code>、<code>attrs</code> 为 Popeditor 组件的属性。需要注意的是，引入 Popeditor 组件后，需要在 <code>data()</code> 中进行实例化。</p>\n',
        'en-US':
          '<p>Configure the <code>editor</code> attribute on the <code>grid-column</code> column element. In this object, you can specify <code>component</code> as <code>Popeditor</code> and <code>attrs</code> as attributes of the Popeditor component. Note that after the Popeditor component is introduced, it needs to be instantiated in <code>data()</code>. </p>\n'
      },
      'codeFiles': ['grid_Example/gridEdit/popeditor-in-grid.vue']
    },
    {
      'demoId': 'grid_Example-gridEdit-popeditor-in-grid-remote-search',
      'name': {
        'zh-CN': 'Popeditor 弹窗编辑，配置远程搜索',
        'en-US': 'Edit the Popeditor pop-up window and configure remote search.'
      },
      'desc': { 'zh-CN': '详细用法参考如下示例', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['grid_Example/gridEdit/popeditor-in-grid-remote-search.vue']
    },
    {
      'demoId': 'grid_Example-gridEdit-editor-bg',
      'name': { 'zh-CN': '用户维护编辑状态', 'en-US': '' },
      'desc': {
        'zh-CN':
          "<p>假设 <code>名称字段</code> 和 <code>id 为 '3' 的行</code> 不可编辑，可以通过 <code>editConfig.activeMethod</code> 设置其单元格不可进入编辑，通过 <code>cellClassName</code> 设置其单元格的背景底色</p>",
        'en-US': ''
      },
      'codeFiles': ['grid_Example/gridEdit/editor-bg.vue']
    },
    {
      'demoId': 'grid_Example-gridEdit-custom-edit',
      'name': { 'zh-CN': '不可编辑背景色', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>表格编辑器场景，在表格内部维护编辑状态，只能使整行或单个单元格处于编辑状态。如果需要使多行处于编辑状态，需要使用渲染器自行实现，在自定义编辑状态时，表格内置的一些编辑行为，例如表头是否显示必填星号、编辑规则等将不可用，需要自行实现，参考示例：</p>',
        'en-US': ''
      },
      'codeFiles': ['grid_Example/gridEdit/custom-edit.vue']
    }
  ],
  apis: [{ 'name': 'grid-editor', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
