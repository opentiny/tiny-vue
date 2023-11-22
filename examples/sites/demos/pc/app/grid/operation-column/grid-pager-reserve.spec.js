import { test, expect } from '@playwright/test'

test('翻页后保留选中状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#operation-column-grid-pager-reserve')
  await page
    .getByRole('row', {
      name: '1 GFD科技YX公司 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('path')
    .first()
    .click()
  await page.getByRole('list').getByText('2').click()
  await page
    .getByRole('row', {
      name: '8 西安门福德宝网络技术YX公司 华东区 厦门 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('path')
    .first()
    .click()
  await page.getByText('1', { exact: true }).click()
  await expect(page.locator('.tiny-grid-body__row').nth(0).locator('input')).toBeChecked()
})
