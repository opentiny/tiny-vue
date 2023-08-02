import { test, expect } from '@playwright/test'

test('键盘导航测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-keyboard/keyboard-navigation')
  await page.getByRole('cell', { name: 'GFD科技YX公司' }).click()
  await page.waitForTimeout(1000)
  await page.locator('body').press('ArrowDown')

  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/div[3]/table/tbody/tr[2]/td[2]')).toHaveClass(
    /col__selected/
  )
})
