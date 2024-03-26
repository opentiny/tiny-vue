import { test, expect } from '@playwright/test'

test.describe('树表增删改功能', () => {
  test('树表增删测试', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-tree-table#tree-table-tree-grid-insert-delete-update')
    await page.getByRole('button', { name: '新增' }).click()
    await page.getByRole('row', { name: '1 新数据' }).getByRole('textbox').click()
    await page.getByRole('row', { name: '1 新数据' }).getByRole('textbox').fill('zzcd')
    await page.locator('.tiny-grid-toolbar').click()
    await page.getByRole('button', { name: '确定' }).click()
    await expect(page.getByRole('cell', { name: 'zzcd' })).toBeVisible()
    await page.getByRole('row', { name: '1 新数据' }).locator('.tiny-grid-checkbox__icon').first().click()
    await page.getByRole('button', { name: '移除选中' }).click()
    await expect(page.getByRole('cell', { name: 'zzcd' })).not.toBeVisible()
  })

  test('树表修改测试', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-tree-table#tree-table-tree-grid-insert-delete-update')
    await page
      .getByRole('row', { name: '2 WWWW科技YX公司 华南区 500' })
      .locator('.tiny-grid-tree-wrapper')
      .first()
      .click()
    await page.getByRole('row', { name: '3 WWWW科技股份有限子公司 华南区 720' }).getByText('华南区').first().click()
    await page.getByRole('row', { name: '3 WWWW科技股份有限子公司 720' }).getByRole('textbox').first().click()
    await page.getByRole('row', { name: '3 WWWW科技股份有限子公司 720' }).getByRole('textbox').fill('华南区ee')
    await page.getByText('WWWW科技YX公司').first().click()
    await page.getByRole('button', { name: '获取修改' }).click()

    await expect(page.getByText('1').nth(1)).toBeVisible()
  })
})
