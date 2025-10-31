// import { ref } from 'vue'
import Loading from '@opentiny/vue-loading'
import { debounce } from '../utils/index.ts'
import { hasTagItem, createNewTag, getTagId, emitChangeModelEvent } from '../utils/tag.ts'
import { showDropdown } from '../utils/dropdown.ts'

const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const getHighlightMatch = (labelRegex, label) => {
  const match = []
  let lastIndex = 0
  let result

  // 当正则表达式在label中找到匹配项时，不断进行匹配
  while ((result = labelRegex.exec(label)) !== null) {
    const startIndex = result.index // 获取当前匹配项的开始位置
    const endIndex = labelRegex.lastIndex // 获取当前匹配项的结束位置

    // 如果当前匹配项的开始位置大于上一次匹配项的结束位置，说明中间有未匹配的部分
    if (startIndex > lastIndex) {
      match.push(label.slice(lastIndex, startIndex)) // 将未匹配的部分添加到match数组中
    }

    match.push(label.slice(startIndex, endIndex)) // 将当前匹配项添加到match数组中
    lastIndex = endIndex // 更新上一次匹配项的结束位置
  }

  // 如果最后一次匹配项的结束位置小于label的长度，说明label的末尾还有未匹配的部分
  if (lastIndex < label.length) {
    match.push(label.slice(lastIndex)) // 将未匹配的部分添加到match数组中
  }

  return match
}

export function useMatch({ props, state, emit, nextTick }) {
  // const loadingInstance = ref(null)

  const getMatchList = async (keyword: string) => {
    // if (typeof document !== 'undefined') {
    //   !loadingInstance.value &&
    //     (loadingInstance.value = Loading.service({
    //       target: document.getElementById('potential-loading')
    //     }))
    // }
    state.potentialOptions = await props.potentialOptions.getMatchList(keyword)
    // loadingInstance.value && loadingInstance.value.close()
    showDropdown(state, true)
  }

  const handleSearch = (e) => {
    const { recordItems, propItem } = state
    const raw = typeof e === 'string' ? e : (e && e.target && typeof e.target.value === 'string' ? e.target.value : state.inputValue || '')
    const inputValue = String(raw).trim()
    const { maxlength } = props

    if (maxlength && maxlength < inputValue.length) {
      emit('exceed', maxlength)
      return
    }

    if (inputValue.length === 0) {
      showDropdown(state)
      return
    }

    Object.keys(state.matchItems).forEach((key) => {
      state.matchItems[key].attr = []
      state.matchItems[key].attrValue = []
    })

    const value = escapeRegExp(inputValue)
    const patt = new RegExp(value, 'i')
    const hasItem =
      propItem.label || !value ? null : recordItems.find((item) => item.type === 'map' && patt.test(item.label))
    if (hasItem) {
      state.propItem = { ...state.propItem, label: hasItem.label }
      state.inputValue = ''
      state.prevItem = hasItem
      state.backupPrevItem = hasItem
      state.backupList = hasItem.options || []
      return
    }

    state.filterList = state.backupList?.filter((item) => {
      if (patt.test(item.label)) {
        delete item.isFilter
        if (hasTagItem(state, item.label)) {
          state.checkboxGroup.push(`${state.prevItem.label}${item.label}`)
        }

        return true
      } else {
        item.isFilter = true
        return false
      }
    })

    const labelRegex = new RegExp(value, 'ig')
    const hightlighStr = inputValue.toLowerCase()

    // 有label，只在backupList搜索
    if (state.propItem.label) {
      state.backupList?.forEach((item) => {
        item.hightlighStr = hightlighStr
        const itemLabel = item.label
        if (patt.test(itemLabel)) {
          item.match = getHighlightMatch(labelRegex, itemLabel)
          item.isFilter = false
        } else {
          item.isFilter = true
        }
      })
      // 添加默认选项，未匹配有输入值到也展示面板
      if (state.backupList?.length || inputValue) {
        showDropdown(state)
      } else {
        showDropdown(state, false)
      }
      return
    }

    // 无label，需要全局搜
    for (const item of recordItems) {
      const { options = [], groupKey = '0', ...rest } = item
      const itemLabel = rest.label
      if (patt.test(itemLabel)) {
        const match = getHighlightMatch(labelRegex, itemLabel)
        state.matchItems[groupKey].attr.push({ ...item, match, hightlighStr })
      }
      for (const option of options) {
        const optionLabel = state.propItem.label ? itemLabel : `${itemLabel}：${option.label}`
        if (patt.test(optionLabel)) {
          const match = getHighlightMatch(labelRegex, optionLabel)
          state.matchItems[groupKey].attrValue.push({
            ...option,
            ...rest,
            options,
            hightlighStr,
            value: option.label,
            match
          })
        }
      }
    }

    if (value && props.potentialOptions && props.potentialOptions.getMatchList) {
      getMatchList(value)
    } else {
      showDropdown(state)
    }
  }

  const handleInput = debounce(handleSearch, 500)

  const resetBackupList = () => {
    state.backupList?.forEach((item) => item.isFilter && delete item.isFilter)
  }

  const selectFirstMap = (item, isFirst) => {
    const { options } = item
    const { prevItem, propItem } = state
    if (options) {
      showDropdown(state, false)
      state.propItem = { ...state.propItem, value: `${item.label}=` }
      state.isShowTagKey = false
      state.inputValue = ''

      state.backupList = item.options || []
      resetBackupList()

      state.backupList?.forEach((subItem) => {
        const value = propItem.value + subItem.label
        subItem.isChecked = hasTagItem(state, value)
      })
    } else {
      if (item.isChecked) {
        return
      }

      showDropdown(state, false)
      state.isShowTagKey = true
      resetBackupList()
      const { field, type } = prevItem
      const value = propItem.value + item.label
      const id = getTagId(props, prevItem, item)
      const newTag = createNewTag({ type, field, label: propItem.label, value, ...id })
      const tagList = [newTag]
      emitChangeModelEvent({ emit, state, nextTick, tagList })
    }
    if (isFirst) {
      showDropdown(state)
    }
  }

  return {
    handleInput,
    selectFirstMap
  }
}
