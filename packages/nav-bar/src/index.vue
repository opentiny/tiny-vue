<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<script lang="jsx">
import { $prefix, h } from '@opentiny/vue-common' // 此处引入 h 是为了防止打包后 h 被重命名导致组件报错的问题
import { iconChevronLeft, iconPlus } from '@opentiny/vue-icon'

export default {
  name: $prefix + 'NavBar',
  props: {
    tiny_renderless: Function,
    title: String,
    subTitle: String,
    fixed: Boolean,
    zIndex: [Number, String],
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    rightArrow: Boolean
  },
  components: {
    leftIcon: iconChevronLeft(),
    rightIcon: iconPlus()
  },
  render() {
    const { leftArrow, rightArrow, leftText, rightText, $listeners, $attrs, title, zIndex, fixed, subTitle } = this
    const $slots = '$scopedSlots' in this ? this.$slots : this.$slots

    function noop() {}

    function LeftPart() {
      if ($slots.left) return $slots.left()

      return [
        leftArrow && <left-icon class="tiny-mobile-nav-bar__icon left-icon" />,
        leftText && h('span', { class: 'tiny-mobile-nav-bar__text left-text' }, leftText)
      ]
    }

    function RightPart() {
      if ($slots.right) return $slots.right()

      return [
        rightArrow && <right-icon class="tiny-mobile-nav-bar__icon right-icon" />,
        rightText && <span class="tiny-mobile-nav-bar__text right-text">{rightText}</span>
      ]
    }

    let clickLeftListener = $attrs && $attrs.onClickLeft
    let clickRightListener = $attrs && $attrs.onClickRight

    if (!clickLeftListener) {
      clickLeftListener = ($listeners && $listeners['click-left']) || noop
    }

    if (!clickRightListener) {
      clickRightListener = ($listeners && $listeners['click-right']) || noop
    }

    return (
      <div
        style={{ zIndex }}
        class={{
          'tiny-mobile-nav-bar': true,
          'tiny-mobile-nav-bar__fixed': fixed
        }}
      >
        <div class="tiny-mobile-nav-bar__left" onClick={clickLeftListener}>
          {LeftPart()}
        </div>
        <div class="tiny-mobile-nav-bar__title">
          <p class="main-title">{$slots.default ? $slots.default() : title}</p>
          <p class={{ 'is-show-subtitle': subTitle, 'sub-title': true }}>{subTitle}</p>
        </div>
        <div class="tiny-mobile-nav-bar__right" onClick={clickRightListener}>
          {RightPart()}
        </div>
      </div>
    )
  }
}
</script>
