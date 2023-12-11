export function If(props) {
  if (props['v-if']) {
    return props.children
  } else {
    return ''
  }
}

function defaultVIfAsTrue(props) {
  if (typeof props === 'object' && Object.hasOwnProperty.call(props, 'v-if')) {
    return props['v-if']
  } else {
    return true
  }
}

export function Component(props) {
  const Is = props.is || (() => '')
  return (
    <If v-if={defaultVIfAsTrue(props)}>
      <Is className={props.className} />
    </If>
  )
}

export function Slot(props) {
  const { name = 'default', slots = {}, parent_children } = props

  const EmptySlot = () => ''

  const S = slots[name] || EmptySlot

  return (
    <If v-if={defaultVIfAsTrue(props)}>
      <If v-if={name === 'default'}>{parent_children || props.children}</If>
      <If v-if={name !== 'default'}>
        <If v-if={S !== EmptySlot}>
          <S {...props} />
        </If>
        <If v-if={S === EmptySlot}>{props.children}</If>
      </If>
    </If>
  )
}

export function For(props) {
  const { item: Item, list = [] } = props

  const listItems = list.map((item, index, list) => {
    return <Item item={item} key={index} index={index} list={list} />
  })

  return <If v-if={defaultVIfAsTrue(props)}>{listItems}</If>
}

export function Transition(props) {
  // todo: improve tarnsiton comp
  return <If v-if={defaultVIfAsTrue(props)}>{props.children}</If>
}

export const compWhiteList = ['If', 'Component', 'Slot', 'For', 'Transition']
