import { test, expect } from '@playwright/test'

test('表头下拉菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#operation-column-dropdown')

  await page.getByRole('row', { name: '名称 所属区域 地址 公司简介' }).getByRole('button').hover()
  await page.getByText('选择本页数据').click()

  for (const check of await page.locator('.tiny-grid-checkbox input').all()) {
    await expect(check).toBeChecked()
  }
})
