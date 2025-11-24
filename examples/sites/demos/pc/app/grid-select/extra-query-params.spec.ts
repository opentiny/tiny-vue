import { expect, test } from '@playwright/test'

test('grid-select 初始化查询传参', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-select#extra-query-params')
  await page.waitForTimeout(1000)

  // 选中指南
  await page
    .locator('div')
    .filter({ hasText: /^指南$/ })
    .click()
  await page.getByRole('row', { name: '指南' }).locator('path').nth(2).click()
  await page.getByRole('row', { name: '组件' }).locator('path').first().click()
  await page.getByRole('textbox').nth(3).click()
  await page.waitForTimeout(400)

  // 选中框架风格
  await page.getByRole('row', { name: '框架风格' }).locator('div').first().click()
  await expect(
    page
      .locator('div')
      .filter({ hasText: /^框架风格$/ })
      .nth(2)
  ).toBeVisible()
})
