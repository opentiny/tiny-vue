import { test, expect } from '@playwright/test'

test('测试智能出现', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/tooltip/visible-show')

  const button = page.getByRole('button', { name: '切换visible' })
  const textLong = page.getByText('我的内容很长很长。。。。')
  const textShort = page.getByText('内容不超长')
  const tipLong = page.getByRole('tooltip', { name: '我会显示这个提示', includeHidden: true })
  const tipShort = page.getByRole('tooltip', { name: 'visibleVal为auto时，我不会显示这个提示', includeHidden: true })

  // 测试always
  await textLong.hover()
  await expect(tipLong).toBeVisible()
  await page.waitForTimeout(300)

  await textShort.hover()
  await expect(tipShort).toBeVisible()
  await page.waitForTimeout(300)

  // 测试auto
  await button.click()
  await textLong.hover()
  await expect(tipLong).toBeVisible()
  await page.waitForTimeout(300)

  await textShort.hover()
  await expect(tipShort).toBeHidden()
})
