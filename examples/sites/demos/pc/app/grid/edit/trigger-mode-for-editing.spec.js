import { test, expect } from '@playwright/test'

test('触发编辑方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#edit-trigger-mode-for-editing')
  await page.getByText('GFD科技YX公司').first().click()
  await expect(
    page
      .getByRole('row', {
        name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
      })
      .getByRole('textbox')
  ).toBeVisible()

  await page.getByText('WWWW科技YX公司').nth(1).dblclick()

  await expect(
    page
      .getByRole('row', {
        name: '2 华南区 深圳福田区 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
      })
      .getByRole('textbox')
  ).toBeVisible()
})
