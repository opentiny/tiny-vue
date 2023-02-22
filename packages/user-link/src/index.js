import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const template = () => PCTemplate

export default {
  name: $prefix + 'UserLink',
  props: {
    ...$props,
    modelValue: String,
    cache: {
      type: Boolean,
      default: true
    },
    cacheKey: {
      type: String,
      default: 'aurora-user'
    },
    cacheFields: {
      type: Array,
      default: () => []
    },
    valueSplit: {
      type: String,
      default: () => ','
    },
    textSplit: {
      type: String,
      default: () => ','
    },
    valueField: {
      type: String,
      default: () => 'userId'
    },
    textField: {
      type: String,
      default: () => 'userCN'
    },
    card: {
      type: Boolean,
      default: true
    },
    fetchUser: Function,
    fetchW3Accounts: Function,
    getUserImageUrl: Function,
    fetchUserByUserId: Function,
    UserCache: Object,
    batch: {
      type: [Boolean, Number],
      default: 0
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
