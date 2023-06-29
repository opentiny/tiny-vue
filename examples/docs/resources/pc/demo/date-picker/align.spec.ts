import { expect, test } from '@playwright/test'

test('[DatePicker] 测试对齐方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/align')

  // 左对齐
  const leftDateInputDom = page.getByRole('textbox').nth(1)
  const leftDatePanelDom = page.locator('body > div:nth-child(3)')
  console.log('leftDatePanelDom', leftDatePanelDom);
  
  const { x: leftDateInputX } = await leftDateInputDom.boundingBox()
  await leftDateInputDom.click()
  const { x: leftDatePanelX } = await leftDatePanelDom.boundingBox()
  expect(leftDateInputX - leftDatePanelX).toBeCloseTo(0)

  // 右对齐
  const rightDateInputDom = page.getByRole('textbox').nth(2)
  const rightDatePanelDom = page.locator('body > div:nth-child(4)')
  const { x: rightDateInputX, width: rightDateInputWidth } = await rightDateInputDom.boundingBox()
  await rightDateInputDom.click()
  const { x: rightDatePanelX, width: rightDatePanelWidth } = await rightDatePanelDom.boundingBox()
  expect(rightDateInputX + rightDateInputWidth - rightDatePanelX - rightDatePanelWidth).toBeCloseTo(0)

  // 居中对齐
  const centerDateInputDom = page.getByRole('textbox').nth(3)
  const centerDatePanelDom = page.locator('body > div:nth-child(5)')
  const { x: centerDateInputX, width: centerDateInputWidth } = await centerDateInputDom.boundingBox()
  await centerDateInputDom.click()
  const { x: centerDatePanelX, width: centerDatePanelWidth } = await centerDatePanelDom.boundingBox()
  expect(centerDateInputX + Math.round(centerDateInputWidth / 2) - centerDatePanelX - Math.round(centerDatePanelWidth / 2)).toBeCloseTo(0)
})
