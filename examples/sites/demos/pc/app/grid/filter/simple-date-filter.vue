<template>
  <tiny-grid :data="tableData" @filter-change="filterChangeEvent">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="姓名"></tiny-grid-column>
    <tiny-grid-column field="birthday" title="生日" :filter="birthdayFilter"></tiny-grid-column>
    <tiny-grid-column field="hireDate" title="聘用日期" :filter="hireDateFilter"></tiny-grid-column>
    <tiny-grid-column field="start" title="开始时间" :filter="startFilter"></tiny-grid-column>
    <tiny-grid-column field="expired" title="过期时间" :filter="expiredFilter"></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { Grid, GridColumn, Modal, DatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      tableData: [
        {
          name: 'Pierre Dupont',
          birthday: '1993-07-22',
          hireDate: '2015-04-28',
          start: '2018-07-21 00:00:00',
          expired: '2022-07-21 23:59:59'
        },
        {
          name: 'Jacques Germain',
          birthday: '1996-09-02',
          hireDate: '2018-12-08',
          start: '2019-07-03 08:00:00',
          expired: '2028-07-21 22:00:00'
        },
        {
          name: 'Robert Delcourt',
          birthday: '1989-06-20',
          hireDate: '2014-05-30',
          start: '2015-08-11 06:00:12',
          expired: '2019-07-11 21:12:59'
        },
        {
          name: 'Elisa Menez',
          birthday: '2000-06-16',
          hireDate: '2022-02-20',
          start: '2022-11-01 13:15:00',
          expired: '2024-10-01 18:32:59'
        }
      ],
      birthdayFilter: {
        layout: 'simple',
        simpleFilter: {
          datetimeConfig: {
            component: DatePicker,
            format: 'yyyy-MM-dd',
            valueFormat: 'yyyy-MM-dd',
            // 最大允许选择的时间
            max: new Date('2000-11-19'),
            // 最小允许选择的时间
            min: new Date('1989-11-19')
          },
          isDatetime: true
        }
      },
      hireDateFilter: {
        layout: 'simple',
        simpleFilter: {
          datetimeConfig: {
            component: DatePicker,
            format: 'yyyy/MM/dd',
            valueFormat: 'yyyy/MM/dd',
            // 最大允许选择的时间
            max: new Date('2020-11-19'),
            // 最小允许选择的时间
            min: new Date('2018-11-19')
          },
          isDatetime: true
        }
      },
      startFilter: {
        layout: 'simple',
        simpleFilter: {
          datetimeConfig: {
            component: DatePicker,
            format: 'yyyy-MM-dd hh:mm:ss',
            valueFormat: 'yyyy-MM-dd hh:mm:ss',
            type: 'datetime',
            // 开始日期默认值
            startDate: '2023-11-19 18:00:00',
            // 结束日期默认值
            endDate: '2023-11-19 18:00:00'
          },
          isDatetime: true
        }
      },
      expiredFilter: {
        layout: 'simple',
        simpleFilter: {
          datetimeConfig: {
            component: DatePicker,
            format: 'yyyy-MM-dd hh:mm:ss',
            valueFormat: 'yyyy-MM-dd hh:mm:ss',
            // 最大允许选择的时间
            max: new Date('2020-11-19'),
            // 最小允许选择的时间
            min: new Date('2010-11-19')
          },
          isDatetime: true
        }
      }
    }
  },
  methods: {
    filterChangeEvent({ filters }) {
      Modal.message({ message: `${JSON.stringify(filters)}`, status: 'info' })
    }
  }
}
</script>
