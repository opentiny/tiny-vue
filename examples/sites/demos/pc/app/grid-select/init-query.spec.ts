import { expect, test } from '@playwright/test'

test('测试下拉表格初始化查询', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-select#init-query')

  const wrap = page.locator('#init-query')
  const select = wrap.locator('.tiny-grid-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const rows = dropdown.getByRole('row')

  // 选中广州市1
  await page.waitForTimeout(1000)
  await expect(input).toHaveValue('广州市1')

  await input.click()
  await expect(dropdown).toBeVisible()
  await page.waitForTimeout(1000)

  // 选中广州市0
  await rows.nth(1).getByRole('cell').nth(0).click()
  await expect(input).toHaveValue('广州市0')

  // 选中华南区0
  await page.getByRole('textbox').nth(2).click()
  await page.waitForTimeout(1000)
  await page.getByRole('row', { name: '华南区0 广东省0 广州市' }).locator('path').first().click()
  await expect(page.getByText('广州市1广州市2广州市')).toBeVisible()
})
