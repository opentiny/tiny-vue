import { test, expect } from '@playwright/test'

test('测试禁用状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/pager/pager-disabled')

  const preview = page.locator('#preview')
  const pager = preview.locator('.tiny-pager').first()
  const sizeChange = pager.locator('.tiny-pager__input > input')
  const pageItem = pager.locator('.tiny-pager__pages li')
  const prev = pager.locator('.tiny-pager__btn-prev')
  const next = pager.locator('.tiny-pager__btn-next')

  await expect(sizeChange).toBeDisabled()
  await expect(prev).toBeDisabled()
  await expect(next).toBeDisabled()
  await expect(pageItem.first()).toHaveCSS('cursor', 'not-allowed')
  await expect(pageItem.last()).toHaveCSS('cursor', 'not-allowed')
})
