<template>
  <div class="demo-select">
    <tiny-select
      v-model="radioValue"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      value-field="coaNumber"
      :multiple="false"
      text-field="coaNumber"
      render-type="grid"
      :grid-op="gridOpRadio"
      popper-class="grid-remote"
    ></tiny-select>

    <tiny-select
      v-model="radioValue"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :remote-config="{ autoSeach: true, clearData: true, showIcon: true }"
      value-field="coaNumber"
      :multiple="false"
      text-field="coaNumber"
      render-type="grid"
      :grid-op="gridOpRadio"
      popper-class="grid-remote-config"
    ></tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect } from '@opentiny/vue'

const radioValue = ref('')
const states = ref([
  {
    coaCategory: null,
    coaCreationDate: null,
    coaId: null,
    coaLastUpdateDate: null,
    coaNumber: '5100000',
    coaStatus: null,
    parentId: null,
    parentNumber: null,
    parentType: null,
    enName: 'test1IT Service',
    cnName: 'test1IT Service'
  },
  {
    coaCategory: null,
    coaCreationDate: null,
    coaId: null,
    coaLastUpdateDate: null,
    coaNumber: '5900003',
    coaStatus: null,
    parentId: null,
    parentNumber: null,
    parentType: null,
    enName: 'Entertainment and gymnastic service',
    cnName: 'Entertainment and gymnastic service'
  },
  {
    coaCategory: null,
    coaCreationDate: null,
    coaId: null,
    coaLastUpdateDate: null,
    coaNumber: '5900004',
    coaStatus: null,
    parentId: null,
    parentNumber: null,
    parentType: null,
    enName: 'Customer accommodation',
    cnName: 'Customer accommodation'
  },
  {
    coaCategory: null,
    coaCreationDate: null,
    coaId: null,
    coaLastUpdateDate: null,
    coaNumber: '5900022',
    coaStatus: null,
    parentId: null,
    parentNumber: null,
    parentType: null,
    enName: 'Long-term lease',
    cnName: 'Long-term lease'
  },
  {
    coaCategory: null,
    coaCreationDate: null,
    coaId: null,
    coaLastUpdateDate: null,
    coaNumber: '5900001',
    coaStatus: null,
    parentId: null,
    parentNumber: null,
    parentType: null,
    enName: 'Food and beverage services',
    cnName: 'Food and beverage services'
  },
  {
    coaCategory: null,
    coaCreationDate: null,
    coaId: null,
    coaLastUpdateDate: null,
    coaNumber: '5900002',
    coaStatus: null,
    parentId: null,
    parentNumber: null,
    parentType: null,
    enName: 'Conference room leasing service',
    cnName: 'Conference room leasing service'
  },
  {
    coaCategory: null,
    coaCreationDate: null,
    coaId: null,
    coaLastUpdateDate: null,
    coaNumber: '5900005',
    coaStatus: null,
    parentId: null,
    parentNumber: null,
    parentType: null,
    enName: 'Employee accommodation',
    cnName: 'Employee accommodation'
  },
  {
    coaCategory: null,
    coaCreationDate: null,
    coaId: null,
    coaLastUpdateDate: null,
    coaNumber: '6116001',
    coaStatus: null,
    parentId: null,
    parentNumber: null,
    parentType: null,
    enName: 'C7168',
    cnName: 'C7168'
  },
  {
    coaCategory: null,
    coaCreationDate: null,
    coaId: null,
    coaLastUpdateDate: null,
    coaNumber: '6118100',
    coaStatus: null,
    parentId: null,
    parentNumber: null,
    parentType: null,
    enName: 'C2299',
    cnName: 'C2299'
  }
])
const gridOpRadio = ref({
  radioConfig: {
    trigger: 'row',
    checkMethod() {
      return true
    }
  },
  data: [
    {
      coaCategory: null,
      coaCreationDate: null,
      coaId: null,
      coaLastUpdateDate: null,
      coaNumber: '5100000',
      coaStatus: null,
      parentId: null,
      parentNumber: null,
      parentType: null,
      enName: 'test1IT Service',
      cnName: 'test1IT Service'
    },
    {
      coaCategory: null,
      coaCreationDate: null,
      coaId: null,
      coaLastUpdateDate: null,
      coaNumber: '5900003',
      coaStatus: null,
      parentId: null,
      parentNumber: null,
      parentType: null,
      enName: 'Entertainment and gymnastic service',
      cnName: 'Entertainment and gymnastic service'
    }
  ],
  columns: [
    { type: 'radio', title: '' },
    { field: 'coaNumber', title: '区域', width: 90 },
    { field: 'province', title: '省份', width: 60 },
    { field: 'city', title: '城市', width: 60 }
  ]
})
let loading

const remoteMethod = (query) => {
  if (query !== undefined) {
    loading = true

    return new Promise((resolve) => {
      setTimeout(() => {
        loading = false

        const result = states.value.filter((item) => {
          return item.coaNumber.includes(query)
        })

        resolve(result)
      }, 200)
    })
  } else {
    gridOpRadio.value.data = []
  }
}
</script>

<style scoped>
.demo-select .tiny-select {
  width: 270px;
  margin-right: 30px;
}
</style>
