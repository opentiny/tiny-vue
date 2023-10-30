import { test, expect } from '@playwright/test'

test('勾选节点事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#node-events')

  const nodeCheckbox = page.getByRole('treeitem', { name: '三级 1-1-1' }).locator('span').nth(2)
  await nodeCheckbox.click()
  await expect(page.getByText('勾选节点后的事件').first()).toBeVisible()
  await expect(page.getByText('节点选中状态发生变化时触发的事件').first()).toBeVisible()
})
