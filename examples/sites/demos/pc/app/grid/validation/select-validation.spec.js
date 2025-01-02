import { test, expect } from '@playwright/test'

test('选中时校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-validation#validation-select-validation')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .clear()
  await page.waitForTimeout(200)
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('span')
    .click()
  await page.getByRole('button', { name: '校验选中数据' }).click()

  await expect(page.getByText('校验不通过', { exact: true })).toBeVisible()
})
