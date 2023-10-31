import { test, expect } from '@playwright/test'

test('PopEditor 联想查询', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#suggest')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const grid = page.locator('.tiny-grid__wrapper')

  await textBox.fill('科技')
  await page.waitForTimeout(500)
  await expect(grid).toBeVisible()
})
