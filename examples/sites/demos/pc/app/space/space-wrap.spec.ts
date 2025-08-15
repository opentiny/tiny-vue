import { test, expect } from '@playwright/test'

test('动态切换wrap属性', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('space#space-wrap')

  await page.getByRole('button', { name: '切换wrap' }).click()
  const space = page.locator('.tiny-space')
  await expect(space).not.toHaveClass(/tiny-space--wrap/)
})
