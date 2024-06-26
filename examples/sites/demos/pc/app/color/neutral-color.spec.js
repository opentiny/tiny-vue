import { test, expect } from '@playwright/test'

test('中性色', async ({ page }) => {
  await page.goto('color#neutral-color')
  await expect(page.getByText('bg-gray-navigation')).toHaveClass(/bg-gray-navigation/)
  await expect(page.getByText('bg-gray-darker')).toHaveClass(/bg-gray-darker/)
  await expect(page.getByText('bg-gray-dark').nth(1)).toHaveClass(/bg-gray-dark/)
  await expect(page.getByText('bg-gray-normal')).toHaveClass(/bg-gray-normal/)
})
