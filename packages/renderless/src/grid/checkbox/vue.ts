import {
  checkSelectionStatus,
  clearSelection,
  handleSelectionDefChecked,
  handleSelectionHeader,
  handleSelectRow,
  handleToggleCheckRowEvent,
  initMultipleHistory,
  reserveCheckSelection,
  setAllSelection,
  setSelection,
  showSelectToolbar,
  toggleAllSelection,
  toggleRowSelection,
  toggleSelectToolbarVisible,
  triggerCheckAllEvent,
  triggerCheckRowEvent
} from './index'

export const installCheckbox = ({ api, state, props, vm }) => {
  return {
    handleSelectionDefChecked: handleSelectionDefChecked({ api, state, props }),
    setSelection: setSelection({ api, vm }),
    handleSelectRow: handleSelectRow({ api, vm }),
    handleToggleCheckRowEvent: handleToggleCheckRowEvent({ props, api, state }),
    triggerCheckRowEvent: triggerCheckRowEvent({ props, api, vm }),
    triggerCheckAllEvent: triggerCheckAllEvent({ api, vm }),
    toggleRowSelection: toggleRowSelection({ api, vm }),
    setAllSelection: setAllSelection({ api, state, props, vm }),
    checkSelectionStatus: checkSelectionStatus({ state, props }),
    clearSelection: clearSelection({ state, props, vm }),
    initMultipleHistory: initMultipleHistory({ api, vm }),
    showSelectToolbar: showSelectToolbar({ api, state, vm }),
    toggleSelectToolbarVisible: toggleSelectToolbarVisible({ vm, state }),
    handleSelectionHeader: handleSelectionHeader({ state, props }),
    reserveCheckSelection: reserveCheckSelection({ state, props, vm }),
    toggleAllSelection: toggleAllSelection({ api, state, vm })
  }
}
