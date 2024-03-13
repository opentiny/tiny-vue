import { test, expect } from '@playwright/test'

test('基本使用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('espace#data')

  await expect(page.getByRole('link', { name: 'im:a12345678' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'im:a12345678' })).toHaveClass('item-talk')

  await expect(page.getByRole('link', { name: 'sip:d12345678' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'sip:d12345678' })).toHaveClass('item-call')

  await expect(page.getByRole('link', { name: 'mailto:test1@test.com' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'mailto:test1@test.com' })).toHaveClass('item-email')
})
