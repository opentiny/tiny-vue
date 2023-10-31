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

import debounce from '../common/deps/debounce'
import {
  created,
  handleDragEnd,
  handleDrop,
  handleDragOver,
  handleDragStart,
  handleContentClick,
  handleChildNodeExpand,
  handleCheckChange,
  handleExpandIconClick,
  handleExpandClick,
  handleContextMenu,
  handleClick,
  handleSelectChange,
  getNodeKey,
  watchIndeterminate,
  watchChecked,
  watchExpanded,
  closeMenu,
  openEdit,
  addNode,
  saveEdit,
  deleteNode,
  onSiblingToggleExpand,
  watchExpandedChange,
  computedExpandIcon,
  computedIndent
} from './index'

export const api = [
  'state',
  'getNodeKey',
  'handleClick',
  'handleContentClick',
  'closeMenu',
  'handleDragEnd',
  'handleDrop',
  'handleDragOver',
  'handleDragStart',
  'handleChildNodeExpand',
  'handleSelectChange',
  'handleContextMenu',
  'handleExpandIconClick',
  'openEdit',
  'addNode',
  'saveEdit',
  'deleteNode',
  'handleCheckChange'
]

const initState = ({ reactive, treeRoot, props, emitter, $parentEmitter, vm, api, computed }) => {
  const state = reactive({
    tree: treeRoot,
    expanded: false,
    oldChecked: null,
    indeterminate: null,
    oldIndeterminate: null,
    expandIcon: props.expandIcon,
    childNodeRendered: false,
    showMenu: false,
    menuposition: { position: 'absolute', top: 0, left: 0 },
    shrinkIcon: props.shrinkIcon,
    expandIconColor: props.expandIconColor,
    shrinkIconColor: props.shrinkIconColor,
    emitter: emitter(),
    parentEmitter: $parentEmitter,
    isSaaSTheme: (props.theme || vm.theme) === 'saas',
    computedExpandIcon: computed(() => api.computedExpandIcon(treeRoot, state)),
    computedIndent: computed(() => api.computedIndent(props, state))
  })

  return state
}

const initApi = ({ api, state, dispatch, broadcast, vm, props, parent, treeRoot, nextTick, emit, designConfig }) => {
  Object.assign(api, {
    state,
    dispatch,
    broadcast,
    watchExpanded: debounce(20, watchExpanded({ state })),
    created: created({ props, state }),
    getNodeKey: getNodeKey(state),
    closeMenu: closeMenu(state),
    handleSelectChange: handleSelectChange({ props, state }),
    handleContextMenu: handleContextMenu({ vm, treeRoot, props, state, nextTick }),
    handleExpandClick: handleExpandClick({ emit, vm, props, state }),
    handleCheckChange: handleCheckChange({ nextTick, props, state }),
    handleDragStart: handleDragStart({ state, vm }),
    handleDragOver: handleDragOver({ state, vm }),
    handleDrop: handleDrop(),
    handleDragEnd: handleDragEnd({ state, vm }),
    handleContentClick: handleContentClick({ nextTick, props, state, emit }),
    onSiblingToggleExpand: onSiblingToggleExpand({ state, props }),
    watchExpandedChange: watchExpandedChange({ state, props }),
    handleClick: handleClick({ api, vm, props, state }),
    watchIndeterminate: watchIndeterminate({ api, props }),
    watchChecked: watchChecked({ api, props }),
    openEdit: openEdit({ state, vm }),
    addNode: addNode({ state, props, api }),
    saveEdit: saveEdit({ state }),
    deleteNode: deleteNode({ state }),
    handleChildNodeExpand: handleChildNodeExpand(state),
    handleExpandIconClick: handleExpandIconClick({ api, state }),
    computedExpandIcon: computedExpandIcon({ designConfig }),
    computedIndent: computedIndent()
  })
}

const initWatcher = ({ watch, state, api, props }) => {
  watch(() => state.expanded, api.watchExpandedChange)

  watch(() => props.node.indeterminate, api.watchIndeterminate, { deep: true })

  watch(() => props.node.checked, api.watchChecked, { deep: true })

  watch(() => props.node.expanded, api.watchExpanded, { deep: true })
}

export const renderless = (
  props,
  { reactive, watch, inject, provide, computed },
  { parent: parentVm, vm, nextTick, emit, broadcast, dispatch, emitter, designConfig },
  { isVue2 }
) => {
  const api = {}
  const parent = inject('parentTree') || parentVm
  const treeRoot = inject('TreeRoot')
  const $parentEmitter = inject('parentEmitter')
  const state = initState({ reactive, treeRoot, props, emitter, $parentEmitter, vm, api, computed })

  state.parentEmitter.on('sibling-node-toggle-expand', (event) => api.onSiblingToggleExpand(event))

  provide('parentEmitter', state.emitter)

  initApi({ api, state, dispatch, broadcast, vm, props, parent, treeRoot, nextTick, emit, designConfig })
  initWatcher({ watch, state, api, props })

  api.created((childrenKey) => {
    watch(
      () => props.node.data[childrenKey],
      () => {
        props.node.updateChildren()
      }
    )

    if (!isVue2) {
      props.node.updateMethod = (node, field) => {
        field === 'expanded' && api.watchExpanded(node[field])
      }
    }
  })

  state.parentEmitter.on('closeMenu', () => {
    api.closeMenu()
    state.emitter.emit('closeMenu')
  })

  return api
}
