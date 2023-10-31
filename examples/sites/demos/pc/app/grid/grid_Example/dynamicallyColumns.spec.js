import { test, expect } from '@playwright/test'

test('动态生成列测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-dynamically-columns#grid_Example-dynamicallyColumns')
  await page.getByRole('textbox').nth(2).click()
  await page.getByText('三月').first().click()
  await page.getByText('四月').first().click()
  const firstTh = page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[2]/div[1]/div[2]/table/thead/tr[1]/th[2]')

  await expect(firstTh).toContainText('3')
})
