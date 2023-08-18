export function If(props) {
  if (props['v-if']) {
    return (props.children)
  }
  else {
    return ''
  }
}

export function Component(props) {
  const Is = props.is
  return <If v-if={props['v-if']}>
    <Is className={props.className} />
  </If>
}

export function Slot(props) {
  const {
    name = 'default',
    slots = {}
  } = props

  const Slot = slots[name] || (() => '')

  return (<>
    <If v-if={slots[name]}>
      <Slot {...props} />
    </If>
    <If v-if={!slots[name]}>
      {props.children}
    </If>
  </>)
}

export function For(props) {
  const {
    item: Item,
    list = []
  } = props

  const listItems = list.map((item, index, list) => {
    return (<Item item={item} key={index} />)
  })

  return (<>{listItems}</>)
}

export function Transition(props) {
  const {
    name
  } = props

  // 在 useEffect 里监听 dom 变化，拿到变化的 dom，给上面添加样式

  return <>{props.children}</>
}
