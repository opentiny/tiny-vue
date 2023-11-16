import { test, expect } from '@playwright/test'

test('自定义展开折叠图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree#custom-node-icon')

  await expect(
    page.getByRole('treeitem', { name: '二级 1-1' }).locator('.tree-node-icon .expanded').first()
  ).toBeVisible()
  await page
    .locator('div')
    .filter({ hasText: /^一级 2$/ })
    .first()
    .click()
  await expect(page.getByRole('treeitem', { name: '一级 2' }).locator('.tree-node-icon').first()).not.toHaveClass(
    /expanded/
  )
})
