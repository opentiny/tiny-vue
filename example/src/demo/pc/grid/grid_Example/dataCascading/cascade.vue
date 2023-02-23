<template>
  <div>
    <tiny-grid
      :data="tableData"
      :edit-config="{
        trigger: 'click',
        mode: 'cell',
        showStatus: true,
        activeMethod: activeMethod
      }"
    >
      <tiny-grid-column type="index" width="60px"></tiny-grid-column>
      <tiny-grid-column type="selection" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称" :editor="{ component: 'input' }"></tiny-grid-column>
      <tiny-grid-column
        field="area"
        title="区域(级联一级)"
        :editor="{
          component: CustomSelect,
          attrs: attrs1,
          events: { change: changeArea }
        }"
      ></tiny-grid-column>
      <tiny-grid-column
        field="province"
        title="省份(级联二级)"
        :editor="{
          component: CustomSelect,
          attrs: attrs2,
          events: { change: changeProvince }
        }"
      ></tiny-grid-column>
      <tiny-grid-column field="city" title="城市(级联三级)" :editor="{ component: CustomSelect, attrs: attrs3 }"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { Grid, GridColumn } from '@opentiny/vue'

const CustomSelect = {
  inheritAttrs: false,
  template: `
  <select v-model="innerVal" placeholder="-- 请选择 --" @change="handleChange" style="width: 100%;">
    <option v-for="item in data" :key="item[format.value]" :value="item[format.value]">{{item[format.label]}}</option>
  </select>
  `,
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    data: Array,
    value: String,
    format: {
      type: Object,
      default: () => ({
        value: 'value',
        label: 'label'
      })
    }
  },
  data() {
    return {
      innerVal: this.value
    }
  },
  watch: {
    value(val) {
      this.innerVal = val
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('change', event.target.value)
      this.$emit('input', event.target.value)
    }
  }
}

const getCascadeData = ({ type, area, province }) => {
  let data = []

  if (type === 'area') {
    data = [{ area: '华东区' }, { area: '华南区' }, { area: '华中区' }, { area: '西南区' }]
  }

  if (type === 'province') {
    switch (area) {
      case '华东区':
        data = [{ province: '福建省' }]
        break
      case '华南区':
        data = [{ province: '广东省' }, { province: '广西省' }]
        break
      case '华中区':
        data = [{ province: '湖北省' }]
        break
      case '西南区':
        data = [{ province: '云南省' }]
        break
    }
  }

  if (type === 'city') {
    switch (province) {
      case '广东省':
        data = [{ city: '广州' }, { city: '深圳' }, { city: '中山' }, { city: '韶关' }, { city: '珠海' }]
        break
      case '福建省':
        data = [{ city: '龙岩' }, { city: '福州' }, { city: '厦门' }]
        break
      case '广西省':
        data = [{ city: '南宁' }, { city: '北海' }, { city: '桂林' }]
        break
      case '云南省':
        data = [{ city: '昆明' }, { city: '大理' }, { city: '西双版纳' }]
        break
      case '湖北省':
        data = [{ city: '武汉' }, { city: '十堰' }, { city: '潜江' }, { city: '黄冈' }, { city: '赤壁' }, { city: '襄阳' }]
        break
    }
  }
  return data
}

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    const attrs1 = {
      data: getCascadeData({ type: 'area' }),
      format: { value: 'area', label: 'area' }
    }

    const attrs2 = {
      data: [],
      format: { value: 'province', label: 'province' }
    }

    const attrs3 = {
      data: [],
      format: { value: 'city', label: 'city' }
    }

    return {
      CustomSelect,
      attrs1,
      attrs2,
      attrs3,
      tableData: [
        {
          id: '1',
          name: 'GFD科技YX公司',
          userId: 421000103624183,
          area: '华东区',
          province: '福建省',
          city: '福州',
          contact: '许生',
          telephone: '1234567890',
          address: '福州',
          ipaddress: '192.168.111.111',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 800,
          created_date: '2014-04-30 00:56:00',
          boole: false,
          assets: '1000000',
          rate: 0.9
        },
        {
          id: '2',
          name: 'WWW科技YX公司',
          userId: 421000103624183,
          area: '华南区',
          province: '广东省',
          city: '深圳',
          contact: '朱生',
          telephone: '1234567890',
          address: '深圳福田区',
          ipaddress: '192.168.111.1',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 300,
          created_date: '2016-07-08 12:36:22',
          boole: true,
          assets: '1500000',
          rate: 0.7
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          userId: 441047913162396,
          area: '华南区',
          province: '广东省',
          city: '中山',
          contact: '秦生',
          telephone: '1234567890',
          address: '中山市',
          ipaddress: '192.168.111.120',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 1300,
          created_date: '2014-02-14 14:14:14',
          boole: false,
          assets: '1500000',
          rate: 0.6
        },
        {
          id: '4',
          name: 'TGB科技YX公司',
          userId: 702973890055088,
          area: '华东区',
          province: '福建省',
          city: '龙岩',
          contact: '周生',
          telephone: '1234567890',
          address: '龙岩',
          ipaddress: '192.168.11.111',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 360,
          created_date: '2013-01-13 13:13:13',
          boole: true,
          assets: '1200000',
          rate: 0.5
        },
        {
          id: '5',
          name: 'YHN科技YX公司',
          userId: 702973890055088,
          area: '华南区',
          province: '广东省',
          city: '韶关',
          contact: '郑生',
          telephone: '1234567890',
          address: '韶关',
          ipaddress: '192.168.101.111',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
          employees: 810,
          created_date: '2012-12-12 12:12:12',
          boole: true,
          assets: '1500000',
          rate: 0.6
        }
      ]
    }
  },
  methods: {
    changeArea({ $table, row }, value) {
      row.area = value
      row.province = null
      row.city = null
      $table.setActiveCell(row, 'province')
    },
    changeProvince({ $table, row }, value) {
      row.province = value
      row.city = null
      $table.setActiveCell(row, 'city')
    },
    activeMethod({ column, row }) {
      if (column.property === 'province') {
        setTimeout(() => {
          this.attrs2.data = getCascadeData({
            type: 'province',
            area: row.area
          })
        }, 1000)
      } else if (column.property === 'city') {
        setTimeout(() => {
          this.attrs3.data = getCascadeData({
            type: 'city',
            province: row.province
          })
        }, 1000)
      }

      return true
    }
  }
}
</script>
