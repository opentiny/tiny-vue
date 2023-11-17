import { test, expect } from '@playwright/test'

test('弹窗框中表格编辑器失焦功能测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-faq#faq-gridInDialogBox')
  await page.getByRole('button', { name: '弹出Dialogfalse' }).click()
  await page.getByText('GFD科技有限公司').first().click()
  await page
    .getByRole('row', {
      name: '1 华东区 福州 公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
    })
    .getByRole('textbox')
    .fill('ss')
  await page.getByText('消息').click()

  await expect(page.getByText('ss').first()).toBeVisible()
})
