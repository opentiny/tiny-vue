import { test, expect } from '@playwright/test'

test('底部分割线', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#show-divider')

  const steps = page.locator('.pc-demo .tiny-steps')
  await expect(steps.locator('.show-divider')).toBeVisible()
})
