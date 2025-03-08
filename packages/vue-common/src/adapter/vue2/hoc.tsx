import Vue from 'vue'
import { design, $prefix } from '../../index'

export default function DesignConfigPropsHOC(BaseComponent) {
  return Vue.extend({
    name: 'DesignConfigHOC',
    functional: false,
    inject: {
      globalDesignConfig: {
        from: design.configKey,
        default: () => ({})
      }
    },
    created() {
      // 暴露实例方法
      this.$watch(
        () => this.innerRef,
        (val) => {
          if (val) {
            Object.keys(val).forEach((key) => {
              if (!(key in this)) {
                this[key] = val[key]
              }
            })
          }
        }
      )
    },
    data() {
      return {
        innerRef: null
      }
    },
    computed: {
      componentName() {
        const rawName = BaseComponent.name || BaseComponent.options.name
        return rawName.replace($prefix, '')
      },
      mergedProps() {
        // 处理响应式配置
        const globalConfig = this.unwrap(this.globalDesignConfig)
        const componentConfig = globalConfig.components?.[this.componentName] || {}
        return {
          ...componentConfig.props,
          ...this.$attrs
        }
      }
    },
    methods: {
      // 解包可能存在的响应式对象
      unwrap(config) {
        if (config && typeof config === 'object' && 'value' in config) {
          return config.value
        }
        return config || {}
      }
    },
    render(h) {
      return h(
        BaseComponent,
        {
          ref: (el) => {
            this.innerRef = el
          },
          attrs: this.mergedProps,
          on: this.$listeners,
          scopedSlots: this.$scopedSlots
        },
        this.$slots.default
      )
    }
  })
}
