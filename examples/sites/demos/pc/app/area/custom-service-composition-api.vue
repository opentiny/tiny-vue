<template>
  <tiny-area
    v-model="value"
    placeholder="请选择"
    :props="field"
    :fetch-jcr="getJCR"
    :fetch-region="getRegion"
    :fetch-rep="getRep"
    :fetch-office="getOffice"
  ></tiny-area>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Area as TinyArea } from '@opentiny/vue'

const value = ref([])
const field = ref({ label: 'name', value: 'id' })

function getJCR() {
  let jcr = [
    {
      id: '3623',
      id_and_type: '3623JCR',
      parent_and_type: null,
      name: 'A公司 Marketing与销售服务部',
      date_from: '2005/06/21 00:00:00',
      name_en: 'Consumer BG Marketing and Sales Service Dept',
      parent_type: null,
      dept_code: '024206',
      date_to: null,
      parent: null,
      area_label: 'JCR'
    },
    {
      id: '650561',
      id_and_type: '650561JCR',
      parent_and_type: null,
      name: 'A公司 Marketing与销售服务部（东莞）',
      date_from: '2012/09/27 00:00:00',
      name_en: 'Consumer BG Marketing and Sales Service Dept (Dongguan)',
      parent_type: null,
      dept_code: '036068',
      date_to: null,
      parent: null,
      area_label: 'JCR'
    }
  ]

  return Promise.resolve(jcr)
}

function getRegion() {
  let rginon = [
    {
      id: '608076',
      id_and_type: '608076Region',
      parent_and_type: '650561JCR',
      name: '火星终端子公司',
      date_from: '2007/08/06 00:00:00',
      name_en: 'Huawei Device USA',
      parent_type: 'JCR',
      dept_code: '024387',
      date_to: null,
      parent: '650561',
      area_label: 'Region'
    },
    {
      id: '606661',
      id_and_type: '606661Region',
      parent_and_type: '654434JCR',
      name: '中东地区部',
      date_from: '2007/04/06 00:00:00',
      name_en: 'Middle East Region',
      parent_type: 'JCR',
      dept_code: '026699',
      date_to: null,
      parent: '654434',
      area_label: 'Region'
    }
  ]

  return Promise.resolve(rginon)
}

function getRep() {
  let rep = [
    {
      id: '1112',
      id_and_type: '1112Rep.Office',
      parent_and_type: '1079Region',
      name: '北京代表处',
      date_from: '1980/ 01 / 01 00:00:00',
      name_en: 'Beijing Rep Office, CN',
      parent_type: 'Region',
      dept_code: '027848',
      date_to: null,
      parent: '1079',
      area_label: 'Rep.Office'
    },
    {
      id: '1114',
      id_and_type: '1114Rep.Office',
      parent_and_type: '1079Region',
      name: '天津代表处',
      date_from: '1980/ 01 / 01 00:00:00',
      name_en: 'Tianjin Rep Office, CN',
      parent_type: 'Region',
      dept_code: '027862',
      date_to: null,
      parent: '1079',
      area_label: 'Rep.Office'
    }
  ]

  return Promise.resolve(rep)
}

function getOffice() {
  let office = [
    {
      id: '610453',
      id_and_type: '610453Office',
      parent_and_type: '652495Rep. Office',
      name: '牙买加办事处',
      date_from: '2007/11/26 00:00:00',
      name_en: 'Jamaica Office',
      parent_type: 'Rep. Office',
      dept_code: '025641',
      date_to: null,
      parent: '652495',
      area_label: 'Office'
    },
    {
      id: '615077',
      id_and_type: '615077Office',
      parent_and_type: '652495Rep. Office',
      name: '巴拿马办事处',
      date_from: '2008/07/08 00:00:00',
      name_en: 'Panama Office',
      parent_type: 'Rep. Office',
      dept_code: '025656',
      date_to: null,
      parent: '652495',
      area_label: 'Office'
    }
  ]

  return Promise.resolve(office)
}
</script>
