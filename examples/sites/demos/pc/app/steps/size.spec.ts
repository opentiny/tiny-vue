import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#size')

  const miniSteps = page.locator('#preview .tiny-steps').first()
  const normalSteps = page.locator('#preview .tiny-steps').nth(1)
  await expect(miniSteps).toHaveClass(/tiny-steps--mini/)
  await expect(normalSteps).not.toHaveClass(/tiny-steps--mini/)
})
