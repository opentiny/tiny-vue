import path from 'node:path'
import tailwindCss from 'tailwindcss'
import fg from 'fast-glob'
import fs from 'fs-extra'

// 删除构建后一些无用的静态资源
export const delStaticPlugin = () => {
  let config
  return {
    name: 'inline-plugin-del-static',
    apply: 'build',
    configResolved(_config) {
      config = _config
    },
    async closeBundle() {
      const targetPath = path.join(config.build.outDir, '@demos')
      const files = await fg(['**/*.spec.js', '**/*.spec.ts'], {
        dot: true,
        cwd: targetPath
      })
      files.forEach((filename) => {
        const filePath = path.join(targetPath, filename)
        fs.unlink(filePath)
      })
    }
  }
}

// 修改@docsearch依赖，使其支持内外网官网
export const viteDocsearchPlugin = (env) => {
  return {
    name: 'vite-docsearch-plugin',
    enforce: 'pre',
    transform(code, id) {
      if (id.includes('@docsearch')) {
        const newCode = code.replace(
          'Promise((function(t){var n=new XMLHttpRequest;',
          'Promise((function(t){t=window.handleGlobalSearchData(t);var n=new XMLHttpRequest;'
        )
        return {
          code: newCode,
          map: null
        }
      }
    }
  }
}

// 修复 @opentiny/vue-icon-saas/src 目录导入错误
// 根据 package.json 的 exports 配置，"./*": "./src/*" 会将 @opentiny/vue-icon-saas/src 解析为目录
// 这个插件拦截该导入并重定向到 index.ts
export const fixIconSaasSrcPlugin = () => {
  // 计算 workspace root：从 examples/sites 目录向上两级到项目根目录
  // 使用 import.meta.url 获取当前文件路径（ES 模块方式）
  const currentFileUrl = import.meta.url
  const currentDir = path.dirname(new URL(currentFileUrl).pathname)
  // 处理 Windows 路径（去掉开头的 /）
  const normalizedDir = process.platform === 'win32' ? currentDir.replace(/^\//, '') : currentDir
  const workspaceRoot = path.resolve(normalizedDir, '../..')
  const iconSaasSrcPath = path.resolve(workspaceRoot, 'packages/vue-icon-saas/src')
  const iconSaasIndexPath = path.resolve(workspaceRoot, 'packages/vue-icon-saas/index.ts')

  return {
    name: 'fix-icon-saas-src-plugin',
    enforce: 'pre',
    resolveId(id) {
      // 拦截对 @opentiny/vue-icon-saas/src 的导入（模块路径）
      if (id === '@opentiny/vue-icon-saas/src') {
        return iconSaasIndexPath
      }
      // 拦截文件系统路径中的 vue-icon-saas/src 目录访问
      const normalizedId = id.replace(/\\/g, '/')
      const normalizedSrcPath = iconSaasSrcPath.replace(/\\/g, '/')
      // 精确匹配目录路径（不包含文件扩展名）
      if (normalizedId === normalizedSrcPath) {
        return iconSaasIndexPath
      }
      return null
    },
    load(id) {
      // 如果请求的是 vue-icon-saas/src 目录，返回 index.ts 的内容
      const normalizedId = id.replace(/\\/g, '/')
      const normalizedSrcPath = iconSaasSrcPath.replace(/\\/g, '/')
      if (normalizedId === normalizedSrcPath) {
        if (fs.existsSync(iconSaasIndexPath)) {
          return fs.readFileSync(iconSaasIndexPath, 'utf-8')
        }
      }
      return null
    }
  }
}

// 针对不同主题对配置进行响应修改
const themeModifyMap = {
  saas(viteConfig) {
    viteConfig.css = {
      postcss: {
        plugins: [tailwindCss]
      }
    }

    viteConfig.tinyCustom.copyTarget.push({
      src: `./demos/mobile-first/*`,
      dest: '@demos/mobile-first'
    })

    const menuPath = path.resolve('./demos/saas')
    viteConfig.resolve.alias['@menu'] = menuPath
    // 这里逻辑是兼容saas官网工程的alias写法
    if (!viteConfig.resolve.alias['@opentiny/vue-theme']) {
      viteConfig.resolve.alias['@opentiny/vue-theme'] = '@opentiny/vue-theme-saas'
      viteConfig.resolve.alias['@opentiny/vue-icon'] = '@opentiny/vue-icon-saas'
    }
    return viteConfig
  }
}

const modeModifyMap = {
  mobile(viteConfig) {
    viteConfig.build.rollupOptions.input.mobile = path.resolve(__dirname, './mobile.html')
  },
  plus(viteConfig) {
    const demosPath = '../plusdocs'
    const apisPath = '../plusdocs/apis'
    viteConfig.resolve.alias['@menu'] = path.resolve(demosPath)
    viteConfig.resolve.alias['@demos'] = path.resolve(demosPath)
    viteConfig.tinyCustom.copyTarget = [
      {
        src: `${demosPath}/*`,
        dest: '@demos'
      },
      {
        src: `${apisPath}/*`,
        dest: '@demos/apis'
      }
    ]
  }
}

// 针对不同环境针对修改配置
export const modifyViteConfig = (viteConfig, env) => {
  const { VITE_TINY_THEME, VITE_APP_MODE } = env
  const doModeModify = modeModifyMap[VITE_APP_MODE]
  if (doModeModify) {
    doModeModify(viteConfig)
  }
  const doThemeModify = themeModifyMap[VITE_TINY_THEME]
  return doThemeModify ? doThemeModify(viteConfig) : viteConfig
}
