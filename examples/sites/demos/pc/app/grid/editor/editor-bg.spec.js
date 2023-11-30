import { test, expect } from '@playwright/test'

test('维护编辑状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-editor#editor-editor-bg')
  await page.getByRole('cell', { name: '中山市' }).click()
  await expect(
    page
      .getByRole('row', {
        name: '3 RFV有限责任公司 华南区 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
      })
      .getByRole('textbox')
  ).toHaveCount(0)
})
