<template>
    <div>
        <div v-if="state.type === 'primary'" class="tiny-mobile-loading-primary">
            <icon-dot-download/>
            <div>{{t(loadtext)}}</div>

        </div>
        <div class="tiny-mobile-loading-simple"  v-else>
            {{t(loadtext)}}
            <icon-dot-download/>
        </div>
    </div>
</template>


<script>
import { props, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/loading/vue'
import '@opentiny/vue-theme-mobile/loading/index.css'
import { iconDotDownload } from '@opentiny/vue-icon'

export default {
  components: {
    iconDotDownload: iconDotDownload()
  },
  props: [...props, 'type', 'loadtext'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>