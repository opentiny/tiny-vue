import { test, expect } from '@playwright/test'

test('虚拟滚动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-large-data#large-data-virtual-rolling')
  const demo = page.locator('#large-data-virtual-rolling')
  await page.setViewportSize({
    width: 1400,
    height: 2500
  })
  await page.waitForTimeout(1000)
  const bodyWrapper = demo.locator('.tiny-grid__body-wrapper')
  await bodyWrapper.hover()
  await bodyWrapper.click()
  // 先滚动 1000px
  await page.mouse.wheel(0, 1000)
  await expect(demo.getByRole('cell', { name: '24' })).toBeVisible()
  await page.waitForTimeout(500)
  await bodyWrapper.hover()
  await bodyWrapper.click()
  // 先滚动 4000px
  await page.mouse.wheel(0, 5000)
  await expect(demo.getByRole('cell', { name: '124' })).toBeVisible()
})
