import { test, expect } from '@playwright/test'

test('自定义渐变动画', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#transition')

  let button1 = page.getByRole('button', { name: '默认0.2s隐藏' })
  let pop1 = page.getByRole('tooltip', { name: /这是一段内容/ })

  await button1.hover()
  await expect(pop1).toBeVisible()
  await page.mouse.move(0, 0)
  await page.waitForTimeout(50)
  await expect(pop1).toBeVisible()

  await page.waitForTimeout(200)
  await expect(pop1).toBeHidden
})
