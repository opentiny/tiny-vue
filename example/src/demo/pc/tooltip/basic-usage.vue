<template>
  <div class="box">
    <div class="top">
      <tiny-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
        <button>上左</button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
        <button>上边</button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
        <button>上右</button>
      </tiny-tooltip>
    </div>
    <div class="left">
      <tiny-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
        <button>左上</button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
        <button>左边</button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
        <button>左下</button>
      </tiny-tooltip>
    </div>
    <div class="right">
      <tiny-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
        <button>右上</button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
        <button>右边</button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
        <button>右下</button>
      </tiny-tooltip>
    </div>
    <div class="bottom">
      <tiny-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
        <button>下左</button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
        <button>下边</button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end" :append-to-body="false">
        <button>下右</button>
      </tiny-tooltip>
    </div>
  </div>
</template>

<script>
import { Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip
  }
}
</script>

<style lang="css" scoped>
.box {
  width: 400px;
  margin: auto;
}

.box .top {
  text-align: center;
}

.box .left {
  float: left;
  width: 60px;
}

.box .right {
  float: right;
  width: 60px;
}

.box .bottom {
  clear: both;
  text-align: center;
}

.box .item {
  margin: 4px;
  display: inline-block;
}

.box .left .hae-tooltip__popper,
.box .right .hae-tooltip__popper {
  padding: 8px 10px;
}
</style>
