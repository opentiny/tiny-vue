import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Floatbar from '@opentiny/vue-floatbar'

describe('PC Mode', () => {
  const mount = mountPcMode

  // 默认插槽
  test('default', () => {
    const wrapper = mount(() => <Floatbar>
      <ul class="custom-menu">
        <li><a>Custom-A</a></li>
        <li><a>B</a></li>
        <li><a>C</a></li>
        <li><a>D</a></li>
      </ul>
    </Floatbar>)
    expect(wrapper.find('.custom-menu').exists()).toBe(true)
    expect(wrapper.findAll('.custom-menu li')[0].text()).toBe('Custom-A')
  })
})