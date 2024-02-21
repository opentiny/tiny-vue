import { test, expect } from '@playwright/test'

test('编码下拉框正常展示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('filter-panel#code')

  const panel = page.locator('.tiny-filter-panel')
  const button = panel.locator('.tiny-filter-box')

  await button.click()
  await page.locator('textarea').isVisible()
  await page.getByText('支持输入多个值，用分号区隔').isVisible()
  await page.getByRole('button', { name: '确定' }).isVisible()
  await page.locator('textarea').fill('111')
  await page.getByText('编码编码111').isVisible()
})
