import { test, expect } from '@playwright/test'

test('触发校验时自动定位到当前校验的单元格', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-validation#validation-validation-scroll-to-col')

  const demo = page.locator('#validation-validation-scroll-to-col')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await demo.locator('.tiny-input__inner').fill('')
  await demo.getByText('名称').click()
  const lastColumn = demo.getByText('公司简介')
  await lastColumn.scrollIntoViewIfNeeded()
  await page.getByRole('button', { name: '保存' }).click()
  await page.waitForTimeout(200)

  await expect(page.getByRole('cell', { name: 'WWW 科技 YX 公司' })).toBeInViewport()
})
