import { test, expect } from '@playwright/test'

test('动画播放完成', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('number-animation#finish-events')
  await page.getByRole('button', { name: '播放' }).click()
  await page.waitForTimeout(1000)
  await page.locator('#finish-events').getByText('900')
  const messageLocator = page.locator('.tiny-modal__box').filter({ hasText: '动画结束了' })
  await expect(messageLocator).toBeVisible()
})
