<template>
  <div class="ico-wrapper">
    <div class="page__hd">
      <h1 class="page__title">Icon</h1>
      <p class="page__desc">图标（设置图标大小）</p>
    </div>
    <h3 class="title">12*12</h3>
    <div class="icon-demo">
      <div>
        <icon-share class="size12 ico"></icon-share>
        <p>IconShare</p>
      </div>
      <div>
        <icon-del class="size12 ico"></icon-del>
        <p>IconDel</p>
      </div>
      <div>
        <icon-writing class="size12 ico"></icon-writing>
        <p>IconWriting</p>
      </div>
      <div>
        <icon-ascending class="size12 ico"></icon-ascending>
        <p>IconAscending</p>
      </div>
      <div>
        <icon-clock-work class="size12 ico"></icon-clock-work>
        <p>IconClockWork</p>
      </div>
      <div>
        <icon-calculator class="size12 ico"></icon-calculator>
        <p>IconCalculator</p>
      </div>
    </div>
    <h3 class="title">16*16</h3>
    <div class="icon-demo">
      <div>
        <icon-share class="size16 ico"></icon-share>
        <p>IconShare</p>
      </div>
      <div>
        <icon-del class="size16 ico"></icon-del>
        <p>IconDel</p>
      </div>
      <div>
        <icon-writing class="size16 ico"></icon-writing>
        <p>IconWriting</p>
      </div>
      <div>
        <icon-ascending class="size16 ico"></icon-ascending>
        <p>IconAscending</p>
      </div>
      <div>
        <icon-clock-work class="size16 ico"></icon-clock-work>
        <p>IconClockWork</p>
      </div>
      <div>
        <icon-calculator class="size16 ico"></icon-calculator>
        <p>IconCalculator</p>
      </div>
    </div>
    <h3 class="title">24*24</h3>
    <div class="icon-demo">
      <div>
        <icon-share class="size24 ico"></icon-share>
        <p>IconShare</p>
      </div>
      <div>
        <icon-del class="size24 ico"></icon-del>
        <p>IconDel</p>
      </div>
      <div>
        <icon-writing class="size24 ico"></icon-writing>
        <p>IconWriting</p>
      </div>
      <div>
        <icon-ascending class="size24 ico"></icon-ascending>
        <p>IconAscending</p>
      </div>
      <div>
        <icon-clock-work class="size24 ico"></icon-clock-work>
        <p>IconClockWork</p>
      </div>
      <div>
        <icon-calculator class="size24 ico"></icon-calculator>
        <p>IconCalculator</p>
      </div>
    </div>
  </div>
</template>

<script lang="jsx">
import { iconShare, iconDel, iconWriting, iconAscending, iconClockWork, iconCalculator } from '@opentiny/vue-icon'

export default {
  components: {
    IconShare: iconShare(),
    IconDel: iconDel(),
    IconWriting: iconWriting(),
    IconAscending: iconAscending(),
    IconClockWork: iconClockWork(),
    IconCalculator: iconCalculator()
  }
}
</script>

<style scoped>
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
.ico-wrapper {
  width: 100%;
  height: calc(100% - 0px);
  overflow: auto;
}
.icon-demo {
  width: 100%;

  display: flex;
  flex-wrap: wrap;
}
.title {
  padding-top: 30px;
}
p {
  font-size: 14px;
}
.icon-demo > div {
  width: 33%;
  padding: 40px 0;
  text-align: center;
  border-left: 1px solid #eee;
  border-top: 1px solid #eee;
  box-sizing: border-box;
}
.icon-demo > div:nth-child(3n) {
  border-right: 1px solid #eee;
}
.icon-demo > div:nth-last-child(1),
.icon-demo > div:nth-last-child(2),
.icon-demo > div:nth-last-child(3) {
  border-bottom: 1px solid #eee;
}
.size12 {
  font-size: 12px;
}
.size16 {
  font-size: 16px;
}
.size24 {
  font-size: 24px;
}
</style>
