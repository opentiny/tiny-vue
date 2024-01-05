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

  test('footer height', async () => {
    const wrapper = mount(() => (
      <Container footerHeight={data.value.footerHeight} pattern={data.value.pattern}></Container>
    ))
    await nextTick()
    expect(wrapper.vm.$el.children[3].style.height).toEqual('80px')
  })

  test('header height', async () => {
    const wrapper = mount(() => <Container headerHeight={data.value.headerHeight}></Container>)
    await nextTick()
    expect(wrapper.vm.$el.children[0].style.height).toEqual('80px')
  })

  // pattern 版型类型; 该属性的可选值为 default / simple / legend / classic / fashion
  test.each([
    ['default', 'default pattern should have the proper class'],
    ['simple', 'simple pattern should have the proper class'],
    ['legend', 'legend pattern should have the proper class'],
    ['classic', 'classic pattern should have the proper class'],
    ['fashion', 'fashion pattern should have the proper class']
  ])('pattern %s', async (pattern, _description) => {
    const wrapper = mount(() => <Container pattern={pattern}></Container>)
    await nextTick()
    expect(wrapper.find(`.${pattern}`).exists()).toBe(true)
  })

  /**
   * slots
   */
  test('default slot', async () => {
    const wrapper = mount(() => (
      <Container>
        {{
          default: () => <div id="mine_content">自定义插槽内容</div>
        }}
      </Container>
    ))
    await nextTick()
    expect(wrapper.find('#mine_content').text()).contain('自定义插槽内容')
  })

  test('header slot', async () => {
    const wrapper = mount(() => (
      <Container>
        {{
          header: () => <div id="mine_header">自定义插槽内容</div>
        }}
      </Container>
    ))
    await nextTick()
    expect(wrapper.find('#mine_header').text()).contain('自定义插槽内容')
  })

  test('aside slot', async () => {
    const wrapper = mount(() => (
      <Container>
        {{
          aside: () => <div id="mine_aside">自定义插槽内容</div>
        }}
      </Container>
    ))
    await nextTick()
    expect(wrapper.find('#mine_aside').text()).contain('自定义插槽内容')
  })

  test('footer slot', async () => {
    const wrapper = mount(() => (
      <Container pattern={data.value.pattern}>
        {{
          footer: () => <div id="mine_footer">自定义插槽内容</div>
        }}
      </Container>
    ))
    await nextTick()
    expect(wrapper.find('#mine_footer').text()).contain('自定义插槽内容')
  })
})
