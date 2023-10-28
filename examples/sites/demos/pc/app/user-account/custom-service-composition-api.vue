<template>
  <tiny-user-account v-bind="service" show-arrow>
    <div class="custom-content">默认插槽自定义内容</div>
  </tiny-user-account>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { UserAccount as TinyUserAccount, Modal } from '@opentiny/vue'

const isLogin = ref(false)
const service = ref({
  getUserInfo: getUserInfo,
  getUserImageUrl: getUserImageUrl,
  getLangData: getLangData,
  getLogoutUrl: getLogoutUrl,
  isGuestUser: isGuestUser,
  showLogin: showLogin
})

function getUserInfo() {
  /* 此处为获取用户信息的逻辑 */
  return Promise.resolve({
    userCN: 'test1',
    email: 'test1@test1.com'
  })
}

function getUserImageUrl() {
  /* 此处为获取头像路径的逻辑 */
  return Promise.resolve(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/dog1.png`)
}

function getLangData() {
  /* 此处为获取当前国际化信息的逻辑 */
  return Promise.resolve({
    locale: 'zhCN'
  })
}

function getLogoutUrl() {
  return new Promise((resolve, reject) => {
    /* 自定义注销逻辑，返回注销完成后的重定向url */
    setTimeout(() => {
      window.localStorage.setItem('isLogin', false)
      const url = '/pc/user-account/custom-service'

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
