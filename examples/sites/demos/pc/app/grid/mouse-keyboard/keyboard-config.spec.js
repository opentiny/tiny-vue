import { test, expect } from '@playwright/test'

test('键盘按键配置项测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-keyboard#keyboard-config')
  await page.getByText('GFD科技YX公司').first().click()
  await page.waitForTimeout(1000)
  await page.locator('body').press('ArrowDown')

  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/div[3]/table/tbody/tr[2]/td[2]')).toHaveClass(
    /col__selected/
  )
})
