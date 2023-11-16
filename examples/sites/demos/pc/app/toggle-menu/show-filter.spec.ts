import { test, expect } from '@playwright/test'

test('显示过滤搜索框', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#show-filter')
  const preview = page.locator('#preview')
  // 应该获取不到搜索框
  await expect(preview.locator('.tiny-toggle-menu__filter')).toHaveCount(0)
  const noWrapText = page
    .getByRole('treeitem', { name: '菜单内容超长是否换行显示，默认为不换行' })
    .locator('div')
    .first()
    .locator('.tiny-toggle-menu__name')
  await expect(noWrapText).toHaveCSS('white-space', 'normal')
  await expect(noWrapText).toHaveCSS('word-break', 'break-word')
})
