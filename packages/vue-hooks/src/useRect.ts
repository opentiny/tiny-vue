const isWindow = (val: any) => val === window
const makeDOMRect = (width: number, height: number) => ({
  top: 0,
  left: 0,
  width,
  right: width,
  height,
  bottom: height
})

export const useRect = (unref: any) => (elOrRef: any) => {
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
