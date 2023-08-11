<template>
  <div>
    <h6>通过点击下面按钮，改变表格父级标签容器尺寸查看效果</h6>
    <div class="group-btns">
      <tiny-button @click="changeSizeBig" type="primary"> 800*300 </tiny-button>
      <tiny-button @click="changeSizeMid" type="primary"> 600*300 </tiny-button>
      <tiny-button @click="changeSizeSmall" type="primary"> 400*300 </tiny-button>
    </div>
    <div class="auto-resize-box" :style="styleObj">
      <tiny-grid :data="tableData" :auto-resize="false" :sync-resize="true">
        <tiny-grid-column field="name" title="名称"></tiny-grid-column>
        <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
        <tiny-grid-column field="address" title="地址"></tiny-grid-column>
        <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
      </tiny-grid>
    </div>
  </div>
</template>

<script lang="jsx">
import { Grid, GridColumn, Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  methods: {
    changeSizeBig() {
      this.styleObj = {
        width: '800px',
        height: '300px'
      }
    },
    changeSizeMid() {
      this.styleObj = {
        width: '600px',
        height: '300px'
      }
    },
    changeSizeSmall() {
      this.styleObj = {
        width: '400px',
        height: '300px'
      }
    }
  },
  data() {
    return {
      styleObj: {
        width: '400px',
        height: '300px'
      },
      tableData: [
        {
          id: '1',
          name: 'GFD科技YX公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWWW科技YX公司',
          area: '华南区',
          address: '深圳福田区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          area: '华南区',
          address: '中山市',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '4',
          name: 'TGBYX公司',
          area: '华北区',
          address: '梅州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '5',
          name: 'YHN科技YX公司',
          area: '华南区',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '6',
          name: '康康物业YX公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.auto-resize-box {
  border: 1px solid #666;
  padding: 10px;
  width: 400px;
  height: 300px;
}

.group-btns {
  margin-bottom: 20px;
}
</style>
