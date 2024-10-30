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

/**
 * 定义斜杠菜单 UI 视图
 */
export default defineComponent({
  name: $prefix + 'SlashMenuDemo',
  props: {
    /**
     * 传入的斜杠菜单项
     * icon: Component: icon 组件
     * title: 菜单名称
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * 具体的菜单动作
     */
    command: Function
  },
  methods: {},
  setup(props, { expose }) {
    const { items } = props
    // 当前菜单光标选择序列
    const selectedIndex = hooks.ref(0)
    const menuLength = hooks.ref(0)
    const slashMenuRef = hooks.ref()

    hooks.watch(
      () => props.items,
      () => {
        // 实时更新斜杠菜单 ui 初始化时重置选择光标为 0
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
        // 监听选择光标变化 根据菜单容器高度移动视图
        const selectedItem = document.getElementById(`slash-menu-${selectedIndex.value}`)
        const menuContainer = slashMenuRef.value as HTMLDivElement
        if (selectedItem && menuContainer) {
          // 菜单容器顶部高度
          const containerTop = menuContainer.offsetTop
          // 当前选项顶部高度
          const itemTop = selectedItem.offsetTop
          // 已滚动高度
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

    // 监听键盘事件 包括方向键与回车
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

    // 选择菜单时的具体命令
    function handleSelectItem(index: number) {
      const item = props.items[index]

      if (item) {
        props.command?.(item)
      }
    }

    // 暴露键盘 onKeyDown 方法
    expose({
      onKeyDown
    })

    return () => (
      // 此处修改了斜杠菜单的背景色 与默认视图有所区别
      <div class="tiny-slash-menu__view" ref={slashMenuRef} style={{ backgroundColor: '#F7CC4F' }}>
        {items?.length ? (
          items.map((item, index) => (
            <div
              class={['tiny-slash-menu__item', { 'is-active': selectedIndex.value === index }]}
              key={index}
              id={`slash-menu-${index}`}
              onClick={() => handleSelectItem(index)}>
              {item.icon && <item.icon class="tiny-slash-menu__icon" style={{ margin: 'unset' }}></item.icon>}
              <span style={{ marginLeft: 'auto' }}>{item.title}</span>
            </div>
          ))
        ) : (
          <div>
            <span>暂无选项</span>
          </div>
        )}
      </div>
    )
  }
})
