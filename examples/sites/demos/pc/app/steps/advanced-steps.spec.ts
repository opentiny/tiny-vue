import { test, expect } from '@playwright/test'

test('高级向导', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#advanced-steps')

  // 默认模式
  const steps = page.locator('.pc-demo .tiny-steps')
  const stepsWrapper = steps.locator('ul.tiny-steps-advanced')
  const nodes = steps.locator('.tiny-steps-advanced li')

  await expect(stepsWrapper).toBeVisible()
  await expect(nodes.first()).toHaveClass('doing')
  await expect(nodes.nth(1)).toHaveClass(/done/)
  await expect(nodes.nth(1)).toHaveClass(/current/)
  await nodes.nth(3).click()
  await expect(nodes.nth(3)).toHaveClass(/current/)
  await expect(nodes.nth(1)).not.toHaveClass(/current/)

  // advanced 高级向导模式
  const advancedSteps = page.locator('.pc-demo .tiny-steps-senior')
  const advancedNodes = advancedSteps.locator('.tiny-steps-block')
  await expect(advancedSteps).toBeVisible()
  await expect(advancedNodes.first()).toHaveClass(/doing/)
  await expect(advancedNodes.nth(1)).toHaveClass(/done/)
})
