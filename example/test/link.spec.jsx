import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { Link } from '@opentiny/vue'
import { nextTick, ref } from 'vue'
import { randomValues } from './common/globalConfig'

randomValues(global)

const iconTest = 'IconDel()'

describe('link', () => {
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
