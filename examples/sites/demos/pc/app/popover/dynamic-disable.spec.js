import { test, expect } from '@playwright/test'

test('动态禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#dynamic-disable')

  let disBtn = page.getByRole('button', { name: '禁用弹出框' })
  let popBtn = page.getByRole('button', { name: '悬浮弹出' })
  let pop = page.getByRole('tooltip', { name: /这是一段内容/ })

  await popBtn.hover()
  await expect(pop).toBeVisible()
  await page.waitForTimeout(300)

  await disBtn.click()
  await popBtn.hover()
  await expect(pop).toBeHidden()
})
