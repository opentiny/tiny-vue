<template>
  <tiny-dept
    v-model="value"
    :fetch-dept-by-value="getfetchDeptByValue"
    :fetch-dept="getfetchDept"
    :fetch-dept-list="getDeptList"
  ></tiny-dept>
</template>

<script lang="jsx">
import { Dept } from '@opentiny/vue'

// mock数据
const DEPT_LIST = [
  {
    'upperCode': '000001',
    'list': [
      {
        'coa_Combination': null,
        'hrCode': '022471',
        'dept_Code': null,
        'hrName': 'SZ技术',
        'coaCode': null
      },
      {
        'coa_Combination': null,
        'hrCode': '030055',
        'dept_Code': null,
        'hrName': 'SZ海洋网络',
        'coaCode': null
      },
      {
        'coa_Combination': null,
        'hrCode': '035021',
        'dept_Code': null,
        'hrName': '天闻数媒',
        'coaCode': null
      },
      {
        'coa_Combination': null,
        'hrCode': '022279',
        'dept_Code': null,
        'hrName': '贝托SZ',
        'coaCode': null
      },
      {
        'coa_Combination': null,
        'hrCode': '030736',
        'dept_Code': null,
        'hrName': '鼎桥通信',
        'coaCode': null
      }
    ]
  },
  {
    'upperCode': '023114',
    'list': [
      {
        'coa_Combination': null,
        'hrCode': '041963',
        'dept_Code': null,
        'hrName': 'BPIT&QM HRBP管理部',
        'coaCode': '0021.000.0001.041963'
      }
    ]
  },
  {
    'upperCode': '038384',
    'list': [
      {
        'coa_Combination': null,
        'hrCode': '038759',
        'dept_Code': null,
        'hrName': '公共技术平台部',
        'coaCode': '0021.000.0001.038759'
      }
    ]
  },
  {
    'upperCode': '022471',
    'list': [
      {
        'coa_Combination': null,
        'hrCode': '023338',
        'dept_Code': null,
        'hrName': '测试数据室XX',
        'coaCode': '0021.000.0001.023338'
      },
      {
        'coa_Combination': null,
        'hrCode': '027425',
        'dept_Code': null,
        'hrName': '中国XX测试数据部',
        'coaCode': '0021.000.0002.027425'
      },
      {
        'coa_Combination': null,
        'hrCode': '023093',
        'dept_Code': null,
        'hrName': '测试数据XX管理部',
        'coaCode': '0021.000.0001.023093'
      }
    ]
  },
  {
    'upperCode': '023093',
    'list': [
      {
        'coa_Combination': null,
        'hrCode': '038370',
        'dept_Code': null,
        'hrName': '业务应用与XX测试数据部',
        'coaCode': '0021.000.0001.038370'
      },
      {
        'coa_Combination': null,
        'hrCode': '038371',
        'dept_Code': null,
        'hrName': '企业架构与流程管理部',
        'coaCode': '0021.000.0001.038371'
      },
      {
        'coa_Combination': null,
        'hrCode': '023114',
        'dept_Code': null,
        'hrName': '测试数据XX人力资源部',
        'coaCode': '0021.000.0001.023114'
      },
      {
        'coa_Combination': null,
        'hrCode': '034899',
        'dept_Code': null,
        'hrName': '测试数据XX财经管理部',
        'coaCode': '0021.000.0001.034899'
      },
      {
        'coa_Combination': null,
        'hrCode': '023221',
        'dept_Code': null,
        'hrName': '测试数据XX质量与运营部',
        'coaCode': '0021.000.0001.023221'
      }
    ]
  },
  {
    'upperCode': '023338',
    'list': [
      {
        'coa_Combination': null,
        'hrCode': '023489',
        'dept_Code': null,
        'hrName': '中央XX测试数据部',
        'coaCode': '0021.000.0001.023489'
      }
    ]
  },
  {
    'upperCode': '023489',
    'list': [
      {
        'coa_Combination': null,
        'hrCode': '023286',
        'dept_Code': null,
        'hrName': 'XX应用交付部',
        'coaCode': '0021.000.0001.023286'
      }
    ]
  },
  {
    'upperCode': '023286',
    'list': [
      {
        'coa_Combination': null,
        'hrCode': '022471',
        'dept_Code': null,
        'hrName': 'XX应用实施部',
        'coaCode': '0021.000.0001.022471'
      }
    ]
  }
]

export default {
  components: {
    TinyDept: Dept
  },
  data() {
    return {
      value: '022471'
    }
  },
  methods: {
    getfetchDeptByValue(searchValue) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              'coaCode': '0021.000.0001.037106',
              'hrCode': '037106',
              'hrName': '无线网络业务架构与设计部',
              'coaStatus': '1-有效-VALID'
            },
            {
              'coaCode': '0021.000.0001.037271',
              'hrCode': '037271',
              'hrName': '服务架构与技术规划部',
              'coaStatus': '1-有效-VALID'
            },
            {
              'coaCode': '0021.000.0001.023475',
              'hrCode': '023475',
              'hrName': '测试数据室XX质量与运营部',
              'coaStatus': '1-有效-VALID'
            },
            {
              'coaCode': '0021.000.0001.023114',
              'hrCode': '023114',
              'hrName': '测试数据XX人力资源部',
              'coaStatus': '1-有效-VALID'
            },
            {
              'coaCode': '0021.000.0001.023093',
              'hrCode': '023093',
              'hrName': '测试数据XX管理部',
              'coaStatus': '1-有效-VALID'
            }
          ])
        }, 100)
      })
    },
    getfetchDept(code) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              'coaCode': '0021.000.0001.037106',
              'hrCode': '037106',
              'hrName': '无线网络业务架构与设计部',
              'coaStatus': '1-有效-VALID'
            },
            {
              'coaCode': '0021.000.0001.037271',
              'hrCode': '037271',
              'hrName': '服务架构与技术规划部',
              'coaStatus': '1-有效-VALID'
            },
            {
              'coaCode': '0021.000.0001.023475',
              'hrCode': '023475',
              'hrName': '测试数据室XX质量与运营部',
              'coaStatus': '1-有效-VALID'
            },
            {
              'coaCode': '0021.000.0001.023114',
              'hrCode': '023114',
              'hrName': '测试数据XX人力资源部',
              'coaStatus': '1-有效-VALID'
            },
            {
              'coaCode': '0021.000.0001.023093',
              'hrCode': '023093',
              'hrName': '测试数据XX管理部',
              'coaStatus': '1-有效-VALID'
            }
          ])
        }, 100)
      })
    },
    getDeptList(upperCode) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (!upperCode) return resolve(DEPT_LIST[0].list)
          for (let i = 0; i < DEPT_LIST.length; i++) {
            if (DEPT_LIST[i].upperCode === upperCode) {
              return resolve(DEPT_LIST[i].list || [])
            }
          }
        }, 100)
      })
    }
  }
}
</script>
