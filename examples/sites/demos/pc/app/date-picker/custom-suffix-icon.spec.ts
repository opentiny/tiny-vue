import { expect, test } from '@playwright/test'

test('[DatePicker] 测试自定义后置图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('date-picker#custom-suffix-icon')
  const svgPathDom = page.locator('i path')
  await expect(svgPathDom).toHaveAttribute(
    'd',
    'M12.99 7.5c.28 0 .5.22.5.5s-.22.5-.5.5H3.01c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9.98z'
  )
})
