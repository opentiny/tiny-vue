import { test, expect } from '@playwright/test'

test('键盘按键配置项测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-mouse-keyboard#mouse-keyboard-keyboard-config')
  await page.getByRole('cell', { name: 'GFD科技YX公司' }).click()
  await page.waitForTimeout(500)
  await page.keyboard.press('ArrowDown')
  await expect(page.getByRole('cell', { name: 'WWWW科技YX公司' })).toHaveClass(/col__selected/)
})
