import { test, expect } from '@playwright/test'

test('新增列滚动位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-dynamically-columns#column-switching-scroll')
  const demo = page.locator('#column-switching-scroll')

  await demo.locator('.tiny-grid__body-wrapper.body__wrapper').click()
  await page.mouse.wheel(10000, 0)

  await expect(demo.getByText('地址2')).toBeVisible()
  await demo.getByText('显示最后一列').click()
  await expect(demo.getByText('地址2')).toBeVisible()
})
