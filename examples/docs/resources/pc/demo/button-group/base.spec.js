import { test, expect } from '@playwright/test'

test('按钮组基本示例', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/button-group/base')
  await page.getByText('基本用法').nth(1).click()
  await page.getByRole('button', { name: 'Button1' }).click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/ul/li[1]')).toHaveAttribute('class', 'active')
  await page.getByRole('button', { name: 'Button2' }).click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/ul/li[2]')).toHaveAttribute('class', 'active')
  await page.getByRole('button', { name: 'Button3' }).click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/ul/li[3]')).toHaveAttribute('class', 'active')
})
