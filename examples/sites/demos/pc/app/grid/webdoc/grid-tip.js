export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'tip-column-header-tip',
      'name': { 'zh-CN': '列头提示', 'en-US': 'Column Header Prompt' },
      'desc': {
        'zh-CN': `<p>列头提示有2种，一种是 <code>show-header-tip</code> 提示（内容是否超出都会提示），另一种是 <code>show-header-overflow</code> 内容超出当前行时隐藏并提示。</p>
          <div class="tip custom-block">
            <p class="custom-block-title">TIP</p>\n<p> <code>show-header-overflow</code> 可选值有：</p>
            <ul>
              <li><code>tooltip</code>：内容超出部分显示 <code>...</code>，左侧/右侧弹出提示层显示全部信息，<code>show-overflow</code> 开启时的缺省提示</li>
              <li><code>title</code>：和原生标签的 <code>title</code> 属性一致</li>
              <li><code>ellipsis</code>：内容超出部分显示 <code>...</code>，没有提示</li>
            </ul>
          </div>`,
        'en-US':
          '<p>There are two types of column header prompts. One is <code>show-header-tip</code> prompt (a prompt is displayed regardless of whether the content exceeds the value of <code>show-header-overflow</code>). The other is hidden and prompt when the content exceeds the current line. The options of </p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p> <code>show-header-overflow</code> are as follows: </p>\n<ul>\n<li><code>tooltip</code>: displays the content that exceeds the value of <code>...</code>, displays all information at the prompt layer on the left or right, and displays the default prompt when <code>show-overflow</code> is enabled. </li>\n<li><code>title</code>: Same as the <code>title</code> attribute of the native tag. </li>\n<li><code>ellipsis</code>: <code>...</code> is displayed for the extra content, and </li>\n</ul>\n</div>\n is not displayed'
      },
      'codeFiles': ['tip/column-header-tip.vue']
    },
    {
      'demoId': 'tip-cell-tip',
      'name': { 'zh-CN': '单元格提示', 'en-US': 'Cell Prompt' },
      'desc': {
        'zh-CN':
          '<p>单元格提示有2种，一种是 <code>show-tip</code> 提示（内容是否超出都会提示），另一种是 <code>show-overflow</code> 内容超出当前行时隐藏并提示。</p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p> <code>show-overflow</code> 可选值有：</p>\n<ul>\n<li><code>title</code>：和原生标签的 <code>title</code> 属性一致</li>\n<li><code>ellipsis</code>：内容超出部分显示 <code>...</code>，没有提示</li>\n<li><code>tooltip</code>：内容超出部分显示 <code>...</code>，左侧/右侧弹出提示层显示全部信息</li>\n</ul>\n</div>\n',
        'en-US':
          '<p> There are two types of cell prompts. One is the <code>show-tip</code> prompt (a prompt is displayed regardless of whether the content exceeds the current line). The other is the <code>show-overflow</code> prompt is hidden and displayed when the content exceeds the current line. The options of </p>\n<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p> <code>show-overflow</code> are as follows: </p>\n<ul>\n<li><code>title</code>: consistent with the <code>title</code> attribute of the native tag </li>\n<li><code>ellipsis</code>: <code>...</code> is displayed for the extra content. </li>\n<li><code>tooltip</code>: <code>...</code> is displayed for the extra content. The left/right pop-up prompt layer displays all information. The default prompt when <code>show-overflow</code> is enabled\n<code>tooltip</code> can be prompted through the <code>Grid</code> property <code>: Configure tooltip-config</code>. For details about the configuration method, see </li>\n</ul>\n</div>\n of the Tooltip</code> component'
      },
      'codeFiles': ['tip/cell-tip.vue']
    },
    {
      'demoId': 'tip-cell-tip-config',
      'name': { 'zh-CN': '自定义单元格提示', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p> <code>tooltip</code> 提示可通过 <code>Grid</code> 属性 <code>:tooltip-config</code> 进行配置，配置中的<code>contentMethod</code>方法可以自定义提示内容，配置方式参考 <code>Tooltip</code> 组件</p>\n',
        'en-US': ''
      },
      'codeFiles': ['tip/cell-tip-config.vue']
    }
  ],
  apis: [{ 'name': 'grid-tip', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
