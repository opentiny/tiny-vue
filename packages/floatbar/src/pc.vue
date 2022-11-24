<template>
  <div class="tiny-float-bar tiny-toolbar" :style="position">
    <slot :slot-scope="{ data: state.data }">
      <ul class="navs">
        <li v-for="(item, index) in state.data" :key="index" class="nav-item">
          <a
            v-if="item.url"
            :href="item.url"
            :target="item.target"
            rel="noopener noreferrer"
            class="nav-link"
            >{{ item.title }}</a
          >
          <span v-else class="nav-text">{{ item.title }}</span>
        </li>
      </ul>
    </slot>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/floatbar/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  props: [...props, 'position', 'data'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
