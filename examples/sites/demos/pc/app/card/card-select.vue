<template>
  <div class="card-wrap">
    <!-- 单选demo -->
    <tiny-card-group v-model="radioValue" check-type="radio">
      <tiny-card
        id="smb-card"
        v-for="item in dataArr"
        :key="item.title"
        :label="item.title"
        check-mode="simple"
        custom-class="smb-card"
      >
        <div class="card-content">
          <img class="card-image" :src="item.imageSrc" :alt="item.imageAlt || ''" />
          <div class="card-text">
            <div class="card-title">{{ item.title }}</div>
            <div class="card-descript">
              {{ item.content }}
            </div>
          </div>
        </div>
        <div v-if="item.options" class="card-stlecting">
          <tiny-select v-model="item.selectVal" :options="item.options"> </tiny-select>
        </div>
      </tiny-card>
    </tiny-card-group>

    <!-- 多选demo -->
    <tiny-card-group v-model="checkboxValue" check-type="checkbox">
      <tiny-card
        id="smb-card"
        v-for="item in dataArr"
        :key="item.title"
        :label="item.title"
        check-mode="badge"
        custom-class="smb-card"
      >
        <div class="card-content">
          <img class="card-image" :src="item.imageSrc" :alt="item.imageAlt || ''" />
          <div class="card-text">
            <div class="card-title">{{ item.title }}</div>
            <div class="card-descript">
              {{ item.content }}
            </div>
          </div>
        </div>
        <div v-if="item.options" class="card-stlecting">
          <tiny-select v-model="item.selectVal" :options="item.options"> </tiny-select>
        </div>
      </tiny-card>
    </tiny-card-group>
  </div>
</template>

<script>
import { Card, CardGroup, Select } from '@opentiny/vue'

export default {
  components: {
    TinyCard: Card,
    TinyCardGroup: CardGroup,
    TinySelect: Select
  },
  data() {
    return {
      radioValue: 'TinyVue',
      checkboxValue: ['TinyVue', 'TinyNG'],
      dataArr: [
        {
          title: 'TinyVue',
          content: '^15.0.01',
          imageSrc: 'https://res.hc-cdn.com/tinyui-design-common/1.0.7.20240711104855/assets/tinyvue.svg'
        },
        {
          title: 'TinyNG',
          content: '^16.0.01',
          imageSrc: 'https://res.hc-cdn.com/tinyui-design/1.0.7.20240711104855/home/images/tinyng.svg'
        },
        {
          title: 'TinyEngine',
          content: '^14.0.01',
          imageSrc: 'https://res.hc-cdn.com/tinyui-design/1.0.7.20240711104855/home/images/tinyengine.svg',
          selectVal: 'TinyVue',
          options: [
            { value: 'TinyVue', label: 'TinyVue' },
            { value: 'TinyNG', label: 'TinyNG' },
            { value: 'TinyEngine', label: 'TinyEngine' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-wrap {
  width: 100%;
  background: #f5f5f5;
  padding: 16px;
  display: flex;
  justify-content: space-between;
}
.my-card {
  width: 80%;
  cursor: pointer;
  padding: 10px;
}
.content {
  display: flex;
}
.content img {
  width: 80px;
  height: 80px;
  margin-right: 20px;
}
/* 业务功能demo */
.smb-card {
  display: inline-block;
  position: relative;
  width: 220px;
  margin: 25px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #fafafa;
}

.smb-card:hover {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
}
.card-content {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 24px;
}
.card-image {
  display: block;
  width: 40px;
  height: 40px;
  background-color: #2f5bea;
  border-radius: 4px;
  padding: 4px;
}
.card-text {
  margin-left: 16px;
}
.card-title {
  font-size: 14px;
  text-align: left;
  line-height: 22px;
  color: #252b3a;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 136px;
  overflow: hidden;
}

.card-descript {
  font-size: 12px;
  text-align: left;
  line-height: 20px;
  color: #575d6c;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 136px;
  overflow: hidden;
}
.card-stlecting {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}
</style>

<style>
#smb-card .tiny-card--small-padding {
  padding: 0;
}
</style>
