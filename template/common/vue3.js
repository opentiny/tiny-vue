import * as vue from '@opentiny/vue-common/adapter/vue3'

export default vue.default

export const {
  defineAsyncComponent,
  markRaw,
  renderComponent,
  rootConfig,
  appContext,
  appProperties,
  tools,
  directive,
  h,
  createComponent,
  parseVnode,
  bindFilter,
  useRouter,
  emitter
} = vue
