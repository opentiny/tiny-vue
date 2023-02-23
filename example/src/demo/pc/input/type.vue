<template>
  <div class="demo-input">
    <tiny-input v-model="text" placeholder="text"></tiny-input>
    <br />
    <br />
    <tiny-input type="password" v-model="password" placeholder="password"></tiny-input>
    <br />
    <br />
    <tiny-input type="textarea" v-model="textarea" placeholder="textarea"></tiny-input>
    <br />
    <br />
    <tiny-input type="email" v-model="email" placeholder="email"></tiny-input>
    <br />
    <br />
    <tiny-input type="number" v-model="number" placeholder="number"></tiny-input>
    <br />
    <br />
    <tiny-input type="tel" v-model="tel" placeholder="tel"></tiny-input>
    <br />
    <br />
    <tiny-input type="url" v-model="url" placeholder="url"></tiny-input>
    <br />
    <br />
    <tiny-input type="hidden"></tiny-input>
    <br />
    <br />
    <tiny-input type="color" v-model="color"></tiny-input>
    <br />
    <br />
    <tiny-input type="date" v-model="date"></tiny-input>
    <br />
    <br />
    <tiny-input type="month" v-model="month"></tiny-input>
    <br />
    <br />
    <tiny-input type="week" v-model="week"></tiny-input>
    <br />
    <br />
    <tiny-input type="datetime-local" v-model="datetime"></tiny-input>
    <br />
    <br />
    <tiny-input type="time" v-model="time"></tiny-input>
    <br />
    <br />
    <tiny-input type="file" v-model="file"></tiny-input>
    <br />
    <br />
    <tiny-input type="range" v-model="range"></tiny-input>
  </div>
</template>

<script>
import { Input } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    return {
      text: '',
      password: '',
      textarea: '',
      email: '',
      number: '',
      tel: '',
      url: '',
      color: '#000000',
      date: '',
      month: '',
      week: '',
      datetime: '',
      time: '',
      file: '',
      range: ''
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
}

.demo-input .tiny-textarea {
  width: 400px;
}
</style>
