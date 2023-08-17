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
          <tiny-row>
            <tiny-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
              <tiny-form-item label="网站IP">
                <tiny-ip-address v-model="formData.ip"></tiny-ip-address>
              </tiny-form-item>
            </tiny-col>
            <tiny-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
              <tiny-form-item label="城市">
                <tiny-select v-model="formData.city" placeholder="请选择">
                  <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </tiny-option>
                </tiny-select>
              </tiny-form-item>
            </tiny-col>
          </tiny-row>
        </tiny-form>
      </tiny-layout>
    </tiny-collapse-item>
  </tiny-collapse>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import {
  Collapse as TinyCollapse,
  CollapseItem as TinyCollapseItem,
  Layout as TinyLayout,
  Form as TinyForm,
  FormItem as TinyFormItem,
  Row as TinyRow,
  Col as TinyCol,
  Input as TinyInput,
  Numeric as TinyNumeric,
  IpAddress as TinyIpAddress,
  Select as TinySelect,
  Option as TinyOption
} from '@opentiny/vue'

const activeNames = ref(['1'])
const formData = ref({
  name: '',
  employees: '',
  city: '',
  ip: '192.168.0.1'
})
const options = ref([
  {
    value: 'shenzhen',
    label: '深圳'
  },
  {
    value: 'guangzhou',
    label: '广州'
  },
  {
    value: 'foshan',
    label: '佛山'
  },
  {
    value: 'shaoguan',
    label: '韶关'
  },
  {
    value: 'meizhou',
    label: '梅州'
  }
])
</script>
