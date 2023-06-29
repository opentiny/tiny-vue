import Link from '@opentiny/vue-link'
import { describe, expect, test } from 'vitest'
import { mountPcMode } from '@opentiny-internal/vue-test-utils'

const iconTest = 'IconDel()'

describe('PC Mode', () => {
  const mount = mountPcMode
  
  /**
   * attrs
   */
  test('href', async () => {
    const wrapper = mount(() => <Link underline={false} href="localhost:3000/#/zh-CN/index"></Link>)
    expect(wrapper.find('.tiny-link').attributes().href).toBe('localhost:3000/#/zh-CN/index')
  })

  test.todo('type 该属性的可选值为 primary / success / warning / danger / info。默认为 default')

  test.todo('underline 是否下划线。默认为 true')

  test.todo('disabled 是否禁用状态。默认为 false')

  test.todo('icon 图标类名')

  /**
   * slots
   */
  test('default slot', async () => {
    const wrapper = mount(() => <Link v-slots={{
      icon: () => iconTest
    }}></Link>)
    expect(wrapper.text()).toContain(iconTest)
  })

  test.todo('icon 图标插槽')
})
