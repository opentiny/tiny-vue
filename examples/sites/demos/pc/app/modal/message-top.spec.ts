import { test, expect } from '@playwright/test'

test('消息距离顶部位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#message-top')
  const content = page.locator('.type__message')
  await page.getByRole('button', { name: '消息距离顶部 500px' }).click()
  await expect(content).toHaveCSS('top', '500px')
})
