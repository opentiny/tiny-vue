# TinyVue 智能化组件接入指南

TinyVue 的智能化组件提供了一套完整的智能化解决方案，让您的应用具备 AI 对话、语音交互等能力。本文将指导您如何在项目中接入 TinyVue 的智能化组件。

## 安装依赖

首先需要安装以下核心依赖包：

```bash
npm install @opentiny/tiny-vue-mcp @opentiny/next-vue @opentiny/vue-common @opentiny/vue
```

## 接入步骤

### 1. 初始化 MCP 配置

在应用入口文件（如 `main.js`）中初始化 MCP 配置：

```js
import { registerMcpConfig } from '@opentiny/vue-common'
import { createMcpTools, getTinyVueMcpConfig } from '@opentiny/tiny-vue-mcp'

// 注册 TinyVue 组件 MCP 配置
registerMcpConfig(getTinyVueMcpConfig(), createMcpTools)
```

### 2. 创建 NextClient 代理客户端

在 `App.vue` 中创建 NextClient 代理客户端，用于建立实时通信：

```html
<script setup lang="ts">
  import { useNextClient } from '@opentiny/next-vue'

  const { sessionId } = useNextClient({
    clientInfo: {
      name: 'your-app-name', // 应用名称
      version: '1.0.0', // 应用版本
      sessionId: 'your-session-id' // 可选，不传由后台自动生成。调试时可使用 crypto.randomUUID() 生成固定值
    },
    proxyOptions: {
      url: 'your-sse-url', // SSE 服务地址，目前agent代理服务器代码未开源，如想进一步了解可以在github中提issue单
      token: 'your-token' // 认证 token
    }
  })
</script>

<template>
  <div>
    <h1>NextClient 代理客户端</h1>
    <p>会话 ID: {{ sessionId }}</p>
  </div>
</template>
```

### 3. MCP 组件配置

在子页面中使用 Grid 等支持 MCP 的组件时，添加 MCP 配置：

```html
<script setup lang="ts">
  import { useNextServer } from '@opentiny/next-vue'

  const { server } = useNextServer({
    serverInfo: { name: 'your-server-name', version: '1.0.0' }
  })
</script>

<template>
  <tiny-grid
    :tiny_mcp_config="{
      server,
      business: {
        id: 'your-business-id',
        description: '业务描述'
      }
    }"
  >
    <!-- 表格内容 -->
  </tiny-grid>
</template>
```

## 注意事项

1. 确保服务端支持 SSE（Server-Sent Events）连接
2. 建议在生产环境使用 HTTPS 协议
3. 需要正确配置 CORS 以支持跨域请求

## 常见问题

1. 会话连接失败

   - 检查 SSE 服务地址是否正确
   - 确认网络连接是否正常
   - 验证认证信息是否有效

2. AI 对话无响应
   - 检查会话是否正常建立
   - 确认提示项配置是否正确
   - 查看网络请求是否有错误
