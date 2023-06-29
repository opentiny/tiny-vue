import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import Layout from '@opentiny/vue-layout'
import { ref, nextTick } from 'vue'

describe('PC Mode', () => {
    const mount = mountPcMode

    /**
     * attrs
     */
    test('size', async () => {
        const wrapper = mount(() => <Layout size="medium"></Layout>)
        expect(wrapper.find('.tiny-layout').exists()).toBe(true)
    })
    test.todo('tag 标签')

    test.todo('flex 是否为flex容器')

    test.todo('gutter 子项的间隔的像素')

    test.todo('justify 子项的主轴对齐方向，可取值："start", "center", "end", "space-between", "space-around" ')

    test.todo('align 子项的副轴对齐方向，可取值："top", "middle", "bottom"')

    test.todo('order 子项的排序方式，可取值："asc", "des"。 不设置时，保留子项在模板中的顺序。')

    test.todo('tag 定义 Row 元素的渲染后的标签，默认为div')

    test.todo('noSpace 子项没有间隔，相当于gutter=0的时候')

    test.todo('span 子项占据的列数')

    test.todo('offset 子项的左偏移量')

    test.todo('no 子项排序编号')

    test.todo('move 子项的右偏移量')

    test.todo('xs/sm/md/lg/xl 响应式栅格数或者栅格属性对象')

    test.todo('tag 子项渲染后的标签')

    /**
     * slots
     */
    test('default slot', async () => {
        const wrapper = mount(() => <Layout>
            {{
                default: () => <div id="mine_content">自定义插槽内容</div>
            }}
        </Layout>)
        await nextTick()
        expect(wrapper.find('#mine_content').text()).contain('自定义插槽内容')
    })
})







