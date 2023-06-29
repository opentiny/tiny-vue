import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Image from '@opentiny/vue-image'
import { nextTick, ref } from 'vue'

describe('PC Mode', () => {
    const mount = mountPcMode
    const url = ref('/static/images/mountain.png')
    /**
     * attrs
     */
    test('src attr', async () => {
        const wrapper = mount(() => <Image style="width: 100px; height: 100px" src={url.value} />)
        expect(wrapper.findComponent({ name: 'tinyImage' }).exists()).toBeTruthy()
        vi.useFakeTimers()
        setTimeout(() => () => {
            expect(wrapper.find('.tiny-user-contact').exists()).toBeTruthy()
        }, 1000)
        vi.runAllTimers()
    })

    test.todo('fit 确定图片如何适应容器框，同原生 object-fit;该属性的可选值为 fill / contain / cover / none / scale-down')

    test.todo('lazy 是否开启懒加载')

    test.todo('scroll-container 开启懒加载后，监听 scroll 事件的容器')

    test.todo('preview-src-list 开启图片预览功能')

    test.todo('z-index 设置图片预览的 z-index')

    /**
     * slots
     */
    test('error slot', async () => {
        const wrapper = mount(() => <Image src=''>
            {{
                error: () => <div id='mine_content'>自定义加载失败提示内容</div>
            }}
        </Image>)
        await nextTick()

        vi.useFakeTimers()
        setTimeout(() => () => {
            expect(wrapper.find('#mine_content').text()).contain('自定义加载失败提示内容')
        }, 1000)
        vi.runAllTimers()
    })

    test.todo('placeholder 图片未加载的占位内容')

    test.todo('error 加载失败的内容')

    /**
     * events
     */
    test('load event', async () => {
        const loadHandler = vi.fn()
        const wrapper = mount(() => <Image src={url.value} onLoad={loadHandler}></Image>)
        vi.useFakeTimers()
        setTimeout(() => () => {
            expect(loadHandler).toHaveBeenCalled()
        }, 5000)
        vi.runAllTimers()
    })

    test.todo('error 图片加载失败触发')
})