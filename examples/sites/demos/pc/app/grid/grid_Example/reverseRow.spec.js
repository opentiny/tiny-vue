import { test, expect } from '@playwright/test'

test('表格反转测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-reverse-column-row#grid_Example-reverseRow')
  await page.getByRole('button', { name: '表格反转' }).click()
  await page.getByText('GFD科技YX公司').first().click()

  await expect(
    page.getByText('公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。').nth(4)
  ).toBeVisible()
})
