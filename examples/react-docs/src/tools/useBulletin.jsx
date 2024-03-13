import { $local } from './storage'
import { Modal } from '@opentiny/vue'
import { useEffect } from 'react'

const bulletins = [
  {
    id: 'version-tip',
    content: `为了避免 @opentiny/vue 的月度版本(minor)升级带来的不确定因素，推荐在您的工程中的 package.json 中依赖包的版本号前使用 ~，
    比如 "@opentiny/vue": "~3.12.0"。`,
    time: '2023-12-04'
  }
]
const bulletinKey = 'openttiny-last-bulletin'
/**
 *  公告通知管理
 * 1、记录历史所有的公告，以备记录，每次只显示第一条公告即可！
 * 2、用户点击确认之后，不再弹出该公告
 */
export function useBulletin() {
  const lastBulletin = bulletins[0]
  if (lastBulletin.id !== $local[bulletinKey]) {
    useEffect(() => {
      Modal.confirm({
        title: '公告',
        message: (
          <div style="font-size:16px;line-height:1.5;">
            <div>尊敬的 TinyVue 用户：</div>
            <p style="text-indent: 2em;" v-html={lastBulletin.content}></p>
            <div style="text-align:right;margin-top:20px">TinyVue 团队</div>
            <div style="text-align:right;">{lastBulletin.time}</div>
          </div>
        ),
        status: null,
        width: '760',
        confirmContent: '我知道了',
        cancelContent: '关闭'
      }).then((res) => {
        if (res === 'confirm') {
          $local[bulletinKey] = lastBulletin.id
        }
      })
    }, [])
  }
}
