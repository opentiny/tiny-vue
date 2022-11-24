<script>
import Picker from '@opentiny/vue-picker'
import { $props } from '@opentiny/vue-common'
import { extend } from '@opentiny/vue-renderless/common/object'

const DatePicker = extend(
  true,
  {
    props: {
      ...$props,
      _constants: {
        type: Object,
        default: () => ({})
      },
      componentName: { type: String, default: 'DatePicker' }
    }
  },
  Picker
)

export default DatePicker
</script>
