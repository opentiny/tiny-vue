import { test, expect } from '@playwright/test'

test('引入 3.0 组件作为编辑器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-editor#grid_Example-gridEdit-custom-editor-select')
  await page
    .getByRole('row', {
      name: '1 GFD科技YX公司 华中区 2014-04-30 00:56:00 800 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByText('华中区')
    .click()
  await page.getByPlaceholder('请选择').click()
  await expect(page.getByRole('listitem').filter({ hasText: '华东区' })).toBeVisible()
})
