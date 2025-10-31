<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :items="dataSource" @change="onChange" />
  </div>
</template>

<script>
import TinySearchBox from "@opentiny/vue-search-box";

export default {
  components: {
    TinySearchBox
  },
  data() {
    return {
      tags: [],
      dataSource: [
        {
          label: '名称',
          field: 'testName',
          idMapKey: 'nameId', // 指定筛选项暴露 nameId 键值，可用来检索过滤
          options: [
            {
              label: 'ecs-1',
              nameId: 0
            },
            {
              label: 'obs-2',
              nameId: 2
            },
            {
              label: 'vpc-1',
              nameId: 3
            },
            {
              label: 'evs-2',
              nameId: 4
            },
            {
              label: 'tms-1',
              nameId: 5
            }
          ]
        },
        {
          label: '可用地区',
          field: 'testRegion',
          type: 'checkbox',
          options: [
            {
              label: '华南区',
              id: '2-1' // idMapKey默认是id
            },
            {
              label: '华北区',
              id: '2-2'
            },
            {
              label: '西北区',
              id: '2-3'
            },
            {
              label: '西南区',
              id: '2-4'
            }
          ]
        },
        {
          label: '标签',
          field: 'testTag',
          type: 'map',
          idMapKey: 'tagId',
          options: [
            {
              label: 'aaa',
              tagId: 'id-1',
              allValues: false,
              options: [
                {
                  label: '空值',
                  tagId: 'aaa-ddd'
                },
                {
                  label: '所有值',
                  tagId: 'aaa-eee'
                },
                {
                  label: '123',
                  tagId: 'aaa-fff'
                }
              ]
            },
            {
              label: 'bbb',
              tagId: 'id-2',
              options: [
                {
                  label: 'hhh',
                  tagId: 'bbb-hhh'
                },
                {
                  label: 'iii',
                  tagId: 'bbb-iii'
                },
                {
                  label: 'jjj',
                  tagId: 'bbb-jjj'
                }
              ]
            },
            {
              label: 'ccc',
              tagId: 'id-3',
              options: [
                {
                  label: 'kkk',
                  tagId: 'ccc-kkk'
                },
                {
                  label: 'lll',
                  tagId: 'ccc-lll'
                },
                {
                  label: 'mmm',
                  tagId: 'ccc-mmm'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    onChange(newFilters, oldFilters) {
      console.log('changeEvent:', JSON.stringify(newFilters), oldFilters)
    }
  }
}
</script>
