import { test, expect } from '@playwright/test'

test('全量加载', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-large-data#large-data-full-data-loading')
  await page.setViewportSize({
    width: 1400,
    height: 2500
  })
  await page.waitForTimeout(1000)
  await page.locator('.tiny-grid__body-wrapper').hover()
  await page.locator('.tiny-grid__body-wrapper').click()
  // 先滚动 1000px
  await page.mouse.wheel(0, 1000)
  await expect(page.getByRole('cell', { name: '28' })).toBeVisible()
  await page.waitForTimeout(500)
  await page.locator('.tiny-grid__body-wrapper').hover()
  await page.locator('.tiny-grid__body-wrapper').click()
  // 先滚动 4000px
  await page.mouse.wheel(0, 5000)
  await page.waitForTimeout(200)
  await expect(page.getByRole('cell', { name: '129' })).toBeVisible()
})
