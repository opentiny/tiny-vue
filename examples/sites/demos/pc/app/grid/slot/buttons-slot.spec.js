import { test, expect } from '@playwright/test'

test('工具栏插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-slot#slot-buttons-slot')
  await page
    .getByRole('row', {
      name: '1 GFD科技YX公司 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('span')
    .click()
  await page.getByRole('button', { name: '删除', exact: true }).click()
  const firstTr = page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/div[2]/div[3]/table/tbody/tr[1]')

  await expect(firstTr).toContainText('WWWW科技YX公司')
})
