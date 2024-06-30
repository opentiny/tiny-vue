import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#size')

  // 单链型步骤条尺寸
  const stepsLines = page.locator('.pc-demo .tiny-steps-line')
  await expect(stepsLines.first()).toHaveClass(/mini/)
  await expect(stepsLines.nth(1)).toHaveClass(/small/)
  await expect(stepsLines.nth(2)).toHaveClass(/medium/)
  await expect(stepsLines.nth(3)).toHaveClass(/large/)

  // 高级向导步骤条尺寸
  const stepsSenior = page.locator('.pc-demo .tiny-steps-senior')
  await expect(stepsSenior.first()).toHaveClass(/medium/)
  await expect(stepsSenior.nth(1)).toHaveClass(/large/)
})
