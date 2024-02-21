import { test, expect } from '@playwright/test'

test('帮助提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#tips-props')

  const drawer = page.locator('.tiny-drawer__main')
  const helpIcon = drawer.locator('.tiny-drawer__help-icon')
  const tooltip = page.getByRole('tooltip', { name: '这是一段帮助提示。。。' })

  await page.getByRole('button', { name: '展开抽屉' }).click()
  await expect(helpIcon).toBeVisible()
  await helpIcon.hover()
  await expect(tooltip).toBeVisible()
})
