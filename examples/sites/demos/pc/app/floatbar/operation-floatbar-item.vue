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

<script lang="jsx">
import { Floatbar, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFloatbar: Floatbar,
    TinyButton: Button
  },
  data() {
    return {
      lists: ['custom-A', 'custom-B', 'custom-C', 'custom-D']
    }
  },
  methods: {
    addlist() {
      this.lists.push('custom-Add')
    },
    removelist() {
      this.lists.splice(this.lists.length - 1, 1)
    },
    removeAll() {
      this.lists.splice(0, this.lists.length)
    }
  }
}
</script>

<style scoped>
.custom {
  position: static;
  width: 104px;
}
</style>
