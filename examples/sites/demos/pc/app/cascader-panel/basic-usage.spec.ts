import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/cascader-panel/basic-usage')
  await page
    .locator('div')
    .filter({ hasText: /^指南组件$/ })
    .nth(2)
    .click()
  await page.getByRole('menuitem', { name: '指南' }).click()
  await expect(page.getByText('安装开发')).toBeVisible()
})
