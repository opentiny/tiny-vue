<template>
  <div class="demo-box">
    <tiny-button @click="displayOnly = !displayOnly">display-only/{{ displayOnly }}</tiny-button>
    <br /><br />
    <p>边框为表单范围</p>
    <tiny-form class="custom-form" :inline="inline" label-position="top" :display-only="displayOnly">
      <tiny-form-item label="label 垂直布局">
        <div>
          <tiny-base-select v-model="formData.select1" multiple hover-expand>
            <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </tiny-option>
          </tiny-base-select>
          <br />
          <br />
          <tiny-base-select v-model="formData.select1" multiple hover-expand>
            <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </tiny-option>
          </tiny-base-select>
        </div>
      </tiny-form-item>
      <p>&nbsp;</p>
    </tiny-form>
    <br />
    <br />
    <tiny-form class="custom-form" :inline="inline" :display-only="displayOnly">
      <tiny-form-item label="form 超出隐藏">
        <tiny-base-select v-model="formData.select1" multiple hover-expand>
          <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
        </tiny-base-select>
      </tiny-form-item>
    </tiny-form>
    <br />
    <tiny-form class="custom-form visible-form" :inline="inline" :display-only="displayOnly">
      <tiny-form-item label="自定义-超出显示">
        <tiny-base-select v-model="formData.select1" multiple hover-expand>
          <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
        </tiny-base-select>
      </tiny-form-item>
    </tiny-form>
    <br />
    <tiny-form class="custom-form" :inline="inline" :display-only="displayOnly">
      <tiny-form-item label="默认尺寸">
        <tiny-base-select v-model="formData.select1" multiple hover-expand>
          <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
        </tiny-base-select>
      </tiny-form-item>
      <p>&nbsp;</p>
    </tiny-form>
    <br />
    <br />

    <tiny-form class="custom-form" size="mini" :inline="inline" :display-only="displayOnly">
      <tiny-form-item label="mini" size="mini">
        <tiny-base-select v-model="formData.select1" size="mini" multiple hover-expand>
          <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
        </tiny-base-select>
      </tiny-form-item>
      <p>&nbsp;</p>
    </tiny-form>
    <br />
    <br />

    <tiny-form class="custom-form" size="small" :inline="inline" :display-only="displayOnly">
      <tiny-form-item label="small" size="small">
        <tiny-base-select v-model="formData.select1" size="small" multiple hover-expand>
          <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
        </tiny-base-select>
      </tiny-form-item>
      <p>&nbsp;</p>
    </tiny-form>
    <br />
    <br />

    <tiny-form class="custom-form" size="medium" :inline="inline" :display-only="displayOnly">
      <tiny-form-item label="medium" size="medium">
        <tiny-base-select v-model="formData.select1" size="medium" multiple hover-expand>
          <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
        </tiny-base-select>
      </tiny-form-item>
      <p>&nbsp;</p>
    </tiny-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { TinyBaseSelect, TinyOption, TinyForm, TinyFormItem, TinyButton } from '@opentiny/vue'

const options = ref([
  {
    value: '选项 1',
    label: '北京'
  },
  {
    value: '选项 2',
    label: '上海'
  },
  {
    value: '选项 3',
    label: '天津'
  },
  {
    value: '选项 4',
    label: '重庆'
  },
  {
    value: '选项 5',
    label: '深圳'
  },
  {
    value: '选项 6',
    label: '杭州'
  },
  {
    value: '选项 7',
    label: '宇宙无敌老面小馒头'
  }
])

const displayOnly = ref(true)
const top = ref(false)
const inline = ref(false)
const size = ref('')
const formData = reactive({
  select1: ['选项 1', '选项 2', '选项 3', '选项 4', '选项 5', '选项 6', '选项 7']
})
</script>

<style lang="less" scoped>
.demo-box {
  width: 350px;

  .custom-form {
    border: 1px solid #fdf4f4;
    padding: 10px;
  }

  .visible-form {
    overflow: visible;
  }
}
</style>
