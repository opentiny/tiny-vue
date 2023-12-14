import { test, expect } from '@playwright/test'

test('竖向时间线', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#vertical-timeline')

  const node1 = page.locator('#vertical-timeline .tiny-steps').nth(0).locator('.tiny-steps-timeline')
  await expect(node1).not.toHaveClass('text-bottom')

  const node2 = page.locator('#vertical-timeline .tiny-steps').nth(1).locator('.tiny-timeline-item')
  await expect(node2.nth(0).locator('.name')).toHaveText('已签收')
  await expect(node2.nth(1).locator('.name')).toHaveText('运输中')
  await expect(node2.nth(2).locator('.name')).toHaveText('已下单')
})
