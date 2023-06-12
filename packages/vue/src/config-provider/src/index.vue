<script lang="ts">
import { provideDesignConfig, type PropType, hooks, props as _props, isVue2 } from '@opentiny/vue-common'
import type { Tag, TextDirection, breakPoint } from './props'
import { $prefix, defineComponent } from '@opentiny/vue-common'
import { configProviderContextKey } from '../index'

export default defineComponent({
  name: $prefix + 'ConfigProvider',
  props: {
    design: {
      type: Object,
      default: () => {
        return {}
      }
    },
    breakPoints: {
      type: Object as PropType<breakPoint>,
      default: () => {
        return {
          breakPoints: {
            'xs': 480,
            'sm': 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
            '2xl': 1536
          }
        }
      }
    },
    direction: {
      type: String as PropType<TextDirection>,
      default: 'ltr'
    },
    tag: {
      type: Object as PropType<Tag>,
      default: () => {
        return {
          enable: true,
          name: 'div'
        }
      }
    },
    ..._props
      .map((item) => {
        return {
          [item]: {
            type: String
          }
        }
      })
      .reduce((pre, cur) => {
        return {
          ...pre,
          ...cur
        }
      })
  },
  setup(props, { slots }) {
    const { direction } = hooks.toRefs(props)
    provideDesignConfig(props.design)
    const isRTL = hooks.computed(() => direction.value === 'rtl')
    const cssVar = hooks.computed(() => {
      return {
        '--text-direction': direction.value
      }
    })
    const classNames = hooks.reactive({
      'tiny-config-provider': true,
      'tiny-config-provider--rtl': isRTL
    })
    hooks.provide(configProviderContextKey, props)
    return {
      slots,
      classNames,
      cssVar,
      props,
      isVue2
    }
  },
  render() {
    const attr = {
      class: this.classNames,
      style: this.cssVar
    }
    const slots = isVue2 ? this.$slots?.default : this.slots?.default?.()
    if (!this.props.tag.enable) {
      if (isVue2 && (slots?.length ?? 1) > 1) {
        return hooks.h('div', {}, slots)
      }
      return slots
    }
    const tagName = this.props.tag.name ?? 'div'
    return hooks.h(tagName, attr, slots)
  }
})
</script>

<style>
.tiny-config-provider--rtl {
  direction: var(--text-direction);
  transform: translateY(-1);
}
</style>
