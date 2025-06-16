# TinyVue Intelligent Component Access Guide

TinyVue's intelligent components provide a complete intelligent solution, allowing your application to have AI conversation, voice interaction, and other capabilities. This guide will walk you through how to integrate TinyVue's intelligent components into your project.

## Install dependencies

First, you need to install the following core dependency packages:

```bash
npm install @opentiny/tiny-vue-mcp @opentiny/next-vue @opentiny/vue-common @opentiny/vue
```

## Access steps

### 1. Initialize MCP Configuration

Initialize MCP configuration in the application entry file (e.g., `main.js`):

```js
import { registerMcpConfig } from '@opentiny/vue-common'
import { createMcpTools, getTinyVueMcpConfig } from '@opentiny/tiny-vue-mcp'

// Register TinyVue component MCP configuration
registerMcpConfig(getTinyVueMcpConfig(), createMcpTools)
```

### 2. Create NextClient Proxy Client

Create a NextClient proxy client in `App.vue` to establish real-time communication:

```html
<script setup lang="ts">
  import { useNextClient } from '@opentiny/next-vue'

  const { sessionId } = useNextClient({
    clientInfo: {
      name: 'your-app-name', // Application name
      version: '1.0.0', // Application version
      sessionId: 'your-session-id' // Optional, will be passed in by the backend if not provided; for debugging, you can use crypto.randomUUID() to generate a fixed one
    },
    proxyOptions: {
      url: 'your-sse-url', // SSE service address
      token: 'your-token' // Authentication token
    }
  })
</script>

<template>
  <div>
    <h1>NextClient Proxy Client</h1>
    <p>Session ID: {{ sessionId }}</p>
  </div>
</template>
```

### 3. MCP Component Configuration

When using

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
        description: 'Business description'
      }
    }"
  >
    <!-- Table content -->
  </tiny-grid>
</template>
```

## Notes

1. Ensure that the server supports SSE (Server-Sent Events) connections
2. It is recommended to use HTTPS in production environments
3. CORS needs to be correctly configured to support cross-origin requests

## Common issues

1. Session connection failed

   - Check if the SSE service address is correct
   - Confirm that the network connection is normal
   - Verify that the authentication information is valid

2. AI conversation response is not available
   - Check if the session is established normally
   - Confirm that the prompt item configuration is correct
   - Check if there are errors in the network request
