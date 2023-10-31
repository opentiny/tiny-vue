import { test, expect } from '@playwright/test'

test('抽屉宽度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#width')

  const drawer = page.locator('.tiny-drawer__main')
  await page.getByRole('button', { name: '设置宽度为900px' }).click()
  const { width: width1 } = await drawer.boundingBox()
  expect(Math.round(width1)).toEqual(900)
  await page.getByRole('button', { name: 'Close' }).click()

  await page.getByRole('button', { name: '宽度改为700px' }).click()
  const { width: width2 } = await drawer.boundingBox()
  expect(Math.round(width2)).toEqual(700)
  await page.getByRole('button', { name: 'Close' }).click()

  await page.getByRole('button', { name: '宽度改为80%' }).click()
  await expect(drawer).toHaveAttribute('style', /width: 80%/)
})
