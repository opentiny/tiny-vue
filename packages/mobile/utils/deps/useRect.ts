const isWindow = (val) => val === window
const makeDOMRect = (width, height) => ({
  top: 0,
  left: 0,
  width,
  right: width,
  height,
  bottom: height
})

export const useRect = (unref) => (elOrRef) => {
  const el = unref(elOrRef)

  if (isWindow(el)) {
    const width = el.innerWidth
    const height = el.innerHeight
    return makeDOMRect(width, height)
  }

  if (el && el.getBoundingClientRect) {
    return el.getBoundingClientRect()
  }

  return makeDOMRect(0, 0)
}
