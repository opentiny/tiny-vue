<template>
  <div :style="{ 'width': `${groupSize * 2 + 2}px`, 'min-height': `${groupSize * 2 + 2}px` }" :class="[state.list.length === 3 ? 'block text-center' : 'flex items-center justify-around flex-wrap']">
    <template v-if="state.list.length === 3">
      <div class="leading-[0] mb-px">
        <tiny-user-head :round="state.list[0].round" :type="state.list[0].type" v-model="state.list[0].modelValue"></tiny-user-head>
      </div>
      <div class="flex items-center justify-around">
        <div v-for="(item, i) in state.list.slice(1, 3)" :key="i" class="inline-block leading-[0]">
          <tiny-user-head :round="item.round" :type="item.type" v-model="item.modelValue"></tiny-user-head>
        </div>
      </div>
    </template>
    <template v-else>
      <div v-for="(item, i) in state.list.slice(0, 4)" :key="i" class="leading-[0]">
        <tiny-user-head :round="item.round" :type="item.type" v-model="item.modelValue"></tiny-user-head>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/user-head-group/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import UserHead from '@opentiny/vue-user-head'

export default defineComponent({
  components: {
    TinyUserHead: UserHead
  },
  props: [...props, 'groupSize', 'list'],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
