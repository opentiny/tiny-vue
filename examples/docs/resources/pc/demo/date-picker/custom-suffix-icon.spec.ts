import { expect, test } from '@playwright/test'

test('[DatePicker] 测试自定义后置图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/date-picker/custom-suffix-icon')
  const svgPathDom = page.locator('i path')
  await expect(svgPathDom).toHaveAttribute('d', 'M19.1 13H4.9c-.5 0-.9-.4-.9-1s.4-1 .9-1h14.2c.5 0 .9.4.9 1s-.4 1-.9 1z')
})
