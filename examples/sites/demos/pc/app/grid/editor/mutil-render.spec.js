import { test, expect } from '@playwright/test'

test('Grid-编辑器-下拉多选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-editor#edit-mutil-render')
  await page
    .getByRole('row', {
      name: '3 RFV有限责任公司 华南区 2014-02-14 14:14:14 1300 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByText('华南区')
    .click()
  await page
    .getByRole('row', {
      name: '3 RFV有限责任公司 2014-02-14 14:14:14 1300 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('div')
    .filter({ hasText: /^华南区$/ })
    .click()
  await page.getByRole('listitem').filter({ hasText: '华中区' }).locator('span').nth(2).click()
  await page.getByRole('listitem').filter({ hasText: '华东区' }).locator('span').first().click()
  await page.getByText('区域').first().click()
  await expect(page.getByText('华中区;华东区;华南区').first()).toBeVisible()
})
