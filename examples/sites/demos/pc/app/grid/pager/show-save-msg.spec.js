import { test, expect } from '@playwright/test'

test('保存', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-pager#pager-show-save-msg')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .fill('GFD 科技 YX 公司 ds')
  await page.locator('#pager-show-save-msg').getByRole('cell', { name: '名称' }).click()
  await page.getByRole('listitem').filter({ hasText: '2' }).click()
  await expect(page.getByText('有修改的数据，是否要保存？')).toBeVisible()
})
