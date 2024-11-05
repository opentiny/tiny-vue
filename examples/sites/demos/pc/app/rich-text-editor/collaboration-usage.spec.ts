import { test, expect } from '@playwright/test'

test('协同编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('rich-text-editor#collaboration-usage')

  const wrap = page.locator('#collaboration-usage')
  const editor = wrap.locator('.tiny-rich-text-editor > .tiny-rich-text-editor__container .ProseMirror')

  await expect(editor).toBeVisible()

  const contents = editor.locator('p')
  const content = contents.nth(0)
  content.selectText()
  const selection = editor.locator('.ProseMirror-yjs-selection')
  await expect(selection).toBeDefined()
})
