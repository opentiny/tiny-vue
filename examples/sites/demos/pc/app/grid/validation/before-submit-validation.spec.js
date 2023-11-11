import { test, expect } from '@playwright/test'

test('提交前校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-validation#grid_Example-gridValid-before-submit-validation')
  await page.getByText('GFD科技YX公司').first().click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .fill('')
  await page.getByRole('button', { name: '保存' }).click()

  await expect(page.getByText('校验不通过')).toBeVisible()
})
