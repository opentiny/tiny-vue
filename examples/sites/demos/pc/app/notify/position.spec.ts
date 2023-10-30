import { test, expect } from '@playwright/test'

test('显示位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#position')
  await page.getByRole('button', { name: '默认bottom-right' }).click()
  await page.getByRole('button', { name: 'top-right' }).click()
  const bottom = page.locator('.bottom-right')
  const bottomBox = await bottom.boundingBox()
  const top = page.locator('.top-right')
  const topBox = await top.boundingBox()
  expect(topBox.y).toBeLessThan(bottomBox.y)
})
