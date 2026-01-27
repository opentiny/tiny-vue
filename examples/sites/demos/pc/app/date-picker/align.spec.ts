import { expect, test } from '@playwright/test'

test.use({
  viewport: { width: 1920, height: 1080 }
})
test('[DatePicker] 测试对齐方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#align')
  const demo = page.locator('#align')
  // 左对齐
  const leftDateInputDom = demo.locator('.tiny-input__inner').nth(0)
  const leftDatePanelDom = page.locator('body > .tiny-picker-panel').nth(0)
  const leftClosePanel = page.getByText('左对齐：')
  await page.waitForTimeout(200)

  await leftDateInputDom.click()
  await page.waitForTimeout(200)
  await expect(leftDatePanelDom).toHaveAttribute('x-placement', 'bottom-start')
  await leftClosePanel.click()

  // 居中对齐
  const centerDateInputDom = demo.locator('.tiny-input__inner').nth(1)
  const centerDatePanelDom = page.locator('body > .tiny-picker-panel').nth(1)
  const centerClosePanel = page.getByText('居中对齐：')

  await centerDateInputDom.click()
  await page.waitForTimeout(200)
  await expect(centerDatePanelDom).toHaveAttribute('x-placement', /bottom/)
  await centerClosePanel.click()

  // 右对齐
  const rightDateInputDom = demo.locator('.tiny-input__inner').nth(2)
  const rightDatePanelDom = page.locator('body > .tiny-picker-panel').nth(2)
  const rightClosePanel = page.getByText('右对齐：')

  await rightDateInputDom.click()
  await page.waitForTimeout(200)
  await expect(rightDatePanelDom).toHaveAttribute('x-placement', /bottom-end/)
  await rightClosePanel.click()
})
