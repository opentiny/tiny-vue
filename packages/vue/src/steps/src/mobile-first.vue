<script lang="ts">
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import MobileFirstTemplate from './mobile-first/mobile-first-normal.vue'
import MobileFirstAdvancedTemplate from './mobile-first/mobile-first-advanced.vue'

const template = (mode, props) => {
  return props.advanced ? MobileFirstAdvancedTemplate : MobileFirstTemplate
}

export default defineComponent({
  name: $prefix + 'Steps',
  props: {
    ...$props,
    nameField: {
      type: String,
      default: 'name'
    },
    countField: {
      type: String,
      default: 'count'
    },
    statusField: {
      type: String,
      default: 'status'
    },
    data: [Object, Array],
    space: Number,
    active: {
      type: Number,
      default: -1
    },
    visibleNum: {
      type: Number,
      default: 3
    },
    descriptionField: {
      type: String,
      default: 'description'
    },
    size: {
      type: String,
      default: 'medium'
    },
    vertical: Boolean,
    advanced: Boolean,
    line: Boolean,
    duration: {
      type: Number,
      default: 300
    },
    noArrow: Boolean,
    flex: Boolean
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
</script>
