import { test, expect } from '@playwright/test'

test('自定义服务', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('nav-menu#custom-service')
  const preview = page.locator('#preview')
  const guides = preview.getByText('指南')
  await guides.hover()
  await expect(preview.locator('.popmenu')).toBeVisible()
  await guides.click()
  await expect(guides).toHaveCSS('border-bottom', /3px solid/)
})
