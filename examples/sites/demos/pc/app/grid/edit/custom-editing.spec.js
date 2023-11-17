import { test, expect } from '@playwright/test'

test('自定义编辑规则', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#tiny-first-menu-custom-editing')
  await page.getByText('GFD科技YX公司').first().click()
  await expect(page.getByText('GFD科技YX公司').first()).toBeVisible()
  await page.getByText('WWWW科技YX公司').first().click()
  await expect(
    page
      .getByRole('row', {
        name: '2 华南区 2014-02-14 14:14:14 1300 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
      })
      .getByRole('textbox')
  ).toBeVisible()
})
