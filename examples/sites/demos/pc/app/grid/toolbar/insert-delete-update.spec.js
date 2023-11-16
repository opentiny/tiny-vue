import { test, expect } from '@playwright/test'

test('工具栏基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#tiny-first-menu-insert-delete-update')

  // 新增
  await page.getByRole('button', { name: '新增' }).click()
  await expect(page.locator('.tiny-grid-body__row').first()).toHaveClass(/row__new/)

  // 删除
  await page
    .getByRole('row', {
      name: '2 GFD科技有限公司 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('span')
    .click()
  await page.getByRole('button', { name: '删除', exact: true }).click()
  await expect(
    page.getByRole('row', {
      name: '2 GFD科技YX公司 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
  ).toHaveCount(0)

  // 取消选中
  await page
    .getByRole('row', {
      name: '3 RFV有限责任公司 华南区 中山市 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('span')
    .click()
  await page.getByRole('button', { name: '取消选中' }).click()
  const input = page
    .getByRole('row', {
      name: '3 RFV有限责任公司 华南区 中山市 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('label input')
  await expect(input).not.toBeChecked()

  // 增删改记录集合
  await page.getByRole('button', { name: '增删改记录集合' }).click()
  await expect(
    page.getByText('增删改记录集合：{"insertRecords":[{"name":null,"area":null,"address":null,"introduction"')
  ).toBeVisible()
})
