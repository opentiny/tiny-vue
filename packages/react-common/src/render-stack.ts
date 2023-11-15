const renderStack = []

export const getParent = () => renderStack[renderStack.length - 1] || ({})

export const getRoot = () => renderStack[0] || ({})

export const EnterStack = (props) => {
  renderStack.push(props)
  return ''
}

export const LeaveStack = () => {
  renderStack.pop()
  return ''
}