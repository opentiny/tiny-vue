<template>
  <div class="demo-image__slot">
    <div>
      <p>加载中</p>
      <tiny-image :src="url">
        <template #placeholder>
          <div class="image-slot">加载中<span class="dot">...</span></div>
        </template>
      </tiny-image>
    </div>
    <div>
      <p>默认加载失败</p>
      <tiny-image :src="errorUrl"> </tiny-image>
    </div>
    <div>
      <p>自定义加载失败</p>
      <tiny-image :src="errorUrl">
        <template #error>
          <div class="custom-error">
            <tiny-icon-image-error></tiny-icon-image-error>
            <div class="err-text">图片已丢失</div>
          </div>
        </template>
      </tiny-image>
    </div>
  </div>
</template>

<script>
import { Image } from '@opentiny/vue'
import { iconImageError } from '@opentiny/vue-icon'

export default {
  components: {
    TinyImage: Image,
    TinyIconImageError: iconImageError()
  },
  data() {
    return {
      url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
      errorUrl: 'not-exist.jpg'
    }
  }
}
</script>

<style lang="less" scoped>
.demo-image__slot {
  display: flex;
  flex-wrap: wrap;
  > div {
    padding: 0 20px;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    padding: 16px 0;
  }

  .tiny-image {
    width: 150px;
    height: 100px;
    background: #f5f5f5;

    .custom-error {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #f5f5f5;
      color: #808080;

      .err-text {
        font-size: 14px;
        line-height: 1.5;
        margin-top: 4px;
      }

      > .tiny-svg {
        font-size: 16px;
      }
    }
  }
}
</style>
