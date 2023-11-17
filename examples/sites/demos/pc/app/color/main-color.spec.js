import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('color#main-color')
  await page.getByText('辅助色').click()
  await page.getByText('bg-success-normal').click()
  await expect(page.getByText('bg-success-normal')).toHaveClass(/bg-success-normal/)
  await page.getByText('bg-warning-normal').click()
  await expect(page.getByText('bg-warning-normal')).toHaveClass(/bg-warning-normal/)
  await page.getByText('bg-error-normal').click()
  await expect(page.getByText('bg-error-normal')).toHaveClass(/bg-error-normal/)
})
