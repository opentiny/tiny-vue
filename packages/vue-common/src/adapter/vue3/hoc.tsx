import { type SetupContext } from 'vue'
import { design, hooks, $prefix, $setup } from '../../index'
import { getComponentName } from '../index'

// 修改组件 props ，注入 Design Config
export default function DesignConfigPropsHOC(BaseComponent: any) {
  return {
    ...BaseComponent,
    setup(props, context) {
      const { attrs, slots, expose }: SetupContext = context
      const innerRef = hooks.ref()
      // 获取组件级配置和全局配置（inject需要带有默认值，否则控制台会报警告）
      let globalDesignConfig = hooks.inject(design.configKey, {})
      // globalDesignConfig 可能是响应式对象，比如 computed
      globalDesignConfig = globalDesignConfig?.value || globalDesignConfig || {}
      const designConfig = globalDesignConfig?.components?.[getComponentName().replace($prefix, '')]
      const designConfigProps = designConfig?.props || {}
      const mergedProps = { ...designConfigProps, ...attrs }

      expose(
        new Proxy(
          {},
          {
            get(_target, key) {
              return innerRef.value?.[key]
            },
            has(_target, key) {
              return innerRef.value?.[key]
            }
          }
        )
      )

      return $setup({
        props,
        context,
        template: () => {
          return (
            <BaseComponent {...mergedProps} ref={innerRef}>
              {slots}
            </BaseComponent>
          )
        }
      })

      // return () => {
      //   return (
      //     <BaseComponent {...mergedProps} ref={innerRef}>
      //       {slots}
      //     </BaseComponent>
      //   )
      // }
    }
  }
}
