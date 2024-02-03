import { test, expect } from '@playwright/test'

test('Breadcrumb 基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('breadcrumb#base')

  const breadcrumb = page.getByRole('navigation', { name: 'Breadcrumb' })
  const breadcrumbItem = page.locator('.tiny-breadcrumb__item')
  const currentItem = breadcrumbItem.last()
  const separator = page.locator('.tiny-breadcrumb__separator')

  // 面包屑导航、导航项出现,当前页导航加粗
  await expect(breadcrumb).toBeVisible()
  await expect(breadcrumbItem).toHaveCount(3)
  await expect(currentItem.last().locator('.is-link')).toHaveCSS('font-weight', '700')

  // 分隔符
  await expect(separator).toHaveCount(3)
  await expect(separator.first()).toHaveText(/>/)
  await expect(separator.last()).toBeHidden()

  // 点击导航项
  await breadcrumbItem.first().click()
  await expect(page.locator('.tiny-notify').last()).toBeVisible()
  await expect(page.locator('.tiny-notify').last()).toHaveText(/"to":{"path":"/)
})
