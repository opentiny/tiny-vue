import { type } from '@opentiny/utils'

export const noop = () => {}

export const callInterceptor = (interceptor, { args = [], done, canceled, error }) => {
  if (interceptor) {
    const returnVal = interceptor(...args)

    if (type.isPromise(returnVal)) {
      returnVal
        .then((value) => {
          if (value) {
            done()
          } else if (canceled) {
            canceled()
          }
        })
        .catch(error || noop)
    } else if (returnVal) {
      done()
    } else if (canceled) {
      canceled()
    }
  } else {
    done()
  }
}
