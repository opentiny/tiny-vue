import ResizeObserver from '@opentiny/vue-renderless/common/deps/ResizeObserver'

const resizeMixin = ({ apiPrefix, refName, nodeWrapperSize }) => {
  apiPrefix = apiPrefix || 'rszmx'
  refName = refName || 'chart'
  nodeWrapperSize = nodeWrapperSize || 32

  const observer = `${apiPrefix}ResizeObserver`
  const observed = `${apiPrefix}ResizeObserved`

  return {
    mounted() {
      this.$nextTick(() => {
        const observedElement = this.$el.parentNode

        if (observedElement) {
          this[observer] = new ResizeObserver(() => {
            window.requestAnimationFrame(() => {
              if (this.$refs[refName]) {
                this.$refs[refName].refresh({ graphWidth: observedElement.offsetWidth, adjustX: -nodeWrapperSize / 2 })
              }
            })
          })

          this[observer].observe(observedElement)
          this[observed] = observedElement
        }
      })
    },
    beforeUnmount() {
      if (this[observer]) {
        this[observer].unobserve(this[observed])
        this[observer].disconnect()
        this[observer] = null
        this[observed] = null
      }
    }
  }
}

export default resizeMixin
