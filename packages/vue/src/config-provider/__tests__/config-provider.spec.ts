import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect } from 'vitest'
import ConfigProvider from '@opentiny/vue-config-provider'

describe('PC Mode', () => {
  const mount = mountPcMode
  test('rtl', () => {
    const wrapper = mount(ConfigProvider, {
      props: {
        design: {
          direction: 'rtl'
        }
      }
    })
    expect(wrapper.classes()).toContain('tiny-config-provider--rtl')
  })
  describe('tag', () => {
    test('no tag', () => {
      const wrapper = mount(ConfigProvider, {
        props: {
          design: {
            tag: {
              enable: false,
            }
          }
        },
        slots: {
          default: ['<button></button>'],
        }
      })
      expect(wrapper.html()).not.contain('div')
    })
    test('has tag but not div', () => {
      const wrapper = mount(ConfigProvider, {
        props: {
          design: {
            tag: {
              enable: true,
              name: 'custom-el'
            }
          }
        }
      })
      const html = wrapper.html()
      expect(html).contain('custom-el')
      expect(html).not.contain('div')
    }, { repeats: 5 })
  })
})
