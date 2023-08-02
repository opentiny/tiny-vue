<template>
  <div>
    <p class="status">是否登录：{{ isLogin }}</p>
    <tiny-logout v-bind="service"></tiny-logout>
  </div>
</template>

<script lang="jsx">
import { Logout, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyLogout: Logout
  },
  data() {
    return {
      isLogin: false,
      service: {
        getLogoutUrl: this.getLogoutUrl,
        isGuestUser: this.isGuestUser,
        showLogin: this.showLogin
      }
    }
  },
  methods: {
    getLogoutUrl() {
      return new Promise((resolve, reject) => {
        /* 自定义注销逻辑，返回注销完成后的重定向url */
        setTimeout(() => {
          window.localStorage.setItem('isLogin', false)
          const url = '/pc/logout/custom-service'

          resolve(url)
        }, 200)
      })
    },
    isGuestUser() {
      /* 此处为用户自定义获取当前登录状态，未登录为访客，返回true,已登录返回false */
      this.isLogin = window.localStorage.getItem('isLogin') === 'true'

      return !this.isLogin
    },
    showLogin() {
      /* 此处为用户的自定义登录逻辑 */
      Modal.confirm('模拟登录且登录成功').then(() => {
        window.localStorage.setItem('isLogin', true)
        window.location.reload()
      })
    }
  }
}
</script>
