<template>
  <tiny-input
    v-if="['text', 'textarea'].includes(type)"
    :type="type"
    v-model="modelValue"
    v-bind="props"
    v-on="events"
    @update:modelValue="update"
  ></tiny-input>
  <tiny-numeric
    v-else-if="type === 'number'"
    v-model="modelValue"
    v-bind="props"
    v-on="events"
    @update:modelValue="update"
  ></tiny-numeric>
  <tiny-date-picker
    v-else-if="['date', 'datetime-local'].includes(type)"
    v-model="modelValue"
    value-format="yyyy-MM-dd"
    v-bind="props"
    v-on="events"
    @update:modelValue="update"
  ></tiny-date-picker>
  <tiny-time-picker
    v-else-if="type === 'time'"
    v-model="modelValue"
    format="hh:mm"
    value-format="shortTime"
    v-bind="props"
    v-on="events"
    @update:modelValue="update"
  ></tiny-time-picker>
  <tiny-radio
    v-else-if="type === 'radio'"
    v-model="modelValue"
    v-bind="props"
    v-on="events"
    @update:modelValue="update"
  ></tiny-radio>
  <tiny-checkbox
    v-else-if="type === 'checkbox'"
    v-model="modelValue"
    v-bind="props"
    v-on="events"
    @update:modelValue="update"
  ></tiny-checkbox>
  <input v-else :type="type" v-model="modelValue" v-bind="props" v-on="events" @input="update" />
</template>

<script lang="ts">
import { defineComponent } from '@opentiny/vue-common'
import Input from '@opentiny/vue-input'
import Numeric from '@opentiny/vue-numeric'
import DatePicker from '@opentiny/vue-date-picker'
import TimePicker from '@opentiny/vue-time-picker'
import Radio from '@opentiny/vue-radio'
import Checkbox from '@opentiny/vue-checkbox'

export default defineComponent({
  components: {
    TinyInput: Input,
    TinyNumeric: Numeric,
    TinyDatePicker: DatePicker,
    TinyTimePicker: TimePicker,
    TinyCheckbox: Checkbox,
    TinyRadio: Radio
  },
  props: {
    value: {},
    type: {
      type: String,
      default: 'text'
    },
    props: Object,
    events: Object
  },
  data() {
    return {
      modelValue: this.value
    }
  },
  watch: {
    value(value) {
      this.modelValue = value
    }
  },
  methods: {
    update() {
      this.$emit('update:modelValue', this.modelValue)
    }
  }
})
</script>
