// 演练场用的 @opentiny/vue-search-box 和 @opentiny/vue-search-box-saas 统一 shim
// 作用：从 CDN 拉取 JS，移除其中的 CSS import，并手动注入 CSS，避免浏览器将 CSS 当作模块加载导致 MIME 错误

// 通过检查 URL 参数来判断是哪个包
// 由于两个包在 import map 中都映射到同一个文件，我们通过 URL 参数 theme=saas 来判断
let isSaas = false
let packageName = '@opentiny/vue-search-box'
let cssId = 'tiny-search-box-css'

// 通过 URL 参数判断是否为 saas 模式
if (typeof location !== 'undefined') {
  try {
    const searchParams = new URLSearchParams(window.parent.location.search)
    const theme = searchParams.get('theme')
    if (theme === 'saas') {
      isSaas = true
      packageName = '@opentiny/vue-search-box-saas'
      cssId = 'tiny-search-box-saas-css'
    }
  } catch (e) {
    // 忽略错误，使用默认值
  }
}

// 从 localStorage 获取 CDN 和版本，若未配置则使用默认
const cdnHost =
  typeof localStorage !== 'undefined'
    ? localStorage.getItem('setting-cdn') || 'https://registry.npmmirror.com'
    : 'https://registry.npmmirror.com'


const version = '3.28.4' 
const versionDelimiter = cdnHost.includes('npmmirror') ? '/' : '@'
const fileDelimiter = cdnHost.includes('npmmirror') ? 'files/' : ''

// 构造 CDN 资源地址
const cdnUrl = `${cdnHost}/${packageName}${versionDelimiter}${version}/${fileDelimiter}index.js`
const cssUrl = `${cdnHost}/${packageName}${versionDelimiter}${version}/${fileDelimiter}index.css`

// 以 <link> 方式手动注入 CSS
function injectCSS() {
  const doc = typeof document !== 'undefined' ? document : null
  if (!doc) return

  // 检查是否已经注入过
  const existingLink = doc.querySelector(`link#${cssId}`)
  if (existingLink) {
    return
  }

  const link = doc.createElement('link')
  link.rel = 'stylesheet'
  link.href = cssUrl
  link.id = cssId

  // 确保 CSS 加载完成
  if (isSaas) {
    link.onload = () => {
      console.log('Search-box CSS loaded successfully')
    }
  }
  link.onerror = () => {
    console.error(`Failed to load ${packageName} CSS:`, cssUrl)
  }

  if (doc.head) {
    doc.head.appendChild(link)
  } else {
    // 如果 head 不存在，等待它创建
    const observer = new MutationObserver((mutations, obs) => {
      if (doc.head) {
        doc.head.appendChild(link)
        obs.disconnect()
      }
    })
    observer.observe(doc.documentElement, { childList: true })
  }
}

// 立即注入 CSS（在 iframe 环境下运行）
// 确保 CSS 被正确导入，即使 document 还未准备好也会在后续注入
if (typeof document !== 'undefined') {
  // 如果 document 已经准备好，立即注入
  if (document.readyState === 'loading') {
    // 如果还在加载中，等待 DOMContentLoaded
    document.addEventListener('DOMContentLoaded', injectCSS)
  } else {
    // 如果已经加载完成，立即注入
    injectCSS()
  }
} else {
  // 如果 document 还未准备好，等待 DOMContentLoaded 后再注入
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('DOMContentLoaded', injectCSS)
  }
}

// 拉取并处理 JS 模块
async function loadModule() {
  try {
    // Fetch the JS file
    const response = await fetch(cdnUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`)
    }

    let jsCode = await response.text()

    // 去掉 JS 中的 CSS import，避免 MIME 错误
    jsCode = jsCode.replace(/import\s+['"]\.\/index\.css['"];?\s*/g, '')
    jsCode = jsCode.replace(/import\s+['"]\.\/index\.css['"]\s*/g, '')

    const blob = new Blob([jsCode], { type: 'application/javascript' })
    const moduleUrl = URL.createObjectURL(blob)

    try {
      const module = await import(moduleUrl)
      URL.revokeObjectURL(moduleUrl)
      return module
    } catch (importError) {
      URL.revokeObjectURL(moduleUrl)
      throw importError
    }
  } catch (error) {
    console.error(`Failed to load ${packageName}:`, error)
    throw error
  }
}

// 加载模块
const TinySearchBoxModule = await loadModule()

// 模块加载完成后，再次确保 CSS 已注入（防止之前注入失败）
if (typeof document !== 'undefined') {
  // 延迟一点时间确保 DOM 已准备好
  setTimeout(() => {
    injectCSS()
  }, 100)
}

// 提取默认组件并重新导出其他组件
const {
  default: TinySearchBox,
  TinySearchBoxFirstLevelPanel,
  TinySearchBoxSecondLevelPanel,
  enUS,
  setGlobalApp,
  t,
  zhCN
} = TinySearchBoxModule

export { TinySearchBoxFirstLevelPanel, TinySearchBoxSecondLevelPanel, enUS, setGlobalApp, t, zhCN }

export { TinySearchBox as default }
