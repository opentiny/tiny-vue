import { test, expect } from '@playwright/test'

test('medium 尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/time-select/size-medium')
  const mediumBox = page.getByPlaceholder('选择时间')
  await expect(mediumBox).toHaveCSS('height', '40px')
})
