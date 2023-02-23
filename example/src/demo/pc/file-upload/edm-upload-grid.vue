<template>
  <div>
    <tiny-file-upload style="display: inline-block" ref="upload" :show-file-list="false" :multiple="true" :edm="edm" @success="success">
      <template #trigger>
        <tiny-button type="primary">点击上传</tiny-button>
      </template>
    </tiny-file-upload>
    <tiny-grid :data="tableData" ref="ileListGrid">
      <tiny-grid-column type="selection" width="4%"></tiny-grid-column>
      <tiny-grid-column field="docId" title="文档ID" width="30%"></tiny-grid-column>
      <tiny-grid-column field="name" title="文档名称" width="20%"></tiny-grid-column>
      <tiny-grid-column field="docVersion" title="版本" width="13%"></tiny-grid-column>
      <tiny-grid-column field="docSize" title="文档大小（字节）" width="20%"></tiny-grid-column>
      <tiny-grid-column field="serverName" title="存储站点"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { FileUpload, Button, Grid, GridColumn } from '@opentiny/vue'
import { sha256 } from 'js-sha256'

export default {
  components: {
    TinyFileUpload: FileUpload,
    TinyButton: Button,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {
      tableData: [
        {
          docId: 'M1T2A1N548572512085860352',
          docVersion: 'V1',
          name: 'test.doc',
          docSize: 17250,
          serverName: 'ShenZhen'
        },
        {
          docId: 'M1T2A1N548570510295556097',
          docVersion: 'V1',
          name: 'test.doc',
          docSize: 17250,
          serverName: 'ShenZhen'
        }
      ],
      edm: {
        upload: {
          plugin: sha256,
          token: () =>
            new Promise((resolve) => {
              // resolve 集成EDM sdk 或获取上传token ，示例格式如下（示例数据不可用）：
              //  resolve({
              //   config:{fileWhiteList:".doc,.docx,.xls"},
              //   edmToken:"security:2B263FA5CF0940A77008C809:041F85244E7BCB01781462D5F0BD68934D51DF3F2192ACB36640A7DC8AFD8378B238B0881B5F2FDF",
              //   traceId:"0b1246cf-a1c5-418c-bd3b-543039407951"
              // })
              resolve()
            })
        }
      }
    }
  },
  methods: {
    success(res, file) {
      this.tableData.push(file)
    }
  }
}
</script>

<style scoped>
.tiny-grid.tiny-grid__animat {
  margin-top: 20px;
}
</style>
