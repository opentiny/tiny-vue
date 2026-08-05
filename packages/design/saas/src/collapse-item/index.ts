import { iconArrowBottom } from '@opentiny/vue-icon-saas'

export default {
  icons: {
    warning: iconArrowBottom()
  },
  renderless: (props, hooks, { emit }, api) => {
    const state = api.state

    return {
      // AUI的场景不允许点击header容器点击折叠， 只能点击title才折叠。所以屏蔽header容器点击
      handleHeaderContainerClick: () => {}
    }
  }
}
