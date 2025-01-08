import { test, expect } from '@playwright/test'

test('表格组件鼠标配置项测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-mouse-keyboard#mouse-keyboard-mouse-config')
  await page.getByText('WWWW 科技 YX 公司').first().click()

  await expect(page.getByRole('cell', { name: 'WWWW 科技 YX 公司' })).toHaveClass(/col__checked/)
})
