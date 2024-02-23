import { $prefix, $setup, defineComponent, $props } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

export const areaProps = {
  ...$props,
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
}

export default defineComponent({
  name: $prefix + 'Area',
  props: areaProps,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
