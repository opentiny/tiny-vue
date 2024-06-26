import { test, expect } from '@playwright/test'

test('辅助色', async ({ page }) => {
  await page.goto('color#auxiliary-color')
  await expect(page.getByText('bg-success-normal')).toHaveClass(/bg-success-normal/)
  await expect(page.getByText('bg-warning-normal')).toHaveClass(/bg-warning-normal/)
  await expect(page.getByText('bg-error-normal')).toHaveClass(/bg-error-normal/)
})
