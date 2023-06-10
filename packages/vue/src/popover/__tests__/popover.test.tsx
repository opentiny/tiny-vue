import { mountPcMode as mount } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect } from 'vitest'
import Button from '@opentiny/vue-button'
import Popover from '@opentiny/vue-popover'

describe('PC Mode', () => {
  document.body.innerHTML = `
  <div>
    <div id="app"></div>
  </div>
`

  test('测试props,事件,slot', async () => {
    const wrapper = mount(
      () => (
        <Popover placement="top-start" title="标题" width="200" trigger="hover" append-to-body content="这是一段内容">
          {{
            reference: () => <Button>悬浮我提示</Button>
          }}
        </Popover>
      ),
      {
        attachTo: '#app'
      }
    )
    await wrapper.find('button').trigger('mouseenter')

    expect(wrapper.emitted()).toHaveProperty('show')
    expect(wrapper.emitted()).toHaveProperty('after-enter')

    expect(document.querySelector('body > .tiny-popover .tiny-popover__title')?.textContent).toBe('标题')
  })
})
