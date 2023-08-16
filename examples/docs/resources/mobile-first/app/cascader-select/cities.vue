<template>
  <div date-tag="tiny-demo">
    <tiny-button @click="showCascader">点击显示级联选择</tiny-button>
    <tiny-cascader-select
      v-model="value"
      cycle-roll
      :options="optionList"
      :visible="visible"
      @update:visible="visible = $event"
    ></tiny-cascader-select>
  </div>
</template>

<script>
import { CascaderSelect, Button } from '@opentiny/vue'

const provinces = '北京,天津,河北,山西,内蒙古,辽宁'
const cities = {
  0: '东城区,西城区,崇文区,宣武区,朝阳区,丰台区,石景山区,海淀区,门头沟区,房山区,通州区,顺义区,昌平区,大兴区,怀柔区,平谷区,密云县,延庆县',
  1: '和平区,河东区,河西区,南开区,河北区,红桥区,塘沽区,汉沽区,大港区,东丽区,西青区,津南区,北辰区,武清区,宝坻区,宁河县,静海县,蓟县',
  2: '石家庄市,唐山市,秦皇岛市,邯郸市,邢台市,保定市,张家口市,承德市,沧州市,廊坊市,衡水市',
  3: '太原市,大同市,阳泉市,长治市,晋城市,朔州市,晋中市,运城市,忻州市,临汾市,吕梁市',
  4: '呼和浩特市,包头市,乌海市,赤峰市,通辽市,鄂尔多斯市,呼伦贝尔市,巴彦淖尔市,乌兰察布市,兴安盟,锡林郭勒盟,阿拉善盟',
  5: '沈阳市,大连市,鞍山市,抚顺市,本溪市,丹东市,锦州市,营口市,阜新市,辽阳市,盘锦市,铁岭市,朝阳市,葫芦岛市'
}

const splitProvs = provinces.split(',')
const splitCities = {}

Object.keys(cities).map((city) => (splitCities[city] = cities[city].split(',')))

export default {
  components: {
    TinyCascaderSelect: CascaderSelect,
    TinyButton: Button
  },
  data() {
    return {
      visible: false,
      value: [0, 0],
      optionList: [
        { range: [0, 5], optionMethod: this.getProvince },
        { rangeMethod: this.rangeCity, optionMethod: this.getCity }
      ]
    }
  },
  methods: {
    getProvince(province, focusProvince, focusCity) {
      return { id: province, label: splitProvs[province] }
    },
    getCity(city, focusProvince, focusCity) {
      return { id: city, label: splitCities[focusProvince][city] }
    },
    rangeCity(focusProvince, focusCity) {
      return [0, splitCities[focusProvince].length - 1]
    },
    showCascader() {
      this.visible = true
    }
  }
}
</script>
