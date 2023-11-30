import { test, expect } from '@playwright/test'

test('自定义渐变动画', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#custom-transition')

  let button = page.getByRole('button', { name: '悬浮看效果' })
  let pop = page.getByRole('tooltip', { name: /这是一段内容/ })

  await button.nth(0).hover()
  await expect(pop).toHaveClass(/fade-in-linear-enter-active/)
  await page.mouse.move(0, 0)
  await page.waitForTimeout(300)

  await button.nth(1).hover()
  await expect(pop).not.toHaveClass(/fade-in-linear-enter-active/)
})
