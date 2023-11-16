import { test, expect } from '@playwright/test'

test('展开子节点的时候是否自动展开父节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#auto-expand-parent')

  const expandNode = page.locator('#preview .tiny-tree').getByText('二级 1-1')
  await expect(expandNode).toHaveCount(0)
  await page.getByText('一级 1').first().click()
  await expect(expandNode).toHaveCount(1)
})
