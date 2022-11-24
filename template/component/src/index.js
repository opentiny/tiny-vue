import { $props, $setup, $prefix } from '@opentiny/vue-common'

const _constants = {}

export default {
  name: $prefix + '[[UNAME]]',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => _constants
    },
    modelValue: String
  },
  setup(props, context) {
    return $setup({
      props,
      context,
      template: (mode) => {
        /* istanbul ignore next */
        if (process.env.NODE_ENV === 'test') {
          return require(`./${mode}`).default
        } else if (process.env.TINY_MODE) {
          return require('./' + process.env.TINY_MODE).default
        } else {
          return () =>
            import(
              /* webpackChunkName: "[[NAME]]-[request]" */ /* webpackExclude: /index|dist/ */ `./${mode}`
            )
        }
      }
    })
  }
}
