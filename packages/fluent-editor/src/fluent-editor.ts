import Quill from 'quill'
import { FONT_FAMILY_CONFIG, FONT_SIZE_CONFIG, ICONS_CONFIG, TABLE_RIGHT_MENU_CONFIG, inputFile } from './config'
import Counter from './counter' // 字符统计
import CustomClipboard from './custom-clipboard' // 粘贴板
import CustomImage from './custom-image/BlotFormatter' // 图片
import { CustomImageSpec } from './custom-image/specs/CustomImageSpec' // 图片拉伸模块
import CustomUploader from './custom-uploader' // 上传
// import Emoji from './emoji' // 表情
import FileModule from './file' // 文件
// import GlobalLink from './global-link' // 全局链接
import LineHeightStyle from './lineheight'
import Link from './link' // 超链接0
import Mention from './mention/Mention' // @提醒
// import QuickMenu from './quick-menu' // 快捷菜单
// import Screenshot from './screenshot' // 截图
import SoftBreak from './soft-break' // 软回车
import Strike from './strike' // 删除线
import BetterTable from './table/better-table' // 表格
// import CustomSyntax from './syntax' // 代码块高亮
import Toolbar from './toolbar' // 工具栏
import Video from './video' // 视频

const registerModules = function () {
  const FontClass = Quill.imports['formats/font']
  FontClass.whitelist = FONT_FAMILY_CONFIG

  const SizeStyle = Quill.imports['attributors/style/size']
  // const SizeClass = Quill.imports['attributors/class/size']
  SizeStyle.whitelist = FONT_SIZE_CONFIG

  const Icons = Quill.imports['ui/icons']
  const iconKeys = Object.keys(ICONS_CONFIG)
  iconKeys.forEach(iconKey => {
    Icons[iconKey] = ICONS_CONFIG[iconKey]
  })

  const SnowTheme = Quill.imports['themes/snow']
  SnowTheme.DEFAULTS = {
    modules: {
      toolbar: {
        handlers: {
          ...SnowTheme.DEFAULTS.modules.toolbar.handlers,
          undo: function() {
            this.quill.history.undo()
          },
          redo: function() {
            this.quill.history.redo()
          },
          'better-table': function() {
            this.quill.getModule('better-table').insertTable(3, 3)
          },
          image: function () {
            const option = this.quill.options.uploadOption;
            const accept = option && option.imageAccept;
            inputFile.call(this, 'image', accept);
          },
        }
      },
      'better-table': {
        operationMenu: {
          items: TABLE_RIGHT_MENU_CONFIG,
          color: true
        }
      },
      image: {
        specs: [CustomImageSpec],
        overlay: {
          style: {
            border: '1px dashed rgb(68, 68, 68)',
          },
        },
        align: {
          icons: {
            left: '<i class="icon-text-align-left"></i>',
            center: '<i class="icon-text-align-center"></i>',
            right: '<i class="icon-text-align-right"></i>',
          },
        },
      },
    }
  }

  Quill.register(
    {
      'modules/toolbar': Toolbar,
      'modules/mention': Mention,
      'modules/better-table': BetterTable,
      'modules/clipboard': CustomClipboard,
      'modules/uploader': CustomUploader, // 三者关联性最强
      'modules/image': CustomImage, // 三者关联性最强
      'modules/file': FileModule, // 三者关联性最强
      'modules/counter': Counter,
      'formats/font': FontClass,
      'formats/size': SizeStyle,
      'formats/strike': Strike,
      'formats/softBreak': SoftBreak,
      'formats/lineheight': LineHeightStyle,
      'formats/video': Video,
      // 'formats/emoji': Emoji.EmojiBlot, 表情包模块暂不开发
      // 'modules/emoji-toolbar': Emoji.ToolbarEmoji,
      // 'modules/emoji-shortname': Emoji.ShortNameEmoji,
      // 'modules/global-link': GlobalLink,//暂未开发
      'modules/link': Link,     // 报错
      // 'modules/screenshot': Screenshot,//暂未开发
      // 'modules/quickmenu': QuickMenu,//暂未开发
      // 'modules/syntax': CustomSyntax,   // 原本就是注释的，但是对应的代码高亮功能可以使用
    },
    true, //覆盖内部模块
  )

  return Quill
}

export default registerModules()
