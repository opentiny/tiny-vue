import { test, expect } from '@playwright/test'

test('编码下拉框正常展示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('filter-panel#code')

  const container = page.locator('#code')
  const panel = page.locator('.tiny-filter-panel')
  const button = panel.locator('.tiny-filter-box')
  const tags = container.locator('.tiny-tag')

  await button.click()
  await page.locator('textarea').isVisible()
  await page.getByText('支持输入多个值，用分号区隔').isVisible()
  await page.locator('textarea').fill('标签：111')
  await page.getByRole('button', { name: '确定' }).click()
  await expect(tags.first()).toHaveText('标签：111')
})
