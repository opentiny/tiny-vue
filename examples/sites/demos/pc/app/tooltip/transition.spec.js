import { test, expect } from '@playwright/test'

test('测试自定义动画显示正常', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#custom-transition')

  const button = page.getByRole('button', { name: '定义渐变动画' })
  const tooltip = page.getByRole('tooltip', { name: '定义渐变动画', includeHidden: true })

  // 悬浮
  await button.hover()
  await expect(tooltip).toBeVisible()
  await expect(tooltip).toHaveClass(/custom-transition-enter-active/)
  await page.waitForTimeout(300)

  // 离开
  await page.mouse.move(0, 0)
  await page.waitForTimeout(300)
  await expect(tooltip).not.toBeVisible()
  await expect(tooltip).toHaveCSS('display', 'none')
})
