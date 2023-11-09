import { test, expect } from '@playwright/test'

test('Popeditor 弹窗编辑，配置远程搜索', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-editor#grid_Example-gridEdit-popeditor-in-grid-remote-search')
  await page.getByText('GFD科技YX公司').first().click()
  await page
    .getByRole('row', {
      name: '1 2014-04-30 00:56:00 800 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .click()
  await expect(page.getByText('所有数据列表')).toBeVisible()
})
