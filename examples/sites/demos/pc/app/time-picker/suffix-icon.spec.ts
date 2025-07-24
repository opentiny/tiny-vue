import { test, expect } from '@playwright/test'

test('自定义后置图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-picker#suffix-icon')

  const customIcon = page.locator('#suffix-icon svg path')
  await expect(customIcon).toHaveAttribute(
    'd',
    'M12.99 7.5c.28 0 .5.22.5.5s-.22.5-.5.5H3.01c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9.98z'
  )
})
