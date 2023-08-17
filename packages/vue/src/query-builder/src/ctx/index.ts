import { hooks } from '@opentiny/vue-common'

const getVm = () => hooks.inject('queryBuilderRoot')

export const provide = (name: string, value: any) => {
  const queryBuilderRoot: any = getVm()

  if (!queryBuilderRoot._provideData) {
    queryBuilderRoot._provideData = hooks.reactive({})
  }

  queryBuilderRoot._provideData[name] = value
}

export const QueryBuilderContext = (name: string) => {
  const queryBuilderRoot: any = getVm()

  if (!queryBuilderRoot._provideData) {
    queryBuilderRoot._provideData = hooks.reactive({})
  }
  const value = name ? queryBuilderRoot._provideData[name] : queryBuilderRoot._provideData

  return value
}
