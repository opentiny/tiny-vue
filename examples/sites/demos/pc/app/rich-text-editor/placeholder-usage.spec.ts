import { test, expect } from '@playwright/test'

test('placeholder', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('rich-text-editor#placeholder-usage')

  const wrap = page.locator('#placeholder-usage')
  const editor = wrap.locator('.tiny-rich-text-editor > .tiny-rich-text-editor__container .ProseMirror')
  const placeholder = editor.locator('.is-editor-empty.is-empty')

  await expect(placeholder).toBeVisible()
  await expect(placeholder).toHaveAttribute('data-placeholder', '自定义placeholder')
})
