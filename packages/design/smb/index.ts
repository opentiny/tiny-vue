import { version } from './package.json'

export default {
  name: 'x-design', // 设计规范名称
  version, // 设计规范版本号
  components: {
    Form: {
      props: {
        hideRequiredAsterisk: true // 默认隐藏必填星号
      }
    },
    Button: {
      props: {
        round: true // 默认圆角
      }
    }
  }
}
