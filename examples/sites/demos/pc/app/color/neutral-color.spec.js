import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('color#auxiliary-color')
  await page.getByText('中性色').click()
  await page.getByText('bg-gray-navigation').click()
  await expect(page.getByText('bg-gray-navigation')).toHaveClass(/bg-gray-navigation/)
  await page.getByText('bg-gray-darker').click()
  await expect(page.getByText('bg-gray-darker')).toHaveClass(/bg-gray-darker/)
  await page.getByText('bg-gray-dark').nth(1).click()
  await expect(page.getByText('bg-gray-dark').nth(1)).toHaveClass(/bg-gray-dark/)
  await page.getByText('bg-gray-normal').click()
  await expect(page.getByText('bg-gray-normal')).toHaveClass(/bg-gray-normal/)
})
