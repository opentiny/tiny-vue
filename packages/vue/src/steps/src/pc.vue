<script lang="ts">
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import PcStandardTemplate from './pc/pc-standard.vue'
import PcAdvancedTemplate from './pc/pc-advanced.vue'
import PcLineTemplate from './pc/pc-line.vue'
import '@opentiny/vue-theme/steps/index.less'

const template = (mode, props) => {
  if (props.advanced) {
    return PcAdvancedTemplate
  } else if (props.line) {
    return PcLineTemplate
  } else {
    return PcStandardTemplate
  }
}

export default defineComponent({
  name: $prefix + 'Steps',
  props: {
    ...$props,
    nameField: {
      type: String,
      default: 'name'
    },
    statusField: {
      type: String,
      default: 'status'
    },
    data: [Object, Array],
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
    vertical: Boolean,
    advanced: Boolean,
    line: Boolean,
    duration: {
      type: Number,
      default: 300
    },
    size: {
      type: String,
      default: 'medium'
    },
    noArrow: Boolean,
    flex: Boolean
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
</script>
