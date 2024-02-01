import { test, expect } from '@playwright/test'

test('测试自定义动画显示正常', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#transition')

  const button = page.getByRole('button', { name: '鼠标悬浮到这里' })
  const tooltip = page.getByRole('tooltip', { name: '渐隐动画', includeHidden: true })

  // 悬浮
  await button.hover()
  await expect(tooltip).toBeVisible()
  await expect(tooltip).toHaveClass(/custom-transition-enter-to/)

  // 离开
  await page.mouse.move(0, 0)
  await page.waitForTimeout(300)
  await expect(tooltip).toBeHidden()
  await expect(tooltip).toHaveCSS('display', 'none')
})
