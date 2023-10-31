import { test, expect } from '@playwright/test'

test('自定义左、右侧图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('fall-menu#custom-slider-icon')
  const preview = page.locator('#preview')
  // 右侧插槽图标
  const rightSlotIcon = preview.locator('.icon-slot-right')
  // 父菜单列表
  const fallMenuList = preview.locator('.tiny-fall-menu__list')
  // 是否是默认图标
  await expect(rightSlotIcon.locator('svg path').getAttribute('d')).not.toContain(
    'M7 21c.2 0 .5-.1.6-.2l9.9-8c.2-.2.4-.5.4-.8'
  )
  // 点击右侧更多切换图标
  await rightSlotIcon.click()
  // 向左移动
  await expect(fallMenuList).toHaveCSS('left', /^-\d+px/)
  // 左侧插槽图标
  const leftSlotIcon = preview.locator('.icon-slot-left')
  await expect(leftSlotIcon.locator('svg path').getAttribute('d')).not.toContain(
    'M17 21c-.2 0-.5-.1-.6-.2l-9.9-8c-.4-.2-.5-.5-.5-.8'
  )
  // 点击左侧更多切换图标
  await leftSlotIcon.click()
  // 向右移动
  await expect(fallMenuList).toHaveCSS('left', '0px')
})
