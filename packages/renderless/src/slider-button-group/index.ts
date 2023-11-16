export const getChangePosition = (state) => (value) => {
  state.eachBlockIndex.find((e, index) => {
    if (e.index === value) {
      state.currentIndex = index

      return
    }
  })

  state.sliderSpace = state.eachBlock[state.currentIndex]
  state.sliderWidth = state.sliderWidthData[state.currentIndex]
  state.sliderHeight = state.sliderHeightData[state.currentIndex]

  state.sliderCount += 1
}
