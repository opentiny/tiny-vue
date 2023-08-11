<template>
  <div class="group-combinator-box">
    <div class="combinator-branches"></div>
    <div class="combinator-btn" :class="{ 'is-disabled': disabled }" @click="clickHandler">
      {{ selectOption.label }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  name: 'Combinator',
  components: {},
  props: [
    'className',
    'handleOnChange',
    'options',
    'title',
    'value',
    'multiple',
    'listsAsArrays',
    'disabled',
    'testID'
  ],
  computed: {
    selectOption() {
      return this.options.filter((item: any) => item.name === this.value).shift() || {}
    }
  },
  methods: {
    clickHandler() {
      const value = this.options
        .filter((item: any) => item.name !== this.value)
        .map((item: any) => item.name)
        .shift()

      this.handleOnChange(value)
    }
  }
})
</script>
