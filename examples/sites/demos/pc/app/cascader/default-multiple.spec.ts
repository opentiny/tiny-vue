import { test, expect } from '@playwright/test'

test('多选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#default-multiple')
  const multiple = page.locator('.tiny-cascader-multiple')
  const multipleText = page.getByText('指南/安装/项目登记指南/安装/安装 CLI指南/开发/引入组件')
  await expect(multiple).toBeVisible()
  await expect(multipleText).toBeVisible()
})
