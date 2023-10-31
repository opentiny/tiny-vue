import { test, expect } from '@playwright/test'

test('根据商品数量自动计算价格', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('numeric#calculate-according-to-num-of-goods')

  const numeric = page.getByPlaceholder('请输入商品数量')
  const totalTxt = page.locator('#preview .content ~div ~div')
  await numeric.click()
  await numeric.fill('10')
  await numeric.blur()
  await expect(totalTxt).toContainText('100')
})
