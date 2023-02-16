<template>
  <div class="panel page-container">
    <div class="left">
      <tiny-tree-menu
        _mode="pc"
        :data="MenuData.component"
        node-key="path"
        accordion
        :show-filter="false"
        @node-click="nodeClick"
        :default-expanded-keys="[defaultexpandedkeys]"
        :current-node-key="defaultexpandedkeys"
      >
        <template #default="{ data }">
          <span>{{ data.name }}</span>
        </template>
      </tiny-tree-menu>
    </div>
    <div class="right">
      <router-view class="content"></router-view>
      <div @click="switchMode" class="switch-mode">切换到 {{ isPc ? 'Mobile' : 'PC' }} 示例</div>
    </div>
  </div>
</template>

<script>
import { TreeMenu } from '@opentiny/vue'
import MenuDataMob from '@/nav.config.comp.mobile.json'
import MenuData from '@/nav.config.comp.json'
import '@/assets/markdown.css'
import '@/assets/tiny-mobile-demo.css'

export default {
  components: {
    TinyTreeMenu: TreeMenu
  },
  methods: {
    nodeClick(node) {
      node.path && this.$route.path !== node.path && this.$router.push(node.path)
    },
    switchMode() {
      localStorage.setItem('vue-example-mode', this.isPc ? 'mobile' : 'pc')
      location.hash = '#/'
      location.reload()
    }
  },
  computed: {
    defaultexpandedkeys() {
      return this.$route.path
    },
    isPc() {
      return this.$root.tiny_mode.value !== 'mobile'
    },
    MenuData() {
      return this.isPc ? MenuData : MenuDataMob
    }
  }
}
</script>

<style scoped>
.panel {
  min-width: 800px;
  width: 100%;
}

.left {
  width: 250px;
  float: left;
  text-align: left;
  font-size: 14px;
  white-space: nowrap;
  overflow-x: hidden;
  background: #fff;
}

.left > div {
  width: 250px;
  position: fixed;
  font-size: 12px;
  overflow-y: scroll;
  height: 100vh;
}

.right {
  float: right;
  text-align: left;
  margin: 20px auto;
  width: calc(100% - 260px);
}
.content {
  width: 900px;
  margin: auto;
}
</style>

<style>
.right section .demo-header > h2 {
  font-weight: 400;
  color: #1f2f3d;
}

.right section > h3 {
  margin: 40px 0 20px 0;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
  font-weight: 400;
  color: #1f2f3d;
}

.switch-mode {
  position: fixed;
  top: 10px;
  right: 20px;
  color: var(--ti-common-color-line-active);
  cursor: pointer;
}
</style>
