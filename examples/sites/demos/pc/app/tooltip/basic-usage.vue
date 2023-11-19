<template>
  <div class="box">
    <div class="top">
      <tiny-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
        <tiny-button>上左</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
        <tiny-button>上边</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
        <tiny-button>上右</tiny-button>
      </tiny-tooltip>
    </div>
    <div class="left">
      <tiny-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
        <tiny-button>左上</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
        <tiny-button>左边</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
        <tiny-button>左下</tiny-button>
      </tiny-tooltip>
    </div>
    <div class="right">
      <tiny-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
        <tiny-button>右上</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
        <tiny-button>右边</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
        <tiny-button>右下</tiny-button>
      </tiny-tooltip>
    </div>
    <div class="bottom">
      <tiny-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
        <tiny-button>下左</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
        <tiny-button>下边</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
        <tiny-button>下右</tiny-button>
      </tiny-tooltip>
    </div>
  </div>
</template>

<script lang="jsx">
import { Tooltip, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip,
    TinyButton: Button
  }
}
</script>

<style lang="css" scoped>
.box {
  margin: auto;
}

.box .top {
  text-align: center;
}

.box .left {
  float: left;
  width: 90px;
}

.box .right {
  float: right;
  width: 90px;
}

.box .bottom {
  clear: both;
  text-align: center;
}

.box .item {
  margin: 4px;
  display: inline-block;
}
</style>
