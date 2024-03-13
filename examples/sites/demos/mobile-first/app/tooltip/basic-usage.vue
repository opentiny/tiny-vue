<template>
  <div class="w-[25rem] m-auto">
    <div class="text-center">
      <tiny-tooltip class="m-1 inline-block" effect="dark" content="Top Left 提示文字" placement="top-start">
        <tiny-button>上左</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="m-1 inline-block" effect="dark" content="Top Center 提示文字" placement="top">
        <tiny-button>上边</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="m-1 inline-block" effect="dark" content="Top Right 提示文字" placement="top-end">
        <tiny-button>上右</tiny-button>
      </tiny-tooltip>
    </div>
    <div class="float-left w-20">
      <tiny-tooltip class="m-1 inline-block" effect="dark" content="Left Top 提示文字" placement="left-start">
        <tiny-button>左上</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="m-1 inline-block" effect="dark" content="Left Center 提示文字" placement="left">
        <tiny-button>左边</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="m-1 inline-block" effect="dark" content="Left Bottom 提示文字" placement="left-end">
        <tiny-button>左下</tiny-button>
      </tiny-tooltip>
    </div>
    <div class="float-right w-20">
      <tiny-tooltip class="m-1 inline-block" effect="dark" content="Right Top 提示文字" placement="right-start">
        <tiny-button>右上</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="m-1 inline-block" effect="dark" content="Right Center 提示文字" placement="right">
        <tiny-button>右边</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="m-1 inline-block" effect="dark" content="Right Bottom 提示文字" placement="right-end">
        <tiny-button>右下</tiny-button>
      </tiny-tooltip>
    </div>
    <div class="clear-both text-center">
      <tiny-tooltip class="m-1 inline-block" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
        <tiny-button>下左</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="m-1 inline-block" effect="dark" content="Bottom Center 提示文字" placement="bottom">
        <tiny-button>下边</tiny-button>
      </tiny-tooltip>
      <tiny-tooltip class="m-1 inline-block" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
        <tiny-button>下右</tiny-button>
      </tiny-tooltip>
    </div>
  </div>
</template>

<script>
import { Tooltip, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip,
    TinyButton: Button
  }
}
</script>
