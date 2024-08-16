import { isPromise } from './type'

export const noop = () => {}

export const callInterceptor = (interceptor, { args = [], done, canceled, error }) => {
  if (interceptor) {
    const returnVal = interceptor(...args)

    if (isPromise(returnVal)) {
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
