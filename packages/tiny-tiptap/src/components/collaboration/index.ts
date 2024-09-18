import * as Y from 'yjs'
import { TiptapCollabProvider, TiptapCollabProviderConfiguration } from '@hocuspocus/provider'
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

export const setupCollaboration = (extensions: AnyExtension[], config: TiptapCollabProviderConfiguration | boolean) => {
  const ydoc = new Y.Doc()
  let params: TiptapCollabProviderConfiguration = {
    document: ydoc,
    name: ''
  }
  if (typeof config === 'boolean') {
    if (!config) return
    params.appId = defaultAppId
    // params.baseUrl = 'ws://127.0.0.1:1234'
    params.name = defaultRoom
  } else {
    params = {
      document: params.document,
      ...config
    }
  }

  const provider = new TiptapCollabProvider(params)
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
