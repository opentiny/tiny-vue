export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN':
          '列表组件通过 `loading` 和 `finished` 两个变量控制加载状态，当列表底部和滚动容器边界之间的距离小于值 `offset` 时，列表组件会触发 `load` 事件并将 `loading` 设置成 `true`。此时可以发起异步操作并更新数据，数据更新完毕后，将 `loading` 设置成 `false` 即可。若数据已全部加载完毕，则直接将 `finished` 设置成 `true` 即可。',
        'en-US':
          '<p>The list component uses the `loading` and `finished` variables to control the loading status. When the distance between the bottom of the list and the boundary of the scrolling container is less than the value `offset`, the list component triggers the `loading` event and sets `loading` to `true`. In this case, you can initiate an asynchronous operation and update the data. After the data is updated, set `loading` to `false`. If all data has been loaded, set `finished` to `true`.</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'delay',
      name: {
        'zh-CN': '加载延时',
        'en-US': 'Loading delay'
      },
      desc: {
        'zh-CN':
          '当列表底部和滚动容器边界之间的距离小于值 `offset` 时，会延时触发 `load` 事件。节流延时时长通过 `delay` 设置，默认 `100ms`。',
        'en-US':
          'The `load` event is delayed when the distance between the bottom of the list and the boundary of the scrolling container is less than the value `offset`. The throttling delay is set through `delay`. The default value is `100 ms`.'
      },
      codeFiles: ['delay.vue']
    },
    {
      demoId: 'disabled',
      name: {
        'zh-CN': '禁用',
        'en-US': 'Disabled'
      },
      desc: {
        'zh-CN': '通过 `disabled` 属性控制是否禁用列表加载，默认值 `false`。',
        'en-US': 'The `disabled` attribute determines whether to disable list loading. The default value is `false`.'
      },
      codeFiles: ['disabled.vue']
    },
    {
      demoId: 'error-text',
      name: {
        'zh-CN': '错误提示',
        'en-US': 'Error prompt'
      },
      desc: {
        'zh-CN':
          '若列表数据加载失败，将 `error` 设置成 `true` 即可显示错误提示，用户点击错误提示后会重新触发 `load` 事件。',
        'en-US':
          'If the list data fails to be loaded, set `error` to `true` to display an error message. After you click the error message, the `load` event is triggered again.'
      },
      codeFiles: ['error-text.vue']
    },
    {
      demoId: 'pull-refresh',
      name: {
        'zh-CN': '下拉刷新',
        'en-US': 'Pull-down Refresh'
      },
      desc: {
        'zh-CN': '`List` 组件可以与 `PullRefresh` 组件结合使用，实现下拉刷新的效果。',
        'en-US':
          'The `List` component can be used together with the `PullRefresh` component to implement the pull-down refresh effect.'
      },
      codeFiles: ['pull-refresh.vue']
    },
    {
      demoId: 'slots',
      name: {
        'zh-CN': '插槽',
        'en-US': 'Slots'
      },
      desc: {
        'zh-CN': '列表组件存在 `loading/finished/error/default` 插槽，参考示例。',
        'en-US': 'The list component has the `loading/finished/error/default` slot. See the example.'
      },
      codeFiles: ['slots.vue']
    }
  ]
}
