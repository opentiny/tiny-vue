import { test, expect } from '@playwright/test'

test('Breadcrumb options配置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('breadcrumb#options')

  const breadcrumb = page.getByRole('navigation', { name: 'Breadcrumb' }).first()
  const breadcrumbItem = breadcrumb.locator('.tiny-breadcrumb__item')
  const currentItem = breadcrumbItem.last()
  const separator = breadcrumb.locator('.tiny-breadcrumb__separator')

  // 面包屑导航、导航项出现,当前页导航加粗
  await expect(breadcrumb).toBeVisible()
  await expect(breadcrumbItem).toHaveCount(3)
  await expect(currentItem.last().getByRole('link')).toHaveCSS('font-weight', '700')

  // 分隔符
  await expect(separator).toHaveCount(3)
  await expect(separator.first()).toHaveText(/>/)
  await expect(separator.last()).toBeHidden()

  // 点击导航项
  await breadcrumbItem.first().click()
  await expect(page.locator('.tiny-notify')).toBeVisible()
  await expect(page.locator('.tiny-notify')).toHaveText(/"to":{"path":"/)
})
