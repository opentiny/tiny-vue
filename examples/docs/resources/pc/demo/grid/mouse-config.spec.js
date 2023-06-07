import { test, expect } from '@playwright/test'

test('表格组件鼠标配置项测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-keyboard/mouse-config')
  await page.getByText('WWWW科技YX公司').click()

  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/div[3]/table/tbody/tr[2]/td[2]')).toHaveClass(
    /col__selected/
  )
})
