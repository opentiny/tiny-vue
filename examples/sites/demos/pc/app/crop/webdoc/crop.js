export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>src</code> 属性设置默认裁剪的图片源路径，并通过 <code>cropvisible</code> 属性来控制裁剪弹框是否可见。</p>\n',
        'en-US':
          '<p>The <code>src</code> attribute is used to set the default cropping image source path, and the <code>cropvisible</code> attribute is used to control whether the cropping dialog box is visible. </p>\n'
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'aspect-ratio',
      'name': { 'zh-CN': '裁剪框宽高比', 'en-US': 'Aspect-to-height ratio of the crop box' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>aspect-ratio</code> 属性可以设置裁剪框的宽高比例，默认为 <code>16 / 9</code> 。还可以通过调用 <code>setAspectRatio</code> 方法来设置裁切框的宽高比。\n通过 <code>center</code> 属性可以设置裁剪框是否在图片正中心。</p>\n',
        'en-US':
          '<p>You can use the <code>aspect-ratio</code> attribute to set the aspect ratio of the crop box. The default value is <code>16 / 9</code>. You can also set the aspect ratio of the trim box by calling the <code>setAspectRatio</code> method. \nThe <code>center</code> attribute can be used to set whether the crop frame is in the center of the image. </p>\n'
      },
      'codeFiles': ['aspect-ratio.vue']
    },
    {
      'demoId': 'min-crop-box-width-height',
      'name': { 'zh-CN': '裁剪框最小宽高', 'en-US': 'Minimum width and height of the crop box' },
      'desc': {
        'zh-CN':
          '<p>通过属性 <code>min-crop-box-width</code> 、<code>min-crop-box-height</code> 设置裁剪框最小宽高。设置后，调整裁剪框宽高时，调整到最小值后将不能再调整。\n通过属性 <code>min-container-width</code> 、<code>min-container-height</code> 设置容器的最小宽度,最小高度。</p>\n',
        'en-US':
          '<p>Set the minimum width and height of the cropping frame through the <code>min-crop-box-width</code> and <code>min-crop-box-height</code> attributes. After this parameter is set, the width and height of the cropping box cannot be adjusted after the width and height are adjusted to the minimum value. \n Set the minimum width and height of the container through the <code>min-container-width</code> and <code>min-container-height</code> attributes. </p>\n'
      },
      'codeFiles': ['min-crop-box-width-height.vue']
    },
    {
      'demoId': 'no-background',
      'name': { 'zh-CN': '不显示网格背景', 'en-US': 'Do not display the grid background' },
      'desc': {
        'zh-CN': '<p>设置 <code>background</code> 属性为 <code>false</code> 后，将不显示容器的网格背景。</p>\n',
        'en-US':
          '<p>When <code>background</code> is set to <code>false</code>, the grid background of the container is not displayed. </p>\n'
      },
      'codeFiles': ['no-background.vue']
    },
    {
      'demoId': 'no-guides',
      'name': { 'zh-CN': '不显示虚线', 'en-US': 'Do not display dotted lines' },
      'desc': {
        'zh-CN': '<p>设置 <code>guides</code> 属性为 <code>false</code> 将取消裁剪框上方的虚线显示。</p>\n',
        'en-US':
          '<p>Setting <code>guides</code> to <code>false</code> will cancel the dotted line above the crop box. </p>\n'
      },
      'codeFiles': ['no-guides.vue']
    },
    {
      'demoId': 'no-modal',
      'name': { 'zh-CN': '不显示模态', 'en-US': 'Do not display modal' },
      'desc': {
        'zh-CN': '<p>设置 <code>modal</code> 属性为 <code>false</code> 将取消裁剪框下方图片上方的模态层显示。</p>\n',
        'en-US':
          '<p>Setting <code>modal</code> to <code>false</code> cancels the display of the modal layer above the image below the crop box. </p>\n'
      },
      'codeFiles': ['no-modal.vue']
    },
    {
      'demoId': 'view-mode',
      'name': { 'zh-CN': '视图模式', 'en-US': 'View mode' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>view-mode</code> 属性可以设置裁剪框的视图模式，有 <code>0</code>、<code>1</code>、<code>2</code>、<code>3</code> 四种选项，默认为 <code>0</code> 。</p>\n<div class="tip custom-block"><p class="custom-block-title">view-mode 选项说明</p>\n<p><code>0</code>：裁剪框可以移动到图片外面。\n<code>1</code>：裁剪框只能在图片内移动。\n<code>2</code>：图片不全部铺满容器，缩小时可以有一边出现空隙。\n<code>3</code>：图片填充整个容器。</p>\n</div>\n',
        'en-US':
          '<p>You can set the view mode of the crop box through the <code>view-mode</code> attribute. There are four options: <code>0</code>, <code>1</code>, <code>2</code>, and <code>3</code>. The default value is <code>0</code>. </p>\n<div class="tip custom-block"><p class="custom-block-title">view-mode option description </p>\n<p><code>0</code>: The crop box can be moved outside the image. \n<code>1</code>: The crop box can only be moved within the image. \n<code>2</code>: The image is not completely covered in the container. A gap may appear on one side when the image is zoomed out. \n<code>3</code>: fills the entire container with an image. </p>\n</div>\n'
      },
      'codeFiles': ['view-mode.vue']
    },
    {
      'demoId': 'drag-mode',
      'name': { 'zh-CN': '拖拽模式', 'en-US': 'Drag Mode' },
      'desc': {
        'zh-CN':
          '<p>通过 <code>drag-mode</code> 属性可以设置裁剪框的拖拽模式，有 <code>crop</code>、<code>move</code>、<code>none</code> 三种选项，默认为 <code>crop</code> 。</p>\n<div class="tip custom-block"><p class="custom-block-title">drag-mode 选项说明</p>\n<p><code>crop</code>：当裁剪框取消后，按住鼠标左键在图片区域拖拽，将产生一个新的裁剪框。\n<code>move</code>：当裁剪框取消后，按住鼠标左键将移动图片。\n<code>none</code>：当裁剪框取消后，不能裁剪、也不能移动图片。\n<code>movable</code> 控制图片是否可以移动，默认为 true。</p>\n</div>\n',
        'en-US':
          '<p>You can set the drag mode of the crop box through the <code>drag-mode</code> attribute. There are three options: <code>crop</code>, <code>move</code>, and <code>none</code>. The default value is <code>crop</code>. </p>\n<div class="tip custom-block"><p class="custom-block-title">drag-mode Option Description </p>\n<p><code>crop</code>: After the cropping box is canceled, hold down the left mouse button and drag it in the image area to generate a new cropping box. \n<code>move</code>: After the cropping box is canceled, hold down the left mouse button to move the image. \n<code>none</code>: After the crop box is canceled, the image cannot be cropped or moved. \n<code>movable</code> specifies whether an image can be moved. The default value is true. </p>\n</div>\n'
      },
      'codeFiles': ['drag-mode.vue']
    },
    {
      'demoId': 'auto-crop-area',
      'name': { 'zh-CN': '自动裁剪面积', 'en-US': 'Automatically Cropped Area' },
      'desc': {
        'zh-CN':
          '<p>初始化时，通过属性 <code>auto-crop-area</code> 可以设置裁剪框自动裁剪的面积，默认为 <code>0.8</code>，在 <code>auto-crop</code> 属性为 <code>true</code> 时生效。</p>\n',
        'en-US':
          '<p>During initialization, the <code>auto-crop-area</code> attribute can be used to set the area of the cropping box. The default value is <code>0.8</code>. This parameter is valid only when <code>auto-crop</code> is set to <code>true</code>. </p>\n'
      },
      'codeFiles': ['auto-crop-area.vue']
    },
    {
      'demoId': 'get-container-data',
      'name': { 'zh-CN': '获取容器数据', 'en-US': 'Obtain container data' },
      'desc': {
        'zh-CN': '<p>调用 <code>getContainerData</code> 方法可以获取容器的大小数据。</p>\n',
        'en-US': '<p>Invoke the <code>getContainerData</code> method to obtain the container size data. </p>\n'
      },
      'codeFiles': ['get-container-data.vue']
    },
    {
      'demoId': 'get-crop-box-data',
      'name': { 'zh-CN': '获取剪切框数据', 'en-US': 'Obtain clip box data' },
      'desc': {
        'zh-CN': '<p>调用 <code>getCropBoxData</code> 方法可以获取剪切框的位置和大小数据。</p>\n',
        'en-US':
          '<p>Invoke the <code>getCropBoxData</code> method to obtain the position and size of the clip box. </p>\n'
      },
      'codeFiles': ['get-crop-box-data.vue']
    },
    {
      'demoId': 'get-cropped-canvas',
      'name': { 'zh-CN': '获取裁剪后的图片数据', 'en-US': 'Obtain the cropped image data' },
      'desc': {
        'zh-CN':
          '<p>调用 <code>getCroppedCanvas</code> 方法可以获取裁剪后的图片数据，搭配 <code>toDataURL</code> 方法将转成 base64 图片数据，搭配 <code>toBlob</code> 方法将生成 Blob 图片数据。</p>\n',
        'en-US':
          '<p>Invoke the <code>getCroppedCanvas</code> method to obtain the cropped image data. Use the <code>toDataURL</code> method to convert the cropped image data to Base64 image data. Use the <code>toBlob</code> method to generate Blob image data. </p>\n'
      },
      'codeFiles': ['get-cropped-canvas.vue']
    },
    {
      'demoId': 'get-data',
      'name': { 'zh-CN': '获取裁剪区域数据', 'en-US': 'Obtain crop area data' },
      'desc': {
        'zh-CN': '<p>调用 <code>getData</code> 方法可以获取裁剪区域的位置以及大小。</p>\n',
        'en-US':
          '<p>Invoke the <code>getData</code> method to obtain the position and size of the cropping area. </p>\n'
      },
      'codeFiles': ['get-data.vue']
    },
    {
      'demoId': 'get-image-data',
      'name': { 'zh-CN': '获取图像数据', 'en-US': 'Obtain Image Data' },
      'desc': {
        'zh-CN':
          '<p>调用 <code>getImageData</code> 方法可以获取图像位置、大小和其他相关数据，若想获取画布位置和大小数据可以调用 <code>getCanvasData</code> 方法。</p>\n',
        'en-US':
          '<p>Invoke the <code>getImageData</code> method to obtain the image position, size, and other related data. To obtain the canvas position and size data, call the <code>getCanvasData</code> method. </p>\n'
      },
      'codeFiles': ['get-image-data.vue']
    },
    {
      'demoId': 'replace-image',
      'name': { 'zh-CN': '替换图片', 'en-US': 'Replace Image' },
      'desc': {
        'zh-CN':
          '<p>调用 <code>replace</code> 方法可以替换图像的 src 并重新构建 cropper 。 通过 <code>rotatable</code> 属性控制图片旋转，默认为 true。</p>\n',
        'en-US':
          '<p>Invoke the <code>replace</code> method to replace the image src and rebuild the cropper. The <code>rotatable</code> attribute is used to control image rotation. The default value is true. </p>\n'
      },
      'codeFiles': ['replace-image.vue']
    },
    {
      'demoId': 'replace-image1',
      'name': { 'zh-CN': '放大图片', 'en-US': 'Enlarge Image' },
      'desc': { 'zh-CN': '详细用法参考如下示例。', 'en-US': 'For details, see the following example.' },
      'codeFiles': ['replace-image.vue']
    },
    {
      'demoId': 'wheel-zoom-ratio',
      'name': {
        'zh-CN': '鼠标滚轮缩放图像时比例',
        'en-US': 'Scale when the mouse wheel is used to zoom in or out an image'
      },
      'desc': {
        'zh-CN':
          '<p><code>zoom-on-wheel</code> 属性为 <code>true</code> 情况下，通过 <code>wheel-zoom-ratio</code> 属性可以设置缩放比例，默认为 <code>0.1</code> 。</p>\n',
        'en-US':
          '<p><code>zoom-on-wheel</code> attribute is set to <code>true</code>, you can use the <code>wheel-zoom-ratio</code> attribute to set the scaling ratio. The default value is <code>0.1</code>. </p>\n'
      },
      'codeFiles': ['wheel-zoom-ratio.vue']
    },
    {
      'demoId': 'zoom-on-wheel',
      'name': { 'zh-CN': '禁用鼠标滚轮缩放图像', 'en-US': 'Disable the mouse wheel to zoom in or out the image' },
      'desc': {
        'zh-CN':
          '<p>设置 <code>zoom-on-wheel</code> 属性为 <code>false</code> 后，将不允许通过滚动鼠标滚轮来缩放图像。</p>\n',
        'en-US':
          '<p>After the <code>zoom-on-wheel</code> attribute is set to <code>false</code>, the image cannot be zoomed in or out by scrolling the mouse wheel. </p>\n'
      },
      'codeFiles': ['zoom-on-wheel.vue']
    },
    {
      'demoId': 'event-ready',
      'name': { 'zh-CN': 'ready 事件', 'en-US': 'ready event' },
      'desc': {
        'zh-CN': '<p>当一个 cropper 实例完全构建时触发 <code>ready</code> 事件。</p>\n',
        'en-US': '<p>When a cropper instance is completely built, the <code>ready</code> event is triggered. </p>\n'
      },
      'codeFiles': ['event-ready.vue']
    },
    {
      'demoId': 'crop-meth',
      'name': { 'zh-CN': '裁剪框方法 事件', 'en-US': 'Crop box method event' },
      'desc': {
        'zh-CN':
          '<p>当一个 cropper 实例完全构建时触发 <code>disable</code> 方法禁用裁剪框，当触发 <code>enable</code> 启用裁剪框。</p>\n',
        'en-US':
          '<p>When a cropper instance is completely built, the <code>disable</code> method is triggered to disable the cropping box. When the <code>enable</code> method is triggered to enable the cropping box.</p>\n'
      },
      'codeFiles': ['crop-meth.vue']
    },
    {
      'demoId': 'event-about-crop',
      'name': { 'zh-CN': '裁剪相关事件', 'en-US': 'Cutout Event' },
      'desc': {
        'zh-CN':
          '<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p>说明当画布或剪切框开始发生变化时触发 <code>cropstart</code> 事件\n当画布或剪切框正在发生变化时触发 <code>cropmove</code> 事件\n当画布或剪切框发生变化结束时触发 <code>cropend</code> 事件\n当画布或裁剪框发生改变时触发 <code>crop</code> 事件\n通过触发 <code>getCanvasData</code> 获取画布 Canvas（图像包装器）位置和大小数据。</p>\n</div>\n',
        'en-US':
          '<div class="tip custom-block"><p class="custom-block-title">TIP</p>\n<p> Description: The <code>cropstart</code> event is triggered when the canvas or clipping box starts to change.\nThe <code>cropmove</code> event is triggered when the canvas or clipping box is changed.\nThe <code>cropen event is triggered when the canvas or clipping box ends. d</code>Event\nThe <code>crop</code> event is triggered when the canvas or crop box changes. \nThe <code>getCanvasData</code> event is triggered to obtain the position and size data of the canvas (image wrapper). </p>\n</div>\n'
      },
      'codeFiles': ['event-about-crop.vue']
    }
  ],
  apis: [
    {
      'name': 'crop',
      'type': 'component',
      'props': [
        {
          'name': 'crop-type',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置图片裁剪后返回的类型，可配置为 blob 和 base64，默认为 base64',
            'en-US':
              'Type of the image that is returned after cropping. The value can be blob or base64. The default value is base64'
          },
          'demoId': 'get-cropped-canvas'
        },
        {
          'name': 'preview',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置裁剪区域图片是否可预览，默认为 false',
            'en-US': 'Specifies whether images in the cropping area can be previewed. The default value is false'
          },
          'demoId': ''
        },
        {
          'name': 'quality',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置图片裁剪后的压缩比例，值在 0-1 之间，默认为 0.92',
            'en-US':
              'Set the compression ratio of the cropped image. The value ranges from 0 to 1. The default value is 0.92'
          },
          'demoId': ''
        },
        {
          'name': 'src',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认裁剪的源图片', 'en-US': 'Default cropped source image' },
          'demoId': 'no-background'
        },
        {
          'name': 'view-mode',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '定义 cropper 的视图模式;默认为 0;0：没有限制，3 可以移动到 2 外。1：3 只能在 2 内移动。2：2 图片不全部铺满 1 （即缩小时可以有一边出现空隙）。3：2 图片填充整个 1',
            'en-US':
              'Defines the view mode of the cropper. The default value is 0. 0: no restriction. The value 3 can be moved out of the value 2. 1:3 can only be moved within 2. The 2:2 picture is not completely covered with 1 (i.e., there may be gaps on one side when the picture is zoomed out). 3: 2 The image fills the entire 1'
          },
          'demoId': 'view-mode'
        },
        {
          'name': 'drag-mode',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "定义 cropper 的拖拽模式;默认为 'crop';'crop'： 可以产生一个新的裁剪框 3 。'move'：只可以移动图片 3 。'none'： 什么也不处理",
            'en-US':
              "Defines the drag mode of the cropper. The default value is'crop'. 'Crop': A new crop box 3 can be generated. 'move': Only image 3 can be moved. 'none': no action is required"
          },
          'demoId': 'drag-mode'
        },
        {
          'name': 'aspect-ratio',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '裁剪框的宽高比;默认为 16 / 9',
            'en-US': 'Aspect-to-height ratio of the crop box; The default value is 16 / 9'
          },
          'demoId': 'aspect-ratio'
        },
        {
          'name': 'max-size',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置待裁剪图片的最大大小，默认为 1M ;默认为 1M',
            'en-US':
              'Set the maximum size of the image to be cropped. The default value is 1 MB. The default value is 1M'
          },
          'demoId': ''
        },
        {
          'name': 'modal',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否显示图片上方裁剪框下方的黑色模态;默认为 true',
            'en-US':
              'Whether to display the black mode below the cropping box above the image; The default value is true'
          },
          'demoId': 'no-modal'
        },
        {
          'name': 'guides',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否在裁剪框上方显示虚线;默认为 true',
            'en-US': 'Whether to display dotted lines above the crop box; The default value is true'
          },
          'demoId': 'no-guides'
        },
        {
          'name': 'center',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '裁剪框是否在图片正中心;默认为 true',
            'en-US': 'Whether the cropping frame is in the center of the image; The default value is true'
          },
          'demoId': 'aspect-ratio'
        },
        {
          'name': 'background',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否显示容器的网格背景;默认为 true',
            'en-US': 'Whether to display the grid background of the container; The default value is true'
          },
          'demoId': 'no-background'
        },
        {
          'name': 'movable',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否允许可以移动后面的图片;默认为 true',
            'en-US': 'Indicates whether the image can be moved. The default value is true'
          },
          'demoId': 'drag-mode'
        },
        {
          'name': 'rotatable',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否允许旋转图像;默认为 true',
            'en-US': 'Indicates whether images can be rotated. The default value is true'
          },
          'demoId': 'replace-image'
        },
        {
          'name': 'zoomable',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否允许放大图像;默认为 true',
            'en-US': 'Whether to allow image zooming in; The default value is true'
          },
          'demoId': 'replace-image'
        },
        {
          'name': 'zoom-on-wheel',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '是否可以通过滚动鼠标滚轮来缩放图像;默认为 true',
            'en-US':
              'Specifies whether you can zoom in or out an image by scrolling the mouse wheel. The default value is true'
          },
          'demoId': 'zoom-on-wheel'
        },
        {
          'name': 'wheel-zoom-ratio',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '用鼠标移动图像时，定义缩放比例;默认为 0.1',
            'en-US': 'Define the scaling ratio when moving the image with the mouse. The default value is 0.1'
          },
          'demoId': 'wheel-zoom-ratio'
        },
        {
          'name': 'min-container-width',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '容器的最小宽度;默认为 652',
            'en-US': 'Minimum width of a container; The default value is 652'
          },
          'demoId': 'min-crop-box-width-height'
        },
        {
          'name': 'min-container-height',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '容器的最小高度;默认为 300',
            'en-US': 'Minimum height of a container; The default value is 300'
          },
          'demoId': 'min-crop-box-width-height'
        },
        {
          'name': 'min-crop-box-width',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '裁剪层的最小宽度;默认为 0',
            'en-US': 'Minimum width of the cropping layer; The default value is 0'
          },
          'demoId': 'min-crop-box-width-height'
        },
        {
          'name': 'min-crop-box-height',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '裁剪层的最小高度;默认为 0',
            'en-US': 'Minimum height of the crop layer; The default value is 0'
          },
          'demoId': 'min-crop-box-width-height'
        },
        {
          'name': 'auto-crop',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '初始化时，是否自动显示裁剪框;默认为 true',
            'en-US':
              'Indicates whether to automatically display the crop box during initialization. The default value is true'
          },
          'demoId': 'auto-crop-area'
        },
        {
          'name': 'auto-crop-area',
          'type': 'number',
          'defaultValue': '',
          'desc': {
            'zh-CN': '定义自动裁剪面积大小（百分比）;默认为 0.8',
            'en-US': 'Defines the automatic cropping area size (percentage). The default value is 0.8'
          },
          'demoId': 'auto-crop-area'
        },
        {
          'name': 'cropvisible',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置裁剪弹框是否可见;默认为 false',
            'en-US': 'Set whether the cropping dialog box is visible. The default value is false'
          },
          'demoId': 'min-crop-box-width-height'
        }
      ],
      'events': [
        {
          'name': 'ready',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当一个 cropper 实例完全构建时触发',
            'en-US': 'This event is triggered when a cropper instance is completely built'
          },
          'demoId': 'event-ready'
        },
        {
          'name': 'cropdata',
          'type': 'Function(data)',
          'defaultValue': '',
          'desc': {
            'zh-CN': 'cropdata 事件回调函数中可以拿到裁剪后的数据，默认为 base64 数据',
            'en-US':
              'The tailored data can be obtained from the cropdata event callback function. The default value is Base64 data'
          },
          'demoId': 'event-about-crop'
        },
        {
          'name': 'cropstart',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当画布（图像包装器）或剪切框开始发生变化时触发;回调参数为 (event: Event)',
            'en-US':
              'Triggered when the canvas (image wrapper) or clipping box starts to change; The callback parameter is (event: Event)'
          },
          'demoId': 'event-about-crop'
        },
        {
          'name': 'cropmove',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当画布（图像包装器）或剪切框正在发生变化时触发;回调参数为 (event: Event)',
            'en-US':
              'Triggered when the canvas (image wrapper) or clipping box is changing; The callback parameter is (event: Event)'
          },
          'demoId': 'event-about-crop'
        },
        {
          'name': 'cropend',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当画布（图像包装器）或剪切框发生变化结束时触发;回调参数为 (event: Event)',
            'en-US':
              'Triggered when the canvas (image wrapper) or clipping box changes. The callback parameter is (event: Event)'
          },
          'demoId': 'event-about-crop'
        },
        {
          'name': 'crop',
          'type': 'Function(value)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当画布（图像包装器）或裁剪框发生改变时触发;回调参数为 (event: Event)，原生事件',
            'en-US':
              'Triggered when the canvas (image wrapper) or crop box changes; The callback parameter is (event: Event), native event'
          },
          'demoId': 'event-about-crop'
        }
      ],
      'slots': [],
      'methods': [
        {
          'name': 'getCroppedCanvas',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '获取裁剪后的图片数据;.getCroppedCanvas().toDataURL()：转成 base64 图片;.getCroppedCanvas().toBlob()：生成 Blob 图片数据',
            'en-US':
              'Obtain the cropped image data. .getCroppedCanvas().toDataURL(): Convert the image to a Base64 image. .getCroppedCanvas().toBlob(): Generate Blob image data'
          },
          'demoId': 'get-cropped-canvas'
        },
        {
          'name': 'replace',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '替换图像的 src 并重新构建 cropper;参数为 图片 URL',
            'en-US': 'Replace the image src and rebuild the cropper. The parameter is the image URL'
          },
          'demoId': 'replace-image'
        },
        {
          'name': 'clear',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '清除裁切框', 'en-US': 'Clear the cropping box' },
          'demoId': 'get-data'
        },
        {
          'name': 'getData',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '获取最终裁剪的区域位置和大小数据（根据原始图像的自然大小）;参数为 (rounded) ，默认 false，设置 true 可以获取其所有数据;返回的数据类型为 object',
            'en-US':
              'Obtain the position and size of the final cropped region (based on the natural size of the original image). The parameter is rounded. The default value is false. If this parameter is set to true, all data can be obtained. The returned data type is object'
          },
          'demoId': 'get-data'
        },
        {
          'name': 'getContainerData',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '获取 container 容器大小数据;返回的数据类型为 object',
            'en-US': 'Obtain the container size data. The returned data type is object'
          },
          'demoId': 'get-container-data'
        },
        {
          'name': 'getImageData',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '获取图像 image 位置、大小和其他相关数据;返回的数据类型为 object',
            'en-US': 'Obtain the image position, size, and other related data. The returned data type is object'
          },
          'demoId': 'get-image-data'
        },
        {
          'name': 'getCanvasData',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '获取画布 Canvas（图像包装器）位置和大小数据;返回的数据类型为 object',
            'en-US':
              'Obtain the position and size of the canvas Canvas (image wrapper). The returned data type is object'
          },
          'demoId': 'get-image-data'
        },
        {
          'name': 'getCropBoxData',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '获取剪切框的位置和大小数据;返回的数据类型为 object',
            'en-US': 'Obtain the position and size of the clip box. The returned data type is object'
          },
          'demoId': 'get-crop-box-data'
        },
        {
          'name': 'setAspectRatio',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '改变裁切框的宽高比;参数为(aspectRatio)，类型 number，是一个正数',
            'en-US':
              'Change the aspect ratio of the cutting frame; The parameter is (aspectRatio) and the type is number. The value is a positive number'
          },
          'demoId': 'aspect-ratio'
        },
        {
          'name': 'disable',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '禁用裁切框（裁切框不可移动）',
            'en-US': 'Disable the cropping box (the cropping box cannot be moved)'
          },
          'demoId': 'crop-meth'
        },
        {
          'name': 'enable',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '启用裁切框', 'en-US': 'Enable the cropping box' },
          'demoId': 'event-ready'
        },
        {
          'name': 'destroy',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '销毁 cropper 并从图像中删除整个 cropper',
            'en-US': 'Destroy the cropper and delete the entire cropper from the image'
          },
          'demoId': 'event-ready'
        }
      ]
    }
  ]
}
