import { test, expect } from '@playwright/test'

test('表单事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#events')

  const demo = page.locator('#events')
  const messageModal = page.locator('.tiny-modal.active')

  await demo.getByRole('button', { name: '提交' }).click()
  await expect(messageModal).toHaveText('校验事件触发了')
})
