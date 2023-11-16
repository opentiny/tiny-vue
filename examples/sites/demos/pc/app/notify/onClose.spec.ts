import { test, expect } from '@playwright/test'

test('点击关闭按钮时触发事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#close')
  await page.getByRole('button', { name: '点击关闭按钮时触发事件' }).click()
  const notify = page.locator('.tiny-notify')
  await page.locator('.tiny-notify__icon-close').click()
  const modal = page.locator('.tiny-modal__box')
  await expect(modal).toBeVisible()
})
