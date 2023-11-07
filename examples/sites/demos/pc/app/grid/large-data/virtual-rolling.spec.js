import { test, expect } from '@playwright/test'

test('虚拟滚动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-large-data#large-data-virtual-rolling')
  await page.locator('.tiny-grid__body').hover()
  // 先滚动1000px
  await page.mouse.wheel(0, 1000)
  await expect(page.getByRole('cell', { name: '39' }).first()).toBeVisible()
  await page.waitForTimeout(500)
  await page.locator('.tiny-grid__body').hover()
  // 先滚动4000px
  await page.mouse.wheel(0, 5000)
  await expect(page.getByRole('cell', { name: '218' })).toBeVisible()
})
