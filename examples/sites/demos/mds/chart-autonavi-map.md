## chart-autonavi-map

### Events

| 事件名     | 回调参数 | 说明                                         |
| ---------- | -------- | -------------------------------------------- |
| ready      | ()=>void | 图表渲染完成后触发，每次渲染都会触发一次     |
| ready-once | ()=>void | 图表渲染完成后触发，只会在首次渲染完成后触发 |

### Slots

| 插槽名  | 说明         |
| ------- | ------------ |
| default | 组件默认插槽 |

## Types

### AMap

```typescript
格式示例：

amap: {
    viewMode: '3D',
    resizeEnable: true,
    center: [118.79322240845, 31.936064370321],
    zoom: 10
  },

说明：通过配置`amap`属性，修改高德地图的初始配置属性。<br/>
`viewMode`：高德地图的3D模式，无论你使用的是1.x版本还是2.x版本，都建议开启此项以获得更好的渲染体验。<br/>
`resizeEnable`：是否开启高德地图resize。<br/>
`center`：高德地图中心经纬度。<br/>
`zoom`：高德地图缩放级别。<br/>
其他更多属性配置可见Echarts高德地图扩展的git网址：<a href='https://github.com/plainheart/echarts-extension-amap/blob/master/README.zh-CN.md' target="_blank">https://github.com/plainheart/echarts-extension-amap/blob/master/README.zh-CN.md</a>。
```

### Key

```typescript
说明：通过配置`key`属性，修改高德地图api的密钥。<br/>
```

### Series

```typescript
格式示例：

  series: [
    {
      type: 'scatter',
      coordinateSystem: 'amap',
      data: [[118.79, 31.936, 8], [119, 32, 20]],
      encode: {
        value: 2
      }
    }
  ]

说明：通过配置`series`属性，修改高德地图的初始配置属性。<br/>
其他更多属性配置可见Echarts高德地图扩展的git网址：<a href='https://github.com/plainheart/echarts-extension-amap/blob/master/README.zh-CN.md' target="_blank">https://github.com/plainheart/echarts-extension-amap/blob/master/README.zh-CN.md</a>。
```

### Url

```typescript
说明：通过配置`url`属性，修改高德地图api的前缀地址。<br/>
```

### V

```typescript
说明：通过配置v属性，修改高德地图api的版本号，默认1.4.3。<br/>
```
