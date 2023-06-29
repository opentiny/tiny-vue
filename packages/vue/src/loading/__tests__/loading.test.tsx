import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import Loading from '@opentiny/vue-loading'

describe('PC Mode', () => {
  const mount = mountPcMode

  test('base', () => {
    const div = document.createElement("div");
    div.id = "tiny-loading1";
    document.body.appendChild(div);
    Loading.service({
      target: document.getElementById('tiny-loading1')
    })
    expect(document.querySelector('.tiny-loading')).toBeDefined()
  })


  // 可通过 size 属性设置尺寸大小，可选值：medium / small / mini
  test.todo('size')

  // 通过 text 自定义加载文字的提示文本
  test.todo('text')

  // 通过 background 自定义背景颜色和透明度
  test.todo('background')

  // 通过 customClass 指定类名进行样式修改
  test.todo('customClass')

  // 同 v-loading 指令中的 body 修饰符
  test.todo('body')

  // 通过 v-loading.lock.fullscreen 指令方式或者服务方式进行全局加载，如需使用指令方式全局加载需要如下操作： 在 Vue 2 版本环境中添加 Vue.use(Loading) 在 Vue 3 版本环境中添加 app.use(Loading)
  test.todo('fullscreen')

  // 通过 spinner 自定义加载图标
  test.todo('spinner')

  // 通过 target 指定 Loading 需要覆盖的 DOM 节点
  test.todo('target')
})
