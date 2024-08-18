import * as Y from 'yjs'
import { TiptapCollabProvider } from '@hocuspocus/provider'
import { ExtensionCollaboration, ExtensionCollaborationCursor } from '../../extension'
import type { AnyExtension } from '@tiptap/core'

/**
 * 此处是 tiptap 官方提供的 websocket 地址
 * wss://${appId}.collab.tiptap.cloud/ 通过以上地址来进行数据交换
 * 若要实际开启协同编辑功能需要后端 websocket 进行支持
 * room 则是对应的协同编辑组 设置相同 name 则在同一个编辑器中进行协同编辑
 */
const defaultAppId = '7j9y6m10'
const defaultRoom = `room.${new Date().getFullYear().toString().slice(-2)}${new Date().getMonth() + 1}${new Date().getDate()}`

export const setupCollaboration = (extensions: AnyExtension[], config: { room: string; appId: string } | boolean) => {
  const ydoc = new Y.Doc()
  let appId = ''
  let room = ''
  if (typeof config === 'boolean') {
    appId = defaultAppId
    room = defaultRoom
  } else {
    appId = config.appId
    room = config.room
  }
  const provider = new TiptapCollabProvider({
    appId,
    name: room,
    document: ydoc
  })
  const collaboration = [
    ExtensionCollaboration.configure({
      document: ydoc
    }),
    ExtensionCollaborationCursor.configure({
      provider
    })
  ]
  extensions.push(...collaboration)
}
