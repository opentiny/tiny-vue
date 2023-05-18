import { hooks } from '@opentiny/vue-common'
import { isNull } from '@opentiny/vue-renderless/common/type'

const { reactive } = hooks

const buildInstanceTemporary = (store) => {
  const temporary = {}

  temporary.stateId = null
  temporary.getId = null
  temporary.updateIdState = (vm) => {
    const id = temporary.getId()

    if (isNull(id)) {
      console.warn('[TINY Error][Mixin IdState] No id found for IdState with idProp')
    }

    if (id !== temporary.stateId) {
      if (!store[id]) {
        temporary.idStateInit(id, vm)
      }

      vm.idState = store[id]
    }
  }
  temporary.idStateInit = (id, vm) => {
    const factory = vm.$options.idState

    if (typeof factory === 'function') {
      const data = factory.call(vm, vm)

      store[id] = data
      temporary.stateId = id

      return data
    } else {
      throw new Error('[TINY Error][Mixin IdState] Missing `idState` function on component definition')
    }
  }

  return temporary
}

export default function ({ idProp, stateGetterName }) {
  idProp = idProp || ((vm) => vm.item.id)
  stateGetterName = stateGetterName || 'getIdState'

  const store = reactive({})

  return {
    data() {
      return { idState: null }
    },
    created() {
      this.temporary = buildInstanceTemporary(store)

      if (typeof idProp === 'function') {
        this.temporary.getId = () => idProp.call(this, this)
      } else {
        this.temporary.getId = () => this[idProp]
      }

      this.$watch(this.temporary.getId, {
        handler(value) {
          this.$nextTick(() => (this.temporary.stateId = value))
        },
        immediate: true
      })

      this.temporary.updateIdState(this)
    },
    beforeUpdate() {
      this.temporary.updateIdState(this)
    },
    [stateGetterName](id) {
      return isNull(id) ? store : store[id] ? store[id] : null
    }
  }
}
