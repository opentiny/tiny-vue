<template>
  <div class="content">
    <TinyRadioGroup v-model="align" type="button" :options="options"></TinyRadioGroup>
    <tiny-pager :align="align" :total="100"></tiny-pager>
  </div>
</template>

<script>
import { TinyPager, TinyRadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyPager,
    TinyRadioGroup
  },
  data() {
    return {
      align: 'left',
      options: ['left', 'center', 'right'].map((item) => ({ label: item, text: item }))
    }
  }
}
</script>

<style scoped>
.content {
  margin-bottom: 20px;
}
.tiny-radio-group {
  margin-bottom: 10px;
}
</style>
