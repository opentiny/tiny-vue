<script lang="ts">
import { provideDesignConfig, hooks, props as _props, isVue2, $prefix, defineComponent } from '@opentiny/vue-common'
import type { PropType } from '@opentiny/vue-common'
import type { Tag, TextDirection, breakPoint } from './props'
import { configProviderContextKey } from '../index'
import '@opentiny/vue-theme/config-provider/index.less'
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'
import { isObject } from '@opentiny/utils'

/**
 * 检查对象是否具有任何一个指定的键
 * @param obj 需要检查的对象
 * @param keys 需要检查的键的数组
 * @return 如果对象具有任何一个指定的键，返回true，否则返回false
 */
const hasAnyKey = (obj: any, keys: string[]): boolean => {
  if (obj == null) {
    return false
  }

  if (keys.length === 0) {
    return false
  }

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return true
    }
  }

  return false
}

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
    theme: {
      type: Object,
      default: () => {
        return null
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
    const { direction, design, theme } = hooks.toRefs(props)
    provideDesignConfig(design)
    hooks.watch(
      () => theme.value,
      () => {
        if (isObject(theme.value) && hasAnyKey(theme.value, ['data'])) {
          const themeTool = new TinyThemeTool()
          themeTool.changeTheme(theme.value)
        }

        if (isObject(theme.value) && !hasAnyKey(theme.value, ['data'])) {
          console.warn(`configProvider组件的theme属性对象请配置data属性。e.g { data: {'tv-base-color-brand': '#000'}}`)
        }

        if (theme.value && !isObject(theme.value)) {
          console.warn(`configProvider组件的theme属性请配置对象格式数据`)
        }
      },
      {
        immediate: true
      }
    )
    const isRTL = hooks.computed(() => direction.value === 'rtl')
    const cssVar = hooks.computed(() => {
      return {
        '--text-direction': direction.value
      }
    })
    const classNames = hooks.reactive({
      'tiny-config-provider': true,
      'tiny-config-provider__rtl': isRTL
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
}) as any
</script>
