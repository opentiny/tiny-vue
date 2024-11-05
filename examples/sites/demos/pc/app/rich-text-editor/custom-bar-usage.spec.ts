import { test, expect } from '@playwright/test'

test('自定义工具栏', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('rich-text-editor#custom-bar-usage')

  const wrap = page.locator('#custom-bar-usage')
  const toolbarMenu = wrap.locator('.tiny-rich-text-editor > .tiny-toolbar-menu__view')
  const menuItems = toolbarMenu.locator('.tiny-toolbar-menu__item')

  await expect(toolbarMenu).toBeVisible()
  await expect(menuItems).toHaveCount(2)
})
