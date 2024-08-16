import { expect, test } from '@playwright/test'

test('[DatePicker] 测试对齐方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#align')

  // 左对齐
  const leftDateInputDom = page.getByRole('textbox').nth(1)
  const leftDatePanelDom = page.locator('.tiny-picker-panel').nth(2)
  const leftClosePanel = page.getByText('左对齐：')
  await page.waitForTimeout(200)

  await leftDateInputDom.click()
  await page.waitForTimeout(200)
  await expect(leftDatePanelDom).toHaveAttribute('x-placement', /bottom-start|top-start/)
  await leftClosePanel.click()

  // 居中对齐
  const centerDateInputDom = page.getByRole('textbox').nth(2)
  const centerDatePanelDom = page.locator('.tiny-picker-panel').nth(2)
  const centerClosePanel = page.getByText('居中对齐：')

  await centerDateInputDom.click()
  await page.waitForTimeout(200)
  await expect(centerDatePanelDom).toHaveAttribute('x-placement', /bottom|top/)
  await centerClosePanel.click()

  // 右对齐
  const rightDateInputDom = page.getByRole('textbox').nth(3)
  const rightDatePanelDom = page.locator('.tiny-picker-panel').nth(2)
  const rightClosePanel = page.getByText('右对齐：')

  await rightDateInputDom.click()
  await page.waitForTimeout(200)
  await expect(rightDatePanelDom).toHaveAttribute('x-placement', /bottom-end|top-end/)
  await rightClosePanel.click()
})
