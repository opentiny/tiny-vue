import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import UserContact from '@opentiny/vue-user-contact'
import { reactive, nextTick } from 'vue'

describe('PC Mode', () => {
    const mount = mountPcMode
    const Data = reactive({
        imgUrl: 'static/images//fruit.jpg',
        userName: '小红',
        userDescription: 'test1',
        values: [
            { text: '部门', value: '某部门' },
            { text: '邮件', value: 'example@example.com' },
            { text: '手机', value: '1234567890' }
        ]
    })
    /**
    * attrs
    */
    test('data', async () => {
        const wrapper = mount(() => <UserContact data={Data}></UserContact>, { attachTo: 'body' })
        await nextTick()
        expect(wrapper.find('.tiny-user-contact').exists()).toBeTruthy()
    })

    test.todo('show-img 是否显示头像，默认 true')

    test.todo('show-name 是否显示姓名 userName,默认 true')

    test.todo('show-number 是否显示工号 roleNumber,默认 true')

    test.todo('popper-class 为 popper 添加类名(可参考 popover 组件)')

    test.todo('popper-append-to-body 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false ')

    test.todo('espace espace 信息配置')

    /**
     * slots
     */
    test('default slot', async () => {
        const wrapper = mount(() => <UserContact data={Data}>
            {{
                default: () => <div class="tiny-user-contact">自定义插槽内容</div>
            }}
        </UserContact>)
        await nextTick()
        expect(wrapper.find('.tiny-user-contact').text()).contain('自定义插槽内容')
    })
})