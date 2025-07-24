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
  if (env.VITE_BUILD_TARGET !== 'inner') {
    return null
  }
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
