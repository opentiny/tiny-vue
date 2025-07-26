import { genMenus } from '../menus'
import { z } from 'zod'
import { useRouter } from 'vue-router'

export const createGlobalMcpTool = (server) => {
  const router = useRouter()
  server.registerResource(
    'site-menus',
    'site-menus://app',
    {
      title: 'TinyVue官网的菜单数据',
      description: 'TinyVue官网的菜单数据，其中"key"为路由路径，"name"为菜单名称，"children"为子菜单',
      mimeType: 'text/plain'
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          text: JSON.stringify(genMenus())
        }
      ]
    })
  )
  // 帮我查看button组件的API
  server.registerTool(
    'swtich-router',
    {
      title: 'router',
      description: '可以帮用户跳转页面，比如：跳转到组件文档页面和API文档页面',
      inputSchema: {
        key: z.string().describe('跳转页面路径'),
        type: z.enum(['components', 'docs', 'overview', 'features']).describe('跳转页面类型'),
        isOpenApi: z.boolean().describe('是否打开API文档')
      }
    },
    async ({ key, type, isOpenApi }) => {
      const { params, fullPath } = router.currentRoute.value
      const { theme } = params
      const themeIndex = fullPath.indexOf(theme)
      const linkUrl =
        fullPath.slice(0, themeIndex) + `${theme}/${type}/${key === 'overview' ? '' : key}${isOpenApi ? '#api' : ''}`
      router.push(linkUrl)
      return {
        content: [
          {
            type: 'text',
            text: `跳转页面成功: ${key}`
          }
        ]
      }
    }
  )

  // 长任务示例
  server.registerTool(
    'long-task',
    {
      title: 'long-task',
      description: '可以帮用户订机票'
    },
    async () => {
      // 执行一个长任务
      await new Promise((resolve) => setTimeout(resolve, 10000))
      return {
        content: [
          {
            type: 'text',
            text: '执行一个长任务，执行完成'
          }
        ]
      }
    }
  )
}
