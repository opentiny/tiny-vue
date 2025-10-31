import { showDropdown } from '../utils/dropdown.ts'
import { getVerifyDateTag } from '../utils/validate.ts'
import { emitChangeModelEvent } from '../utils/tag.ts'

export function useDatePicker({ props, state, emit, nextTick, vm }) {
  const instance = vm || state.instance
  const onConfirmDate = async (confirm: boolean, isDateTimeType = false) => {
    if (!confirm) {
      state.propItem = { label: '' }  

      return
    }
    const newTag = await getVerifyDateTag(instance, state, props, isDateTimeType)
    if (newTag) {
      showDropdown(state, false)
      const newValue = props.modelValue.filter((prev) => prev.type !== newTag.type || prev.field !== newTag.field)
      newValue.push(newTag)
      emitChangeModelEvent({ emit, state, nextTick, newValue })
    } else {
      showDropdown(state)
    }
  }

  const handleDateShow = () => showDropdown(state)

  const pickerOptions = (startDate, endName = '') => ({
    disabledDate(time) {
      const { maxTimeLength = 0, min, max } = state.prevItem

      const endDate = state[endName]
      const curTime = time.getTime()
      // 有限制时间跨度timeLength时
      if (maxTimeLength > 0) {
        if (min || max) {
          if (endName && endDate) {
            const end = new Date(endDate).getTime()
            const start = !min && max ? end - maxTimeLength : Math.max(min.getTime(), end - maxTimeLength)
            return curTime < start || curTime > end
          } else if (!endName && startDate) {
            const start = new Date(startDate).getTime()
            const end = min && !max ? start + maxTimeLength : Math.min(max.getTime(), start + maxTimeLength)
            return curTime < start || curTime > end
          } else {
            return (min && curTime < min.getTime()) || (max && curTime > max.getTime())
          }
        } else {
          if (endName && endDate) {
            const end = new Date(endDate).getTime()
            const start = end - maxTimeLength
            return curTime < start || curTime > end
          } else if (!endName && startDate) {
            const start = new Date(startDate).getTime()
            const end = start + maxTimeLength
            return curTime < start || curTime > end
          } else {
            return false
          }
        }
      } else {
        if (min || max) {
          if (endName && endDate) {
            const end = new Date(endDate).getTime()
            return (min && curTime < min.getTime()) || curTime > end
          } else if (!endName && startDate) {
            const start = new Date(startDate).getTime()
            return curTime < start || (max && curTime > max.getTime())
          } else {
            return curTime < min || curTime > max
          }
        } else {
          if (endName && endDate) {
            const end = new Date(endDate).getTime()
            return curTime > end
          } else if (!endName && startDate) {
            const start = new Date(startDate).getTime()
            return curTime < start
          } else {
            return false
          }
        }
      }
    }
  })

  return {
    onConfirmDate,
    handleDateShow,
    pickerOptions
  }
}
