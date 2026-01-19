<template>
  <div class="icon-demo">
    <tiny-form label-width="100px" style="padding-bottom: 80px">
      <tiny-form-item label="搜索图标">
        <tiny-input class="search-input" v-model="searchName" clearable autofocus size="small"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="图标形状">
        <tiny-radio-group v-model="shape">
          <tiny-radio label="line">线性图标</tiny-radio>
          <tiny-radio label="filled">面性图标</tiny-radio>
        </tiny-radio-group>
      </tiny-form-item>
      <tiny-form-item label="主色">
        <input type="color" v-model="firstColor" />
      </tiny-form-item>
      <tiny-form-item label="副色">
        <input type="color" v-model="secondColor" />
      </tiny-form-item>
      <tiny-form-item label="是否托底">
        <tiny-switch v-model="isUnderlay"></tiny-switch>
      </tiny-form-item>
      <tiny-form-item label="托底设置" v-if="isUnderlay">
        <span>托底颜色：</span>
        <input type="color" v-model="underlay.background" /> &nbsp;&nbsp;
        <span>托底圆角：</span>
        <tiny-input v-model="underlay.borderRadius" clearable autofocus size="small" style="width: 120px"></tiny-input
        >&nbsp;&nbsp;
        <span>中心缩放：</span>
        <tiny-input v-model="underlay.scale" clearable autofocus size="small" style="width: 120px"></tiny-input>
      </tiny-form-item>
    </tiny-form>
    <h3>第一批次图标</h3>
    <div class="svgs-wrapper">
      <div
        v-for="name in advanceIcons"
        :key="name"
        :class="{
          'svg-visible': searchName === '' || name.toLowerCase().includes(searchName.toLowerCase()),
          'svgs-item': true
        }"
        @click="click(name)"
      >
        <component
          :is="Svgs[name] && Svgs[name]()"
          class="svgs-icon"
          :first-color="firstColor"
          :second-color="secondColor"
          :shape="shape"
          :underlay="isUnderlay ? underlay : null"
        ></component>
        <span class="svgs-text" :title="name">{{ name }}</span>
      </div>
    </div>
    <hr />
    <h3>第二批次图标</h3>
    <div class="svgs-wrapper">
      <div
        v-for="name in batch3Icons"
        :key="name"
        :class="{
          'svg-visible': searchName === '' || name.toLowerCase().includes(searchName.toLowerCase()),
          'svgs-item': true
        }"
        @click="click(name)"
      >
        <component
          :is="Svgs[name] && Svgs[name]()"
          class="svgs-icon"
          :first-color="firstColor"
          :second-color="secondColor"
          :shape="shape"
          :underlay="isUnderlay ? underlay : null"
        ></component>
        <span class="svgs-text" :title="name">{{ name }}</span>
      </div>
    </div>
    <hr />
    <h3>第三批次图标</h3>
    <div class="svgs-wrapper">
      <div
        v-for="name in batch4Icons"
        :key="name"
        :class="{
          'svg-visible': searchName === '' || name.toLowerCase().includes(searchName.toLowerCase()),
          'svgs-item': true
        }"
        @click="click(name)"
      >
        <component
          :is="Svgs[name] && Svgs[name]()"
          class="svgs-icon"
          :first-color="firstColor"
          :second-color="secondColor"
          :shape="shape"
          :underlay="isUnderlay ? underlay : null"
        ></component>
        <span class="svgs-text" :title="name">{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import Svgs from '@opentiny/vue-icon'
import { TinyForm, TinyFormItem, TinyModal, TinyInput, TinyRadioGroup, TinyRadio, TinySwitch } from '@opentiny/vue'
import { advanceIcons, batch3Icons, batch4Icons } from './advance-icons.js'
import { getCurrentInstance, ref, watch } from 'vue'

const searchName = ref('')
const shape = ref('line')
const firstColor = ref('#0067D1')
const secondColor = ref('#36C18D')
const isUnderlay = ref(false)
const underlay = ref({
  background: '#eef3fe',
  borderRadius: '4px',
  scale: 0.8
})

const instance = getCurrentInstance()
watch(
  underlay,
  () => {
    instance.update()
  },
  { deep: true }
)

function click(name) {
  window.navigator.clipboard.writeText(name)
  TinyModal.message({
    message: `成功复制图标名称 ${name} `,
    status: 'info'
  })
}
</script>

<style scoped>
.svgs-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.search-input {
  width: 250px;
}

.group-name {
  display: none;
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
  font-size: 40px;
  fill: var(--tv-color-icon-control);
  color: var(--tv-color-icon-control);
}

.svgs-icon:hover {
  transform: scale(1.5, 1.5);
}

.svgs-item {
  display: none;
  width: 20%;
  text-align: center;
  padding: 24px;
}

.svgs-item:hover {
  background-color: var(--tv-color-bg-hover);
}

.svgs-text {
  margin-top: 12px;
  display: block;
  font-size: 12px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
}

.svgs-box:has(> .svg-visible) .group-name {
  display: block;
}

.svgs-item.svg-visible {
  display: inline-block;
}
</style>
