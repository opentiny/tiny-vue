import { test, expect } from '@playwright/test'

test('关闭时销毁主体元素', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#destroy-on-close')

  const dialogBox = page.locator('#preview .tiny-dialog-box')

  await page.getByRole('radio', { name: '关闭时销毁' }).click()
  await expect(dialogBox).toHaveCount(0)

  await page.getByRole('radio', { name: '关闭时不销毁' }).click()
  await expect(dialogBox).toHaveCount(1)
})
