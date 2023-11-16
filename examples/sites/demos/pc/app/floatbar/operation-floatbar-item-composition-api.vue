<template>
  <div>
    <tiny-button @click="addlist">增加一项</tiny-button>
    <tiny-button @click="removelist">删除一项</tiny-button>
    <tiny-button @click="removeAll">删除所有项</tiny-button>
    <br />
    <br />
    <tiny-floatbar class="custom">
      <ul>
        <li v-for="(item, index) in lists" :key="index">
          <a>{{ item }}</a>
        </li>
      </ul>
    </tiny-floatbar>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Floatbar as TinyFloatbar, Button as TinyButton } from '@opentiny/vue'

const lists = ref(['custom-A', 'custom-B', 'custom-C', 'custom-D'])

function addlist() {
  lists.value.push('custom-Add')
}

function removelist() {
  lists.value.splice(lists.value.length - 1, 1)
}

function removeAll() {
  lists.value.splice(0, lists.value.length)
}
</script>

<style scoped>
.custom {
  position: static;
  width: 200px;
}
</style>
