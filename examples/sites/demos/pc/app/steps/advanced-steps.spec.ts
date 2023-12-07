import { test, expect } from '@playwright/test'

test('高级向导', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#advanced-steps')

  const advancedSteps = page.locator('.pc-demo .tiny-steps')
  const stepsWrapper = advancedSteps.locator('ul.tiny-steps-advanced')
  const nodes = advancedSteps.locator('.tiny-steps-advanced li')

  await expect(stepsWrapper).toBeVisible()
  await expect(nodes.first()).toHaveClass('doing')
  await expect(nodes.nth(1)).toHaveClass('done')
  await expect(nodes.nth(2)).toHaveClass(/current/)
  await nodes.nth(3).click()
  await expect(nodes.nth(3)).toHaveClass(/current/)
  await expect(nodes.nth(2)).not.toHaveClass(/current/)
})
