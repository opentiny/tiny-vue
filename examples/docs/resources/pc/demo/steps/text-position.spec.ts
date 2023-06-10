import { test, expect } from '@playwright/test'

test('文本内容位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/steps/text-position')

  const steps1 = page.locator('#preview .tiny-steps').first()
  const steps2 = page.locator('#preview .tiny-steps').nth(1)
  await expect(steps1.locator('.tiny-steps-normal .normal').first()).toHaveClass(/tiny-step--text-bottom/)
  await expect(steps2.locator('.tiny-steps-normal ul').first()).toHaveClass(/tiny-steps--text-right/)
})