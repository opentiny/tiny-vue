<template>
  <div>
    <tiny-popconfirm :title="title" type="info" trigger="click">
      <template #reference>
        <tiny-button>info</tiny-button>
      </template>
    </tiny-popconfirm>
    <tiny-popconfirm :title="title" type="error" trigger="click">
      <template #reference>
        <tiny-button>error</tiny-button>
      </template>
    </tiny-popconfirm>
    <tiny-popconfirm :title="title" type="warning" trigger="click">
      <template #reference>
        <tiny-button>warning</tiny-button>
      </template>
    </tiny-popconfirm>
    <tiny-popconfirm :title="title" type="success" trigger="click">
      <template #reference>
        <tiny-button>success</tiny-button>
      </template>
    </tiny-popconfirm>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Popconfirm as TinyPopconfirm, Button as TinyButton } from '@opentiny/vue'

const title = ref('确定要删除该安全组规则吗?')
</script>

<style scoped>
.tiny-popconfirm + .tiny-popconfirm {
  margin-left: 8px;
}
</style>
