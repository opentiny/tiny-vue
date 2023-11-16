import { test, expect } from '@playwright/test'

test.describe('树表增删改功能', () => {
  test('树表增删测试', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-tree-grid#tree-table-tree-grid-insert-delete-update')
    await page.getByRole('button', { name: '新增' }).click()
    await page.getByRole('row', { name: '1 新数据' }).getByRole('textbox').click()
    await page.getByRole('row', { name: '1 新数据' }).getByRole('textbox').fill('ee')
    await page.locator('.tiny-grid-toolbar').click()
    await page.getByRole('row', { name: '1 新数据 ee' }).getByRole('img').first().click()
    await page.getByText('新数据', { exact: true }).first().click()
    await page.getByText('新数据-child').click()
    await page.getByRole('row', { name: '2 GFD科技YX公司 华东区 800' }).locator('span').nth(2).click()
    const selectTr = await page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/div[2]/div[3]/table/tbody/tr[3]')

    await expect(selectTr).toHaveClass(/row__selected/)
    await page.getByRole('button', { name: '移除选中' }).click()

    await expect(selectTr).not.toHaveClass(/row__selected/)
  })

  test('树表修改测试', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('grid-tree-grid#tree-table-tree-grid-insert-delete-update')
    await page.getByRole('row', { name: '2 WWWW科技YX公司 华南区 500' }).getByRole('img').first().click()
    await page.getByRole('row', { name: '3 WWWW科技股份有限子公司 华南区 720' }).getByText('华南区').first().click()
    await page.getByRole('row', { name: '3 WWWW科技股份有限子公司 720' }).getByRole('textbox').first().click()
    await page.getByRole('row', { name: '3 WWWW科技股份有限子公司 720' }).getByRole('textbox').fill('华南区ee')
    await page.getByText('WWWW科技YX公司').first().click()
    await page.getByRole('button', { name: '获取修改' }).click()

    await expect(page.getByText('1').nth(1)).toBeVisible()
  })
})
