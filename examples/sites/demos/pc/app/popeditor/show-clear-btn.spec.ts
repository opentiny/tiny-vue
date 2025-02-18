import { test, expect } from '@playwright/test'

test('PopEditor 是否可清除', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#show-clear-btn')

  const preview = page.locator('#show-clear-btn')
  const textBox = preview.getByRole('textbox')
  const del = preview.getByRole('img')

  await expect(textBox).toHaveValue('GFD 科技 YX 公司')
  await del.click()
  await expect(textBox).toHaveValue('')
})
