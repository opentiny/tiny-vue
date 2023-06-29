<template>
  <div>
    <p class="user-value">
      {{ user }}
    </p>
    <tiny-user v-model="user" v-bind="service" sort-by-fetch-data></tiny-user>
  </div>
</template>

<script lang="jsx">
import { User, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyUser: User
  },
  data() {
    return {
      user: '441047913162396',
      service: {
        fetchSuggestUser: this.getSuggestUser,
        fetchW3Accounts: this.fetchW3Accounts
      }
    }
  },
  methods: {
    getSuggestUser(userCN) {
      return new Promise((resolve) => {
        /* 此处为输入联想搜索逻辑，，数据返回格式如下 */
        Modal.message(`用户输入的值为：${userCN}`)

        const result = [
          {
            'programValidity': null,
            'employeeNumber': '12345678',
            'userType': 'HWE',
            'currentRole': null,
            'currentProgramIds': null,
            'validRoles': null,
            'defaultRole': 'otc:2749;',
            'coalitionPermission': false,
            'endDate': '2017-11-13T14:26:06.000+0800',
            'dept': null,
            'userId': 421000103624183, // value-field
            'userAccount': 'test1',
            'userCN': 'test1', // text-field
            'email': 'test1@test1.com',
            'creationDate': '2012-08-17T11:26:18.000+0800',
            'lastUpdateDate': '2015-03-30T14:27:34.000+0800',
            'rowIdx': -1,
            'creationUserCN': null,
            'lastUpdateUserCN': null
          },
          {
            'programValidity': null,
            'employeeNumber': '12345678',
            'userType': 'WX',
            'currentRole': null,
            'currentProgramIds': null,
            'validRoles': null,
            'defaultRole': null,
            'coalitionPermission': false,
            'endDate': null,
            'dept': null,
            'userId': 435259704104388,
            'userAccount': 'test2',
            'userCN': 'test2',
            'email': 'test2@test2.com',
            'creationDate': '2017-10-23T11:16:59.000+0800',
            'lastUpdateDate': '2017-10-23T11:16:59.000+0800',
            'rowIdx': -1,
            'creationUserCN': null,
            'lastUpdateUserCN': null
          },
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
          },
          {
            'programValidity': null,
            'employeeNumber': '12345678',
            'userType': 'WX',
            'currentRole': null,
            'currentProgramIds': null,
            'validRoles': null,
            'defaultRole': null,
            'coalitionPermission': false,
            'endDate': '2017-11-10T08:50:56.000+0800',
            'dept': null,
            'userId': 702973890055088,
            'userAccount': 'test4',
            'userCN': 'test4',
            'email': 'test4@test4.com',
            'creationDate': '2017-10-10T18:22:33.000+0800',
            'lastUpdateDate': '2017-10-10T18:22:33.000+0800',
            'rowIdx': -1,
            'creationUserCN': null,
            'lastUpdateUserCN': null
          }
        ]

        setTimeout(() => {
          resolve(result)
        }, 1000)
      })
    },
    fetchW3Accounts(userId) {
      /* 此为初始化时，v-model值不为空时，根据默认值查询用户数据，数据返回格式如下 */
      Modal.message(`v-model默认值为：${userId}`)

      return new Promise((resolve) => {
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

        setTimeout(() => {
          resolve(result)
        }, 1000)
      })
    }
  }
}
</script>
