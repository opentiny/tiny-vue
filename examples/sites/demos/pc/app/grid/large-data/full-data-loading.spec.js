import { test, expect } from '@playwright/test'

test('全量加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-large-data#large-data-full-data-loading')
  await page.setViewportSize({
    width: 1400,
    height: 2500
  })
  await page.waitForTimeout(1000)
  const scrollContainer = page.locator('.tiny-grid__body-wrapper')
  await scrollContainer.evaluate((el) => (el.scrollTop = 1000))
  await expect(page.getByRole('cell', { name: '28' })).toBeVisible()
  await page.waitForTimeout(500)
  await scrollContainer.evaluate((el) => (el.scrollTop = 6000))
  await page.waitForTimeout(200)
  await expect(page.getByRole('cell', { name: '129' })).toBeVisible()
})
