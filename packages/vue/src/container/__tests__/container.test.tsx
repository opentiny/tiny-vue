import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import Container from '@opentiny/vue-container'
import { nextTick, ref } from 'vue'

describe('PC Mode', () => {
    const mount = mountPcMode
    const data = ref({
        pattern: 'legend',
        asideWidth: 200,
        footerHeight: 80,
        headerHeight: 80
    })

    /**
     * attrs
     */
    test('aside width', async () => {
        const wrapper = mount(() => <Container asideWidth={data.value.asideWidth}></Container>)
        await nextTick()
        expect(wrapper.vm.$el.children[1].style.width).toEqual('200px')
    })

    test.todo('footer-height 底部高度')

    test.todo('header-height 头部高度')

    test.todo('pattern 版型类型;该属性的可选值为 default / simple / legend / classic / fashion')

    /**
     * slots
     */
    test('default slot', async () => {
        const wrapper = mount(() => <Container>
            {{
                default: () => <div id="mine_content">自定义插槽内容</div>
            }}
        </Container>)
        await nextTick()
        expect(wrapper.find('#mine_content').text()).contain('自定义插槽内容')
    })

    test.todo('header 头部内容')

    test.todo('aside 侧边内容')

    test.todo('footer 底部内容')
})