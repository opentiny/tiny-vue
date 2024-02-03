import { test, expect } from '@playwright/test'

test('编辑方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#edit-editing')
  // 单元格编辑
  await page.getByRole('cell', { name: 'GFD科技YX公司' }).first().click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .fill('GFD科技Y水电费第三方X公司')
  await page.getByRole('heading', { name: '单元格编辑：' }).click()
  await expect(await page.getByText('GFD科技Y水电费第三方X公司')).toHaveCount(2)

  // 行编辑
  await page.getByText('华东区').nth(1).click()
  await page.getByRole('textbox').nth(2).click()
  await page.getByRole('textbox').nth(2).fill('水电费水电费')
  await page.getByRole('heading', { name: '行编辑：' }).click()
  await expect(page.getByRole('cell', { name: '水电费水电费' })).toHaveCount(2)
})
