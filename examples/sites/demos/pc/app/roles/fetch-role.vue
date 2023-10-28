<template>
  <tiny-roles v-bind="services" @change="changeRole"></tiny-roles>
</template>

<script lang="jsx">
import { Roles, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyRoles: Roles
  },
  data() {
    return {
      roleId: '',
      env: {},
      services: {
        fetchRole: this.handleFetchRole,
        getEnvInfoSync: this.getEnvInfoSync,
        getCustomized: this.getCustomized
      }
    }
  },
  methods: {
    handleFetchRole() {
      return new Promise((resolve, reject) => {
        /* 此处自定义切换角色的请求逻辑，resolve 切换成功后重定向的url */
        setTimeout(() => {
          resolve(window.location.href)
        }, 2000)
      })
    },
    getEnvInfoSync() {
      /* 此处自定义请求当前环境用户的具体信息，数据返回格式如下 */
      const env = {
        user: {
          createdBy: 131269511,
          creationDate: '2017-09-27T00:00:00.000+0800',
          creationUserCN: null,
          lastUpdateDate: '2017-11-14T09:43:38.000+0800',
          lastUpdateUserCN: null,
          rowIdx: -1,
          userId: 131269511,
          userAccount: 'test1',
          employeeNumber: '12345678',
          userCN: 'test1',
          email: 'test1@test1.com',
          userType: 'HWE',
          dept: null,
          coalitionPermission: false,
          currentRole: {
            createdBy: null,
            creationDate: null,
            creationUserCN: null,
            lastUpdateDate: null,
            lastUpdateUserCN: null,
            rowIdx: -1,
            roleSort: null,
            roleId: 1001,
            roleName: 'System Admin',
            roleDesc: null,
            defaultUrl: '',
            status: null,
            applyStatus: null,
            owner: null,
            userAdminRole: null,
            grantedOperations: null,
            personalPermissions: ['vui$Service$Employee.Manage$delete', 'vui$Service$Employee.Manage$edit'],
            noPermissionUrl: ['vui$jalor/logs/listLogs.html'],
            permissionUrl: null,
            approvedByOld: null,
            approveMode: null,
            roleDimension: null,
            roleChk: null,
            roleList: null,
            currentScope: 'otc',
            appNames: ['vui']
          },
          currentProgramIds: [1001],
          currentPrograms: null,
          validRoles: [
            {
              createdBy: null,
              creationDate: null,
              creationUserCN: null,
              lastUpdateDate: null,
              lastUpdateUserCN: null,
              rowIdx: -1,
              roleSort: null,
              roleId: 1003,
              roleName: 'Guest',
              roleDesc: null,
              defaultUrl: null,
              status: null,
              applyStatus: null,
              owner: null,
              userAdminRole: null,
              grantedOperations: null,
              personalPermissions: null,
              noPermissionUrl: null,
              permissionUrl: null,
              approvedByOld: null,
              approveMode: null,
              roleDimension: null,
              roleChk: null,
              roleList: null,
              currentScope: 'otc',
              appNames: ['vui']
            },
            {
              createdBy: null,
              creationDate: null,
              creationUserCN: null,
              lastUpdateDate: null,
              lastUpdateUserCN: null,
              rowIdx: -1,
              roleSort: null,
              roleId: 1001,
              roleName: 'System Admin',
              roleDesc: null,
              defaultUrl: '',
              status: null,
              applyStatus: null,
              owner: null,
              userAdminRole: null,
              grantedOperations: null,
              personalPermissions: null,
              noPermissionUrl: null,
              permissionUrl: null,
              approvedByOld: null,
              approveMode: null,
              roleDimension: null,
              roleChk: null,
              roleList: null,
              currentScope: 'otc',
              appNames: ['vui']
            }
          ],
          defaultRole: 'vui:1001;',
          endDate: '2017-11-14T11:08:58.000+0800',
          programValidity: null,
          appNames: ['vui'],
          scopes: ['otc']
        },
        userSettingList: [
          {
            lastUpdateDate: '2017-11-01T11:39:36.000+0800',
            rowIdx: -1,
            settingId: 1006,
            settingKey: 'global',
            userId: 131269511,
            settingContent:
              '{"common":{"wideScreen":1,"lang":"zhCN","grid":{"pageSize":15},"lastCheckBrowserDate":0,"pushMsg":{"enable":1,"items":null},"infoTipLanguage":"zhCN","timeZone":"076+8"},"_settingId":1006}',
            numberOfSettings: 0
          }
        ]
      }

      this.env = env
      this.roleId = env.user.currentRole.roleId

      return env
    },
    getCustomized() {
      /* 此处自定义请求当前环境用户的自定义信息 */
      return new Promise((resolve, reject) => {
        resolve(this.env.userSettingList)
      })
    },
    changeRole(roleId) {
      /* 选中值发生变化时触发 */
      this.roleId = roleId

      Modal.message(`当前选中的角色id是${roleId}`)
    }
  }
}
</script>
