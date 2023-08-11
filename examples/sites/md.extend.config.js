import md_prism from 'markdown-it-prism'

// 高亮
import md_emoji from 'markdown-it-emoji'

// 表情
import md_sub from 'markdown-it-sub'

// 下标    ~  ~
import md_sup from 'markdown-it-sup'

// 上标    ^  ^
import md_mark from 'markdown-it-mark'

// 高亮文字    ==   ==
import md_container from 'markdown-it-container' // 提示块
import md_anchor from 'markdown-it-anchor'

export const MdExt = [md_emoji, md_sub, md_sup, md_mark]

// 自定义container
function createContainer(klass) {
  return [
    md_container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        const info = token.info.trim().slice(klass.length).trim() || ''
        if (token.nesting === 1) {
          return `<div class="${klass} custom-block"><p class="custom-block-title">${info}</p>\n`
        } else {
          return `</div>\n`
        }
      }
    }
  ]
}

export function mdInstall(md) {
  md.use(md_prism, { plugins: ['line-highlight'] })
    .use(...createContainer('tip'))
    .use(...createContainer('info'))
    .use(...createContainer('warning'))
    .use(...createContainer('danger'))
    .use(md_anchor, {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '',
      slugify: (s) => encodeURIComponent(s)
    })
}
