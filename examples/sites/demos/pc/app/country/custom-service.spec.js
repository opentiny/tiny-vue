import { test, expect } from '@playwright/test'

test('自定义服务', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('country#custom-service')

  const select = page.getByPlaceholder('请选择')
  const item = page.getByText('France')
  const clear = page.locator('#preview .tiny-svg-size').nth(1)
  // 点击选中
  await select.click()
  await item.click()
  await expect(select).toHaveValue(/France/)
  await page.waitForTimeout(100)

  // 清除
  await select.hover()
  await clear.click()
  await expect(select).toHaveValue('')
})
