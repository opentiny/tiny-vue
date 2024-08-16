<template>
  <div class="card-wrap">
    <!-- 单选（normal）demo -->
    <tiny-card-group v-model="radioValue" check-type="radio">
      <tiny-card
        v-for="item in dataArr"
        :key="item.title"
        :label="item.title"
        check-mode="normal"
        custom-class="my-card"
      >
        check-mode="normal" 的示例
      </tiny-card>
    </tiny-card-group>

    <!-- 单选（simple）demo -->
    <tiny-card-group v-model="radioValue" check-type="radio">
      <tiny-card
        v-for="item in dataArr"
        :key="item.title"
        :label="item.title"
        check-mode="simple"
        custom-class="my-card"
      >
        <div class="content">
          <img :src="item.imageSrc" alt="" />
          <div>
            <p>simple</p>
            <p>check-mode="simple" 的示例</p>
          </div>
        </div>
      </tiny-card>
    </tiny-card-group>

    <!-- 多选（badge）demo -->
    <tiny-card-group v-model="checkboxValue" check-type="checkbox">
      <tiny-card
        v-for="item in dataArr"
        :key="item.title"
        :label="item.title"
        check-mode="badge"
        custom-class="my-card"
      >
        <div class="content">
          <img :src="item.imageSrc" alt="" />
          <div>
            <p>badge</p>
            <p>check-mode="badge" 的示例</p>
          </div>
        </div>
      </tiny-card>
    </tiny-card-group>
  </div>
</template>

<script setup>
import { Card as TinyCard, CardGroup as TinyCardGroup } from '@opentiny/vue'
import { ref } from 'vue'

const radioValue = ref('TinyVue')
const checkboxValue = ref(['TinyVue', 'TinyNG'])
const dataArr = ref([
  {
    title: 'TinyVue',
    content: '^15.0.01',
    imageSrc: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/planet1.jpg`
  },
  {
    title: 'TinyNG',
    content: '^16.0.01',
    imageSrc: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/planet2.jpg`
  }
])
</script>

<style scoped>
.card-wrap {
  width: 100%;
  background: #f5f5f5;
  padding: 16px;
}
.card-wrap :deep(.tiny-card-group) {
  margin: 20px 10px;
  display: flex;
  flex-direction: row;
  height: 150px;
}
.my-card {
  cursor: pointer;
  padding: 20px;
  margin: 0 20px;
}
.content {
  display: flex;
}
.content img {
  width: 80px;
  height: 80px;
  margin-right: 20px;
}
</style>
