import { test, expect } from '@playwright/test'

test('缺省数据默认值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-data-source#undefined-field-defalut-value')

  const demo = page.locator('#undefined-field-defalut-value')

  const firstRow = demo.locator('.tiny-grid-body__row:visible').nth(0)

  // 缺省值的修改能够正常显示角标
  await firstRow.locator('td').nth(1).click()
  await firstRow.locator('.tiny-input__inner').click()
  await firstRow.locator('.tiny-input__inner').fill('1')
  await firstRow.locator('td').nth(2).click()
  await firstRow.locator('.tiny-input__inner').click()
  await expect(firstRow.locator('td').nth(1)).toHaveClass(/col__valid-success/)
  await firstRow.locator('.tiny-input__inner').fill('2')
  await firstRow.locator('td').nth(1).click()
  await expect(firstRow.locator('td').nth(2)).toHaveClass(/col__valid-success/)

  // 新增行能成功进入编辑态
  await demo.locator('.tiny-button').click()
  await firstRow.locator('td').nth(1).click()
  await firstRow.locator('.tiny-input__inner').click()
  await firstRow.locator('.tiny-input__inner').fill('1')
  await expect(firstRow.locator('.tiny-input__inner')).toHaveValue('1')
})
