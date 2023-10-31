import { test, expect } from '@playwright/test'

test('隐藏箭头', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#hidden-arrow')

  let button1 = page.getByRole('button', { name: '有提示箭头' })
  let button2 = page.getByRole('button', { name: '无提示箭头' })
  let pop = page.getByRole('tooltip', { name: /这是一段内容/ }).locator('.popper__arrow')

  await button1.hover()
  await expect(pop).toBeVisible()
  await page.mouse.move(0, 0)
  await page.waitForTimeout(200)

  await button2.hover()
  await expect(pop).toBeHidden()
})
