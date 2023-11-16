import { test, expect } from '@playwright/test'

test('自动关闭延时', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#duration')

  const modal = page.locator('.tiny-modal')
  await page.getByRole('button', { name: '默认3000ms后自动关闭提示框' }).click()
  await expect(modal).toBeVisible()
  await page.waitForTimeout(3200)
  const visible1 = await modal.isVisible()
  expect(visible1).toEqual(false)

  await page.getByRole('button', { name: '500ms后自动关闭提示框' }).click()
  await expect(modal).toBeVisible()
  await page.waitForTimeout(700)
  const visible2 = await modal.isVisible()
  expect(visible2).toEqual(false)

  await page.getByRole('button', { name: '5000ms后自动关闭提示框' }).click()
  await expect(modal).toBeVisible()
  await page.waitForTimeout(5200)
  const visible3 = await modal.isVisible()
  expect(visible3).toEqual(false)
})
