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

export const fetchDefaultData =
  ({ emit, fetchArea, nextTick, props, vm, state }) =>
  () => {
    let parent = ''

    nextTick(() => {
      emit('change-jcr', parent, vm.$refs.refInstance.$parent)
    })

    let promise

    if (props.fetchJcr) {
      promise = props.fetchJcr()
    } else {
      if (typeof fetchArea !== 'function') {
        throw new TypeError('[TINY Error][Area] Prop fetchJcr is mandatory when the framework service is not used')
      }

      promise = fetchArea({ label: 'JCR', parent })
    }

    promise.then((data) => (state.jcrData = data))

    state.jcr = ''
    state.region = ''
    state.rep = ''
    state.office = ''

    emit('update:modelValue', [state.jcr, state.region, state.rep, state.office])
  }

export const getRegion =
  ({ emit, fetchArea, nextTick, props, vm, state }) =>
  (value) => {
    state.jcr = value

    nextTick(() => {
      emit('change-region', value, vm.$refs.refInstance.$parent)
    })

    let promise

    if (props.fetchRegion) {
      promise = props.fetchRegion()
    } else {
      if (typeof fetchArea !== 'function') {
        throw new TypeError('[TINY Error][Area] Prop fetchRegion is mandatory when the framework service is not used')
      }

      promise = fetchArea({ label: 'Region', parent: value })
    }

    promise.then((data) => (state.regionData = data))

    state.region = ''
    state.office = ''
    state.rep = ''

    emit('update:modelValue', [state.jcr, state.region, state.rep, state.office])
  }

export const getRep =
  ({ emit, fetchArea, nextTick, props, vm, state }) =>
  (value) => {
    state.region = value

    nextTick(() => {
      emit('change-rep', value, vm.$refs.refInstance.$parent)
    })

    let promise

    if (props.fetchRep) {
      promise = props.fetchRep()
    } else {
      if (typeof fetchArea !== 'function') {
        throw new TypeError('[TINY Error][Area] Prop fetchRep is mandatory when the framework service is not used')
      }

      promise = fetchArea({ label: 'Rep. Office', parent: value })
    }

    promise.then((data) => (state.repData = data))

    state.office = ''
    state.rep = ''

    emit('update:modelValue', [state.jcr, state.region, state.rep, state.office])
  }

export const getOffice =
  ({ emit, fetchArea, nextTick, props, vm, state }) =>
  (value) => {
    state.rep = value

    nextTick(() => {
      emit('change-office', value, vm.$refs.refInstance.$parent)
    })

    let promise

    if (props.fetchOffice) {
      promise = props.fetchOffice()
    } else {
      if (typeof fetchArea !== 'function') {
        throw new TypeError('[TINY Error][Area] Prop fetchOffice is mandatory when the framework service is not used')
      }

      promise = fetchArea({ label: 'Office', parent: value })
    }

    promise.then((data) => (state.officeData = data))

    state.office = ''
    emit('update:modelValue', [state.jcr, state.region, state.rep, state.office])
  }

export const changeOffice =
  ({ emit, state }) =>
  (value) => {
    state.office = value
    emit('update:modelValue', [state.jcr, state.region, state.rep, state.office])
  }

export const beforeMount =
  ({ api, props }) =>
  () => {
    api.fetchDefaultData()

    let { modelValue } = props

    if (Array.isArray(modelValue) && modelValue.length) {
      let [jcr = '', region = '', rep = '', office = ''] = modelValue

      api.getRegion(jcr)
      api.getRep(region)
      api.getOffice(rep)
      api.changeOffice(office)
    }
  }
