import { test, expect } from '@playwright/test'

test('获取表格行方法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#tiny-first-menu-get-row-method')
  await page
    .getByRole('row', {
      name: '1 GFD科技YX公司 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('span')
    .click()
  await page.getByRole('button', { name: '当前行', exact: true }).click()

  await expect(
    page.getByText('当前行数据是：{"id":"1","name":"GFD科技YX公司","area":"华东区","address":"福州","introduction":"')
  ).toBeVisible()
  await page.getByRole('button', { name: '确认' }).click()
  await page.getByRole('button', { name: '当前行号' }).click()

  await expect(page.getByText('当前选中行号是：0')).toBeVisible()
  await page.getByRole('button', { name: '确认' }).click()
  await page.getByRole('button', { name: 'Radio单选选中行' }).click()

  await expect(
    page.getByText('单选选中行数据是：{"id":"1","name":"GFD科技YX公司","area":"华东区","address":"福州","introduction"')
  ).toBeVisible()
  await page.getByRole('button', { name: '确认' }).click()
  await page.getByRole('button', { name: 'rowId获取当前行' }).click()

  await expect(
    page.getByText('根据 rowId 获取的当前行：{"id":"1","name":"GFD科技YX公司","area":"华东区","address":"福州","introd')
  ).toBeVisible()
  await page.getByRole('button', { name: '确认' }).click()
  await page.getByRole('button', { name: 'tr元素获取行信息' }).click()

  await expect(
    page.getByText(
      '根据 tr 元素获取对应的 row 信息：{"item":{"id":"1","name":"GFD科技YX公司","area":"华东区","address"'
    )
  ).toBeVisible()
})
