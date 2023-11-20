export default {
  column: '1',
  owner: '',
  demos: [
    {
      'demoId': 'pager-inner-default-pager',
      'name': { 'zh-CN': '使用默认分页组件', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': '<p>如果不配置 <code>{component: Pager}</code> 则默认使用内置的分页组件。</p>\n',
        'en-US':
          "<p>To ensure that the table is lightweight and open, the table is modularized and split. The core code is lightweight. The paging component needs to be introduced to the paging function. The built-in paging configuration procedure is as follows: \n1. <code>import</code> introduces the official <code>Pager</code> component. That is, <code>import Pager from '@opentiny/vue-pager'</code> or <code>{Pager} from '@opentiny/vue'</code>. \n2. <code>Pager</code> is transferred to the <code>data()</code> function and stored for use in the template. \n3. Set the table attribute <code>pager</code> to configure pagination and inject the pagination component through the <code>{component: Pager}</code> attribute of <code>pager</code>. \n4. Configure the seq-serial attribute to set the sequence number to be displayed consecutively after page turning. By default, the sequence number is displayed discontinuously.</p>\n"
      },
      'codeFiles': ['pager/inner-default-pager.vue']
    },
    {
      'demoId': 'pager-inner-pager',
      'name': { 'zh-CN': '使用第三方分页组件', 'en-US': 'The system prompts you to save data.' },
      'desc': {
        'zh-CN':
          "<p>第三方分页组件配置步骤：\n1、<code>import</code> 引入自己引入的分页组件（这里使用官方的分页组件示范） <code>Pager</code> 组件，即 <code>import Pager from '@opentiny/vue-pager'</code> 或者 <code>{ Pager } from '@opentiny/vue'</code> 。\n2、<code>Pager</code> 传入给 <code>data()</code> 函数存储起来以便模板中使用。\n3、表格属性设置 <code>pager</code> 进行分页相关配置，通过 <code>pager</code> 的属性 <code>{component: Pager}</code> 注入分页组件。\n4、配置 seq-serial 属性可以设置翻页后序号连续显示，默认是不连续显示的</p>\n",
        'en-US':
          '<p>Configure the <code>showSaveMsg</code> attribute. When the table data is modified, the system prompts you to save the modification.</p>\n'
      },
      'codeFiles': ['pager/inner-pager.vue']
    },
    {
      'demoId': 'pager-show-save-msg',
      'name': { 'zh-CN': '提示保存数据', 'en-US': '' },
      'desc': {
        'zh-CN': '<p>配置 <code>showSaveMsg</code> 属性，当检查到表格数据存在修改时，会提示用户进行保存</p>\n',
        'en-US': ''
      },
      'codeFiles': ['pager/show-save-msg.vue']
    }
  ],
  apis: [{ 'name': 'grid-pager', 'type': 'component', 'properties': [], 'events': [], 'slots': [] }]
}
