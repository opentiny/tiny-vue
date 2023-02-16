import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { Popeditor } from '@opentiny/vue'
import { nextTick, ref } from 'vue'
import { randomValues } from './common/globalConfig'

randomValues(global)

let value = ''

describe('pop-editor', () => {
  test('readonly & close', async () => {
    const handleClose = vi.fn()
    const wrapper = mount(() => <Popeditor v-model={value} readonly={true} onClose={handleClose}></Popeditor>)
    expect(wrapper.find('.tiny-popeditor-readonly').exists()).toBe(true)
    expect(wrapper.find('.tiny-dialog-box__wrapper').attributes().style).toBe('display: none;')
    await (wrapper.find('input')).trigger('click')
    await nextTick()
    expect(document.querySelector('.tiny-dialog-box__wrapper').style).not.toHaveProperty('display', 'none')
    await document.querySelector('.tiny-dialog-box__headerbtn').click()
    expect(handleClose).toHaveBeenCalled()
    await nextTick()
    expect(document.querySelector('.tiny-dialog-box__wrapper').style).toHaveProperty('display', 'none')
  })

  test('slot', async () => {
    const params = {
      name: ''
    }
    const wrapper = mount(() => <Popeditor v-model={value} v-slots={{
      search: (slotScope) => <><div class="item" style="text-align: center">公司名：<input type="text" v-model={params.name} /></div>
        <div class="item" style="margin-top: 10px; text-align: center">
          <tiny-button type="primary" onClick={slotScope.searchOp.doSearch(params)}>Search</tiny-button>
        </div></>
    }}></Popeditor>)
    expect(document.querySelector('.tiny-button--primary') !== null).toBe(true)
  })

})
