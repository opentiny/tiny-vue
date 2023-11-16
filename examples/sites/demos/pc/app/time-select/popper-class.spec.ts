import { test, expect } from '@playwright/test'

test('自定义类名', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#popper-class')
  await page.getByPlaceholder('选择时间').click()
  const myClass = page.locator('.tiny-input-group__panel div').first()
  await expect(myClass).toHaveClass(/myClass/)
})
