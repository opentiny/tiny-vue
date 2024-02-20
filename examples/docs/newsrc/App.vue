<template>
  <div class="hp100vh f-c">
    <div class="m10 pb10 b-b">
      <div style="float: right">
        组件库模式： <tiny-button-group :data="state.groupData" v-model="modeState.mode"></tiny-button-group>
      </div>
      <div class="f-r f-box-center">
        <div class="f22 sm-show mr16 cur-hand d-none" @click="toggleFixedMenu">
          <icon-editor-menu-left v-if="state.showFixedMenu" />
          <icon-editor-menu-right v-else />
        </div>
        <div>
          VCA版本：
          <tiny-link type="primary" :underline="false" class="mr20">
            {{ state.vueVersion }}
          </tiny-link>
        </div>
      </div>
    </div>
    <div class="fi-1 of-auto">
      <tiny-pc v-if="modeState.mode === 'pc'" :show-fixed-menu="state.showFixedMenu"></tiny-pc>
      <tiny-mobile v-else-if="modeState.mode === 'mobile'" :show-fixed-menu="state.showFixedMenu"></tiny-mobile>
      <tiny-mobile-first v-else :show-fixed-menu="state.showFixedMenu"></tiny-mobile-first>
    </div>
  </div>
</template>

<script>
import './style.css'
import { ButtonGroup, Link } from '@opentiny/vue'
import { iconEditorMenuRight, iconEditorMenuLeft } from '@opentiny/vue-icon'
import TinyPc from './pc.vue'
import TinyMobile from './mobile.vue'
import TinyMobileFirst from './mobile-first.vue'
import { hooks } from '@opentiny/vue-common'
import { useModeCtx } from './uses'

export default {
  components: {
    TinyPc,
    TinyMobile,
    TinyMobileFirst,
    TinyButtonGroup: ButtonGroup,
    TinyLink: Link,
    IconEditorMenuRight: iconEditorMenuRight(),
    IconEditorMenuLeft: iconEditorMenuLeft()
  },
  setup() {
    const { state: modeState, fn: modeFn } = useModeCtx()
    const state = hooks.reactive({
      groupData: [
        { text: 'PC', value: 'pc' },
        { text: 'Mobile', value: 'mobile' },
        { text: 'Mobile-first', value: 'mobile-first' }
      ],
      vueVersion: hooks.version,
      showFixedMenu: false
    })

    hooks.onMounted(() => {
      hooks.watch(
        () => modeState.mode,
        (mode, preMode) => {
          if (mode !== preMode && preMode !== '') {
            modeFn.changeMode(modeState.mode)
            modeFn.cacheCtx()
            modeFn.pushToUrl()
            location.reload() // 必须刷新页面，重进main.ts才行
          }
        },
        {
          flush: 'sync'
        }
      )
    })

    const toggleFixedMenu = () => {
      state.showFixedMenu = !state.showFixedMenu
    }

    // 解析url, 生成modeState
    modeFn.loadPage()
    return {
      state,
      modeState,
      toggleFixedMenu
    }
  }
}
</script>
