<template>
  <tiny-user-account v-bind="service" show-arrow>
    <div class="custom-content">默认插槽自定义内容</div>
  </tiny-user-account>
</template>

<script lang="jsx">
import { UserAccount, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyUserAccount: UserAccount
  },
  data() {
    return {
      isLogin: false,
      service: {
        getUserInfo: this.getUserInfo,
        getUserImageUrl: this.getUserImageUrl,
        getLangData: this.getLangData,
        getLogoutUrl: this.getLogoutUrl,
        isGuestUser: this.isGuestUser,
        showLogin: this.showLogin
      }
    }
  },
  methods: {
    getUserInfo() {
      /* 此处为获取用户信息的逻辑 */
      return Promise.resolve({
        userCN: 'test1',
        email: 'test1@test1.com'
      })
    },
    getUserImageUrl() {
      /* 此处为获取头像路径的逻辑 */
      return Promise.resolve('/static/images/dog1.png')
    },
    getLangData() {
      /* 此处为获取当前国际化信息的逻辑 */
      return Promise.resolve({
        locale: 'zhCN'
      })
    },
    getLogoutUrl() {
      return new Promise((resolve, reject) => {
        /* 自定义注销逻辑，返回注销完成后的重定向url */
        setTimeout(() => {
          window.localStorage.setItem('isLogin', false)
          const url = '/pc/user-account/custom-service'

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
