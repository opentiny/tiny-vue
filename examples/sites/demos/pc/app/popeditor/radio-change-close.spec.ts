import { test, expect } from '@playwright/test'

test('单选选中后关闭', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popeditor#radio-change-close')

  const demo = page.locator('#radio-change-close')
  const textBox = demo.locator('.tiny-popeditor')
  const dialogBox = page.locator('.tiny-dialog-box')
  const radio = dialogBox.locator('.tiny-grid-radio').first()

  await textBox.click()
  await expect(dialogBox).toBeVisible()
  await radio.click()
  await expect(dialogBox).not.toBeVisible()
})
