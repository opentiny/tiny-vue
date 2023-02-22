<template>
  <div class="panel page-container">
    <div class="top-nav">
      <tiny-select class="theme-picker" v-model="currentTheme" placeholder="请选择主题">
        <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
      </tiny-select>
      <div @click="switchMode" class="switch-mode">切换到 {{ isPc ? 'Mobile' : 'PC' }} 示例</div>
    </div>
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
    </div>
  </div>
</template>

<script>
import { TreeMenu, Select, Option } from '@opentiny/vue'
import { CURRENT_THEME_KEY, THEME_MAP } from '../const'
import MenuDataMob from '@/nav.config.comp.mobile.json'
import MenuData from '@/nav.config.comp.json'
import '@/assets/markdown.css'
import '@/assets/tiny-mobile-demo.css'

export default {
  components: {
    TinyTreeMenu: TreeMenu,
    TinySelect: Select,
    TinyOption: Option
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
  },
  data() {
    return {
      currentTheme: localStorage.getItem(CURRENT_THEME_KEY) || 'tiny-default-theme',
      options: [
        {
          value: 'tiny-default-theme',
          label: '默认'
        },
        {
          value: 'tiny-impression-theme',
          label: '印象'
        },
        {
          value: 'tiny-infinity-theme',
          label: '无限'
        },
        {
          value: 'tiny-deep-theme',
          label: '深邃夜空'
        },
        {
          value: 'tiny-galaxy-theme',
          label: '追光'
        }
      ]
    }
  },
  watch: {
    currentTheme(newVal) {
      this.theme.changeTheme(THEME_MAP[newVal])
      localStorage.setItem(CURRENT_THEME_KEY, this.theme.currentTheme.id)
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

.top-nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  position: fixed;
  top: 0;
  right: 0;
  padding-right: 20px;
  width: 100%;
  background-color: var(--ti-base-color-bg-1);
  box-shadow: 0 4px 8px 0 rgba(37, 43, 58, 0.1);
  z-index: 2001;
}

.theme-picker {
  width: 100px;
  margin-right: 12px;
}
</style>

<style>
.right section .demo-header > h2 {
  font-weight: 400;
  color: var(--ti-base-color-common-7);
}

.right section > h3 {
  margin: 40px 0 20px 0;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--ti-base-color-border);
  font-weight: 400;
  color: var(--ti-base-color-common-7);
}

.switch-mode {
  color: var(--ti-common-color-line-active);
  cursor: pointer;
  margin-left: 20px;
}
</style>
