<template>
  <div class="tiny-grid-custom-switch">
    <tiny-layout>
      <tiny-row no-space>
        <tiny-col :span="12">
          <div class="tiny-grid-custom-switch__title">
            <tiny-alert
              v-if="historyConfig.showTitle"
              :description="historyConfig.title || t('ui.grid.individuation.switchtitle')"
              :closable="false"
            ></tiny-alert>
          </div>
        </tiny-col>
      </tiny-row>
      <tiny-row no-space>
        <tiny-col v-if="historyConfig.showSave" :span="2">
          <div>
            <tiny-button type="primary" size="mini" :disabled="historyConfig.saveDisabled || saveDisabled" @click="handleSave">{{
              historyConfig.saveText || t('ui.grid.individuation.switchsave')
            }}</tiny-button>
          </div>
        </tiny-col>
        <tiny-col :span="2">
          <div class="tiny-grid-custom-switch__label">
            {{ historyConfig.labelText || t('ui.grid.individuation.switchlabel') }}
          </div>
        </tiny-col>
        <tiny-col :span="5">
          <div class="tiny-grid-custom-switch__content">
            <tiny-select
              clearable
              ref="select"
              value-field="id"
              text-field="name"
              :placeholder="historyConfig.selectPlaceholder || t('ui.select.placeholder')"
              :disabled="historyConfig.selectDisabled || selectDisabled"
              :options="options"
              @change="handleSelectChange"
              v-model="selected"
            ></tiny-select>
          </div>
        </tiny-col>
        <tiny-col :span="3">
          <div>
            <span
              v-if="historyConfig.showApply"
              :title="historyConfig.applyTitle || t('ui.grid.individuation.switchapply')"
              class="tiny-grid-custom-switch__icon-btn"
              :class="{
                'tiny-grid-custom-switch__icon-btn--disabled': historyConfig.applyDisabled || applyDisabled
              }"
              @click="handleApply"
            >
              <component :is="historyConfig.applyIcon || IconSave" />
            </span>
            <span
              v-if="historyConfig.showEdit"
              :title="historyConfig.editTitle || t('ui.grid.individuation.switchedit')"
              class="tiny-grid-custom-switch__icon-btn"
              :class="{
                'tiny-grid-custom-switch__icon-btn--disabled': historyConfig.editDisabled || editDisabled
              }"
              @click="handleEdit"
            >
              <component :is="historyConfig.editIcon || IconEdit" />
            </span>
            <span
              v-if="historyConfig.showDel"
              :title="historyConfig.delTitle || t('ui.grid.individuation.switchdel')"
              class="tiny-grid-custom-switch__icon-btn"
              :class="{
                'tiny-grid-custom-switch__icon-btn--disabled': historyConfig.delDisabled || delDisabled
              }"
              @click="handleDel"
            >
              <component :is="historyConfig.delIcon || IconDel" />
            </span>
          </div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
    <!-- Save template confirm -->
    <tiny-dialog-box
      top="30vh"
      width="420px"
      dialog-class="tiny-grid-custom-switch__dialog-box"
      draggable
      append-to-body
      :visible="visible"
      :close-on-click-modal="false"
      :title="dialogTitle"
      @update:visible="visible = $event"
    >
      <!-- save -->
      <div v-if="status === 'save'" class="tiny-grid-custom-switch__confirm-btns">
        <tiny-button type="primary" @click="handleSaveConfirm('save')">{{ t('ui.grid.individuation.switchonlytemp') }}</tiny-button>
        <tiny-button @click="handleSaveConfirm('save-apply')">{{ t('ui.grid.individuation.switchtempapply') }}</tiny-button>
        <tiny-button @click="handleSaveConfirm('overwrite')" :disabled="!selected">{{ t('ui.grid.individuation.switchtempoverwrite') }}</tiny-button>
      </div>
      <!-- apply -->
      <template v-if="status === 'apply'">
        <div class="tiny-grid-custom-switch__del-tip">{{ selectedName }}</div>
        <div class="tiny-grid-custom-switch__del-tip">
          {{ t('ui.grid.individuation.switchapplycon') }}
        </div>
      </template>
      <!-- edit -->
      <template v-if="status === 'edit'">
        <tiny-input v-model="editName"></tiny-input>
      </template>
      <!-- del -->
      <template v-if="status === 'del'">
        <div class="tiny-grid-custom-switch__del-tip">{{ selectedName }}</div>
        <div class="tiny-grid-custom-switch__del-tip">
          {{ t('ui.grid.individuation.switchdelcon') }}
        </div>
      </template>
      <template #footer>
        <template v-if="~['apply', 'edit', 'del'].indexOf(status)">
          <template v-if="status === 'apply'">
            <tiny-button type="primary" @click="handleApplyConfirm('yes')">{{ t('ui.grid.individuation.switchdelyes') }}</tiny-button>
            <tiny-button @click="handleApplyConfirm('no')">{{ t('ui.grid.individuation.switchdelno') }}</tiny-button>
          </template>
          <template v-if="status === 'edit'">
            <tiny-button type="primary" :disabled="!editName" @click="handleEditConfirm('yes')">{{ t('ui.grid.individuation.switchdelyes') }}</tiny-button>
            <tiny-button @click="handleEditConfirm('no')">{{ t('ui.grid.individuation.switchdelno') }}</tiny-button>
          </template>
          <template v-if="status === 'del'">
            <tiny-button type="primary" @click="handleDelConfirm('yes')">{{ t('ui.grid.individuation.switchdelyes') }}</tiny-button>
            <tiny-button @click="handleDelConfirm('no')">{{ t('ui.grid.individuation.switchdelno') }}</tiny-button>
          </template>
        </template>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script>
