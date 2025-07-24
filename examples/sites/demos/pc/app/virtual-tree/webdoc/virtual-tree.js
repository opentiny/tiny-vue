export default {
  column: '2',
  owner: '',
  meta: {
    stable: '3.19.0'
  },
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': `
        提供了 <code>VirtualTree</code> 组件以支持树虚拟滚动，其内部封装了 <code>Tree</code> 组件。<br>
        通过属性 <code>height</code> 设置滚动容器的高度，通过属性 <code>row-height</code> 设置树的每一项高度。<br>
        通过 <code>width</code> 设置滚动容器的宽度，通过 <code>scrollbar-size</code> 设置滚动条的尺寸。<br>
        通过属性 <code>tree-op</code> 设置树组件属性，通过属性 <code>tree-op.events</code> 设置树组件的事件。参考示例。<br>

        <div class="tip custom-block">
          <p class="custom-block-title">TIP</p>
          <ul>
            <li>1. 组件内部设置 <code>will-change-view</code> 为 <code>false</code>，关闭了树的平铺视图特性。</li>
            <li>2. 组件内部设置 <code>show-check-easily</code> 为 <code>false</code>，关闭了显示勾选下级按钮特性。</li>
            <li>3. 组件透传了树组件的这些插槽：<code>default/empty/prefix/suffix/operation</code>。</li>
            <li>4. 组件提供了方法 <code>getTreeInstance</code> 访问内部的树组件实例。</li>
            <li>5. 组件监控了数据 <code>tree-op.data</code> 的改变。在数据改变时，默认不保持上次的展开状态和滚动位置。可以在改变数据前调用 <code>keepExpandStatus</code> 或 <code>keepScrollTop</code> 保持。</li>
            <li>6. 组件没有监控其它属性的改变，可以在改变后手动调用 <code>refresh</code> 刷新。同样可以在改变前调用 <code>keepExpandStatus</code> 或 <code>keepScrollTop</code> 保持上次的展开状态和滚动位置。</li>
          </ul>
        </div>
        `,
        'en-US':
          '<p>Note that the UserLink component requests mock data, which cannot be queried by other users. Use real services during development. </p>\n'
      },
      codeFiles: ['basic-usage.vue']
    }
  ]
}
