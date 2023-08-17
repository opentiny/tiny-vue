<template>
  <div class="tiny-area">
    <tiny-select
      :popper-class="'tiny-area-jcr' + (popperClass ? ' ' + popperClass : '')"
      :popper-append-to-body="popperAppendToBody"
      :size="size"
      v-model="state.jcr"
      :placeholder="placeholder"
      @change="getRegion"
      :disabled="disabled"
      ref="refInstance"
      v-bind="a($attrs, ['^on[A-Z]'])"
      @clear="$emit('clear')"
      @visible-change="$emit('visible-change', $event)"
    >
      <tiny-option
        v-for="item in state.jcrData"
        :key="item[props.value]"
        :label="item[props.label]"
        :value="item[props.value]"
      >
      </tiny-option>
    </tiny-select>
    <tiny-select
      :popper-class="'tiny-area-region' + (popperClass ? ' ' + popperClass : '')"
      :popper-append-to-body="popperAppendToBody"
      :size="size"
      v-model="state.region"
      :placeholder="placeholder"
      @change="getRep"
      :disabled="disabled"
      v-bind="a($attrs, ['^on[A-Z]'])"
      @clear="$emit('clear')"
      @visible-change="$emit('visible-change', $event)"
    >
      <tiny-option
        v-for="item in state.regionData"
        :key="item[props.value]"
        :label="item[props.label]"
        :value="item[props.value]"
      >
      </tiny-option>
    </tiny-select>
    <tiny-select
      :popper-class="'tiny-area-rep' + (popperClass ? ' ' + popperClass : '')"
      :popper-append-to-body="popperAppendToBody"
      :size="size"
      v-model="state.rep"
      :placeholder="placeholder"
      @change="getOffice"
      :disabled="disabled"
      v-bind="a($attrs, ['^on[A-Z]'])"
      @clear="$emit('clear')"
      @visible-change="$emit('visible-change', $event)"
    >
      <tiny-option
        v-for="item in state.repData"
        :key="item[props.value]"
        :label="item[props.label]"
        :value="item[props.value]"
      >
      </tiny-option>
    </tiny-select>
    <tiny-select
      :popper-class="'tiny-area-office' + (popperClass ? ' ' + popperClass : '')"
      :popper-append-to-body="popperAppendToBody"
      :size="size"
      v-model="state.office"
      :placeholder="placeholder"
      :disabled="disabled"
      @change="changeOffice"
      v-bind="a($attrs, ['^on[A-Z]'])"
      @clear="$emit('clear')"
      @visible-change="$emit('visible-change', $event)"
    >
      <tiny-option
        v-for="item in state.officeData"
        :key="item[props.value]"
        :label="item[props.label]"
        :value="item[props.value]"
      >
      </tiny-option>
    </tiny-select>
  </div>
</template>

<script lang="ts">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/area/vue'
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'

export default defineComponent({
  name: $prefix + 'Area',
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  props: {
    modelValue: {},
    placeholder: {
      type: String,
      default: ''
    },
    size: String,
    disabled: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object,
      default: () => ({
        label: 'name_cn',
        value: 'org_id'
      })
    },
    fetchJcr: {
      type: Function
    },
    fetchRegion: {
      type: Function
    },
    fetchRep: {
      type: Function
    },
    fetchOffice: {
      type: Function
    },
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
