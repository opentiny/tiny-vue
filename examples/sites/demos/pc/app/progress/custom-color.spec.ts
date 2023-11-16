import { test, expect } from '@playwright/test'

test('根据长度改变颜色', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('progress#custom-color')

  const progress = page.getByRole('progressbar')
  const progress1 = progress.nth(0).locator('div.tiny-progress-bar__inner')
  const progress2 = progress.nth(1).locator('div.tiny-progress-bar__inner')
  const progress3 = progress.nth(2).locator('div.tiny-progress-bar__inner')
  const button = page.getByRole('button', { name: '点击增加改变颜色' })

  await expect(progress1).toHaveCSS('background-color', 'rgb(64, 158, 255)')
  await expect(progress2).toHaveCSS('background-color', 'rgb(230, 162, 60)')
  await expect(progress3).toHaveCSS('background-color', 'rgb(92, 184, 122)')
  await button.click()
  await expect(progress2).toHaveCSS('background-color', 'rgb(103, 194, 58)')
  await expect(progress3).toHaveCSS('background-color', 'rgb(25, 137, 250)')
})
