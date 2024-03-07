<template>
  <div class="card-wrap">
    <tiny-card-group check-type="radio" v-model="checked" @change="change">
      <tiny-card title="这是卡片标题" label="1" :options="options">
        <p>
          这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
          这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        </p>
      </tiny-card>
      <tiny-card title="这是卡片标题" label="2" :options="options">
        <p>
          这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
          这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        </p>
      </tiny-card>
      <tiny-card title="这是卡片标题" label="3" :options="options">
        <p>
          这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
          这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        </p>
      </tiny-card>
      <tiny-card title="这是卡片标题" label="4" :options="options">
        <p>
          这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
          这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        </p>
      </tiny-card>
    </tiny-card-group>
  </div>
</template>

<script setup>
import { Card as TinyCard, CardGroup as TinyCardGroup } from '@opentiny/vue'
import { IconDel, IconWriting, IconAscending, IconShare } from '@opentiny/vue-icon'

import { ref } from 'vue'

const checked = ref('')
const options = ref([
  {
    text: '删除列表',
    icon: IconDel()
  },
  {
    text: '编辑',
    icon: IconWriting(),
    disabled: true
  },
  {
    text: '排序',
    icon: IconAscending()
  },
  {
    text: '分享',
    icon: IconShare(),
    disabled: true
  }
])
function change(val) {
  console.log(val)
}
</script>

<style scoped>
.card-wrap {
  background: #f5f5f5;
  padding: 16px;
}
</style>
