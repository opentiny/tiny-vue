import { test, expect } from '@playwright/test'

test('常显提示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('directives-auto-tip#auto-tip-always-show')

  await page.getByText('去游泳馆游泳').hover()
  await expect(page.getByRole('tooltip', { name: '自定义提示内容' })).not.toBeVisible()

  await page.getByText('去羽毛球馆打羽毛球').hover()
  await expect(page.getByRole('tooltip', { name: '自定义提示内容' })).toBeVisible()
})
