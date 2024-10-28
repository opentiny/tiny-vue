<template>
  <tiny-collapse v-model="activeNames">
    <tiny-collapse-item title="多列表单" name="1">
      <tiny-layout>
        <tiny-form :responsive-layout="true">
          <tiny-row>
            <tiny-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
              <tiny-form-item label="公司名称">
                <tiny-input v-model="formData.name" placeholder="请输入"></tiny-input>
              </tiny-form-item>
            </tiny-col>
            <tiny-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
              <tiny-form-item label="员工数">
                <tiny-numeric v-model="formData.employees" :min="0"></tiny-numeric>
              </tiny-form-item>
            </tiny-col>
          </tiny-row>
        </tiny-form>
      </tiny-layout>
    </tiny-collapse-item>
  </tiny-collapse>
</template>

<script>
import {
  TinyCollapse,
  TinyCollapseItem,
  TinyLayout,
  TinyForm,
  TinyFormItem,
  TinyRow,
  TinyCol,
  TinyInput,
  TinyNumeric
} from '@opentiny/vue'

export default {
  components: {
    TinyCollapse,
    TinyCollapseItem,
    TinyLayout,
    TinyForm,
    TinyFormItem,
    TinyRow,
    TinyCol,
    TinyInput,
    TinyNumeric
  },
  data() {
    return {
      activeNames: ['1'],
      formData: {
        name: '',
        employees: ''
      }
    }
  }
}
</script>
