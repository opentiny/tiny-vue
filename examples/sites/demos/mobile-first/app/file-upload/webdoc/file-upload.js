export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'basic usage'
      },
      desc: {
        'zh-CN': '<p>属性 action(type：String) 上传服务器地址。</p>',
        'en-US': '<p>button type</p>'
      },
      codeFiles: ['basic-usage.vue']
    },

    {
      demoId: 'file-type',
      name: {
        'zh-CN': '可上传的文件类型',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过配置 `accept(.doc,.docx)` 来限制上传文件的格式为 `.doc .docx`<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['file-type.vue']
    },
    {
      demoId: 'file-list',
      name: {
        'zh-CN': '上传的文件列表',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `fileList` 配置需要显示的文件列表。<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['file-list.vue']
    },
    {
      demoId: 'show-title',
      name: {
        'zh-CN': '隐藏标题',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>配置 `show-title` 为 `false` 隐藏标题，默认为 `true`。<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['show-title.vue']
    },
    {
      demoId: 'title',
      name: {
        'zh-CN': '自定义标题',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>通过 `title` 可自定义标题。<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['title.vue']
    },
    {
      demoId: 'preview',
      name: {
        'zh-CN': '文件预览',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>文件上传模式，配置 `preview` 事件，已上传的文件会显示预览按钮，点击预览图标会触发 `preview` 事件。<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['preview.vue']
    },
    {
      demoId: 'preview-picture',
      name: {
        'zh-CN': '图片预览',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>图片上传模式，配置 `preview` 事件，已上传的文件会显示预览图标，点击预览图标会触发 `preview` 事件。<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['preview-picture.vue']
    },
    {
      demoId: 'download-all',
      name: {
        'zh-CN': '下载全部',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>文件上传模式，配置 `download-all` 事件，会显示下载全部按钮，点击下载全部按钮会触发 `download-all` 事件<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['download-all.vue']
    },
    {
      demoId: 'download',
      name: {
        'zh-CN': '文件下载',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>文件上传模式，配置 `download-file` 事件，已上传的文件会显示下载按钮，点击下载按钮会触发 `download-file` 事件<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['download.vue']
    },
    {
      demoId: 'download-picture',
      name: {
        'zh-CN': '图片下载',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>图片上传模式，配置 `download-file` 事件，已上传的文件会显示下载图标，点击下载按钮会触发 `download-file` 事件<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['download-picture.vue']
    },
    {
      demoId: 're-upload',
      name: {
        'zh-CN': '文件重新上传',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>文件上传模式，配置 `re-upload` 事件，上传失败的文件会显示重新上传按钮，点击重新上传按钮会触发 `re-upload` 事件<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['re-upload.vue']
    },
    {
      demoId: 're-upload-picture',
      name: {
        'zh-CN': '图片重新上传',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>图片上传模式，配置 `re-upload` 事件，上传失败的文件会显示重新上传图标，点击重新上传按钮会触发 `re-upload` 事件<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['re-upload-picture.vue']
    },
    {
      demoId: 'display-only',
      name: {
        'zh-CN': '文件只读模式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>文件上传模式，通过 `display-only` 设置组件是否只读。<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['display-only.vue']
    },
    {
      demoId: 'display-only-picture',
      name: {
        'zh-CN': '图片只读模式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>图片上传模式，通过 `display-only` 设置组件是否只读。<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['display-only-picture.vue']
    },
    {
      demoId: 'display-only-video-audio',
      name: {
        'zh-CN': '音视频只读模式',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>音视频上传模式，通过 `display-only` 设置组件是否只读。<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['display-only-video-audio.vue']
    },
    {
      demoId: 'picture',
      name: {
        'zh-CN': '图片上传--picture-single',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置 `list-type` 为 `picture-single`，展示单图片模式。可配置 `file-list` 属性展示对应的图片<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['picture.vue']
    },
    {
      demoId: 'picture-card',
      name: {
        'zh-CN': '图片上传--picture-card',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置 `list-type` 为 `picture-card`，展示图片墙模式。可配置 `file-list` 属性展示对应的图片<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['picture-card.vue']
    },
    {
      demoId: 'picture-show-name',
      name: {
        'zh-CN': '图片上传--show-name',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置 `show-name` 控制是否展示图片名字<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['picture-show-name.vue']
    },
    {
      demoId: 'video',
      name: {
        'zh-CN': '视频上传',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>在 `list-type` 为 `picture-single` 时，设置 `source-type` 为 `video` 时展示视频<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['video.vue']
    },
    {
      demoId: 'audio',
      name: {
        'zh-CN': '音频上传',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>在 `list-type` 为 `picture-single` 时，设置 `source-type` 为 `audio` 时展示视频<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['audio.vue']
    },
    {
      demoId: 'multi-media',
      name: {
        'zh-CN': '多媒体上传1',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>在 `list-type` 为 `picture-card` 时，设置 `source-type` 为 `video/audio/picture` 时进行视频、音频、图片上传，`source-type` 支持 `video、audio、picture` 的互相组合<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['multi-media.vue']
    },
    {
      demoId: 'multi-media-native',
      name: {
        'zh-CN': '多媒体上传2',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>同时在多媒体上传模式下，可配置hwh5属性，进行原生上传。可在 `trigger-click` 事件中进行文件选取操作并上传，可在 `play` 事件中进行音视频播放操作<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['multi-media-native.vue']
    },
    {
      demoId: 'bubble',
      name: {
        'zh-CN': '气泡上传',
        'en-US': 'Bubble Upload'
      },
      desc: {
        'zh-CN':
          '<p>在 <code>list-type</code> 为默认值 <code>text</code> 时，设置 <code>mode</code> 为 <code>bubble</code> 时进行气泡模式的上传<p>',
        'en-US':
          '<p><p>Upload in bubble mode when <code>list-type</code> is set to the default value <code>text</code> and <code>mode</code> is set to <code>bubble</code>.<p></p>'
      },
      codeFiles: ['bubble.vue']
    },
    {
      demoId: 'drag',
      name: {
        'zh-CN': '拖拽上传',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>设置 `list-type` 为 `drag-single`，开启单文件拖拽上传。<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['drag.vue']
    },
    {
      demoId: 'drag-file-list',
      name: {
        'zh-CN': '拖拽上传显示文件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>可配置 `file-list` 属性展示对应的文件<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['drag-file-list.vue']
    },
    {
      demoId: 'event-trigger-click',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>`trigger-click` 点击文件上传时触发的事件<br>`preview` 点击预览时触发的事件<br> `download-file` 点击下载时触发的事件<br>`download-all` 点击全部下载时触发的事件<br>`re-upload` 点击重新上传时触发的事件<br>`click-file-list` 点击上传的文件列表时触发的事件<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['event-trigger-click.vue']
    },
    {
      demoId: 'assist-content',
      name: {
        'zh-CN': '插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>`assist-content` 辅助内容插槽<p>',
        'en-US': '<p>button click</p>'
      },
      codeFiles: ['assist-content.vue']
    },
    {
      demoId: 'encrypt-config',
      name: {
        'zh-CN': '水印和加密配置',
        'en-US': 'Watermark and Encryption Configuration'
      },
      desc: {
        'zh-CN': `<p>设置 <code>:encrypt-config: { enabled: true, ... }</code> 开启水印和加密弹窗配置，<code>encrypt-config</code> 默认值为 <code>{ enabled: false, encrypt: false, watermark: '' }</code><p>`,
        'en-US': `<p>Set the <code>:encrypt-config: {enabled: true, ...}</code> to enable the watermark and encryption pop-up window configuration. <code>encrypt-config</code>The default value is <code>{enabled: false, encrypt: false, watermark: ''}</code><p>`
      },
      codeFiles: ['encrypt-config.vue']
    }
  ],
  apis: []
}
