import { test, expect } from '@playwright/test'

test('点击触发编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#tiny-first-menu-trigger-mode-for-editing')
  await page.getByText('GFD科技YX公司').first().click()
  await expect(
    page
      .getByRole('row', {
        name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
      })
      .getByRole('textbox')
  ).toBeVisible()
})
