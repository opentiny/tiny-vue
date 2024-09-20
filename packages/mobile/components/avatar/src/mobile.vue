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
<script lang="tsx">
import { $prefix, setup, h, defineComponent } from '../../common'
import { renderless, api } from './renderless/vue'

const $constants = {
  COMPONENT_PREFIX: 'tiny-mobile-avatar',
  ICON: 'icon'
}

export default defineComponent({
  name: $prefix + 'Avatar',
  props: {
    _constants: {
      type: Object,
      default: () => $constants
    },
    alt: String,
    error: Function,
    fit: {
      type: String,
      default: 'cover'
    },
    icon: Object,
    shape: {
      type: String,
      default: 'circle',
      validator(val) {
        return ~['circle', 'square'].indexOf(val)
      }
    },
    size: {
      type: [Number, String],
      validator(val) {
        return typeof val === 'string' ? ~['large', 'medium', 'small'].indexOf(val) : typeof val === 'number'
      }
    },
    src: String,
    srcSet: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true, h })
  },
  render() {
    const {
      alt,
      fit,
      icon: Icon,
      size,
      src,
      srcSet,
      state: { isImageExist, avatarClass }
    } = this

    const hasImageSrc = isImageExist && src
    let sizeStyle = {}

    if (typeof size === 'number') {
      sizeStyle = {
        height: `${size}px`,
        width: `${size}px`,
        lineHeight: `${size}px`
      }
    }

    const renderAvatar = () => {
      if (hasImageSrc) {
        return <img src={src} alt={alt} srcSet={srcSet} style={{ 'object-fit': fit }} onError={this.handleError} />
      }

      if (Icon) {
        return <Icon />
      }

      return this.$slots.default && this.$slots.default()
    }

    return (
      <span class={avatarClass} style={sizeStyle}>
        {renderAvatar()}
      </span>
    )
  }
})
</script>
