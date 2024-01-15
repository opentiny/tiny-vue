import { test, expect } from '@playwright/test'

test('文本内容位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#text-position')

  const steps1 = page.locator('#text-position .tiny-steps')
  await expect(steps1.locator('.tiny-steps-normal')).toHaveClass(/text-right/)
})
