import { test, expect } from '@playwright/test'

test('二级标签页', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#tabs-second-layer')

  const tabs1 = page.locator('.tiny-tabs').first()
  const content1 = tabs1.getByRole('tabpanel').locator('.tiny-tabs')

  await expect(content1.first()).toHaveClass(/tiny-tabs--button-card/)
})
