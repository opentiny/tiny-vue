import { test, expect } from '@playwright/test'

test('序号仅显示数字', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#normal-steps')

  const steps = page.locator('#preview .tiny-steps')
  await expect(steps.locator('div').first()).toHaveClass(/tiny-steps-normal/)
  const nodes = steps.locator('.tiny-timeline-item')

  await expect(nodes.first()).toHaveClass(/process-current/)
  await expect(nodes.nth(1)).toHaveClass(/process-wait/)
  await nodes.nth(1).click()
  await expect(nodes.nth(1)).toHaveClass(/process-current/)
  await expect(nodes.first()).toHaveClass(/process-done/)
  await nodes.nth(2).click()
  await nodes.nth(3).click()
})
