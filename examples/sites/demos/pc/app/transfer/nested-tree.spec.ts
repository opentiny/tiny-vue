import { test, expect } from '@playwright/test'

test('测试嵌套树', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#nested-tree')

  const preview = page.locator('.pc-demo-container')

  const level1 = preview.getByRole('treeitem', { name: '一级 1' })

  // 可展开
  await level1.locator('svg').first().click()
  await expect(level1.getByRole('treeitem', { name: '二级 1-1' })).toBeVisible()

  // 可穿梭
  await level1.locator('svg').nth(1).click()
  await preview.locator('.tiny-transfer__button').nth(0).click()
  await expect(preview.getByRole('treeitem', { name: '一级 1' })).toHaveCount(2)
})
