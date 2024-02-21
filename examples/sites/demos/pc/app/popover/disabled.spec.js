import { test, expect } from '@playwright/test'

test('动态禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#disabled')

  let switcher = page.locator('.pc-demo-container .tiny-switch')
  let popBtn = page.getByRole('button', { name: '鼠标悬浮在这里' })
  let pop = page.getByRole('tooltip', { name: /这是一段内容/ })

  await popBtn.hover()
  await expect(pop).toBeVisible()
  await page.waitForTimeout(300)

  await switcher.click()
  await popBtn.hover()
  await expect(pop).toBeHidden()
})
