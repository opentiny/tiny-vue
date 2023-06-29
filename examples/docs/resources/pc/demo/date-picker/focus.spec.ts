import { expect, test } from '@playwright/test'

test('[DatePicker] 测试获取焦点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/focus')

  const datePanelDom = page.locator('body > .tiny-picker-panel')
  
  // 禁用日期输入框之后，无法通过 focus 方法获取焦点
  await page.getByRole('button', { name: '启用/禁用' }).click()
  await page.getByRole('button', { name: '获取焦点' }).click()
  await expect(datePanelDom).not.toBeVisible()

  // 启用日期输入框之后，可以通过 focus 方法获取焦点
  await page.getByRole('button', { name: '启用/禁用' }).click()
  await page.getByRole('button', { name: '获取焦点' }).click()
  await expect(datePanelDom).toBeVisible()
})