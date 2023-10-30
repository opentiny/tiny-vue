import { test, expect } from '@playwright/test'

test('自定义节点内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('toggle-menu#slot-node')
  const preview = page.locator('#preview')
  await expect(preview.locator('.tiny-toggle-menu__name > div').filter({ hasText: '表单组件3' })).toHaveCount(1)
  await page.getByRole('treeitem', { name: '数据组件4' }).locator('svg').click()
  await expect(preview.locator('.tiny-toggle-menu__name > div').filter({ hasText: 'Pager 分页14' })).toHaveCount(1)
})
