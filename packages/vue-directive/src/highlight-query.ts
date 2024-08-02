function walk(el: HTMLElement, filter: (node: HTMLElement) => boolean) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
  const matchNodes = [] as HTMLElement[]

  // 1、遍历节点
  while (walker.nextNode()) {
    const node = walker.currentNode as HTMLElement

    filter(node) && matchNodes.push(node)
  }
  return matchNodes
}

function editNodes(el: HTMLElement, nodes: HTMLElement[], query: string) {
  // 2、处理收集后的节点，字符串搜索性能优于正则替换
  nodes.forEach((node) => {
    const content = node.textContent as string
    const start = content.toLowerCase().indexOf(query.toLowerCase())
    const startText = content.substring(0, start)
    const endText = content.substring(start + query.length)

    // 前半段
    node.textContent = startText
    // 高亮节点
    const span = document.createElement('span')
    span.classList.add('tiny-hl-query-node')
    span.textContent = query
    // 后半段
    const end = document.createTextNode(endText)

    node.after(span, end)
  })

  // 3、如果此次有匹配值，则递归再处理一遍，防止一段文字内，出现了多次query的场景
  if (nodes.length) {
    edit(el, query)
  }
}

function restoreNodes(nodes: HTMLElement[]) {
  // node是文字节点， node.parentElement是 .tiny-hl-query-node节点，  node.parentElement.parentElement 才是高亮节点的父节点
  // 父节点可能是重复的
  const parents = new Set()
  nodes.forEach((node) => parents.add(node.parentElement?.parentElement))

  parents.forEach((node: HTMLElement) => {
    node.innerText = node.textContent
  })
}

/** 查找所有文字节点，并编辑 */
function edit(el: HTMLElement, query: string) {
  if (query) {
    const matchNodes = walk(el, (node: HTMLElement) => {
      // 忽略已高亮的节点
      if ((node.parentElement as HTMLElement).classList.contains('tiny-hl-query-node')) {
        return false
      }

      const content = node.textContent || ''
      return content.toLowerCase().includes(query.toLowerCase())
    })

    editNodes(el, matchNodes, query)
  }
}

/** 查找所有高亮的节点,并还原 */
function restore(el: HTMLElement) {
  const matchNodes = walk(el, (node: HTMLElement) => {
    return (node.parentElement as HTMLElement).classList.contains('tiny-hl-query-node')
  })

  restoreNodes(matchNodes)
}

const mounted = (el: HTMLElement, binding: { value: string }) => {
  el.classList.toggle('tiny-hl-query', true)

  const query = binding.value
  edit(el, query)
}

const beforeUpdate = (el: HTMLElement) => {
  restore(el)
}

const updated = (el: HTMLElement, binding: { value: string }) => {
  const query = binding.value
  edit(el, query)
}

/** 高亮搜索字的指令: 遍历dom内所有的文字节点，替换匹配为高亮节点
 *@example
 * <div v-highlight-query='test'>
 *   ......包含众多的dom, test .......
 * </div>
 * @example 输出为
 * <div class="tiny-hl-query">
 *  ....   <span class="tiny-hl-query-node">test</span>   ....
 * </div>
 *
 *  注意： 1、模板中，所有文字的地方需要使用同一个标签包裹起来，避免还原时误伤
 *         <div v-highlight-query='test'>
 *              这里一段话 {{ somevalue}}     <tiny-select>...</tiny-select>
 *           ^^^                        ^^^
 *          </div>
 *         这样的写法不合适，会造成文本节点与非文本节点共享一个父节点的。
 *         需要将 ^^^ 之间的内容，用标签包裹一下
 *        2、指令不能直接包含文字节点。 避免vue编译优化带来的一个问题。
 *          <div v-highlight-query='test'>
 *            {{ someValue }}
 *          </div>
 *          需要用任意标签，比如 <span> 包裹一下 someValue
 *  */
export default {
  mounted,
  beforeUpdate,
  updated,
  // vue2周期
  inserted: mounted,
  update: beforeUpdate,
  componentUpdated: updated
}
