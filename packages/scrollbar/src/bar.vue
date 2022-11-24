<script lang="jsx">
import {
  renderless,
  api
} from '@opentiny/vue-renderless/scrollbar/vue-bar'
import { setup, $prefix, h } from '@opentiny/vue-common' // 此处引入 h 是为了防止打包后 h 被重命名导致组件报错的问题

export default {
  name: $prefix + 'Bar',
  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true, h })
  },
  render() {
    const {
      size,
      move,
      renderThumbStyle,
      clickTrackHandler,
      clickThumbHandler,
      state: { bar }
    } = this

    return (
      <div
        ref="bar"
        class={['tiny-scrollbar__bar', 'is-' + bar.key]}
        onMousedown={clickTrackHandler}
      >
        <div
          ref="thumb"
          class="tiny-scrollbar__thumb"
          onMousedown={clickThumbHandler}
          style={renderThumbStyle({ bar, move, size })}
        ></div>
      </div>
    )
  }
}
</script>
