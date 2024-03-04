import { test, expect } from '@playwright/test'

test('关闭时销毁主体元素', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const dialogBox = page.locator('.tiny-dialog-box')
  await page.goto('dialog-box#destroy-on-close')
  await page.getByRole('button', { name: '打开弹框' }).click()
  await page.getByLabel('Close').click()
  await page.getByRole('radio', { name: '关闭时不销毁' }).click()
  await page.getByRole('button', { name: '打开弹框' }).click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.getByRole('radio', { name: '关闭时销毁' }).click()
  await page.getByRole('button', { name: '打开弹框' }).click()
  await page.getByRole('button', { name: '确定' }).click()
  await expect(dialogBox).toBeHidden()
})
