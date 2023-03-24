import { mount as _mount, shallowMount, createLocalVue, type MountingOptions } from '@vue/test-utils'
import { isVue2 } from '@opentiny/vue-common'

const mount = (inputComponent: any, options: MountingOptions<any> = {}) => {
  let mount$ = _mount

  if (isVue2) {
    (options as any).localVue = createLocalVue()

    if (options.props) {
      options.propsData = options.props
      delete options.props
    }

    if (options.global) {
      Object.assign(options, options.global)
      delete options.global
    }

    if (options.shallow === true) {
      mount$ = shallowMount
    }
  }

  const wrapper = mount$(inputComponent, options)

  if (isVue2) {
    wrapper.unmount = (wrapper as any).destory
  }

  return wrapper
}

const mountWithMode = (mode: string, inputComponent: any, options: MountingOptions<any> = {}) => {
  options.props = { ...options.props, tiny_mode: mode }

  return mount(inputComponent, options)
}

export const mountPcMode = (inputComponent: any, options: MountingOptions<any> = {}) =>
  mountWithMode('pc', inputComponent, options)

export const mountMobileMode = (inputComponent: any, options: MountingOptions<any> = {}) =>
  mountWithMode('mobile', inputComponent, options)

export const mountMobilefirstMode = (inputComponent: any, options: MountingOptions<any> = {}) =>
  mountWithMode('mobile-first', inputComponent, options)

export type { MountingOptions } from '@vue/test-utils'
