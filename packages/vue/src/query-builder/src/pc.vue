<template>
  <div class="tiny-query-builder" :style="style">
    <query-builder
      key="queryIC"
      v-bind="config"
      independent-combinators
      :query="query"
      :validator="validator"
      :on-query-change="onQueryChange"
    ></query-builder>
  </div>
</template>

<script>
import { $prefix, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/query-builder/vue'
import QueryBuilder from './components/QueryBuilder.vue'
import { defaultValidator } from './utils'
import '@opentiny/vue-theme/query-builder/index.less'

import { getFormatQueryString } from './preFormat'

export default {
  inheritAttrs: false,
  name: $prefix + 'QueryBuilder',
  components: {
    QueryBuilder
  },
  provide() {
    return {
      queryBuilderRoot: this
    }
  },
  props: {
    config: Object,
    query: Object,
    onQueryChange: Function,
    maxHeight: String
  },
  data() {
    return {
      getFormatQuery: getFormatQueryString,
      validator: null
    }
  },
  computed: {
    showClearBtn() {
      const rules = this.query?.rules || []

      return this.getRuleTotal(rules) <= 1
    },
    style() {
      return !this.maxHeight
        ? {}
        : {
            maxHeight: isNaN(Number(this.maxHeight)) ? this.maxHeight : this.maxHeight + 'px',
            overflow: 'auto'
          }
    }
  },
  watch: {
    'config.validateQuery': function (val, oldVal) {
      if (val !== oldVal) {
        this.validator = val && (this.config.validator || defaultValidator)
      }
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  },
  methods: {
    getRuleTotal(rules = []) {
      let len = rules.length
      if (len === 1 && rules[0].rules) {
        return this.getRuleTotal(rules[0].rules)
      }
      return len
    }
  }
}
</script>
