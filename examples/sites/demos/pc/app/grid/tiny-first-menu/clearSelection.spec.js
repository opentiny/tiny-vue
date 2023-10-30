import { test, expect } from '@playwright/test'

test('手动取消多选行', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-operation-column#tiny-first-menu-clearSelection')
  await page
    .getByRole('row', {
      name: '1 GFD科技YX公司 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('span')
    .click()
  await page
    .getByRole('row', {
      name: '2 WWWW科技YX公司 华南区 深圳福田区 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('span')
    .click()
  await page.getByRole('button', { name: '手动取消多选行' }).click()

  // 判断所有行都未被选中
  for (const check of await page.locator('.tiny-grid-checkbox input').all()) {
    await expect(check).not.toBeChecked()
  }
})
