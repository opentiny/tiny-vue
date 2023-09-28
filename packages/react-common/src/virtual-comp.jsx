export function If(props) {
  if (props['v-if']) {
    return (props.children)
  }
  else {
    return ''
  }
}

export function Component(props) {
  const Is = props.is || (() => '')
  return <If v-if={props['v-if']}>
    <Is className={props.className} />
  </If>
}

export function Slot(props) {
  const {
    name = 'default',
    slots = {},
    parent_children
  } = props

  const EmptySlot = () => '';

  const S = slots[name] || EmptySlot

  return (<>
    <If v-if={name === 'default'}>
      {parent_children || props.children}
    </If>
    <If v-if={name !== 'default'}>
      <If v-if={S !== EmptySlot}>
        <S {...props} />
      </If>
      <If v-if={S === EmptySlot}>
        {props.children}
      </If>
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

export const compWhiteList = [
  'If',
  'Component',
  'Slot',
  'For',
  'Transition'
]
