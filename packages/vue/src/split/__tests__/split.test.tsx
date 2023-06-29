import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Split from '@opentiny/vue-split'
import { ref, nextTick } from 'vue'

describe('PC Mode', () => {
    const mount = mountPcMode
    const data = ref('0.5')

    /**
     * attrs
     */
    test('modelValue', () => {

        const wrapper = mount(() => <Split v-model={data.value}></Split>)
        expect(wrapper.find('.tiny-split-trigger-con').isVisible()).toBe(true)
    })

    test.todo('left-top-min 左面板 / 上面板最小阈值。')

    test.todo('mode 分割类型，可选值为 horizontal 或 vertical；默认值horizontal。;该属性的可选值为 horizontal / vertical')

    test.todo('right-bottom-min 右面板 / 下面板最小阈值。')

    test.todo('modelValue 分割面板的位置。')

    /**
     * slots
     */
    test('left slot', async () => {
        const wrapper = mount(() => <Split v-model={data.value}>
            {{
                left: () => <div class="tiny-split-trigger-con">自定义插槽内容</div>
            }}
        </Split>)
        await nextTick()
        expect(wrapper.find('.tiny-split-trigger-con').text()).contain('自定义插槽内容')
    })

    test.todo('left 左面板插槽')

    test.todo('right 右面板插槽')

    test.todo('top 上面板插槽')

    test.todo('bottom 下面板插槽')

    test.todo('trigger 拖拽插槽')

    /**
     * events
     */
    test('move start', async () => {
        const mousedown = vi.fn()
        const wrapper = mount(() => <Split v-model={data.value} onMoveStart={mousedown}></Split>)
        await wrapper.find('.tiny-split-trigger-con').trigger('mousedown')
        await nextTick()
        expect(mousedown).toHaveBeenCalled()
    })

    test.todo('moveend 拖拽结束的事件。;拖拽结束的事件。;无arguments')

    test.todo('moving 拖拽中的事件。;拖拽中的事件。;arg1:event (类型Object)')
})