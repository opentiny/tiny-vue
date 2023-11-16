import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('nav-menu#basic-usage')
  const preview = page.locator('#preview')
  const popMenu = preview.locator('.popmenu')
  const homePage = preview.getByText('首页')
  await homePage.click()
  await expect(homePage).toHaveCSS('border-bottom', /3px solid/)
  const components = preview.getByText('组件')
  await components.hover()
  await expect(popMenu).toBeVisible()
  const showMore = preview.getByText('更多')
  await showMore.hover()
  await expect(popMenu).toBeVisible()
})
