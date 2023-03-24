<template>
  <div class="tiny-mobile-tabbar-demo">
    <div class="content">
      <h1>{{ pagename }}</h1>
      <h2>Heading</h2>
      <h3>{{ pagetitle }}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      </p>
    </div>
    <tiny-tabbar v-model="activeName" fixed>
      <tiny-tabbar-item v-for="item in itemList" :key="item.title" @click="tab(item.pagename, item.pagetitle)">
        {{ item.title }}
      </tiny-tabbar-item>
    </tiny-tabbar>
  </div>
</template>

<script lang="jsx">
import { Tabbar, TabbarItem } from '@opentiny/vue'

export default {
  components: {
    TinyTabbar: Tabbar,
    TinyTabbarItem: TabbarItem
  },
  data() {
    return {
      activeName: 3,
      pagename: 'Page 1',
      pagetitle: '1.1 Title',
      itemList: [
        { title: '上一页', pagename: 'Page 1', pagetitle: '1.1 Title' },
        { title: '下一页', pagename: 'Page 2', pagetitle: '2.1 Title' }
      ]
    }
  },
  methods: {
    tab(name, title) {
      this.pagename = name
      this.pagetitle = title
    }
  }
}
</script>

<style scoped>
.content {
  padding: 20px 15px;
  height: calc(100% - 48px);
  box-sizing: border-box;
}
.content h1 {
  margin-bottom: 0.9em;
  font-weight: 400;
  font-size: 21px;
}
.content h2 {
  margin-bottom: 0.34em;
  font-weight: 400;
  font-size: 17px;
}
.content h3 {
  margin-bottom: 0.34em;
  font-weight: 400;
  font-size: 16px;
  border: 0;
}
.content p {
  margin: 0 0 0.8em;
}
</style>
