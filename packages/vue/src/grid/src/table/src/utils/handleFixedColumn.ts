import { dom } from '@opentiny/utils'

export const generateFixedClassName = ({ $table, bodyElem, leftList, rightList }) => {
  if (!$table || !bodyElem) {
    return
  }

  const scrollLeft = bodyElem.scrollLeft

  if (leftList.length) {
    if (scrollLeft === 0) {
      dom.removeClass($table.$el, 'tiny-grid-fixed__left')
    } else {
      dom.addClass($table.$el, 'tiny-grid-fixed__left')
    }
  }

  if (rightList.length) {
    const isShowRightFixed = bodyElem.scrollWidth - bodyElem.clientWidth - bodyElem.scrollLeft

    if (isShowRightFixed === 0) {
      dom.removeClass($table.$el, 'tiny-grid-fixed__right')
    } else {
      dom.addClass($table.$el, 'tiny-grid-fixed__right')
    }
  }
}
