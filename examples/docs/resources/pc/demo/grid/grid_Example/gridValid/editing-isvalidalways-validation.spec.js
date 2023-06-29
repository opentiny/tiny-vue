import { test, expect } from '@playwright/test'

test('隐藏列编辑时校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-validation/grid_Example-gridValid-editing-isvalidalways-validation')
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .clear()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .fill('GF')

  await expect(page.getByRole('tooltip', { name: '名称长度在 3 到 50 个字符' })).toBeVisible()
})
