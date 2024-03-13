import { test, expect } from '@playwright/test'

test('行选中事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-event#event-current-change-event')
  await page
    .getByRole('row', {
      name: '2 WWW科技YX公司 华南区 深圳福田区 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByText('华南区')
    .click()

  await expect(page.getByText('触发行选中事件')).toBeVisible()
})
