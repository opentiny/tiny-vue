import { test, expect } from '@playwright/test'

test('底部分割线', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/steps/show-divider')

  const steps = page.locator('#preview .tiny-steps')
  await expect(steps.locator('.tiny-steps__bottom-divider')).toBeVisible()
})