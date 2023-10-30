import { test, expect } from '@playwright/test'

test('表格组件鼠标配置项测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-keyboard#mouse-config')
  await page.getByText('WWWW科技YX公司').first().click()

  await expect(page.getByRole('cell', { name: 'WWWW科技YX公司' })).toHaveClass(/col__checked/)
})
