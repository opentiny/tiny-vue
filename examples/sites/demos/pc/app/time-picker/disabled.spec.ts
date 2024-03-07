import { test, expect } from '@playwright/test'

test('测试禁用状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#disabled')

  // 整体禁用
  const timePickerDisabled = page.getByRole('textbox', { name: '18:40:00' }).first()
  await expect(timePickerDisabled).toBeDisabled()
  await expect(timePickerDisabled).toHaveCSS('cursor', 'not-allowed')

  // 部分禁用
  const timePicker = page.getByRole('textbox', { name: '18:40:00' }).nth(1)
  await page.getByRole('textbox', { name: '18:40:00' }).nth(1).click()
  await page.waitForTimeout(100)
  await page
    .locator(
      'div:nth-child(8) > .tiny-time-panel__content > .tiny-time-spinner > div > .tiny-scrollbar__wrap > .tiny-scrollbar__view > li:nth-child(18)'
    )
    .first()
    .click()
  await page.waitForTimeout(100)
  await page.getByRole('button', { name: '确定' }).click()
  await page.waitForTimeout(100)
  await expect(timePicker).toBeVisible()
})
