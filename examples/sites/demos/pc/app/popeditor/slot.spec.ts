import { test, expect } from '@playwright/test'

test('PopEditor 组件查询条件插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#slot')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const searchWrap = page.locator('.tiny-dialog-box__body > .tiny-popeditor-top')
  const defaultSearch = searchWrap.locator('.tiny-popeditor__search-lists')
  const slotItem = searchWrap.locator('.item')

  await textBox.click()
  await expect(defaultSearch).toHaveCount(0)
  await expect(slotItem).toHaveCount(3)
})
