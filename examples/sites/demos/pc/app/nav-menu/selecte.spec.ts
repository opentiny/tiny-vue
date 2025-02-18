import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('nav-menu#selecte')
  const preview = page.locator('#selecte')
  const popMenu = preview.locator('.popmenu')
  const components = preview.getByText('组件')
  await expect(components).toHaveClass(/selected/)
  await components.hover()
  await expect(popMenu).toBeVisible()
})
