<template>
  <div class="demo">
    <tiny-search-box
      v-model="tags"
      :items="items"
      editable
      @first-level-select="FirstLevelSelect"
      @second-level-enter="SecondLevelEnter"
      @search="onSearch"
      @change="onChange"
      @clear="onClear"
      @tag-click="tagClick"
    />
  </div>
</template>

<script>
import TinySearchBox from '@opentiny/vue-search-box'

export default {
  components: {
    TinySearchBox
  },
  data() {
    return {
      items: [
        {
          // 该种单选情况没有可选项。
          label: '名称',
          field: 'testName',
          options: [] // 告知组件有异步options
        },
        {
          // 该种单选情况没有可选项。
          label: '名称1',
          field: 'testName1'
        },
        {
          label: '状态',
          type: 'checkbox',
          field: 'status',
          options: []
        },
        {
          label: '地区',
          type: 'checkbox',
          field: 'region'
        },
        {
          label: '标签',
          field: 'testTag',
          type: 'map',
          searchKeys: ['label', 'id'],
          options: []
        }
      ],
      tags: []
    }
  },
  methods: {
    FirstLevelSelect(field) {
      console.log('FirstLevelSelect:', field)

      setTimeout(() => {
        if (field === 'testName' && this.items[0].options.length === 0) {
          this.items[0].options = [
            {
              label: 'ecs-1'
            },
            {
              label: 'obs-2'
            },
            {
              label: 'vpc-1'
            },
            {
              label: 'evs-2'
            },
            {
              label: 'tms-1'
            }
          ]
        } else if (field === 'status' && this.items[2].options.length === 0) {
          this.items[2].options = [
            {
              label: '运行中'
            },
            {
              label: '已关机'
            },
            {
              label: '已注销'
            }
          ]
        } else if (field === 'testTag' && this.items[4].options.length === 0) {
          this.items[4].options = [
            {
              label: 'aaa',
              id: 'id-1',
              allValues: false,
              options: [
                {
                  label: '空值',
                  id: 'aaa-ddd'
                },
                {
                  label: '所有值',
                  id: 'aaa-eee'
                },
                {
                  label: '123',
                  id: 'aaa-fff'
                }
              ]
            },
            {
              label: 'bbb',
              id: 'id-2',
              options: [
                {
                  label: 'hhh',
                  id: 'bbb-hhh'
                },
                {
                  label: 'iii',
                  id: 'bbb-iii'
                },
                {
                  label: 'jjj',
                  id: 'bbb-jjj'
                }
              ]
            },
            {
              label: 'ccc',
              id: 'id-3',
              options: [
                {
                  label: 'kkk',
                  id: 'ccc-kkk'
                },
                {
                  label: 'lll',
                  id: 'ccc-lll'
                },
                {
                  label: 'mmm',
                  id: 'ccc-mmm'
                }
              ]
            }
          ]
        }
      }, 1000)
    },
    SecondLevelEnter(item, options) {
      console.log('SecondLevelEnter:', item, options)
    },
    onSearch(filters) {
      console.log('searchEvent:', filters)
    },
    onChange(newFilters, oldFilters) {
      console.log('changeEvent:', newFilters, oldFilters)
    },
    onClear() {
      console.log('onClear')
    },
    tagClick(tag) {
      console.log('tagClick:', tag)
    }
  }
}
</script>
