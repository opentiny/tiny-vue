import { test, expect } from '@playwright/test'

test('BulletinBoard 基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('bulletin-board#base')

  const preview = page.locator('#preview')
  const tabTitle = preview.locator('.tiny-tabs__item')
  const tabContent = preview.locator('.tiny-tab-pane')

  // 默认激活第一项选项卡
  await expect(tabTitle.first()).toHaveClass(/is-active/)
  await expect(tabTitle.first()).toHaveCSS('color', 'rgb(94, 124, 224)')
  await expect(tabTitle.first()).toHaveCSS('border-bottom', '3px solid rgb(94, 124, 224)')
  await expect(tabContent.first()).toHaveClass(/active-item/)
  await expect(tabContent.first()).toBeVisible()

  // 鼠标上放选项标题时，文字变色
  for (let i = 0; i < 3; i++) {
    await tabTitle.nth(i).hover()
    await expect(tabTitle.nth(i)).toHaveCSS('color', 'rgb(94, 124, 224)')
  }
  // 点击选项标题后，切换展示相应的选项内容
  for (let i = 0; i < 3; i++) {
    await tabTitle.nth(i).click()
    await expect(tabTitle.nth(i)).toHaveClass(/is-active/)
    await expect(tabTitle.nth(i)).toHaveCSS('color', 'rgb(94, 124, 224)')
    await expect(tabTitle.nth(i)).toHaveCSS('border-bottom', '3px solid rgb(94, 124, 224)')
    await expect(tabContent.nth(i)).toHaveClass(/active-item/)
    await expect(tabContent.nth(i)).toBeVisible()
  }
})
