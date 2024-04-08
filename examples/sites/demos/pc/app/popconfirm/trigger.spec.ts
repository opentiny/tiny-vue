import { test, expect } from '@playwright/test'

test('触发方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popconfirm#trigger')

  const hoverBtn = page.getByRole('button', { name: '鼠标悬停显示' })
  const clickBtn = page.getByRole('button', { name: '点击显示' })
  const popConfirmPopover = page.locator('body > .tiny-popconfirm-popover')
  const hoverValueBtn = page.getByRole('button', { name: '确定' })

  await hoverBtn.hover()
  await page.waitForTimeout(100)
  await expect(popConfirmPopover.first()).toBeVisible()
  await hoverValueBtn.click()
  await page.waitForTimeout(100)

  await clickBtn.click()
  await expect(popConfirmPopover.nth(1)).toBeVisible()
})
