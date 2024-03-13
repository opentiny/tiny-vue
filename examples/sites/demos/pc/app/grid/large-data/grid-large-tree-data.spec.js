import { test, expect } from '@playwright/test'

test('树表虚拟滚动', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-large-data#large-data-grid-large-tree-data')
  // 展开树表
  await page.getByRole('cell', { name: 'IR-1-120个子US' }).locator('path').click()
  await expect(page.getByText('124', { exact: true })).toBeVisible()
  // 滚动1000px
  await page.locator('.tiny-grid__body').hover()
  await page.mouse.wheel(0, 1000)
  await expect(page.getByRole('cell', { name: '149', exact: true })).toBeVisible()
})
