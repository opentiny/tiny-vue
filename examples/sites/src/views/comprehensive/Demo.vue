<template>
  <div class="products-page">
    <div class="page-header">
      <h3>商品管理</h3>
    </div>
    <div class="page-content">
      <div class="button-box">
        <tiny-button type="info" @click="addProductToEdit"> 添加商品 </tiny-button>
        <tiny-button type="danger" @click="removeProduct"> 删除商品 </tiny-button>
        <tiny-button type="success" @click="saveProduct"> 保存 </tiny-button>
      </div>
      <tiny-grid
        auto-resize
        ref="gridRef"
        :data="products"
        :height="500"
        :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }"
        :tiny_mcp_config="{
          server,
          business: {
            id: 'product-list',
            description: '商品列表'
          }
        }"
      >
        <tiny-grid-column type="index" width="50" />
        <tiny-grid-column type="selection" width="50" />
        <tiny-grid-column title="商品图片" width="100">
          <template #default="{ row }">
            <tiny-image :src="row.image" :preview-src-list="[row.image]" class="product-image" />
          </template>
        </tiny-grid-column>

        <tiny-grid-column field="name" title="商品名称" :editor="{ component: 'input' }" />
        <tiny-grid-column
          field="price"
          :editor="{
            component: 'input',
            attrs: { type: 'number' }
          }"
          title="价格"
        >
          <template #default="{ row }"> ¥{{ row.price }} </template>
        </tiny-grid-column>
        <tiny-grid-column
          field="stock"
          :editor="{
            component: 'input',
            attrs: { type: 'number' }
          }"
          title="库存"
        />
        <tiny-grid-column
          field="category"
          :editor="{
            component: 'select',
            options: [
              { label: '手机', value: 'phones' },
              { label: '笔记本', value: 'laptops' },
              { label: '平板', value: 'tablets' }
            ]
          }"
          title="分类"
        >
          <template #default="{ row }">
            {{ categoryLabels[row.category] }}
          </template>
        </tiny-grid-column>
        <tiny-grid-column
          field="status"
          :editor="{
            component: 'select',
            options: [
              { label: '上架', value: 'on' },
              { label: '下架', value: 'off' }
            ]
          }"
          title="状态"
        >
          <template #default="{ row }">
            <tiny-tag :type="row.status === 'on' ? 'success' : 'warning'">
              {{ row.status === 'on' ? '上架' : '下架' }}
            </tiny-tag>
          </template>
        </tiny-grid-column>
      </tiny-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import productsData from './products.json'
import { $local } from '../../composable/utils'
import { useNextServer } from '@opentiny/next-vue'
import { TinyGrid, TinyGridColumn, TinyButton, TinyTag, TinyModal, TinyImage } from '@opentiny/vue'

if (!$local.products) {
  $local.products = productsData
}

const products = ref($local.products)
const gridRef = ref(null)

const categoryLabels: Record<string, string> = {
  phones: '手机',
  laptops: '笔记本',
  tablets: '平板'
}

// 新增商品到编辑弹窗
const addProductToEdit = async () => {
  gridRef?.value?.insert({
    'image': 'https://img1.baidu.com/it/u=1559062020,1043707656&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    price: 10000,
    stock: 100,
    category: 'phones',
    status: 'on'
  })
}

const removeProduct = () => {
  const selectedRows = gridRef?.value?.getSelectRecords()
  if (selectedRows.length === 0) {
    TinyModal.confirm({
      message: '请选择要删除的商品',
      title: '删除商品',
      status: 'warning'
    })
    return
  }
  if (selectedRows.length > 0) {
    gridRef?.value?.removeSelecteds()
  }
}

const saveProduct = () => {
  setTimeout(() => {
    const data = gridRef?.value?.getTableData()
    $local.products = data.tableData
    TinyModal.message({
      message: '保存成功',
      status: 'success'
    })
  }, 1000)
}

const { server } = useNextServer({
  serverInfo: { name: 'commodity-config', version: '1.0.0' }
})
</script>

<style scoped lang="less">
.products-page {
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 16px 20px;
    background-color: #ffffff;
    border-radius: 8px;
    position: relative;
    border: 1px solid #edf2f7;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 4px;
      height: 24px;
      background: #1677ff;
      border-radius: 2px;
      transform: translateY(-50%);
    }

    h3 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
      color: #1f2937;
      position: relative;
      padding-left: 20px;
      letter-spacing: 0.3px;
    }
  }
}

.button-box {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  justify-content: flex-end;
}
.loading-state {
  padding: 20px;
}

.product-image {
  width: 40px;
  height: 40px;
  border-radius: 4px;
}
.page-content {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.03);
}
</style>
