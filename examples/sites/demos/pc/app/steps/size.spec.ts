import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#size')

  const miniSteps = page.locator('#size .tiny-steps-block').first()
  await expect(miniSteps).toHaveClass(/small/)
})
