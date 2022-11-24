<script lang="jsx">
import { $prefix, setup, h } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/avatar/vue'

const $constants = {
  COMPONENT_PREFIX: 'tiny-mobile-avatar',
  ICON: 'icon'
}

export default {
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
        return typeof val === 'string'
          ? ~['large', 'medium', 'small'].indexOf(val)
          : typeof val === 'number'
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
        return (
          <img
            src={src}
            alt={alt}
            srcSet={srcSet}
            style={{ 'object-fit': fit }}
            onError={this.handleError}
          />
        )
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
}
</script>
