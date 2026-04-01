import { test, expect } from '@playwright/test'

test('虚拟滚动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-large-data#large-data-virtual-rolling')
  await page.setViewportSize({
    width: 1400,
    height: 2500
  })
  await page.waitForTimeout(1000)
  await page.locator('.tiny-grid__body-wrapper').hover()
  await page.locator('.tiny-grid__body-wrapper').click()
  const scrollContainer = page.locator('.tiny-grid__body-wrapper')
  await scrollContainer.evaluate((el) => (el.scrollTop = 1000))
  await expect(page.getByRole('cell', { name: '24' })).toBeVisible()
  await page.waitForTimeout(500)
  await page.locator('.tiny-grid__body-wrapper').hover()
  await page.locator('.tiny-grid__body-wrapper').click()

  await scrollContainer.evaluate((el) => (el.scrollTop = 6000))
  await expect(page.getByRole('cell', { name: '124' })).toBeVisible()
})
