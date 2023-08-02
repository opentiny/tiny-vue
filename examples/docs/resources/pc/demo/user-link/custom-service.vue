<template>
  <tiny-user-link v-model="user" v-bind="service"></tiny-user-link>
</template>

<script lang="jsx">
import { UserLink } from '@opentiny/vue'

export default {
  components: {
    TinyUserLink: UserLink
  },
  data() {
    return {
      user: '441047913162396',
      employeeNumber: '',
      service: {
        fetchW3Accounts: this.fetchW3Accounts,
        fetchUser: this.fetchUser,
        getUserImageUrl() {
          return Promise.resolve('/static/images/dog1.png')
        }
      }
    }
  },
  methods: {
    fetchW3Accounts(args) {
      return new Promise((resolve, reject) => {
        const result = [
          {
            'programValidity': null,
            'employeeNumber': '12345678',
            'userType': 'HWE',
            'currentRole': null,
            'currentProgramIds': null,
            'validRoles': null,
            'defaultRole': null,
            'coalitionPermission': false,
            'endDate': '2017-10-26T11:48:56.000+0800',
            'dept': null,
            'userId': 441047913162396,
            'userAccount': 'test3',
            'userCN': 'test3',
            'email': 'test3@test3.com',
            'creationDate': '2015-01-06T09:38:41.000+0800',
            'lastUpdateDate': '2017-10-10T15:13:28.000+0800',
            'rowIdx': -1,
            'creationUserCN': null,
            'lastUpdateUserCN': null
          }
        ]

        this.employeeNumber = result[0].employeeNumber
        resolve(result)
      })
    },
    fetchUser() {
      return new Promise((resolve, reject) => {
        const result = {
          'sex': 'M',
          'l0_Name': 'SZ技术',
          'effective_Start_Date': '2011/10/14 00:00:00',
          'l3_Dept_Code': '038384',
          'person_Notes_Cn': 'test1 12345678',
          'l2_Name': '信息技术工程部',
          'short_Name': 'l12345678',
          'effective_End_Date': '4712/12/31 00:00:00',
          'person_Mail': '',
          'name': '公共技术测试数据部门',
          'location_second_area': 'Shenzhen',
          'upper_Name': 'IT技术架构与测试数据部',
          'coa_Combination': '0021.000.0001.038759',
          'l4_Name': '公共技术测试数据部门',
          'english_Name': 'zhang san',
          'dept_Code': '038759',
          'employee_Number': '12345678',
          'l0_Dept_Code': '022471',
          'l2_Dept_Code': '023268',
          'upper_Dept_Code': '038384',
          'l1_Name': '测试数据部',
          'location_country': 'China',
          'l4_Dept_Code': '038759',
          'start_Date': '2011/08/01 00:00:00',
          'contract_Location_Code': '010400',
          'l1_Dept_Code': '023093',
          'contract_Location_Name': 'China\\Guangdong-Shenzhen',
          'location_first_area': 'Guangdong',
          'last_Name': '张三',
          'language': 'CHN',
          'l3_Name': '测试与测试数据部'
        }

        resolve(result)
      })
    }
  }
}
</script>
