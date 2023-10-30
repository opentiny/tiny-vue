/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { getNodeKey as getTreeNodeKey } from '../common/deps/tree-model/util'

export const watchIndeterminate =
  ({ api, props }) =>
  (value) =>
    api.handleSelectChange(props.node.checked, value)

export const watchChecked =
  ({ api, props }) =>
  (value) =>
    api.handleSelectChange(value, props.node.indeterminate)

export const watchExpanded =
  ({ state }) =>
  (value) => {
    state.expanded = value

    if (value) {
      state.childNodeRendered = true
    }
  }

export const getNodeKey = (state) => (node) => getTreeNodeKey(state.tree.nodeKey, node.data)

const getVisibleNodes = (treeNode, tree) => {
  if (treeNode.visible) {
    const childNodes = treeNode.childNodes

    Object.assign(
      tree,
      {
        checked: treeNode.checked,
        expanded: treeNode.expanded,
        level: treeNode.level,
        isLeaf: treeNode.isLeaf
      },
      treeNode.data,
      { children: [] }
    )

    childNodes.forEach((node) => {
      if (node.visible) {
        const child = {}

        getVisibleNodes(node, child)

        tree.children.push(child)
      }
    })

    if (!tree.children.length) {
      delete tree.children
    }
  }
}

export const handleSelectChange =
  ({ props, state }) =>
  (checked, indeterminate) => {
    state.tree.state.store.setCurrentNode(props.node)

    if (state.oldChecked !== checked && state.oldIndeterminate !== indeterminate) {
      const treeNodes = {}

      getVisibleNodes(props.node, treeNodes)

      state.tree.$emit('check-change', treeNodes, checked, indeterminate)
    }

    state.oldChecked = checked
    state.indeterminate = indeterminate
  }

export const handleClick =
  ({ api, vm, props, state }) =>
  (e) => {
    const store = state.tree.state.store

    state.tree.clearCurrentStore(props.node)
    if (!state.tree.onlyCheckChildren) {
      store.setCurrentNode(props.node)
      !props.node.disabled &&
        state.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode)
    } else if (props.node.isLeaf && !props.node.disabled) {
      store.setCurrentNode(props.node)
      state.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode)
    }

    state.tree.currentNode = vm

    if (state.tree.checkOnClickNode && !props.node.disabled) {
      e.target.checked = !props.node.checked

      api.handleCheckChange(null, e)
    }

    const isCheck = props.showCheckbox ? vm.$refs.checkbox && !vm.$refs.checkbox.$el.contains(e.target) : true

    if (state.tree.onlyCheckChildren) {
      if (props.node.isLeaf && !props.node.disabled) {
        state.tree.$emit('node-click', props.node.data, props.node, vm)
        return
      }
    } else {
      if (!state.tree.collapsible || !state.tree.expandOnClickNode) {
        !props.node.disabled && state.tree.$emit('node-click', props.node.data, props.node, vm)

        return
      }
    }

    if (!state.tree.onlyCheckChildren) {
      if (state.tree.expandOnClickNode && isCheck) {
        api.handleExpandClick(isCheck)
      }
    } else {
      api.handleExpandClick(false)
    }
  }

export const closeMenu = (state) => () => {
  state.showMenu = false
}

export const handleContextMenu =
  ({ treeRoot, vm, props, state, nextTick }) =>
  (event) => {
    const listeners = treeRoot.vm.$listeners

    if (treeRoot.showContextmenu || listeners['node-contextmenu']) {
      event.stopPropagation()
      event.preventDefault()
    }

    state.tree.$parent.$emit('node-contextmenu', event, props.node.data, props.node, vm)

    if (!treeRoot.showContextmenu) {
      return
    }

    state.showMenu = true
    state.tree.$parent.menuInstance = vm

    nextTick(() => {
      const menuWidth = vm.$refs.menuContext.offsetWidth
      const treeWidth = state.tree.$parent.$el.offsetWidth

      if (event.clientY > -10) {
        state.menuposition.top = `${vm.$refs.node.offsetTop + vm.$refs.node.childNodes[0].offsetHeight / 2}px`
      }

      if (event.clientX > -10) {
        if (menuWidth > treeWidth) {
          state.menuposition.left = 0
        } else {
          state.menuposition.left =
            event.offsetX + menuWidth > treeWidth ? `${treeWidth - menuWidth}px` : `${event.offsetX}px`
        }
      }
    })
  }

export const handleExpandIconClick =
  ({ api, state }) =>
  (event, node) => {
    if (!node.isLeaf) {
      state.tree.iconTriggerClickNode ? api.handleExpandClick(true) : api.handleExpandClick(false)
      event.stopPropagation()
    }
  }

