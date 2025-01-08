import { test, expect } from '@playwright/test'

test('测试点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('bulletin-board#events')
  const demo = page.locator('#events')
  const modal = page.locator('.tiny-modal')

  await demo.getByRole('link', { name: 'TINY v2.1.3 版本' }).click()
  await expect(modal.getByText('click 事件：内容为 TINY v2.1.3 版本')).toBeVisible()
})
