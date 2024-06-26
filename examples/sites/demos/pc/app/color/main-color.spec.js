import { test, expect } from '@playwright/test'

test('主色彩', async ({ page }) => {
  await page.goto('color#main-color')
  await expect(page.getByText('bg-primary-normal')).toHaveClass(/bg-primary-normal/)
  await expect(page.getByText('bg-primary-hover')).toHaveClass(/bg-primary-hover/)
  await expect(page.getByText('bg-primary-active')).toHaveClass(/bg-primary-active/)
  await expect(page.getByText('bg-btn-active')).toHaveClass(/bg-btn-active/)
})