export const handleExpandClick =
  ({ emit, vm, props, state }) =>
  (nodeClickFlag) => {
    if (nodeClickFlag) {
      state.tree.$parent.$emit('node-click', props.node.data, props.node, vm)
    }

    if (props.node.isLeaf) {
      return
    }

    if (state.expanded) {
      state.tree.$parent.$emit('node-collapse', props.node.data, props.node, vm)
      props.node.collapse()
    } else {
      props.node.expand()
      emit('node-expand', props.node.data, props.node, vm)
    }
  }

export const handleCheckChange =
  ({ nextTick, props, state }) =>
  (value, event = {}) => {
    if (event.type === 'click' || event.type === 'mousedown') {
      props.node.setChecked(event.target.checked, !state.tree.checkStrictly)
    }

    if (props.checkEasily && state.tree.checkStrictly) {
      !state.tree.checkOnClickNode && props.node.setChecked(event.target.checked, true, false, false, true)
    } else {
      !state.tree.checkOnClickNode && props.node.setChecked(event.target.checked, !state.tree.checkStrictly)
    }

    nextTick(() => {
      const store = state.tree.state.store

      state.tree.$emit('check', props.node.data, {
        checkedNodes: store.getCheckedNodes(),
        checkedKeys: store.getCheckedKeys(),
        halfCheckedNodes: store.getHalfCheckedNodes(),
        halfCheckedKeys: store.getHalfCheckedKeys()
      })
    })
  }

export const handleContentClick =
  ({ nextTick, props, state, emit }) =>
  (currentNode, currentRadio) => {
    if (props.showRadio) {
      if (!currentNode.disabled && currentRadio.value !== currentNode.id) {
        emit('radio-change', currentNode.id)

        nextTick(() => {
          const param = { ...currentNode.data }
          state.tree.$emit('check-change', param)
        })
      }
    }
  }

export const handleChildNodeExpand = (state) => (nodeData, node, instance) => {
  state.tree.$emit('node-expand', nodeData, node, instance)
}

export const handleDragStart =
  ({ state, vm }) =>
  (event) => {
    if (!state.tree.draggable) {
      return
    }
    state.tree.state.emitter.emit('tree-node-drag-start', event, vm)
  }

export const handleDragOver =
  ({ state, vm }) =>
  (event) => {
    if (!state.tree.draggable) {
      return
    }
    state.tree.state.emitter.emit('tree-node-drag-over', event, vm)
    event.preventDefault()
  }

export const handleDrop = () => (event) => event.preventDefault()

export const handleDragEnd =
  ({ state, vm }) =>
  (event) => {
    if (!state.tree.draggable) {
      return
    }

    state.tree.state.emitter.emit('tree-node-drag-end', event, vm)
  }

export const created =
  ({ props, state }) =>
  (fn) => {
    const tree = state.tree
    const property = tree.props || {}
    const childrenKey = property.children || 'children'

    fn(childrenKey)

    if (props.node.expanded) {
      state.expanded = true
      state.childNodeRendered = true
    }
  }

export const onSiblingToggleExpand =
  ({ state, props }) =>
  ({ isExpand, sibling }) => {
    if (state.tree.accordion && isExpand && props.node && sibling && props.node.id !== sibling.id) {
      props.node.collapse()
    }
  }

export const watchExpandedChange =
  ({ state, props }) =>
  () => {
    state.parentEmitter.emit('sibling-node-toggle-expand', {
      isExpand: props.node.expanded,
      sibling: props.node
    })
  }

export const openEdit =
  ({ state, vm }) =>
  (node) => {
    state.tree.state.emitter.emit('tree-node-edit', node)

    setTimeout(() => {
      const inputRef = vm.$refs.editInput || vm.$el.querySelector('input')
      inputRef && inputRef.focus()
    }, 300)
  }

export const closeEdit =
  ({ state }) =>
  () => {
    state.tree.state.emitter.emit('tree-node-edit', null)
  }

export const saveEdit =
  ({ state }) =>
  (event) => {
    event.stopPropagation()

    state.tree.state.emitter.emit('tree-node-save')
  }

export const deleteNode =
  ({ state }) =>
  (event, node) => {
    state.tree.state.emitter.emit('tree-node-delete', event, node)
  }

export const addNode =
  ({ state, props, api }) =>
  (event, node) => {
    props.node.expand()
    api.openEdit()
    state.tree.state.emitter.emit('tree-node-add', event, node)
  }

export const computedExpandIcon =
  ({ designConfig }) =>
  ({ showLine }, { tree, expanded, isSaaSTheme }) => {
    if (tree.icon) {
      return tree.icon
    }

    if (showLine) {
      const expandIcon = designConfig?.icons.expanded || 'icon-minus-square'
      const collapseIcon = designConfig?.icons.collapse || 'icon-plus-square'
      return expanded ? expandIcon : collapseIcon
    }

    return isSaaSTheme ? 'icon-arrow-bottom' : 'icon-chevron-right'
  }

export const computedIndent =
  () =>
  ({ node, showLine }, { tree }) => {
    return (node.level > 1 ? 1 : 0) * (tree.indent + (showLine ? 8 : 0)) + tree.baseIndent + 'px'
  }
