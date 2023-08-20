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

export function mdInstall(md) {
  md.use(md_prism, { plugins: ['line-highlight'] }).use(md_anchor, {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '',
    slugify: (s) => encodeURIComponent(s)
  })
}
