export default {
  column: '2',
  owner: '',
  meta: {
    stable: '3.17.0'
  },
  demos: [
    {
      demoId: 'auto-tip-basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': `
          通过 <code>v-auto-tip</code> 自定义指令，可以在鼠标移入<code>Dom</code>元素时探测文本是否超长，当超长时自动添加<code>tooltip</code>提示。
          <div class="tip custom-block">
            需要用户给<code>Dom</code>元素添加超出省略的样式，详见示例！
          </div>
          `,
        'en-US': `
            With the <code>v-auto-tip</code> custom command, you can detect if the text is too long when the mouse moves over the <code>Dom</code> element, and automatically add a <code>tooltip</code> prompt when it is too long.
            <div class="tip custom-block">
            Requires the user to add more than omitted styles to the <code>Dom</code> element, see the example!
            </div>
          `
      },
      codeFiles: ['auto-tip/basic-usage.vue']
    },
    {
      demoId: 'auto-tip-always-show',
      name: {
        'zh-CN': '自定义提示内容',
        'en-US': 'Constantly Displaying Prompts'
      },
      desc: {
        'zh-CN': `
        指令 <code>v-auto-tip</code> 可以接收一个指令参数，用法如下： <br>
        1、如果参数为对象，其类型声明为<code>{always:boolean; content:string | VNode | Vnode[]; effect: string; placement: string }</code>   <br>
        <ul>
          <li><code>always</code>属性，指定显示方式。值为<code>true</code>时，表示无论内容是否超长，都自动显示<code>tooltip</code>。默认值为<code>false</code>, 表示自动探测超长。  </li>  
          <li><code>content</code>属性，指定提示的内容，支持传入<code>string</code>，<code>VNode</code> 或<code>VNode 数组</code>。不传入值时，使用当前<code>Dom</code>元素的内容。  </li>  
          <li><code>effect</code> 属性，指定提示的效果，支持 <code>light</code> 和 <code>dark</code> ，默认是<code>light</code>亮色主题  </li>  
          <li><code>placement</code> 属性，指定提示的位置，默认值为<code>top</code> 。参见<code>tooltip</code> 组件的<code>placement</code> 属性。   </li>  
        </ul>
        2、如果参数为 <code>false</code>，表示禁止自动提示。 <br>
        `,
        'en-US': `
          The <code>v-auto-tip</code> command can receive an instruction parameter as follows: <br>
          1. If the parameter is an object, its type is declared as <code>{always:boolean; content:string | VNode | Vnode[];  effect: string;  placement: string }</code>   <br>
          <ul>
          <li><code>always</code> property specifies the display mode. If the value is <code>true</code>, the <code>tooltip</code> is automatically displayed regardless of whether the content is too long. The default value is <code>false</code>, indicating that the automatic detection length is too long. </li>
          <li><code>content</code> property specifies the content of the prompt, which can be passed to <code>string</code>, <code>VNode</code>, or the <code>VNode array </code>. When no value is passed, the contents of the current <code>Dom</code> element are used. </li>
          <li><code>effect</code> property, specify the effect of the prompt, support <code>light</code> and <code>dark</code>, default is <code>light</code> bright color theme </li>
          <li><code>placement</code> property specifies the placement of the tip. The default value is <code>top</code>. See the <code>placement</code> property of the <code>tooltip</code> component. </li>
          </ul>
          2. If the parameter is <code>false</code>, the automatic prompt is disabled. <br>
        `
      },
      codeFiles: ['auto-tip/always-show.vue']
    }
  ]
}
