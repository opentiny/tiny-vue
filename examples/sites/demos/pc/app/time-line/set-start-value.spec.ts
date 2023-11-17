import { test, expect } from '@playwright/test'

test('设置序号起始值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#set-start-value')

  const nodes = page.locator('#preview .tiny-steps .normal')
  await expect(nodes.nth(1).locator('.icon')).toHaveText('3')
  await expect(nodes.nth(2).locator('.icon')).toHaveText('4')
})
