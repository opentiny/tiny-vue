<template>
  <div>
    <tiny-config-provider :design="design">
      <div class="demo-form">
        <tiny-alert type="warning" description="全局配置组件的默认行为"></tiny-alert>
        <tiny-form ref="ruleFormRef" :model="formData">
          <tiny-form-item label="年龄" prop="age" required>
            <tiny-numeric v-model="formData.age"></tiny-numeric>
          </tiny-form-item>
          <tiny-form-item label="姓名" prop="name" required>
            <tiny-input v-model="formData.name"></tiny-input>
          </tiny-form-item>
          <tiny-form-item>
            <tiny-button @click="handleSubmitPromise" type="primary"> 校验 </tiny-button>
          </tiny-form-item>
        </tiny-form>
      </div>
    </tiny-config-provider>
  </div>
</template>

<script>
import {
  TinyConfigProvider,
  TinyAlert,
  TinyModal,
  TinyForm,
  TinyFormItem,
  TinyInput,
  TinyNumeric,
  TinyButton
} from '@opentiny/vue'
import { iconWarningTriangle } from '@opentiny/vue-icon'

export default {
  components: {
    TinyConfigProvider,
    TinyAlert,
    TinyForm,
    TinyFormItem,
    TinyInput,
    TinyNumeric,
    TinyButton
  },
  data() {
    return {
      design: {
        name: 'x-design', // 设计规范名称
        version: '1.0.0', // 设计规范版本号
        components: {
          Form: {
            props: {
              hideRequiredAsterisk: true
            }
          },
          Button: {
            props: {
              resetTime: 0,
              round: true
            }
          },
          Alert: {
            icons: {
              warning: iconWarningTriangle()
            },
            /**
             *
             * @param {*} props 组件属性集合
             * @param {*} hooks vue2-->@composition-api,vue3-->vue
             * @param {*} param2 context
             * @param {*} api Alert 组件 renderless 层方法属性和方法集合
             */
            renderless: (props, hooks, { emit }, api) => {
              const state = api.state
              return {
                handleClose() {
                  state.show = false
                  TinyModal.message('触发自定方法')
                  emit('close')
                }
              }
            }
          }
        }
      },
      formData: {
        name: '',
        age: ''
      }
    }
  },
  methods: {
    handleSubmitPromise() {
      this.$refs.ruleFormRef.validate().catch(() => {})
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
