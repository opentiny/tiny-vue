import { test, expect } from '@playwright/test'

test('嵌套grid', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/modal/grid')

  const modal = page.locator('.tiny-modal')
  const grid = modal.locator('.tiny-grid ')
  await page.getByRole('button', { name: '默认插槽' }).click()
  await expect(grid).toBeVisible()
})