<template>
  <div>
    <tiny-card title="这是文本类型" type="text">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="这是图片类型" type="image" src="static/images/dsj.png">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="这是视频类型" type="video" src="http://hicdev.huawei.com/mirrors/academy/Intro%20to%20Vue.js/1%29%20The%20Vue%20Instance.mp4">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="这是logo类型" type="logo" size="mini" src="static/images/user-head.png">
      <p>这是一段长文本内容，这是一段长文本内容</p>
    </tiny-card>
  </div>
</template>

<script>
import { Card } from '@opentiny/vue'

export default {
  components: {
    TinyCard: Card
  },
  data() {
    return {}
  }
}
</script>
