import { test, expect } from '@playwright/test'

test('自定义节点内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#slot-node')
  await expect(page.locator('.tiny-toggle-menu__name > div').filter({ hasText: '表单组件 3' })).toHaveCount(1)
  await page.getByRole('treeitem', { name: '数据组件 4' }).locator('svg').click()
  await expect(page.locator('.tiny-toggle-menu__name > div').filter({ hasText: 'Pager 分页 14' })).toHaveCount(1)
})
