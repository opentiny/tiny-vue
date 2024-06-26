import { test, expect } from '@playwright/test'

test('自定义分组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-row-grouping#row-grouping-row-group-render')
  await expect(page.getByText('当前分组行数为1').first()).toBeVisible()
  await expect(page.getByText('自定义渲染省份').first()).toBeVisible()
  await expect(page.getByText('自定义渲染城市').first()).toBeVisible()
  await page.getByText('当前分组行数为1').first().click()
  await expect(page.locator('.tiny-modal').filter({ hasText: '分组展开' })).toBeVisible()
  await page.getByText('当前分组行数为1').first().click()
  await expect(page.locator('.tiny-modal').filter({ hasText: '分组合起' })).toBeVisible()
})
