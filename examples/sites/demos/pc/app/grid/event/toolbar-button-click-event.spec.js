import { test, expect } from '@playwright/test'

test('工具栏点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-toolbar-button-click-event')
  await page.getByRole('button', { name: '新增' }).click()
  await expect(page.locator('.tiny-grid-body__row')).toHaveCount(7)
  await page
    .getByRole('row', {
      name: '2 GFD科技YX公司 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('path')
    .first()
    .click()

  await page.getByRole('button', { name: '删除', exact: true }).click()

  await expect(page.locator('.tiny-grid-body__row')).toHaveCount(6)
})
