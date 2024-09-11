export default {
  renderless: (props, hooks, { emit }, api) => {
    const state = api.state

    return {
      treeWrapperMaxHeight() {
        state.treeWrapperMaxHeight = 'auto'
      }
    }
  }
}
