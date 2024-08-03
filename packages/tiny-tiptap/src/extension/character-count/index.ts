import type { ExtensionOptions } from '@/types'
import type { CharacterCountOptions } from '@tiptap/extension-character-count'
import TiptapCharacterCount from '@tiptap/extension-character-count'

const CharacterCount = TiptapCharacterCount.extend<ExtensionOptions, CharacterCountOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default CharacterCount
export { CharacterCount, CharacterCountOptions }
