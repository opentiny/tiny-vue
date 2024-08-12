import { test, expect } from '@playwright/test'

test('自定义标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#title')

  const modal = page.locator('.tiny-modal.active')
  await page.getByRole('button', { name: '自定义标题' }).click()
  await expect(modal.locator('.tiny-modal__header')).toHaveText('自定义标题')
})

test('无标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#title')

  const modal = page.locator('.tiny-modal.active')
  await page.getByRole('button', { name: '无标题' }).click()
  await expect(modal.locator('.tiny-modal__title')).not.toBeVisible()
})
