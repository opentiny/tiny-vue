import { test, expect } from '@playwright/test'

test('测试图片按钮是否插入图片成功', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#image')
  await page.getByRole('button', { name: '图片按钮' }).click()
  await expect(page.locator('.tiny-button:nth-child(1) >> img')).toBeVisible()
})
