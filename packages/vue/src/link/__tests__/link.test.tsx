import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Link from '@opentiny/vue-link'
import { nextTick } from 'vue'

const iconTest = 'IconDel()'

describe('PC Mode', () => {
  const mount = mountPcMode
  
  test('href', async () => {
    const wrapper = mount(() => <Link underline={false} href="localhost:3000/#/zh-CN/index"></Link>)
    expect(wrapper.find('.tiny-link').attributes().href).toBe('localhost:3000/#/zh-CN/index')
  })

  test('slot', async () => {
    const wrapper = mount(() => <Link v-slots={{
      icon: () => iconTest
    }}></Link>)
    expect(wrapper.text()).toContain(iconTest)
  })
})
