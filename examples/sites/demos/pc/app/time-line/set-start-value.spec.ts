import { test, expect } from '@playwright/test'

test('序号起始值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#set-start-value')

  const nodes = page.locator('#set-start-value .tiny-steps .tiny-timeline-item')
  await expect(nodes.nth(1).locator('.icon span')).toHaveText('3')
  await expect(nodes.nth(2).locator('.icon span')).toHaveText('4')
})
