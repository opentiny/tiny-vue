import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test } from 'vitest'
import { reactive } from 'vue'

const links = reactive([
  {
    key: 'demonstrate',
    link: '#demonstrate',
    title: '演示',
    children: [
      {
        key: 'basic-usage',
        link: '#basic-usage',
        title: 'Basic Usage'
      },
      {
        key: 'is-affix',
        link: '#is-affix',
        title: 'Is Affix'
      },
      {
        key: 'set-container',
        link: '#set-container',
        title: 'Set Container'
      },
      {
        key: 'on-change',
        link: '#on-change',
        title: 'On Change'
      }
    ]
  },
  {
    key: 'api',
    link: '#api',
    title: 'Api'
  }
])

describe('PC Mode', () => {
  const mount = mountPcMode
  // props
  test.todo('links 数据配置项，可通过children嵌套')

  test.todo('is-affix 固定模式')

  test.todo('container-id 指定滚动容器的id值')

  test.todo('mask-class 自定义滚动的目标元素类名')

  // events
  test.todo('link-click 锚点点击事件, 点击后触发的回调函数;//参数arg1:点击事件对象 //参数arg2: {link: 点击锚点的链接, title: 点击节点的标题文字 }')

  test.todo('on-change 监听锚点链接的改变；锚点改变后的回调函数; // 参数arg1: 当前锚点的id值')
})
