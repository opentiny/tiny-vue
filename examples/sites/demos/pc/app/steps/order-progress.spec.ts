import { test, expect } from '@playwright/test'

test('订单流程', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#order-progress')

  const advancedSteps = page.locator('#preview .tiny-steps')
  const nodes = advancedSteps.locator('li')

  await expect(nodes.first()).toContainText('已下单')
  await expect(nodes.nth(1)).toContainText('运输中')
  await expect(nodes.nth(1).locator('.count')).toContainText('1')
  await expect(nodes.nth(2)).toContainText('已签收')
  await nodes.nth(2).click()
  await expect(nodes.nth(2)).toHaveClass(/current/)
})
