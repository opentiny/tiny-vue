import { test, expect } from '@playwright/test'

test('手动触发编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#edit-trigger-mode-hm-editing')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await expect(page.getByText('GFD 科技 YX 公司').first()).toBeVisible()
  await page
    .getByRole('row', {
      name: '1 GFD 科技 YX 公司 华东区 福州 公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。 编辑'
    })
    .getByRole('button', { name: '编辑' })
    .click()
  await expect(
    page.getByRole('row', { name: '1 华东区 福州 公司技术和研发实力雄厚，是国家 863' }).getByRole('textbox')
  ).toBeVisible()

  await page.getByRole('row', { name: '3 RFV' }).getByRole('button').click()
  await expect(page.getByRole('combobox')).toBeVisible()
})
