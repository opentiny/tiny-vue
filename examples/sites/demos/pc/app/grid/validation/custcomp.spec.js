import { test, expect } from '@playwright/test'

test('自定义组件与插槽编辑器校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-validation#grid_Example-gridValid-custcomp')
  await page.getByText('GFD科技YX公司').first().click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。 1234567890'
    })
    .getByRole('textbox')
    .fill('')

  await expect(page.getByRole('tooltip', { name: '必填' })).toBeVisible()
})
