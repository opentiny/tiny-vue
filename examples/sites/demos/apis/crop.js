export default {
  mode: ['pc'],
  apis: [
    {
      name: 'crop',
      type: 'component',
      props: [
        {
          name: 'aspect-ratio',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '裁剪框的宽高比;默认为 16 / 9',
            'en-US': 'Aspect-to-height ratio of the crop box; The default value is 16 / 9'
          },
          mode: ['pc'],
          pcDemo: 'aspect-ratio'
        },
        {
          name: 'auto-crop',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '初始化时，是否自动显示裁剪框;默认为 true',
            'en-US':
              'Indicates whether to automatically display the crop box during initialization. The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'auto-crop-area'
        },
        {
          name: 'auto-crop-area',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '定义自动裁剪面积大小（百分比）;默认为 0.8',
            'en-US': 'Defines the automatic cropping area size (percentage). The default value is 0.8'
          },
          mode: ['pc'],
          pcDemo: 'auto-crop-area'
        },
        {
          name: 'background',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否显示容器的网格背景;默认为 true',
            'en-US': 'Whether to display the grid background of the container; The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'no-background'
        },
        {
          name: 'center',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '裁剪框是否在图片正中心;默认为 true',
            'en-US': 'Whether the cropping frame is in the center of the image; The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'aspect-ratio'
        },
        {
          name: 'crop-type',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置图片裁剪后返回的类型，可配置为 blob 和 base64，默认为 base64',
            'en-US':
              'Type of the image that is returned after cropping. The value can be blob or base64. The default value is base64'
          },
          mode: ['pc'],
          pcDemo: 'get-cropped-canvas'
        },
        {
          name: 'cropvisible',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置裁剪弹框是否可见;默认为 false',
            'en-US': 'Set whether the cropping dialog box is visible. The default value is false'
          },
          mode: ['pc'],
          pcDemo: 'min-crop-box-width-height'
        },
        {
          name: 'drag-mode',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN':
              "定义 cropper 的拖拽模式;默认为 'crop';'crop'： 可以产生一个新的裁剪框 3 。'move'：只可以移动图片 3 。'none'： 什么也不处理",
            'en-US':
              "Defines the drag mode of the cropper. The default value is'crop'. 'Crop': A new crop box 3 can be generated. 'move': Only image 3 can be moved. 'none': no action is required"
          },
          mode: ['pc'],
          pcDemo: 'drag-mode'
        },
        {
          name: 'guides',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否在裁剪框上方显示虚线;默认为 true',
            'en-US': 'Whether to display dotted lines above the crop box; The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'no-guides'
        },
        {
          name: 'max-size',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '设置待裁剪图片的最大大小，默认为 1M ;默认为 1M',
            'en-US':
              'Set the maximum size of the image to be cropped. The default value is 1 MB. The default value is 1M'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'min-container-height',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '容器的最小高度;默认为 300',
            'en-US': 'Minimum height of a container; The default value is 300'
          },
          mode: ['pc'],
          pcDemo: 'min-crop-box-width-height'
        },
        {
          name: 'min-container-width',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '容器的最小宽度;默认为 652',
            'en-US': 'Minimum width of a container; The default value is 652'
          },
          mode: ['pc'],
          pcDemo: 'min-crop-box-width-height'
        },
        {
          name: 'min-crop-box-height',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '裁剪层的最小高度;默认为 0',
            'en-US': 'Minimum height of the crop layer; The default value is 0'
          },
          mode: ['pc'],
          pcDemo: 'min-crop-box-width-height'
        },
        {
          name: 'min-crop-box-width',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '裁剪层的最小宽度;默认为 0',
            'en-US': 'Minimum width of the cropping layer; The default value is 0'
          },
          mode: ['pc'],
          pcDemo: 'min-crop-box-width-height'
        },
        {
          name: 'modal',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否显示图片上方裁剪框下方的黑色模态;默认为 true',
            'en-US':
              'Whether to display the black mode below the cropping box above the image; The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'no-modal'
        },
        {
          name: 'movable',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否允许可以移动后面的图片;默认为 true',
            'en-US': 'Indicates whether the image can be moved. The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'drag-mode'
        },
        {
          name: 'preview',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '设置裁剪区域图片是否可预览，默认为 false',
            'en-US': 'Specifies whether images in the cropping area can be previewed. The default value is false'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'quality',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '设置图片裁剪后的压缩比例，值在 0-1 之间，默认为 0.92',
            'en-US':
              'Set the compression ratio of the cropped image. The value ranges from 0 to 1. The default value is 0.92'
          },
          mode: ['pc'],
          pcDemo: ''
        },
        {
          name: 'rotatable',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否允许旋转图像;默认为 true',
            'en-US': 'Indicates whether images can be rotated. The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'replace-image'
        },
        {
          name: 'src',
          type: 'string',
          defaultValue: '',
          desc: {
            'zh-CN': '默认裁剪的源图片',
            'en-US': 'Default cropped source image'
          },
          mode: ['pc'],
          pcDemo: 'no-background'
        },
        {
          name: 'view-mode',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN':
              '定义 cropper 的视图模式;默认为 0;0：没有限制，3 可以移动到 2 外。1：3 只能在 2 内移动。2：2 图片不全部铺满 1 （即缩小时可以有一边出现空隙）。3：2 图片填充整个 1',
            'en-US':
              'Defines the view mode of the cropper. The default value is 0. 0: no restriction. The value 3 can be moved out of the value 2. 1:3 can only be moved within 2. The 2:2 picture is not completely covered with 1 (i.e., there may be gaps on one side when the picture is zoomed out). 3: 2 The image fills the entire 1'
          },
          mode: ['pc'],
          pcDemo: 'view-mode'
        },
        {
          name: 'wheel-zoom-ratio',
          type: 'number',
          defaultValue: '',
          desc: {
            'zh-CN': '用鼠标移动图像时，定义缩放比例;默认为 0.1',
            'en-US': 'Define the scaling ratio when moving the image with the mouse. The default value is 0.1'
          },
          mode: ['pc'],
          pcDemo: 'wheel-zoom-ratio'
        },
        {
          name: 'zoom-on-wheel',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否可以通过滚动鼠标滚轮来缩放图像;默认为 true',
            'en-US':
              'Specifies whether you can zoom in or out an image by scrolling the mouse wheel. The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'zoom-on-wheel'
        },
        {
          name: 'zoomable',
          type: 'boolean',
          defaultValue: '',
          desc: {
            'zh-CN': '是否允许放大图像;默认为 true',
            'en-US': 'Whether to allow image zooming in; The default value is true'
          },
          mode: ['pc'],
          pcDemo: 'replace-image'
        }
      ],
      events: [
        {
          name: 'crop',
          type: 'Function(value)',
          defaultValue: '',
          desc: {
            'zh-CN': '当画布（图像包装器）或裁剪框发生改变时触发;回调参数为 (event: Event)，原生事件',
            'en-US':
              'Triggered when the canvas (image wrapper) or crop box changes; The callback parameter is (event: Event), native event'
          },
          mode: ['pc'],
          pcDemo: 'event-about-crop'
        },
        {
          name: 'cropdata',
          type: 'Function(data)',
          defaultValue: '',
          desc: {
            'zh-CN': 'cropdata 事件回调函数中可以拿到裁剪后的数据，默认为 base64 数据',
            'en-US':
              'The tailored data can be obtained from the cropdata event callback function. The default value is Base64 data'
          },
          mode: ['pc'],
          pcDemo: 'event-about-crop'
        },
        {
          name: 'cropend',
          defaultValue: '',
          desc: {
            'zh-CN': '当画布（图像包装器）或剪切框发生变化结束时触发;回调参数为 (event: Event)',
            'en-US':
              'Triggered when the canvas (image wrapper) or clipping box changes. The callback parameter is (event: Event)'
          },
          mode: ['pc'],
          pcDemo: 'event-about-crop'
        },
        {
          name: 'cropmove',
          defaultValue: '',
          desc: {
            'zh-CN': '当画布（图像包装器）或剪切框正在发生变化时触发;回调参数为 (event: Event)',
            'en-US':
              'Triggered when the canvas (image wrapper) or clipping box is changing; The callback parameter is (event: Event)'
          },
          mode: ['pc'],
          pcDemo: 'event-about-crop'
        },
        {
          name: 'cropstart',
          defaultValue: '',
          desc: {
            'zh-CN': '当画布（图像包装器）或剪切框开始发生变化时触发;回调参数为 (event: Event)',
            'en-US':
              'Triggered when the canvas (image wrapper) or clipping box starts to change; The callback parameter is (event: Event)'
          },
          mode: ['pc'],
          pcDemo: 'event-about-crop'
        },
        {
          name: 'ready',
          defaultValue: '',
          desc: {
            'zh-CN': '当一个 cropper 实例完全构建时触发',
            'en-US': 'This event is triggered when a cropper instance is completely built'
          },
          mode: ['pc'],
          pcDemo: 'event-ready'
        }
      ],
      methods: [
        {
          name: 'clear',
          defaultValue: '',
          desc: {
            'zh-CN': '清除裁切框',
            'en-US': 'Clear the cropping box'
          },
          mode: ['pc'],
          pcDemo: 'get-data'
        },
        {
          name: 'destroy',
          defaultValue: '',
          desc: {
            'zh-CN': '销毁 cropper 并从图像中删除整个 cropper',
            'en-US': 'Destroy the cropper and delete the entire cropper from the image'
          },
          mode: ['pc'],
          pcDemo: 'event-ready'
        },
        {
          name: 'disable',
          defaultValue: '',
          desc: {
            'zh-CN': '禁用裁切框（裁切框不可移动）',
            'en-US': 'Disable the cropping box (the cropping box cannot be moved)'
          },
          mode: ['pc'],
          pcDemo: 'crop-meth'
        },
        {
          name: 'enable',
          defaultValue: '',
          desc: {
            'zh-CN': '启用裁切框',
            'en-US': 'Enable the cropping box'
          },
          mode: ['pc'],
          pcDemo: 'event-ready'
        },
        {
          name: 'getCanvasData',
          defaultValue: '',
          desc: {
            'zh-CN': '获取画布 Canvas（图像包装器）位置和大小数据;返回的数据类型为 object',
            'en-US':
              'Obtain the position and size of the canvas Canvas (image wrapper). The returned data type is object'
          },
          mode: ['pc'],
          pcDemo: 'get-image-data'
        },
        {
          name: 'getContainerData',
          defaultValue: '',
          desc: {
            'zh-CN': '获取 container 容器大小数据;返回的数据类型为 object',
            'en-US': 'Obtain the container size data. The returned data type is object'
          },
          mode: ['pc'],
          pcDemo: 'get-container-data'
        },
        {
          name: 'getCropBoxData',
          defaultValue: '',
          desc: {
            'zh-CN': '获取剪切框的位置和大小数据;返回的数据类型为 object',
            'en-US': 'Obtain the position and size of the clip box. The returned data type is object'
          },
          mode: ['pc'],
          pcDemo: 'get-crop-box-data'
        },
        {
          name: 'getCroppedCanvas',
          defaultValue: '',
          desc: {
            'zh-CN':
              '获取裁剪后的图片数据;.getCroppedCanvas().toDataURL()：转成 base64 图片;.getCroppedCanvas().toBlob()：生成 Blob 图片数据',
            'en-US':
              'Obtain the cropped image data. .getCroppedCanvas().toDataURL(): Convert the image to a Base64 image. .getCroppedCanvas().toBlob(): Generate Blob image data'
          },
          mode: ['pc'],
          pcDemo: 'get-cropped-canvas'
        },
        {
          name: 'getData',
          defaultValue: '',
          desc: {
            'zh-CN':
              '获取最终裁剪的区域位置和大小数据（根据原始图像的自然大小）;参数为 (rounded) ，默认 false，设置 true 可以获取其所有数据;返回的数据类型为 object',
            'en-US':
              'Obtain the position and size of the final cropped region (based on the natural size of the original image). The parameter is rounded. The default value is false. If this parameter is set to true, all data can be obtained. The returned data type is object'
          },
          mode: ['pc'],
          pcDemo: 'get-data'
        },
        {
          name: 'getImageData',
          defaultValue: '',
          desc: {
            'zh-CN': '获取图像 image 位置、大小和其他相关数据;返回的数据类型为 object',
            'en-US': 'Obtain the image position, size, and other related data. The returned data type is object'
          },
          mode: ['pc'],
          pcDemo: 'get-image-data'
        },
        {
          name: 'replace',
          defaultValue: '',
          desc: {
            'zh-CN': '替换图像的 src 并重新构建 cropper;参数为 图片 URL',
            'en-US': 'Replace the image src and rebuild the cropper. The parameter is the image URL'
          },
          mode: ['pc'],
          pcDemo: 'replace-image'
        },
        {
          name: 'setAspectRatio',
          defaultValue: '',
          desc: {
            'zh-CN': '改变裁切框的宽高比;参数为(aspectRatio)，类型 number，是一个正数',
            'en-US':
              'Change the aspect ratio of the cutting frame; The parameter is (aspectRatio) and the type is number. The value is a positive number'
          },
          mode: ['pc'],
          pcDemo: 'aspect-ratio'
        }
      ],
      slots: []
    }
  ]
}
