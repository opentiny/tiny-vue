<template>
  <tiny-collapse class="demo-collapse-wrap" v-model="activeNames">
    <tiny-collapse-item title="多列表单" name="1">
      <tiny-layout>
        <tiny-form :responsive-layout="true">
          <tiny-row>
            <tiny-col :span="6">
              <tiny-form-item label="公司名称">
                <tiny-input v-model="formData.name" placeholder="请输入"></tiny-input>
              </tiny-form-item>
            </tiny-col>
            <tiny-col :span="6">
              <tiny-form-item label="员工数">
                <tiny-numeric v-model="formData.employees" :min="0"></tiny-numeric>
              </tiny-form-item>
            </tiny-col>
          </tiny-row>
          <tiny-row>
            <tiny-col :span="6">
              <tiny-form-item label="网站IP">
                <tiny-ip-address v-model="formData.ip"></tiny-ip-address>
              </tiny-form-item>
            </tiny-col>
            <tiny-col :span="6">
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
    <tiny-collapse-item title="表格" name="2">
      <tiny-grid :data="data" border :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }">
        <tiny-grid-column type="index" width="60"></tiny-grid-column>
        <tiny-grid-column type="selection" width="60"></tiny-grid-column>
        <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
        <tiny-grid-column field="createdDate" title="创建日期"></tiny-grid-column>
        <tiny-grid-column field="city" title="城市"></tiny-grid-column>
      </tiny-grid>
    </tiny-collapse-item>
  </tiny-collapse>
</template>

<script setup>
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
  Option as TinyOption,
  Grid as TinyGrid,
  GridColumn as TinyGridColumn
} from '@opentiny/vue'

const activeNames = ref(['1', '2'])
const formData = ref({
  name: '',
  employees: 1,
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

const data = ref([
  {
    id: '1',
    name: 'GFD科技YX公司',
    city: '福州',
    employees: 800,
    createdDate: '2014-04-30 00:56:00',
    boole: false
  },
  {
    id: '2',
    name: 'WWW科技YX公司',
    city: '深圳',
    employees: 300,
    createdDate: '2016-07-08 12:36:22',
    boole: true
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    city: '中山',
    employees: 1300,
    createdDate: '2014-02-14 14:14:14',
    boole: false
  },
  {
    id: '4',
    name: 'TGB科技YX公司',
    city: '龙岩',
    employees: 360,
    createdDate: '2013-01-13 13:13:13',
    boole: true
  },
  {
    id: '5',
    name: 'YHN科技YX公司',
    city: '韶关',
    employees: 810,
    createdDate: '2012-12-12 12:12:12',
    boole: true
  }
])
</script>

<style scoped lang="less">
.demo-collapse-wrap {
  .tiny-collapse-item__content > * {
    line-height: 1.8;
  }
}
</style>
