import { describe, it, expect } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import MfTable from '../src/mobile-first/index.vue'

/**
 * 复现：多端表格在宽屏/移动端之间切换时报错
 *   Cannot assign to read only property '__v_skip' of object '#<Object>'
 *
 * 根因：mobile-first/index.vue 曾通过 `hooks.markRaw(this.$parent)` 标记父组件
 * 实例代理。Vue3 实例代理的 get 拦截器对 `__v_skip` 无条件返回 true，因此
 * `reactive(parentProxy)` 本就不会包装父级——markRaw 在此完全冗余。但 markRaw
 * 内部 `def(proxy, "__v_skip", true)` 会触发实例代理的 defineProperty 拦截器，
 * 经 set 拦截器执行 `ctx.__v_skip = value`，再由 Reflect.defineProperty 改为
 * 只读。由于父级 grid 实例在宽度切换时是同一个（只有 MfTable 反复挂载/卸载，
 * 或 config 因 cardConfig/listConfig 变化而重算），第二次 markRaw 调用会再次
 * 对只读的 __v_skip 赋值从而抛错。
 *
 * 修复：移除冗余且有害的 markRaw 调用，直接使用 `this.$parent`（与 Vue2 下
 * hooks.markRaw 为 no-op 的行为一致）。
 *
 * 以下两个用例分别覆盖两种触发路径，修复前都会抛出该 TypeError。
 */
const stubs = ['Exception', 'CustomEmpty', 'Tooltip', 'TableRow', 'ListView', 'GanttView', 'CustomView']

const gridState = () => ({
  viewType: 'default',
  mfShow: '',
  slots: {},
  renderEmpty: undefined,
  loading: false,
  maxHeight: 0,
  height: 0
})

const makeParent = () =>
  defineComponent({
    inject: ['$grid'],
    // cardConfig 声明为 prop，使 Root 传递的 cardConfig 能向下流转至 MfTable，
    // 从而真正触发 MfTable 的 config 计算属性重算（覆盖 markRaw 回归路径）
    props: {
      cardConfig: { type: Object, default: () => ({}) }
    },
    data: () => ({
      showMf: true,
      tableColumn: [],
      parentHeight: 0,
      height: 0,
      currentRow: null
    }),
    methods: {
      viewCls() {
        return ''
      }
    },
    render() {
      return this.showMf ? h(MfTable, { cardConfig: this.cardConfig, tableData: [] }) : h('div')
    }
  })

describe('mobile-first grid config markRaw on $parent', () => {
  it('does not throw when config recomputes (cardConfig changed)', async () => {
    const errors: unknown[] = []
    const Parent = makeParent()
    const Root = defineComponent({
      provide() {
        return { $grid: gridState() }
      },
      data: () => ({ cardConfig: {} }),
      render() {
        return h(Parent, { cardConfig: this.cardConfig })
      }
    })
    const wrapper = mount(Root, {
      global: {
        stubs,
        config: { errorHandler: (e: unknown) => errors.push(e) }
      }
    })

    expect(errors).toEqual([])

    // cardConfig 变化 -> config 重新计算（修复前第二次 markRaw 抛错）
    await wrapper.setData({ cardConfig: { a: 1 } })
    await nextTick()

    expect(errors).toEqual([])
    // 验证 cardConfig 已传递至 MfTable，确保 config 确实重算
    expect(wrapper.findComponent(MfTable).props('cardConfig')).toEqual({ a: 1 })
  })

  it('does not throw when MfTable remounts on the same parent (width toggle)', async () => {
    const errors: unknown[] = []
    const Parent = makeParent()
    const Root = defineComponent({
      provide() {
        return { $grid: gridState() }
      },
      render() {
        return h(Parent)
      }
    })
    const wrapper = mount(Root, {
      global: {
        stubs,
        config: { errorHandler: (e: unknown) => errors.push(e) }
      }
    })

    expect(errors).toEqual([])

    const parent = wrapper.findComponent(Parent).vm
    // 卸载 MfTable（宽屏 -> 不渲染移动端表格）
    parent.showMf = false
    await nextTick()
    // 重新挂载 MfTable（切回移动端宽度，复用同一父级实例）
    parent.showMf = true
    await nextTick()

    expect(errors).toEqual([])
  })
})
