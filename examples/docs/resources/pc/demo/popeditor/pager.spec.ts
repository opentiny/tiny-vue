import { test, expect } from '@playwright/test'

test('PopEditor 分页', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pop-editor/pager')

  const preview = page.locator('#preview')
  const textBox = preview.getByRole('textbox')
  const dialogBox = page.locator('.tiny-dialog-box')
  const pager = dialogBox.locator('.tiny-pager__number')

  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await expect(pager).toBeVisible()
})
