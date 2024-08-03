import { hooks, $prefix, defineComponent } from '@opentiny/vue-common'

/**
 * 检测 el 的碰撞盒子是否在视口 viewport 的碰撞盒内
 */
function isElementInViewport(el: HTMLElement, viewport: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const viewportRect = viewport.getBoundingClientRect()

  return (
    rect.top >= viewportRect.top &&
    rect.left >= viewportRect.left &&
    rect.bottom <= viewportRect.bottom &&
    rect.right <= viewportRect.right
  )
}

export default defineComponent({
  name: $prefix + 'SlashMenu',
  props: {
    items: Array,
    command: Function
  },
  render() {
    const { selectedIndex, items, handleSelectItem } = this as any

    return (
      <div class="tiny-slash-menu__view" ref={(el) => (this.slashMenuRef = el)}>
        {items?.length ? (
          items.map((item, index) => (
            <div
              class={['tiny-slash-menu__item', { 'is-active': selectedIndex === index }]}
              key={index}
              id={`slash-menu-${index}`}
              onClick={() => handleSelectItem(index)}>
              <span>{item.title}</span>
              {item.icon && <item.icon class="tiny-slash-menu__icon"></item.icon>}
            </div>
          ))
        ) : (
          <div>
            <span>暂无选项</span>
          </div>
        )}
      </div>
    )
  },
  methods: {},
  setup(props) {
    const selectedIndex = hooks.ref(0)
    const menuLength = hooks.ref(0)
    const slashMenuRef = hooks.ref()

    hooks.watch(
      () => props.items,
      () => {
        selectedIndex.value = 0
        menuLength.value = props.items.length
      },
      {
        immediate: true
      }
    )

    hooks.watch(
      () => selectedIndex.value,
      () => {
        const selectedItem = document.getElementById(`slash-menu-${selectedIndex.value}`)
        const menuContainer = slashMenuRef.value as HTMLDivElement
        if (selectedItem && menuContainer) {
          const containerTop = menuContainer.offsetTop
          const itemTop = selectedItem.offsetTop
          const scrollHeight = itemTop - containerTop

          if (!isElementInViewport(selectedItem, menuContainer)) {
            // 获取容器的 border 和 padding 滚动时减去
            const containerStyleMap = window.getComputedStyle(menuContainer)
            const { borderTopWidth, paddingTop } = containerStyleMap
            const miscHeight = Math.trunc(parseFloat(borderTopWidth) + parseFloat(paddingTop))

            menuContainer.scrollTo({
              top: scrollHeight - miscHeight,
              behavior: 'smooth'
            })
          }
        }
      }
    )

    function onKeyDown({ event }: { event: KeyboardEvent }) {
      if (event.key === 'ArrowUp') {
        handleKeyUp()
        return true
      }

      if (event.key === 'ArrowDown') {
        handleKeyDown()
        return true
      }

      if (event.key === 'Enter') {
        handleKeyEnter()
        return true
      }

      return false
    }

    function handleKeyUp() {
      selectedIndex.value = (selectedIndex.value + menuLength.value - 1) % menuLength.value
    }

    function handleKeyDown() {
      selectedIndex.value = (selectedIndex.value + 1) % menuLength.value
    }

    function handleKeyEnter() {
      handleSelectItem(selectedIndex.value)
    }

    function handleSelectItem(index: number) {
      const item = props.items[index]

      if (item) {
        props?.command(item)
      }
    }

    return {
      selectedIndex,
      slashMenuRef,
      handleSelectItem,
      onKeyDown
    }
  }
})
