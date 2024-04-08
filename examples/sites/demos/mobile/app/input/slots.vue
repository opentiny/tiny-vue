<template>
  <div class="demo-input">
    <tiny-input placeholder="prepend" v-model="input">
      <template #prepend>Http://</template>
    </tiny-input>
    <tiny-input placeholder="append" v-model="input">
      <template #append>.com</template>
    </tiny-input>
    <tiny-input placeholder="prefix" v-model="input">
      <template #prefix>
        <tiny-icon-search />
      </template>
    </tiny-input>
    <tiny-input placeholder="suffix" v-model="input">
      <template #suffix>
        <tiny-icon-calendar />
      </template>
    </tiny-input>
    <br />

    <tiny-input placeholder="suffix" v-model="input">
      <template #title>
        <span>自定义标题</span>
      </template>

      <template #tips>
        <span class="tips">自定义提示</span>
      </template>
    </tiny-input>
  </div>
</template>

<script>
import { Input } from '@opentiny/vue'
import { IconSearch, IconCalendar } from '@opentiny/vue-icon'

export default {
  components: {
    TinyInput: Input,
    TinyIconSearch: IconSearch(),
    TinyIconCalendar: IconCalendar()
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
.demo-input {
  height: 100%;
  padding: 20px 16px;
  background: #f5f5f5;
}

.demo-input [class^='tiny-mobile'] {
  margin-bottom: 8px;
}

.tips {
  color: #f23030;
}
</style>
