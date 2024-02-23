import { test, expect } from '@playwright/test'

test('点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#event-click')
  await page.locator('.tiny-split-trigger-button').first().click()
  await expect(page.getByText('点击事件1')).toBeVisible()
  await page.locator('.tiny-split-trigger-con > div:nth-child(3)').click()
  await expect(page.getByText('点击事件2')).toBeVisible()
})
