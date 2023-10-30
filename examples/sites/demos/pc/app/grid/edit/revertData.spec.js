import { test, expect } from '@playwright/test'

test('表格编辑还原更改', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#edit-revertData')
  await page.getByText('GFD科技YX公司').first().click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。 恢复'
    })
    .getByRole('textbox')
    .fill('sss')
  await page.getByText('RFV有限责任公司').first().click()
  await page
    .getByRole('row', {
      name: '3 华南区 中山市 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。 恢复'
    })
    .getByRole('textbox')
    .fill('eee')
  await page.getByText('名称').click()
  await page.getByRole('button', { name: '恢复全部' }).click()
  await expect(page.getByText('GFD科技YX公司').first()).toBeVisible()
  await expect(page.getByText('RFV有限责任公司').first()).toBeVisible()
})
