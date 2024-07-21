/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
// 定义组件的整体架构和生命周期管理
import { getUsers, cacheUser, saveCache, initService, syncCacheIds } from '../user'
import { initUser, showCard, showDetail, computedTextField, computedValueField } from './index'
// 定义该组件暴漏出的接口方法
export const api = ['state', 'showCard', 'showDetail']
// 管理virtual-scroll相关的逻辑和状态，不涉及实际渲染部分
export const renderless = (props, { reactive, watch, computed }, { service }) => {
  service = initService({ props, service })

  const api = {}
// 初始化状态
  const state = reactive({
    
  })
// 将处理virtual-scroll的方法绑定到api中（用initApi函数调用index.ts中的方法，添加到api对象）
  Object.assign(api, {
    state,

  })
// 监听属性和状态的变化+处理相应的逻辑（调用事件处理函数）+会调用index.ts的样式计算函数来调整样式
  // watch(() => props.modelValue, api.initUser, { immediate: true })
// 返回所有方法的api对象
  return api
}
