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

<script>
import { Card, CardGroup } from '@opentiny/vue'

export default {
  components: {
    TinyCard: Card,
    TinyCardGroup: CardGroup
  },
  data() {
    return {
      radioValue: 'TinyVue',
      checkboxValue: ['TinyVue', 'TinyNG'],
      dataArr: [
        {
          title: 'TinyVue',
          content: '^15.0.01',
          imageSrc: ''
        },
        {
          title: 'TinyNG',
          content: '^16.0.01',
          imageSrc: ''
        },
        {
          title: 'TinyEngine',
          content: '^14.0.01',
          imageSrc: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-wrap {
  width: 100%;
  background: #f5f5f5;
  padding: 16px;
  display: flex;
  justify-content: space-between;
}
.my-card {
  width: 80%;
  cursor: pointer;
  padding: 10px;
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
