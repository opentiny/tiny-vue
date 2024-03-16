import { useSetup, vc, useVm, $props } from '@opentiny/react-common'
import { renderless, api } from '@opentiny/vue-renderless/tall-storage/vue'
import '@opentiny/vue-theme/tall-storage/index.less'

export default function TallStorage(props) {
  const { isMemoryStorage, localstorageData = [] } = props
  const defaultProps = {
    ...$props,
    ...props,
    isMemoryStorage,
    localstorageData
  }
  const { ref, parent, current: vm } = useVm()

  const { selectItem, state, mousedown, keydown } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent
  })
  const handleKeydown = (event) => {
    if (event.key === 'Enter') {
      keydown()
    }
  }
  return (
    <div className="tiny-tall-storage" onMouseDown={mousedown} ref={ref}>
      <div className="tiny-storage-list-style">
        <ul className="tiny-storage-list" onKeyDown={handleKeydown}>
          {localstorageData.map((item) => (
            <li
              key={item}
              className={vc(['tiny-storage-item', state.hoverValue === item ? 'item-hover' : ''])}
              onClick={selectItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
