import { test, expect } from '@playwright/test'

test('自定义分组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-row-grouping#rowGroupRender')
  await expect(page.getByText('当前分组行数为1').first()).toBeVisible()
})
