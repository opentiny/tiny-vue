import { WebMcpServer, WebMcpClient, createMessageChannelPairTransport, z } from '@opentiny/next-sdk'
import { genMenus } from '../menus'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export const AGENT_ROOT = 'https://agent.opentiny.design/api/v1/webmcp-trial/'

// 调用 useTinyRemoter() 完毕后，下面三个变量变会有值。
export const webMcpServer: { value: null | WebMcpServer } = { value: null }
export const webMcpClient: { value: null | WebMcpClient } = { value: null }
export const webMcpSessionId: { value: null | string } = ref('')

export async function useTinyRemoter() {
  const [serverTransport, clientTransport] = createMessageChannelPairTransport()

  // 定义 MCP Server
  const server = new WebMcpServer(
    { name: 'base-config', version: '1.0.0' },
    {
      capabilities: {
        prompts: { listChanged: true },
        resources: { subscribe: true, listChanged: true },
        tools: { listChanged: true },
        completions: {},
        logging: {}
      }
    }
  )
  webMcpServer.value = server
  createGlobalMcpTool(server)

  serverTransport.onerror = (error) => {
    console.error(`ServerTransport error:`, error)
  }
  await server.connect(serverTransport)

  // 定义 MCP Client
  const client = new WebMcpClient(
    { name: 'mcp-web-client', version: '1.0.0' },
    { capabilities: { roots: { listChanged: true }, sampling: {}, elicitation: {} } }
  )
  webMcpClient.value = client

  await client.connect(clientTransport)

  // 不能传入固定的sessionId, 让它每次自动生成一个。
  const { sessionId } = await client.connect({
    url: AGENT_ROOT + 'mcp',
    agent: true,
    onError: (error: Error) => {
      console.error('Connect proxy error:', error)
    }
  })
  webMcpSessionId.value = sessionId

  window.addEventListener('pagehide', client.onPagehide)
}

// 组件页面的右上导航的数据回调函数
export const cmpAnchorDataCallback = { value: null }

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
      description: '可以帮用户跳转到文档页面，组件示例的总页面或组件API文档页面，或组件库的概览页面',
      inputSchema: {
        key: z.string().describe('跳转页面路径'),
        type: z
          .enum(['components', 'docs', 'overview', 'features'])
          .describe('跳转页面类型，比如：组件的页面，文档的页面，组件的概览页面'),
        isOpenApi: z.boolean().describe('跳转到组件页面时，是否打开API文档')
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

  server.registerTool(
    'get-component-demos',
    {
      title: '查询全部示例的信息',
      description:
        '查询当前组件的全部示例信息，demos信息。返回值是一个数组，其中每一项的 demoId 属性是示例的键，通过键可以跳转到该示例。desc属性是示例的详细描述。',
      inputSchema: {}
    },
    async () => {
      // 通知组件页面返回右侧导航的数据
      if (cmpAnchorDataCallback.value != null) {
        const links = cmpAnchorDataCallback.value()

        return {
          content: [{ type: 'text', text: JSON.stringify(links) }]
        }
      } else {
        return {
          content: [{ type: 'text', text: '找不到示例' }]
        }
      }
    }
  )

  server.registerTool(
    'jump-to-demo',
    {
      title: '跳转到组件的示例demo',
      description: '根据参数demoId, 跳转到指定的示例demo。',
      inputSchema: {
        demoId: z.string().describe('示例的id,唯一标识。')
      }
    },
    async ({ demoId }) => {
      // 通知组件页面返回右侧导航的数据
      location.hash = '#' + demoId

      return {
        content: [{ type: 'text', text: '跳转示例成功' }]
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
