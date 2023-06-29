import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { nextTick } from 'vue'
import { describe, expect, test } from 'vitest'
import UserHead from '@opentiny/vue-user-head'

describe('PC Mode', () => {
    const mount = mountPcMode

    /**
    * attrs
    */
    test('background-color', async () => {
        const wrapper = mount(() => <UserHead background-color='rgb(194, 194, 194)'></UserHead>)
        const userHeadEl = wrapper.find('.tiny-user-head__portrait').element as HTMLElement
        expect(userHeadEl.style.getPropertyValue('background-color')).toBe(
            'rgb(194, 194, 194)'
        )
    })
    test.todo('color 设置文字颜色')

    test.todo('message-total 设置消息计数')

    test.todo('message-type 规定消息类型 details|basic 可选 。;该属性的可选值为 details / basic')

    test.todo('message-upper-limit 设置消息显示上限')

    test.todo('min 设置小尺寸样式')

    test.todo('round 设置圆形模式')

    test.todo('type 设置头像类型，icon|image|label 可选。;该属性的可选值为 icon / image / label')

    test.todo('value 设置type=icon 时为图标类名，type=label时为字体串，type=image时为资源路径')


    /**
    * slots
    */
    test('default slot', async () => {
        const wrapper = mount(() => <UserHead>
            {{
                default: () => <div id='mine_content'>自定义插槽内容</div>
            }}
        </UserHead>)
        await nextTick()
        expect(wrapper.find('#mine_content').text()).contain('自定义插槽内容')
    })
})