import { test, expect } from '@playwright/test'

test('斜杠菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('rich-text-editor#slash-menu-usage')

  const wrap = page.locator('#slash-menu-usage')
  const editor = wrap.locator('.tiny-rich-text-editor > .tiny-rich-text-editor__container .ProseMirror')

  await expect(editor).toBeVisible()

  await editor.focus()
  await editor.fill('/')

  const slashMenu = page.locator('.tiny-slash-menu__view')
  await expect(slashMenu).toBeDefined()
})
