<template>
  <div class="gejs">
    <div class="page__hd">
      <h1 class="page__title">Numeric</h1>
      <p class="page__desc">步进器</p>
    </div>
    <div class="booxy">
      <span>演示主文本</span>
      <tiny-numeric v-model="num1"></tiny-numeric>
    </div>
  </div>
</template>

<script>
import { Numeric } from '@opentiny/vue'

export default {
  components: {
    TinyNumeric: Numeric
  },
  data() {
    return {
      num1: 1
    }
  }
}
</script>
<style scoped>
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
.booxy {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  width: 100%;
  background: white;
}
.booxy span {
  font-size: 16px;
  color: #333;
}
.gejs {
  height: calc(100% - 118px);
  width: 100%;
  background: #f8f8f8;
}
</style>
