<template>
  <div class="demo-container coBox7">
    <tiny-container :pattern="myPattern">
      <template #header>
        <tiny-layout>Header</tiny-layout>
      </template>
      <template #aside>
        <tiny-layout>Aside</tiny-layout>
      </template>
      <tiny-layout>
        Main
        <br />
        <div v-for="item in patternData" :key="item.value" class="select-item">
          <input
            type="radio"
            :id="item.value"
            name="pattern"
            :value="item.value"
            v-model="myPattern"
          />
          <label :for="item.value">{{ item.title }}</label>
        </div>
      </tiny-layout>
      <template #footer>
        <tiny-layout>Footer</tiny-layout>
      </template>
    </tiny-container>
  </div>
</template>

<script>
import { Container, Layout } from '@opentiny/vue'

export default {
  components: {
    TinyContainer: Container,
    TinyLayout: Layout
  },
  data() {
    return {
      mode: 'pc',
      myPattern: 'default',
      patternData: [
        {
          title: '默认:default',
          value: 'default'
        },
        {
          title: '经典:classic',
          value: 'classic'
        },
        {
          title: '简约:simple',
          value: 'simple'
        },
        {
          title: '时尚:fashion',
          value: 'fashion'
        },
        {
          title: '传奇:legend',
          value: 'legend'
        }
      ]
    }
  }
}
</script>

<style>
.demo-container .tiny-container {
  height: 200px;
  color: #5f6774;
  text-align: center;
  font-size: 18px;
  position: relative;
}

.demo-container .tiny-container .tiny-container__header {
  background-color: #ecf8ff;
  border: 3px solid #ffffff;
  color: #5b90af;
}

.demo-container .tiny-container .tiny-container__aside {
  background-color: #fff0f0;
  border: 3px solid #ffffff;
  color: #d27070;
}

.demo-container .tiny-container .tiny-container__main {
  background-color: #fffdec;
  border: 3px solid #ffffff;
  color: #b1a859;
}

.demo-container .tiny-container .tiny-container__footer {
  background-color: #e8ffed;
  border: 3px solid #ffffff;
  color: #84a18a;
}

.demo-container .tiny-container .main .changePattern .tiny-radio {
  color: #a3a355;
  font-size: 16px;
  margin: 0 7px;
}
</style>
