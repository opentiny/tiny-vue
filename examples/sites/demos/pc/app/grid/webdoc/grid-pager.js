export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'pager-inner-default-pager',
      'name': { 'zh-CN': '使用默认分页组件', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>如果不配置 <code>{component: Pager}</code> 则默认使用内置的分页组件。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['pager/inner-default-pager.vue']
    },
    {
      'demoId': 'pager-inner-pager',
      'name': { 'zh-CN': '使用第三方分页组件', 'en-US': 'The system prompts you to save data.' },
      'desc': {
        'zh-CN': `<p>
        <div class="tip custom-block">
          <p class="custom-block-title">第三方分页组件配置步骤：</p>
          <ul>
            <li> 1、<code>import</code> 引入自定义的分页组件（这里使用官方的分页组件示范） <code>Pager</code> 组件，即 <code>import Pager from '@opentiny/vue-pager'</code> 或者 <code>{ Pager } from '@opentiny/vue'</code> 。</li>
            <li>2、<code>Pager</code> 传入给 <code>data()</code> 函数存储起来以便模板中使用。</li>
            <li>3、表格属性设置 <code>pager</code> 进行分页相关配置，通过 <code>pager</code> 的属性 <code>{component: Pager}</code> 注入分页组件。</li>
            <li>4、配置 seq-serial 属性可以设置翻页后序号连续显示，默认是不连续显示的。</li>
          </ul>
        </div>
      `,
        'en-US':
          '<p>Configure the <code>showSaveMsg</code> attribute. When the table data is modified, the system prompts you to save the modification.</p>\n'
      },
      'codeFiles': ['pager/inner-pager.vue']
    },
    {
      'demoId': 'pager-show-save-msg',
      'name': { 'zh-CN': '提示保存数据', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>配置 <code>showSaveMsg</code> 属性，当检查到表格数据存在修改时，会提示用户进行保存。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['pager/show-save-msg.vue']
    },
    {
      'demoId': 'pager-in-grid',
      'name': { 'zh-CN': '自定义分页', 'en-US': '' },
      'desc': {
        'zh-CN':
          '<p>表格内置分页组件需要和 <code>fetch-data</code> 属性配合使用，若使用 <code>data</code> 设置表格数据源，则需要使用自定义分页。</p>\n',
        'en-US': ''
      },
      'codeFiles': ['pager/pager-in-grid.vue']
    }
  ],
  apis: [{ 'name': 'grid-pager', 'type': 'component', 'props': [], 'events': [], 'slots': [] }]
}
