import type { ISharedRenderlessParamUtils } from '@/types'

export const onImportSuccess = (emit: ISharedRenderlessParamUtils<null>['emit'], warnings: string[]) => {
  emit('importXmlSuccess', warnings)
}

export const onImportFail = (
  emit: ISharedRenderlessParamUtils<null>['emit'],
  error: {
    warnings: string[]
  } & Error
) => {
  emit('importXmlError', error)
}
