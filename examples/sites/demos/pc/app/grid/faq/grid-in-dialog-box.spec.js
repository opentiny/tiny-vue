import { test, expect } from '@playwright/test'

test('弹窗框中表格编辑器失焦功能测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-faq#faq-grid-in-dialog-box')
  await page.getByRole('button', { name: '弹出 Dialog false' }).click()
  await page.getByText('GFD 科技有限公司').first().click()
  await page.locator('.tiny-grid-default-input').fill('ss')
  await page.getByText('消息').click()

  await expect(page.getByText('ss').first()).toBeVisible()
})
