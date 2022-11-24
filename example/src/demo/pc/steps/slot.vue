<template>
  <div class="content">
    <div>通过 item 插槽添加自定义图标</div>
    <tiny-steps :data="stepsData">
      <template #item="data">
        <span>
          <component
            :is="data.slotScope.status == 'done' ? IconYes : IconClose"
            class="tiny-svg-size"
          />
        </span>
        <span>{{ data.slotScope.name }}</span>
      </template>
    </tiny-steps>
  </div>
</template>

<script>
import { Steps } from '@opentiny/vue'
import { iconYes,iconClose } from '@opentiny/vue-icon'

export default {
  components: {
    TinySteps: Steps
  },
  data() {
    return {
      IconYes: iconYes(),
      IconClose: iconClose(),
      stepsData: [
        {
          name: 'Basic Info',
          count: 3,
          status: 'done'
        },
        {
          name: 'BOQ Info',
          count: 0,
          status: 'done'
        },
        {
          name: 'Involved Parties',
          count: 10,
          status: 'doing'
        },
        {
          name: 'Billing',
          count: 0,
          status: 'done'
        }
      ]
    }
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
  max-width: 50%;
  min-width: 700px;
}

.content > div:not(:last-child) {
  margin: 0 0 20px 0;
}
</style>
