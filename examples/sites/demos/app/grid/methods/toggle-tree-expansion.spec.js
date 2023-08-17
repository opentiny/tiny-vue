import { test, expect } from '@playwright/test'

test('树表切换展开行测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-tree-grid/methods-toggle-tree-expansion')
  await page.getByRole('button', { name: 'toggleTreeExpansion' }).click()
  await page.getByRole('row', { name: 'WWWW科技股份有限子公司 华南区 720' }).locator('label span').click()
  const toggleIcon = page.locator(
    '//*[@id="preview"]/div[2]/div[2]/div/div/div/div[3]/table/tbody/tr[2]/td[1]/div/span[2]'
  )

  await expect(toggleIcon).toHaveClass(/is__active/)
  await page.getByRole('button', { name: 'toggleTreeExpansion' }).click()

  await expect(toggleIcon).not.toHaveClass(/is__active/)
})
