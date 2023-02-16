<div class="demo-header">
<p class="overviewicon">
  <span class="wapi-list-form"/>
</p>

## Grid 表格

<nova-uxlink widget-name="Grid"></nova-uxlink>

表格组件，提供了非常强大数据表格功能，在 Grid 可以展示数据列表，可以对数据列表进行选择、编辑等。

</div>

### 基本用法

<nova-demo-view link="grid/aui3-first-menu/export-excel"></nova-demo-view>

### 基于 XLSX 插件进行导出

:::tip 提示

`xlsx` 是一个非常强大的前端 `EXCEL` 文件操作库，支持表格带格式导入导出，可兼容 `IE9+` 版本的浏览器。

详情参考：<https://github.com/SheetJS/sheetjs>

:::

```javascript
<template>
  <div>
    <tiny-button @click="exportExcel">导出数据</tiny-button>
    <tiny-grid v-bind="op"></tiny-grid>
  </div>
</template>

<script>
import { Grid } from '@opentiny/vue'
import XLSX from 'xlsx'

export default {
  components: {
    TinyGrid: Grid
  },
  data() {
    const tableData = [
      {
        id: '1',
        name: 'GFD科技公司',
        city: '福州',
        employees: 800,
        created_date: '2014-04-30 00:56:00',
        boole: false
      },
      {
        id: '2',
        name: 'WWW科技公司',
        city: '深圳',
        employees: 300,
        created_date: '2016-07-08 12:36:22',
        boole: true
      },
      {
        id: '3',
        name: 'RFV有限责任公司',
        city: '中山',
        employees: 1300,
        created_date: '2014-02-14 14:14:14',
        boole: false
      },
      {
        id: '4',
        name: 'TGB科技公司',
        city: '龙岩',
        employees: 360,
        created_date: '2013-01-13 13:13:13',
        boole: true
      },
      {
        id: '5',
        name: 'YHN科技公司',
        city: '韶关',
        employees: 810,
        created_date: '2012-12-12 12:12:12',
        boole: true
      },
      {
        id: '6',
        name: 'WSX科技公司',
        city: '黄冈',
        employees: 800,
        created_date: '2011-11-11 11:11:11',
        boole: true
      },
      {
        id: '7',
        name: 'KBG物业公司',
        city: '赤壁',
        employees: 400,
        created_date: '2016-04-30 23:56:00',
        boole: false
      },
      {
        id: '8',
        name: 'SZ市福德宝网络技术公司',
        boole: true,
        city: '厦门',
        created_date: '2016-06-03 13:53:25',
        employees: 540
      }
    ]
    return {
      op: {
        editConfig: {
          trigger: 'click',
          mode: 'cell',
          showStatus: true
        },
        columns: [
          {
            type: 'index',
            width: 60
          },
          {
            type: 'selection',
            width: 60
          },
          {
            field: 'employees',
            title: '员工数'
          },
          {
            field: 'created_date',
            title: '创建日期'
          },
          {
            field: 'city',
            title: '城市'
          },
          {
            field: 'boole',
            title: '布尔值',
            align: 'center',
            formatText: 'boole',
            editor: this.checkboxEdit
          }
        ],
        data: tableData
      },
      tableData
    }
  },
  methods: {
    checkboxEdit(h, { row, column }) {
      return (
        <input
          type="checkbox"
          checked={row.boole}
          onChange={event => {
            column.model.value = event.target.checked
          }}
        />
      )
    },
    exportExcel() {
      // 导出方法一

      /*
        const wb = XLSX.utils.table_to_book(document.querySelector('.tiny-grid'), { sheet: 'SheetJS' });

        // 修改单元格的数据格式
        // wb.Sheets.SheetJS.D5.z = 'm/d/yy'

        XLSX.writeFile(wb, "sheetjs.xlsx");
      */

      // 导出方法二，需要自己拼接中文表头

      /*
        const sheet = XLSX.utils.json_to_sheet(this.op.data)
        const wb = XLSX.utils.book_new()

        // 修改单元格的数据格式
        // sheet.D5.z = 'm/d/yy'

        XLSX.utils.book_append_sheet(wb, sheet, "SheetJS")
        XLSX.writeFile(wb, "sheetjs1.xlsx")
      */

    }
  }
}
</script>
```

<br>
