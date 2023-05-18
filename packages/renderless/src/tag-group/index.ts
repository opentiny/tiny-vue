export const getHiddenTags = ({ props, vm, state }) => () => {
  if (!props.data.length) return

  const tagGroup = vm.$refs.tagGroup || {}
  const tags = tagGroup.children
  const moreDom = vm.$refs.more || {}
  const height = tags[0] && tags[0].getBoundingClientRect().height + 'px'

  tagGroup.style && (tagGroup.style.height = height)
  moreDom.style && (moreDom.style.height = height)
  state.hiddenTags = []

  Array.from(tags).forEach((el, index) => {
    if (el.offsetTop > 0) {
      state.hiddenTags.push({
        name: el.innerText,
        type: props.data[index] && props.data[index].type
      })
    }
  })

  state.showMore = !!state.hiddenTags.length
}
