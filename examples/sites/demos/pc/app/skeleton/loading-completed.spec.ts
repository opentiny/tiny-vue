import { expect, test } from '@playwright/test'

test('加载完成', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('skeleton#loading-completed')

  const square = page.locator('.tiny-skeleton-item--square')
  const circle = page.locator('.tiny-skeleton-item--circle')
  const button = page.getByRole('button', { name: '显示/隐藏' })

  await expect(circle).toHaveCount(1)
  await expect(square).toHaveCount(2)
  await expect(circle).toHaveCSS('width', '72px')
  await expect(circle).toHaveCSS('height', '72px')

  await button.click()
  await page.waitForTimeout(500)
  await expect(square).toBeHidden()
  await expect(circle).toBeHidden()
  const p = page.locator('.paragraph')
  await expect(p).toHaveText(/内容比较短的一段文字/)
  const btn = page.getByRole('button', { name: '一个按钮' })
  await expect(btn).toBeVisible()
  const head = page.locator('.tiny-user-head')
  await expect(head).toBeVisible()
})
