import { test, expect } from '@playwright/test'

test('自定义渲染器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-renderer#grid_Example-gridRenderer-custom-renderer')
  await expect(page.getByText('GFD科技YX公司').first()).toHaveCSS('color', 'rgb(218, 165, 32)')
  await expect(
    page
      .getByRole('row', {
        name: '2 WWW科技YX公司 华南区 2016-07-08 12:36:22 300 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
      })
      .locator('span')
      .nth(1)
  ).toBeVisible()
})
