import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, test, expect } from 'vitest'
import ConfigProvider, { configProviderContextKey } from '@opentiny/vue-config-provider'
import { defineComponent, h, inject } from 'vue'
import type { ConfigProviderProps } from '../src/props'
import { isVue2 } from '@opentiny/vue-common'

describe('PC Mode', () => {
  const mount = mountPcMode
  test('rtl', () => {
    const wrapper = mount(ConfigProvider, {
      props: {
        direction: 'rtl'
      }
    })
    expect(wrapper.classes()).toContain('tiny-config-provider__rtl')
  })
  describe('tag', () => {
    test('no tag', () => {
      const wrapper = mount(ConfigProvider, {
        props: {
          tag: {
            enable: false
          }
        },
        slots: {
          default: ['<button>just button</button>']
        }
      })
      expect(wrapper.html()).not.contain('div')
    })
    test('has tag but not div', () => {
      const wrapper = mount(ConfigProvider, {
        props: {
          tag: {
            enable: true,
            name: 'custom-el'
          }
        }
      })
      const html = wrapper.html()
      expect(html).contain('custom-el')
      expect(html).not.contain('div')
    })
    test('mutil node', () => {
      const wrapper = mount(ConfigProvider, {
        props: {
          tag: {
            enable: false
          }
        },
        slots: {
          default: ['<button>btn1</button>', '<button>btn2</button>']
        }
      })
      if (isVue2) {
        expect(wrapper.html()).contain('div')
        expect(wrapper.classes().length).toBe(0)
      } else {
        expect(wrapper.html()).not.contain('div')
      }
    })
  })
  if (!isVue2) {
    describe('inject', () => {
      test('one layer', () => {
        let component
        if (!isVue2) {
          component = defineComponent({
            name: 'CustomComponent',
            setup() {
              const config = inject<ConfigProviderProps>(configProviderContextKey)
              expect(config).not.toBeNull()
              expect(config).not.toStrictEqual({})
              expect(config?.direction).not.toBe('ltr')
              // just fix Component is missing template or render function.
              return () => h('div')
            }
          })
        }
        mount(ConfigProvider, {
          slots: {
            default: [component]
          },
          props: {
            direction: 'rtl'
          }
        })
      })
    })
  }
})
