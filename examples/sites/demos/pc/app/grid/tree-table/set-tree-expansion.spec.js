import { test, expect } from '@playwright/test'

test('树节点展开操作', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-table#tree-table-set-tree-expansion')

  await page.getByRole('button', { name: '展开指定树节点' }).click()
  await expect(page.getByText('深圳市福德宝网络技术YX公司')).toBeVisible()

  await page.getByRole('button', { name: '切换展开树节点' }).click()
  await expect(page.getByText('WWWW科技股份有限子公司')).not.toBeVisible()

  await page.getByRole('button', { name: '展开所有树节点' }).click()
  await expect(page.getByText('IK有限责任股份YX公司')).toBeVisible()
})
