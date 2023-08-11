<template>
  <div class="tiny-espace">
    <a
      v-for="(item, index) in data"
      :key="index"
      :title="getUserTitle(item)"
      :href="getUserHref(item)"
      @click="doUserAction(item)"
      :class="[
        { 'item-talk': item.type === 'im' },
        { 'item-call': item.type === 'sip' },
        { 'item-email': item.type === 'mailto' }
      ]"
    >
      <component :is="item.icon" class="tiny-svg-size" />
    </a>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/espace/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import {
  IconMessageCircle,
  IconTelephoneCircle,
  IconEmailCircle,
  IconEmailAdd,
  IconTelephone,
  IconDialog
} from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    IconMessageCircle: IconMessageCircle(),
    IconTelephoneCircle: IconTelephoneCircle(),
    IconEmailCircle: IconEmailCircle(),
    IconEmailAdd: IconEmailAdd(),
    IconTelephone: IconTelephone(),
    IconDialog: IconDialog()
  },
  props: [...props, 'data', 'isNewImMode'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
