import { categorys } from './categorys.ts'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

import 'lu2/theme/edge/css/common/ui.css'
import 'lu2/theme/edge/js/common/all.js'
import 'highlight.js/styles/default.css'

const list = document.getElementById('list')!
const selCategory = document.getElementById('sel-category')! as HTMLSelectElement
const selType = document.getElementById('sel-type')! as HTMLSelectElement
const selColor = document.getElementById('sel-color')! as HTMLInputElement
const selCopy = document.getElementById('sel-copy')! as HTMLSelectElement
const lightTip = document.getElementById('lightTip')!
const btnHelp = document.getElementById('btnHelp')! as HTMLButtonElement
const dlgHelp = document.getElementById('dlgHelp')! as HTMLDialogElement
const helpCode = document.getElementById('helpCode')! as HTMLDialogElement

const styleSheet = new CSSStyleSheet()
document.adoptedStyleSheets.push(styleSheet)

// 渲染所有图标
function render() {
  const cat = selCategory.value as 'base' | 'svc' | 'ext'
  const type = selType.value
  const color = selColor.value

  const icons = categorys[cat]

  let html = ''

  Object.keys(icons)
    .sort((groupName1, groupName2) => {
      const num1 = parseInt(groupName1.split('-')[0])
      const num2 = parseInt(groupName2.split('-')[0])
      return num1 > num2 ? 1 : -1
    }) // 按键排序
    .forEach((groupName) => {
      let groupIcons = icons[groupName] as any[]
      groupIcons.sort((g1, g2) => (g1.order > g2.order ? 1 : -1))

      html += `<h3 class='icons-group'>${groupName}<sup class='icon-counts' title='图标数'>${groupIcons.length}</sup></h3>`
      html += groupIcons
        .map(
          (item) => `
        <div class="icon-item">
          <i class="${cat} ${type}-${item.name}" data-name="${item.name}"></i>
          <div class='icon-title' title="${item.nameCn}">${item.nameCn}</div>
          <div class='icon-name' title="${item.name}">${item.name}</div>
        </div>
        `
        )
        .join('')
    })
  list.innerHTML = html

  styleSheet.replaceSync(`i {color: ${color}!important;`)
}
selCategory.addEventListener('change', render)
selType.addEventListener('change', render)
selColor.addEventListener('input', render)

render()

// 点击复制
list.addEventListener('click', function (ev: MouseEvent) {
  const target = ev.target as HTMLElement
  const name = target.dataset.name
  if (name) {
    const cls = 'ci-' + name
    const tag = `<i class="${cls}></i>`
    const copyText = selCopy.value === 'all' ? tag : cls

    navigator.clipboard.writeText(copyText)
    lightTip.textContent = copyText + ' 复制成功'
    lightTip.show()
  }
})

// 弹出帮助
btnHelp.addEventListener('click', function () {
  dlgHelp.open = true
})

// 高亮代码
hljs.registerLanguage('javascript', javascript)
const highlightedCode = hljs.highlight(
  `import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetIcons({
          prefix: "",
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle"
          },
          collections: {
            ci: () => import("@opentiny/cloud-icons/json/icons.json").then((i) => i.default)
          }
        })
      ],
    })
  ],
});`,
  { language: 'javascript' }
).value

helpCode.innerHTML = highlightedCode
