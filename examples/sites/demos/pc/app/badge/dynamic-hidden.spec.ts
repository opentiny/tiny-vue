import { test, expect } from '@playwright/test'

test('消息已读动态隐藏标记', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('badge#dynamic-hidden')

  const preview = page.locator('#preview')
  const badge = preview.locator('.tiny-badge')
  const button = preview.getByRole('button', { name: '读取一条消息' })

  await expect(badge).toContainText('2')
  await button.click()
  await expect(badge).toContainText('1')
  await button.click()
  await expect(badge).not.toBeVisible()
})
