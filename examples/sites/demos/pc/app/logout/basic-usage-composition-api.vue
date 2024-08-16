<template>
  <div>
    <p class="demo-logout">是否登录：{{ isLogin }}</p>
    <tiny-logout v-bind="service" :is-local="false" :is-mock="false" :before-logout="beforeLogout"></tiny-logout>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Logout as TinyLogout, Modal } from '@opentiny/vue'

const isLogin = ref(false)
const service = ref({
  getLogoutUrl,
  isGuestUser,
  showLogin
})

function beforeLogout() {
  // 注销前的回调函数
  Modal.message({ message: '注销前的回调函数', status: 'info' })
  window.localStorage.setItem('isLogin', false)
  // window.location.reload()
}

function getLogoutUrl() {
  return new Promise((resolve, reject) => {
    /* 自定义注销逻辑，返回注销完成后的重定向url */
    setTimeout(() => {
      window.localStorage.setItem('isLogin', false)
      const url = window.location.href

      resolve(url)
    }, 200)
  })
}

function isGuestUser() {
  /* 此处为用户自定义获取当前登录状态，未登录为访客，返回true,已登录返回false */
  isLogin.value = window.localStorage.getItem('isLogin') === 'true'

  return !isLogin.value
}

function showLogin() {
  /* 此处为用户的自定义登录逻辑 */
  Modal.confirm('模拟登录且登录成功').then(() => {
    window.localStorage.setItem('isLogin', true)
    window.location.reload()
  })
}
</script>

<style scoped>
.demo-logout {
  line-height: 1.5px;
  padding-bottom: 16px;
}
</style>
