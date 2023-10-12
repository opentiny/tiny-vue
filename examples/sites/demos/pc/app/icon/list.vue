<template>
  <div>
    <div class="search">
      <div>搜索图标：</div>
      <tiny-input class="search-input" v-model="searchName" clearable autofocus size="small"></tiny-input>
    </div>
    <div class="svgs-wrapper">
      <div v-for="(nameList, groupName) in iconGroups" :key="groupName">
        <div class="group-name">
          {{ groupName }}
        </div>
        <template v-for="name in nameList">
          <div
            v-if="searchName === '' || name.toLowerCase().includes(searchName.toLowerCase())"
            :key="name"
            class="svgs-item"
            @click="click(name)"
          >
            <component :is="Svgs[name] && Svgs[name]()" class="svgs-icon"></component>
            <span class="svgs-text">{{ name }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Svgs from '@opentiny/vue-icon'
import { Modal, Input } from '@opentiny/vue'
import { iconGroups } from './iconGroups'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    const all = Object.values(iconGroups).flat()
    iconGroups.Others = Object.keys(Svgs).filter((name) => !all.includes(name) && name[0] === 'I')

    return {
      iconGroups,
      Svgs,
      searchName: ''
    }
  },
  methods: {
    click(name) {
      window.navigator.clipboard.writeText(name)
      Modal.message({
        message: `成功复制图标名称 ${name} `,
        status: 'info'
      })
    }
  }
}
</script>

<style scoped>
.svgs-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.search {
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
}

.search-input {
  width: 250px;
}

.group-name {
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  padding: 0 0 8px 20px;
  margin-bottom: 20px;
  border-bottom: solid 1px #ccc;
}

.svgs-icon {
  cursor: pointer;
  transition: all 0.4s;
  width: 2em;
  fill: #000;
  height: 2em;
}

.svgs-icon:hover {
  transform: scale(1.5, 1.5);
}

.svgs-item {
  width: 200px;
  text-align: center;
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
}

.svgs-text {
  padding-top: 8px;
  display: block;
  font-size: 14px;
  font-weight: 600;
}
</style>
