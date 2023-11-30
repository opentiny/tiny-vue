import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#dynamic-reference')

  let button1 = page.getByRole('button', { name: '按钮 1' })
  let button2 = page.getByRole('button', { name: '按钮 4' })
  let pop = page.getByRole('tooltip', { name: /您刚刚点击了/ })

  await button1.click()
  await expect(pop).toBeVisible()

  await button2.click()
  await expect(pop).toBeVisible()
})
