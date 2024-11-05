import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('rich-text-editor#basic-usage')

  const wrap = page.locator('#basic-usage')
  const editor = wrap.locator('.tiny-rich-text-editor > .tiny-rich-text-editor__container .ProseMirror')

  await expect(editor).toBeVisible()
  await expect(editor).toHaveAttribute('contenteditable', 'true')

  await editor.focus()
  await expect(editor).toHaveClass('ProseMirror-focused')

  await editor.fill('hello')
})
