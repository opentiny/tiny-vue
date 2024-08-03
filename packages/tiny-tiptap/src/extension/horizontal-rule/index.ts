import type { ExtensionOptions } from '@/types'
import type { HorizontalRuleOptions } from '@tiptap/extension-horizontal-rule'
import TiptapHorizontalRule from '@tiptap/extension-horizontal-rule'

const HorizontalRule = TiptapHorizontalRule.extend<ExtensionOptions & HorizontalRuleOptions>({
  addOptions() {
    return {
      ...this.parent?.()
    }
  }
})

export default HorizontalRule
export { HorizontalRule, HorizontalRuleOptions }
