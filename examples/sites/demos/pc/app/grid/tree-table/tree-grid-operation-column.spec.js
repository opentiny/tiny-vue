import { test, expect } from '@playwright/test'

test('树表操作列测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-grid#tree-table-tree-grid-operation-column')
  await page.getByRole('row', { name: '1 GFD科技YX公司 华东区 800' }).getByRole('img').first().click()
  await page.getByRole('row', { name: '2 GFD科技股份有限子公司 华东区 700' }).locator('label span').click()
  await page.getByRole('row', { name: '3 WWWW科技YX公司 华南区 500' }).getByRole('img').first().click()
  await page.getByRole('row', { name: '4 WWWW科技股份有限子公司 华南区 720' }).locator('label span').click()
  await page.getByRole('row', { name: '6 康康物业YX公司 华南区 400' }).getByRole('img').first().click()
  await page.getByRole('row', { name: '8 IK有限责任公司 华南区 400' }).getByRole('img').first().click()

  await expect(page.getByRole('row', { name: '9 IK有限责任股份YX公司 华南区 455' })).toBeVisible()
})
