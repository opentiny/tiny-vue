import { test, expect } from '@playwright/test'

test('表格列锚点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-large-data#large-data-column-anchor')
  const demo = page.locator('#large-data-column-anchor')
  // 配置了表格锚点和height='auto'，验证表格整体高度是否正常
  await expect(demo.locator('.tiny-grid__wrapper.tiny-grid')).toHaveCSS('height', '240px')

  const targetTh = demo.locator('.tiny-grid-header__row .tiny-grid-header__column').filter({ hasText: '公司简介' })
  await expect(targetTh).not.toBeVisible()
  const introduction = demo.locator('.tiny-grid__column-anchor-item').filter({ hasText: '简单介绍' })
  await introduction.click()
  await expect(targetTh).toBeVisible()
})
