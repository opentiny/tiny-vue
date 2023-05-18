import { addClass, removeClass } from '@opentiny/vue-renderless/common/deps/dom'
export const generateFixedClassName = ({ $table, bodyElem, leftList, rightList, }) => {
  if (!$table || !bodyElem) {
    return
  }

  const scrollLeft = bodyElem.scrollLeft

  if (leftList.length) {
    if (scrollLeft === 0) {
      removeClass($table.$el, 'tiny-grid-fixed__left')
    } else {
      addClass($table.$el, 'tiny-grid-fixed__left')
    }
  }

  if (rightList.length) {
    const isShowRightFixed = bodyElem.scrollWidth - bodyElem.clientWidth - bodyElem.scrollLeft

    if (isShowRightFixed === 0) {
      removeClass($table.$el, 'tiny-grid-fixed__right')
    } else {
      addClass($table.$el, 'tiny-grid-fixed__right')
    }
  }
}
