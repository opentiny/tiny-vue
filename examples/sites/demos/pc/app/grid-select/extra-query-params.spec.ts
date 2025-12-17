import { expect, test } from '@playwright/test'

test('grid-select 初始化查询传参', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-select#extra-query-params')
  await page.waitForTimeout(1000)

  const demo = page.locator('#extra-query-params')
  // 选中指南
  await page.getByLabel('示例', { exact: true }).getByText('指南').click()
  await page.getByRole('row', { name: '指南' }).locator('path').nth(2).click()
  await page.getByRole('row', { name: '组件' }).locator('path').first().click()
  await page.getByLabel('示例', { exact: true }).getByText('组件').click()
  await page.waitForTimeout(400)

  // 选中框架风格
  await page.locator('#extra-query-params').getByRole('textbox').nth(2).click()
  await page.getByRole('row', { name: '框架风格' }).locator('path').first().click()
  await page.locator('#extra-query-params').getByRole('textbox').nth(2).click()
  await expect(page.getByLabel('示例', { exact: true }).getByText('框架风格')).toBeVisible()
})
