<template>
    <div>
        <tiny-grid :data="tableData" :edit-config="{ trigger: 'click', mode: 'row', showStatus: true }">
            <tiny-grid-column type="index" width="60"></tiny-grid-column>
            <tiny-grid-column field="name" title="插槽自定义列编辑" :editor="{component: 'input', autoselect: true}">
                <template #edit="data">
                    <tiny-autocomplete v-model="data.row.name" 
                        placeholder="请输入内容"></tiny-autocomplete>
                </template>
            </tiny-grid-column>
            <tiny-grid-column field="employees" title="员工人数"></tiny-grid-column>
            <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
            <tiny-grid-column field="address" title="地址"></tiny-grid-column>
            <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
        </tiny-grid>
    </div>
</template>
  
<script lang="jsx">
import { Grid, GridColumn, Autocomplete } from '@opentiny/vue'

export default {
    components: {
        TinyGrid: Grid,
        TinyGridColumn: GridColumn,
        TinyAutocomplete: Autocomplete
    },
    data() {
        return {
            tableData: [
                {
                    id: '1',
                    name: 'GFD科技YX公司',
                    area: '华东区',
                    address: '福州',
                    employees: 423,
                    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
                },
                {
                    id: '2',
                    name: 'WWWW科技YX公司',
                    area: '华南区',
                    address: '深圳福田区',
                    employees: 363,
                    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
                },
                {
                    id: '3',
                    name: 'RFV有限责任公司',
                    area: '华南区',
                    address: '中山市',
                    employees: 131,
                    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
                },
                {
                    id: '4',
                    name: 'TGBYX公司',
                    area: '华北区',
                    address: '梅州',
                    employees: 215,
                    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
                },
                {
                    id: '5',
                    name: 'YHN科技YX公司',
                    area: '华南区',
                    address: '韶关',
                    employees: 322,
                    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
                },
                {
                    id: '6',
                    name: '康康物业YX公司',
                    area: '华北区',
                    address: '广州天河区',
                    employees: 168,
                    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
                }
            ]
        }
    }
}
</script>