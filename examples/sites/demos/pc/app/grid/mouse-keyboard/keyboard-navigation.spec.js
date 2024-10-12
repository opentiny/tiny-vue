import { test, expect } from '@playwright/test'

test('键盘导航测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const demo = page.locator('#mouse-keyboard-keyboard-navigation')
  await page.goto('grid-mouse-keyboard#mouse-keyboard-keyboard-navigation')
  await page.getByText('GFD科技YX公司').click()
  await page.locator('body').press('ArrowDown')
  await page.waitForTimeout(300)
  await page.locator('body').press('F2')
  await page.waitForTimeout(300)
  await demo.locator('.tiny-grid-body__row').nth(1).getByRole('textbox').fill('WWWW科收缩技YX公司')

  await page.getByRole('cell', { name: '公司简介' }).click()

  await expect(page.getByRole('cell', { name: 'WWWW科收缩技YX公司' })).toBeVisible()
})
