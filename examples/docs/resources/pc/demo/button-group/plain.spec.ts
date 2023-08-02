import { test, expect } from '@playwright/test'

test('测试朴素按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/button-group/plain')

  const buttonGroup = page.locator('.tiny-button-group').nth(1)
  const button3 = page.getByRole('button', { name: 'Button3' })
  await button3.click()
  await expect(button3).toHaveClass(/plain/)
  await expect(buttonGroup.locator('li').nth(2)).toHaveClass('active')
  const button2 = page.getByRole('button', { name: 'Button2' })
  await button2.click()
  await expect(button2).toHaveClass(/plain/)
  await expect(buttonGroup.locator('li').nth(1)).toHaveClass('active')
  const button1 = page.getByRole('button', { name: 'Button1' })
  await button1.click()
  await expect(button1).toHaveClass(/plain/)
  await expect(buttonGroup.locator('li').nth(0)).toHaveClass('active')
})
