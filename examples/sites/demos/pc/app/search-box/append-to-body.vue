<template>
  <ClientOnly>
    <div class="demo-append-body">
      <tiny-search-box v-model="tags" :items="items" editable panel-max-height="160px" :append-to-body="false" />
    </div>
  </ClientOnly>
</template>

<script>
import TinySearchBox from '@opentiny/vue-search-box-saas'
import { dataSource } from './data-source'

export default {
  components: {
    TinySearchBox
  },
  data() {
    return {
      items: dataSource,
      tags: []
    }
  }
}
</script>

<style scoped>
.demo-append-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.demo-box {
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.demo-title {
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--vp-c-text-1);
}

.with-overflow {
  max-width: 480px;
  overflow: hidden;
}
</style>
