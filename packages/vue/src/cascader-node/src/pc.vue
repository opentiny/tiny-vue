<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/cascader-node/vue'
import { $prefix, setup, h, defineComponent } from '@opentiny/vue-common'
import Checkbox from '@opentiny/vue-checkbox'
import Radio from '@opentiny/vue-radio'
import { isEqual } from '@opentiny/vue-renderless/common/object'
import { iconLoading, iconDeltaRight, iconYes } from '@opentiny/vue-icon'

export default defineComponent({
  name: $prefix + 'CascaderNode',
  components: {
    TinyCheckbox: Checkbox,
    TinyRadio: Radio,
    IconYes: iconYes(),
    IconLoading: iconLoading(),
    IconDeltaRight: iconDeltaRight()
  },
  inheritAttrs: false,
  emits: ['expand', 'update:modelValue', 'expand-change', 'active-item-change', 'change'],
  inject: ['panel'],
  props: {
    node: {
      required: true
    },
    nodeId: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  },
  render() {
    const renderPrefix = (h) => {
      const { isLeaf, isChecked, config } = this.state
      const { checkStrictly, multiple } = config

      if (multiple) {
        return renderCheckbox(h)
      } else if (checkStrictly) {
        return renderRadio(h)
      } else if (isLeaf && isChecked) {
        return renderCheckIcon(h)
      }

      return null
    }

    const renderPostfix = (h) => {
      const { node, state } = this

      if (node.loading) {
        return renderLoadingIcon(h)
      } else if (!state.isLeaf) {
        return renderExpandIcon(h)
      }

      return null
    }

    const stopPropagation = (e) => e.stopPropagation()

    const renderCheckbox = () => {
      const { state, node } = this

      return (
        <tiny-checkbox
          modelValue={node.checked}
          indeterminate={node.indeterminate}
          disabled={state.isDisabled}
          onChange={this.handleMultiCheckChange}
          nativeOnClick={stopPropagation}></tiny-checkbox>
      )
    }

    const renderRadio = () => {
      let { checkedValue, value, isDisabled } = this.state

      if (isEqual(value, checkedValue)) {
        value = checkedValue
      }

      return (
        <tiny-radio
          v-model={checkedValue}
          disabled={isDisabled}
          label={value}
          nativeOnClick={stopPropagation}
          onChange={this.handleCheckChange}>
          <span></span>
        </tiny-radio>
      )
    }

    const renderCheckIcon = () => <icon-yes class="tiny-cascader-node__prefix"></icon-yes>

    const renderLoadingIcon = () => <icon-loading class="tiny-cascader-node__postfix"></icon-loading>

    const renderExpandIcon = () => <icon-delta-right class="tiny-cascader-node__postfix"></icon-delta-right>

    const renderContent = () => {
      const { panel, node } = this
      const render = panel.state.renderLabelFn
      const vnode = render ? render({ node, data: node.data }) : null

      return <span class="tiny-cascader-node__label">{vnode || node.label}</span>
    }

    const { state } = this
    const { checkStrictly, expandTrigger, multiple } = state.config
    const disabled = !checkStrictly && state.isDisabled
    const events = {}

    events.on = {}

    if (expandTrigger === 'click') {
      events.on.click = this.handleExpand
    } else {
      const handler = (e) => {
        this.handleExpand()
        this.$emit('expand', e)
      }

      events.on.mouseenter = handler
      events.on.focus = handler
    }

    if (state.isLeaf && !(state.isDisabled || checkStrictly || multiple)) {
      events.on.click = this.handleCheckChange
    }

    return h(
      'li',
      {
        attrs: {
          role: 'menuitem',
          id: this.nodeId,
          tabindex: disabled ? null : -1,
          'aria-expanded': state.inActivePath
        },
        class: {
          'tiny-cascader-node': true,
          'is-selectable': checkStrictly,
          'in-active-path': state.inActivePath,
          'in-checked-path': state.inCheckedPath,
          'is-active': state.isChecked,
          'is-disabled': disabled
        },
        ...events
      },
      [renderPrefix(h), renderContent(h), renderPostfix(h)]
    )
  }
})
</script>
