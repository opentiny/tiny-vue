import { test, expect } from '@playwright/test'

test('自定义配置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('rich-text-editor#options-usage')

  const wrap = page.locator('#options-usage')
  const editor = wrap.locator('.tiny-rich-text-editor > .tiny-rich-text-editor__container .ProseMirror')

  await expect(editor).toBeVisible()
  await expect(editor).toHaveAttribute('contenteditable', 'true')

  await expect(editor).toBeFocused()
  await expect(editor).toHaveClass('ProseMirror-focused')
})
