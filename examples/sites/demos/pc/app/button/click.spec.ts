import { test, expect } from '@playwright/test'

test('测试点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#click')
  await page.getByRole('button', { name: '默认按钮' }).click()
  const messageLocator = page.locator('.tiny-modal__box').filter({ hasText: 'click' })
  await expect(messageLocator).toBeVisible()
})
