import { test, expect } from '@playwright/test'

test('测试动态禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tooltip/dynamic-disable')

  const button = page.getByRole('button', { name: '点击关闭 tooltip 功能' })
  const button1 = page.getByRole('button', { name: '点击开启 tooltip 功能' })
  const tooltip = page.getByRole('tooltip', { name: '点击关闭 tooltip 功能', includeHidden: true })

  // 不禁用时，悬浮
  await button.hover()
  await expect(tooltip).toBeVisible()
  await page.waitForTimeout(1000)

  // 禁用后悬浮
  await button.click()
  await page.mouse.move(0, 0)
  await button1.hover()

  await expect(tooltip).toBeHidden()
  await expect(tooltip).toHaveCSS('display', 'none')
})
