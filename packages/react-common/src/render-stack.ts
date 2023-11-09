const renderStack = []

export const getParent = () => renderStack[renderStack.length - 1]

export const EnterStack = (props) => renderStack.push(props)

export const LeaveStack = () => renderStack.pop()