<template>
  <div>
    <input type="file" accept=".xls,.xlsx" @change="importExcel" />
    <tiny-grid :data="tableData">
      <tiny-grid-column field="name" title="名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { GridColumn as TinyGridColumn, Grid as TinyGrid, Modal } from '@opentiny/vue'
import { ref } from 'vue'
import * as XLSX from 'xlsx'

const tableData = ref([])

let upload_file

function importExcel(e) {
  const files = e.target.files
  if (files.length <= 0) {
    return false
  } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
    Modal.message({ message: '上传格式不正确，请上传xls或者xlsx格式', status: 'warning' })
    return false
  } else {
    // 更新获取文件名
    upload_file = files[0].name
  }

  const fileReader = new FileReader()
  fileReader.onload = (ev) => {
    try {
      const data = ev.target.result
      const workbook = XLSX.read(data, {
        type: 'binary'
      })
      // 取 Excel 的第一张 Sheet 表
      const wsname = workbook.SheetNames[0]
      // 生成 JSON 表格内容
      const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname])
      // 将数据赋值给 Grid 数据源
      tableData.value = ws
      // 可以在这里给后端发请求，将读取的 Excel 数据存到数据库表中
    } catch (e) {
      return false
    }
  }
  fileReader.readAsBinaryString(files[0])
}
</script>
