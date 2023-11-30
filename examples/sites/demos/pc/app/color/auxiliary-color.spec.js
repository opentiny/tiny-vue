import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('color#neutral-color')
  await page.getByText('主色彩').click()
  await page.getByText('bg-primary-normal').click()
  await expect(page.getByText('bg-primary-normal')).toHaveClass(/bg-primary-normal/)
  await page.getByText('bg-primary-hover').click()
  await expect(page.getByText('bg-primary-hover')).toHaveClass(/bg-primary-hover/)
  await page.getByText('bg-primary-active').click()
  await expect(page.getByText('bg-primary-active')).toHaveClass(/bg-primary-active/)
  await page.getByText('bg-btn-active').click()
  await expect(page.getByText('bg-btn-active')).toHaveClass(/bg-btn-active/)
})
