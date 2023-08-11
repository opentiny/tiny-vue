<template>
  <tiny-espace :data="op"></tiny-espace>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Espace as TinyEspace } from '@opentiny/vue'

const op = ref([
  {
    type: 'im',
    value: 'a12345678',
    icon: 'icon-message-circle'
  },
  {
    type: 'im',
    value: 'b12345678',
    icon: 'icon-message-circle'
  },
  {
    type: 'im',
    value: 'c12345678',
    icon: 'icon-message-circle'
  },
  {
    type: 'sip',
    value: 'd12345678',
    icon: 'icon-telephone-circle'
  },
  {
    type: 'mailto',
    value: 'test1@test.com',
    icon: 'icon-email-circle'
  }
])
</script>
