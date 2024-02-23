<template>
  <tiny-user
    v-model="user"
    :collapse-tags="true"
    :collapse-show-overflow-tooltip="true"
    multiple
    cache-key="test-user"
    :cache-fields="['email']"
    value-field="userAccount"
  ></tiny-user>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { User as TinyUser } from '@opentiny/vue'

const user = ref('test1,test2,test3')
</script>
