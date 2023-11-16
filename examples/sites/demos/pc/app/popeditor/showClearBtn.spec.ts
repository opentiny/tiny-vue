import { test, expect } from '@playwright/test'

test('PopEditor 是否可清除', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#showClearBtn')

  const preview = page.locator('#preview')
  const textBox = preview.locator('.tiny-popeditor-readonly')
  const textBoxInput = textBox.locator('input')
  const del = textBox.locator('svg')

  await expect(textBoxInput).toHaveValue('GFD科技YX公司')
  await del.click()
  await expect(textBoxInput).toHaveValue('')
})
