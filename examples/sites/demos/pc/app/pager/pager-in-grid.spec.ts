import { test, expect } from '@playwright/test'

test('测试表格分页', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#pager-in-grid')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager')
  const next = pager.locator('.tiny-pager__btn-next')
  const firstTableRow = preview.locator('.tiny-grid .tiny-grid-body__row').first()

  await next.click()
  await expect(firstTableRow).toHaveText(/WSX科技YX公司/)
  await next.click()
  await expect(firstTableRow).toHaveText(/TIG管理YX公司/)
})
