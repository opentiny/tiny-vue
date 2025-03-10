import { test, expect } from '@playwright/test'

test('气泡菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('rich-text-editor#bubble-menu-usage')

  const wrap = page.locator('#bubble-menu-usage')
  const editor = wrap.locator('.tiny-rich-text-editor > .tiny-rich-text-editor__container .ProseMirror')

  await expect(editor).toBeVisible()

  const content = editor.locator('p')
  await content.selectText()
  const bubbleMenu = editor.locator('div[data-tippy-root]')

  await expect(bubbleMenu).toBeDefined()
})
