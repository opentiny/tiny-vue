import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/icon/basic-usage')
  await page.getByText('基本用法').nth(1).click()
  await page.locator('.icon-demo > svg').first().click()
  await expect(page.locator('.icon-demo > svg').first()).toHaveClass(/icon-share/)
  await page.locator('svg:nth-child(2)').first().click()
  await expect(page.locator('svg:nth-child(2)').first()).toHaveClass(/icon-del/)
  await page.locator('svg:nth-child(3)').click()
  await expect(page.locator('svg:nth-child(3)')).toHaveClass(/icon-writing/)
  await page.locator('svg:nth-child(4)').click()
  await expect(page.locator('svg:nth-child(4)')).toHaveClass(/icon-ascending/)
  await page.locator('.icon').click()
  await expect(page.locator('.icon')).toHaveClass(/icon-clockWork/)
})
