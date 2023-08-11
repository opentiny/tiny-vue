<template>
  <dept
    ref="dept"
    class="tiny-hrapprover"
    v-model="state.dept"
    :fetch-dept-list="fetchDeptList"
    :fetch-dept-by-value="fetchDeptByValue"
    :fetch-dept="fetchDept"
    @close="resetPerson"
    @confirm="hrChange"
    :disabled="disabled"
    @selected="selectedDept"
    :title="title"
    @cancel="cancel"
  >
    <template #hrapprover>
      <div class="tiny-hrapprover__list" v-loading="state.loading">
        <table v-if="state.hrList.length" width="100%">
          <thead>
            <tr>
              <th width="50px"></th>
              <th>{{ t('ui.hrapprover.approver') }}</th>
              <th>{{ t('ui.hrapprover.remark') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(hr, index) in state.hrList" :key="index">
              <td style="text-align: center">
                <radio v-model="state.approvalPerson" :label="hr.approval_person">&nbsp;</radio>
              </td>
              <td>{{ hr.approval_person }}</td>
              <td>{{ hr.remarks }}</td>
            </tr>
          </tbody>
        </table>
        <div v-else>
          <div class="tiny-hrapprover__error">
            {{ t('ui.hrapprover.noapprover') }}
          </div>
        </div>
      </div>
    </template>
  </dept>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/hrapprover/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Dept from '@opentiny/vue-dept'
import Loading from '@opentiny/vue-loading'
import { message } from '@opentiny/vue-modal'
import Radio from '@opentiny/vue-radio'
import { t } from '@opentiny/vue-locale'

export default defineComponent({
  inheritAttrs: false,
  props: [
    ...props,
    'modelValue',
    'disabled',
    'approvalPerson',
    'category',
    'fetchDeptList',
    'fetchHrapprover',
    'fetchDeptByValue',
    'fetchDept',
    'title'
  ],
  components: {
    Dept,
    Radio
  },
  directives: {
    loading: Loading.directive
  },
  provide() {
    return {
      hrapprover: this
    }
  },
  setup(props, context) {
    return Object.assign(setup({ props, context, renderless, api }), {
      showModal() {
        message({ message: t('ui.hrapprover.noselected'), status: 'error' })
      }
    })
  }
})
</script>
