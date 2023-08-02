import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test } from 'vitest'
import Crop from '@opentiny/vue-crop'

describe('PC Mode', () => {
    const mount = mountPcMode


    /**
     * attrs
     */
    
    test.todo('crop-type 设置图片裁剪后返回的类型，可配置为 blob 和 base64，默认为 base64 。')

    test.todo('preview 设置裁剪区域图片是否可预览，默认为 false 。')

    test.todo('quality 设置图片裁剪后的压缩比例，值在 0-1 之间，默认为 0.92 。')

    test.todo('src 默认裁剪的源图片')

    test.todo('view-mode 定义 cropper 的视图模式;默认为 0;0：没有限制，3 可以移动到 2 外。1：3 只能在 2 内移动。2：2 图片不全部铺满 1 （即缩小时可以有一边出现空隙）。3：2 图片填充整个 1 。')

    test.todo('drag-mode 定义 cropper 的拖拽模式;默认为 "crop";"crop"： 可以产生一个新的裁剪框 3 。"move"：只可以移动图片 3 。"none"： 什么也不处理。')

    test.todo('aspect-ratio 裁剪框的宽高比;默认为 16 / 9')

    test.todo('max-size 设置待裁剪图片的最大大小，默认为 1M ;默认为 1M')

    test.todo('modal 是否显示图片上方裁剪框下方的黑色模态;默认为 true')

    test.todo('guides 是否在裁剪框上方显示虚线;默认为 true')

    test.todo('center 裁剪框是否在图片正中心;默认为 true')

    test.todo('background 是否显示容器的网格背景;默认为 true')

    test.todo('movable 是否允许可以移动后面的图片;默认为 true')

    test.todo('rotatable 是否允许旋转图像;默认为 true')

    test.todo('zoomable 是否允许放大图像;默认为 true')

    test.todo('zoom-on-wheel 是否可以通过滚动鼠标滚轮来缩放图像;默认为 true')

    test.todo('wheel-zoom-ratio 用鼠标移动图像时，定义缩放比例;默认为 0.1')

    test.todo('min-container-width 容器的最小宽度;默认为 652')

    test.todo('min-container-height 容器的最小高度;默认为 300')

    test.todo('min-crop-box-width 裁剪层的最小宽度;默认为 0')

    test.todo('min-crop-box-height 裁剪层的最小高度;默认为 0')

    test.todo('auto-crop 初始化时，是否自动显示裁剪框;默认为 true')

    test.todo('auto-crop-area 定义自动裁剪面积大小（百分比）;默认为 0.8')

    test.todo('cropvisible 设置裁剪弹框是否可见;默认为 false')

    /**
     * methods
     */

    test.todo('getCroppedCanvas 获取裁剪后的图片数据;.getCroppedCanvas().toDataURL()：转成 base64 图片;.getCroppedCanvas().toBlob()：生成 Blob 图片数据')

    test.todo('replace 替换图像的 src 并重新构建 cropper;参数为 图片 URL ')

    test.todo('clear 清除裁切框')

    test.todo('getData 获取最终裁剪的区域位置和大小数据（根据原始图像的自然大小）;参数为 (rounded) ，默认 false，设置 true 可以获取其所有数据;返回的数据类型为 Object')

    test.todo('getContainerData 获取 container 容器大小数据;返回的数据类型为 Object')

    test.todo('getImageData 获取图像 image 位置、大小和其他相关数据;返回的数据类型为 Object')

    test.todo('getCanvasData 获取画布 Canvas（图像包装器）位置和大小数据;返回的数据类型为 Object')

    test.todo('getCropBoxData 获取剪切框的位置和大小数据;返回的数据类型为 Object')

    test.todo('setAspectRatio 改变裁切框的宽高比;参数为(aspectRatio)，类型 Number，是一个正数')

    test.todo('disable 禁用裁切框（裁切框不可移动）')

    test.todo('enable 启用裁切框')

    test.todo('destroy 销毁 cropper 并从图像中删除整个 cropper')

    /**
     * events
     */

    test.todo('ready 当一个 cropper 实例完全构建时触发')

    test.todo('cropdata cropdata 事件回调函数中可以拿到裁剪后的数据，默认为 base64 数据')

    test.todo('cropstart 当画布（图像包装器）或剪切框开始发生变化时触发;回调参数为 (event: Event)')

    test.todo('cropmove 当画布（图像包装器）或剪切框正在发生变化时触发;回调参数为 (event: Event)')

    test.todo('cropend 当画布（图像包装器）或剪切框发生变化结束时触发;回调参数为 (event: Event)')

    test.todo('crop 当画布（图像包装器）或裁剪框发生改变时触发;回调参数为 (event: Event)，原生事件')

})