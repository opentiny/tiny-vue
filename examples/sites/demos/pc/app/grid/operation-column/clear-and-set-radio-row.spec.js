import { test, expect } from '@playwright/test'

test('手动取消单选行', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#tiny-first-menu-clearRadioRow')
  await page
    .getByRole('row', {
      name: '2 WWWW科技YX公司 华南区 深圳福田区 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('span')
    .click()
  await page.getByRole('button', { name: '手动取消单选行' }).click()

  await page.waitForTimeout(200)

  // 是否被选中
  await expect(page.locator('[name=tiny-grid-radio__1]').nth(1)).not.toBeChecked()
})