import Button from '@opentiny/vue-button'
import Select from '@opentiny/vue-select'
import Input from '@opentiny/vue-input'
import Layout from '@opentiny/vue-layout'
import Row from '@opentiny/vue-row'
import Col from '@opentiny/vue-col'
import Alert from '@opentiny/vue-alert'
import DialogBox from '@opentiny/vue-dialog-box'
import { iconSave, iconEdit, iconDel } from '@opentiny/vue-icon'
import { t } from '@opentiny/vue-locale'
import { GridTools } from '@opentiny/vue-grid'
import { find } from '@opentiny/vue-renderless/grid/static/'
import { createCustom, getStorage, setStorage, mergeArray } from './multiple-history'

export default {
  name: 'TinyGridCustomSwitch',
  components: {
    TinyButton: Button,
    TinySelect: Select,
    TinyInput: Input,
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col,
    TinyAlert: Alert,
    TinyDialogBox: DialogBox
  },
  inject: {
    $grid: {
      default: null
    }
  },
  props: {
    historyConfig: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      IconSave: iconSave(),
      IconEdit: iconEdit(),
      IconDel: iconDel(),
      saveDisabled: true,
      selectDisabled: true,
      applyDisabled: true,
      editDisabled: true,
      delDisabled: true,
      options: [],
      option: null,
      selected: null,
      selectedName: null,
      visible: false,
      userKey: null,
      status: null,
      editName: null
    }
  },
  computed: {
    dialogTitle() {
      return this.status === 'apply'
        ? this.t('ui.grid.individuation.switchapply')
        : this.status === 'edit'
        ? this.t('ui.grid.individuation.switchedit')
        : this.status === 'del'
        ? this.t('ui.grid.individuation.switchdel')
        : this.t('ui.grid.individuation.switchconfirm')
    }
  },
  created() {
    let {
      settingOpts: { storage: storageType, storageKey },
      id: toolbarId
    } = this.$grid.toolBarVm

    if (!this.doCheck({ storageType })) return

    this.setUserKey()

    getStorage(this.historyConfig.storageKey, storageType, this.historyConfig.remoteMethod).then((storeObj) => {
      const optionArr = (storeObj || {})[toolbarId] || []

      this.options = optionArr.filter((opt) => (this.userKey ? opt.userKey === this.userKey : true))

      getStorage(storageKey, storageType, this.historyConfig.remoteSelectedMethod).then((storeObj) => {
        this.option = (storeObj || {})[toolbarId] || {}

        this.enableAll()
        this.setSelected()
      })
    })
  },
  methods: {
    t,
    handleSave() {
      this.status = 'save'
      this.visible = true
    },
    handleSaveConfirm(flag) {
      if (flag === 'overwrite' && !this.selected) return

      const toolBarVm = this.$grid.toolBarVm
      const customVm = toolBarVm.$refs.custom
      const item = createCustom(customVm.buildSettings(), this.userKey)
      const { id: toolbarId } = toolBarVm

      const business = (storeObj) => {
        storeObj = storeObj || {}

        const optionArr = storeObj[toolbarId] || []

        if (flag === 'save' || flag === 'save-apply') {
          optionArr.unshift(item)
        } else if (flag === 'overwrite') {
          let index, customId, customName

          for (let i = 0; i < optionArr.length; i++) {
            if (optionArr[i].id === this.selected) {
              index = i
              customId = this.selected
              customName = this.selectedName

              break
            }
          }

          item.id = customId
          item.name = customName
          optionArr.splice(index, 1, item)
        }

        storeObj[toolbarId] = optionArr

        return storeObj
      }

      const postOperate = () => {
        if (flag === 'save-apply' || flag === 'overwrite') {
          customVm.multipleHistoryId = item.id
          customVm.saveSettings()
        }

        this.visible = false
        this.status = null
      }

      this.doStorage(business, postOperate)
    },
    handleApply() {
      if (this.historyConfig.applyDisabled || this.applyDisabled || !this.selected || this.option.id === this.selected) {
        return
      }

      this.status = 'apply'
      this.visible = true
    },
    handleApplyConfirm(flag) {
      if (flag === 'yes') {
        const toolBarVm = this.$grid.toolBarVm
        const { id: toolbarId } = toolBarVm
        const customVm = toolBarVm.$refs.custom
        let customId
        let noStore = true

        const business = (storeObj) => {
          storeObj = storeObj || {}

          let optionArr = storeObj[toolbarId] || []
          let selected = optionArr.find((opt) => opt.id === this.selected)

          if (selected) {
            delete selected.setting.custom.id
            customVm.columns = mergeArray(customVm.columns, selected.setting.custom.columns)
            customVm.settings.pageSize = selected.setting.custom.pageSize
            customVm.settings.sortType = selected.setting.custom.sortType
            customId = selected.id
          }

          storeObj[toolbarId] = optionArr

          return storeObj
        }

        const postOperate = () => {
          customVm.multipleHistoryId = customId
          customVm.saveSettings()

          this.visible = false
          this.status = null
        }

        this.doStorage(business, postOperate, noStore)
      }

      this.visible = false
      this.status = null
    },
    handleEdit() {
      if (this.historyConfig.editDisabled || this.editDisabled || !this.selected) {
        return
      }

      this.editName = this.selectedName
      this.status = 'edit'
      this.visible = true
    },
    handleEditConfirm(flag) {
      if (flag === 'yes') {
        if (!this.editName) return

        const { id: toolbarId } = this.$grid.toolBarVm

        const business = (storeObj) => {
          storeObj = storeObj || {}

          let optionArr = storeObj[toolbarId] || []
          let selected = optionArr.find((opt) => opt.id === this.selected)

          selected && (selected.name = this.editName)
          storeObj[toolbarId] = optionArr

          return storeObj
        }

        const postOperate = () => {
          this.setSelected()

          this.visible = false
          this.status = null
          this.editName = null
        }

        this.doStorage(business, postOperate)
      }

      if (flag === 'no') {
        this.visible = false
        this.status = null
        this.editName = null
      }
    },
    handleDel() {
      if (this.historyConfig.delDisabled || this.delDisabled || !this.selected) {
        return
      }

      this.status = 'del'
      this.visible = true
    },
    handleDelConfirm(flag) {
      if (flag === 'yes') {
        const { id: toolbarId } = this.$grid.toolBarVm

        const business = (storeObj) => {
          storeObj = storeObj || {}

          let optionArr = storeObj[toolbarId] || []

          optionArr = optionArr.filter((opt) => opt.id !== this.selected)
          storeObj[toolbarId] = optionArr

          return storeObj
        }

        const postOperate = () => {
          this.setSelected()

          this.visible = false
          this.status = null
        }

        this.doStorage(business, postOperate)
      }

      if (flag === 'no') {
        this.visible = false
        this.status = null
      }
    },
    doStorage(business, postOperate, noStore) {
      const toolBarVm = this.$grid.toolBarVm
      const {
        settingOpts: { storage: storageType },
        id: toolbarId
      } = toolBarVm

      getStorage(this.historyConfig.storageKey, storageType, this.historyConfig.remoteMethod).then((storeObj) => {
        storeObj = business(storeObj)

        if (!noStore) {
          setStorage(this.historyConfig.storageKey, storeObj, storageType, toolBarVm, 'multiple-history')

          this.options = storeObj[toolbarId].filter((opt) => (this.userKey ? opt.userKey === this.userKey : true))
        }

        setTimeout(postOperate)
      })
    },
    handleSelectChange() {
      if (this.selected) {
        const item = find(this.options, (item) => item.id === this.selected)
        this.selectedName = item ? item.name : null
      } else {
        this.selectedName = null
      }

      this.fixStatus()
    },
    doCheck({ storageType }) {
      if (storageType === 'remote') {
        if (!this.historyConfig.remoteMethod || typeof this.historyConfig.remoteMethod !== 'function') {
          GridTools.error('ui.grid.error.remoteMethod')
          return false
        }

        if (!this.historyConfig.remoteSelectedMethod || typeof this.historyConfig.remoteSelectedMethod !== 'function') {
          GridTools.error('ui.grid.error.remoteSelectedMethod')
          return false
        }
      }

      return true
    },
    setUserKey() {
      this.userKey = ~['userId', 'userAccount'].indexOf(this.historyConfig.userKey)
        ? this.$grid.$service
          ? this.$grid.$service.base.getEnvInfoSync().user[this.historyConfig.userKey]
          : null
        : null
    },
    setSelected() {
      this.selected = this.option ? this.option.id : ''

      if (this.selected) {
        const item = find(this.options, (item) => item.id === this.selected)

        this.selected = item ? this.selected : null
        this.selectedName = item ? item.name : null
      }

      this.fixStatus()
    },
    fixStatus() {
      this.applyDisabled = false
      this.editDisabled = false
      this.delDisabled = false

      if (!this.selectedName) {
        this.editDisabled = true
        this.delDisabled = true
      }

      if (!this.selectedName || this.option.id === this.selected) {
        this.applyDisabled = true
      }

      const customVm = this.$grid.toolBarVm.$refs.custom

      customVm.saveDisabled = false

      if (this.selected) {
        customVm.saveDisabled = true
      }
    },
    enableAll() {
      this.saveDisabled = false
      this.selectDisabled = false
      this.applyDisabled = false
      this.editDisabled = false
      this.delDisabled = false
    }
  }
}
</script>
