import { test, expect } from '@playwright/test'

test('单选选项改变', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-radio-change-event')
  await page
    .getByRole('row', {
      name: '2 WWWW科技YX公司 华南区 深圳福田区 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .locator('span')
    .click()

  await expect(page.getByText('选项改变')).toBeVisible()
})
