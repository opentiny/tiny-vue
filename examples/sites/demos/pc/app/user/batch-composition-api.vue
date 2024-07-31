<template>
  <tiny-user v-model="user1" :batch="true" :cache="false"></tiny-user>
  <br />
  <tiny-user v-model="user2" :batch="true" :cache="false"></tiny-user>
  <br />
  <tiny-user v-model="user3" :batch="true" :cache="false"></tiny-user>
  <br />
  <tiny-user v-model="user4" :batch="true" :cache="false"></tiny-user>
  <br />
  <tiny-user v-model="user5" :batch="true" :cache="false"></tiny-user>
  <br />
  <tiny-user v-model="user6" :batch="true" :cache="false"></tiny-user>
  <br />
  <tiny-user v-model="user7" :batch="true" :cache="false"></tiny-user>
  <br />
  <tiny-user v-model="user8" :batch="true" :cache="false"></tiny-user>
  <br />
  <tiny-user v-model="user9" :batch="true" :cache="false"></tiny-user>
  <br />
</template>

<script setup>
import { ref } from 'vue'
import { User as TinyUser } from '@opentiny/vue'

const user1 = ref('702973890055088')
const user2 = ref('421000103624002')
const user3 = ref('421000103624003')
const user4 = ref('421000103624004')
const user5 = ref('421000103624005')
const user6 = ref('421000103624006')
const user7 = ref('421000103624007')
const user8 = ref('421000103624008')
const user9 = ref('421000103624009')
</script>
