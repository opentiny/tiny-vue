import { test, expect } from '@playwright/test'

test('动态修改列插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-dynamically-columns#dynamic-slot')
  await expect(page.getByRole('cell', { name: 'header-1' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'col-1' }).first()).toBeVisible()
  await page.getByRole('button', { name: '改变列插槽' }).click()
  await expect(page.getByRole('cell', { name: 'header-2' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'col-2' }).first()).toBeVisible()
  await page.getByRole('button', { name: '改变列插槽' }).click()
  await expect(page.getByRole('cell', { name: 'header-3' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'col-3' }).first()).toBeVisible()
})
