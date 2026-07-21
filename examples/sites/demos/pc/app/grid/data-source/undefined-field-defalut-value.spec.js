import { test, expect } from '@playwright/test'

test('缺省数据默认值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-data-source#undefined-field-defalut-value')

  const demo = page.locator('#undefined-field-defalut-value')
  const custom = page.locator('.tiny-grid-custom')

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

  // 测试：新增行后通过个性化面板设置列隐藏，新增的行不应该消失
  const rowsBefore = await demo.locator('.tiny-grid-body__row:visible').count()
  expect(rowsBefore).toBeGreaterThan(2) // 原始2行 + 新增的1行

  await page.locator('.tiny-grid-custom__setting-btn').click()

  await custom.getByRole('row', { name: '地址' }).getByTitle('显示').getByRole('img').click()

  await custom.getByRole('button', { name: '确定' }).click()

  await expect(page.getByRole('cell', { name: '地址' })).not.toBeVisible()

  // 6. 验证新增的行仍然存在（行数应该保持不变）
  const rowsAfter = await demo.locator('.tiny-grid-body__row:visible').count()
  expect(rowsAfter).toBe(rowsBefore)

  // 7. 验证新增的行数据仍然可以编辑
  const newRow = demo.locator('.tiny-grid-body__row:visible').first()
  await newRow.locator('td').nth(0).click() // 点击第一列
  await newRow.locator('.tiny-input__inner').click()
  await newRow.locator('.tiny-input__inner').fill('test')
  await expect(newRow.locator('.tiny-input__inner')).toHaveValue('test')
})
