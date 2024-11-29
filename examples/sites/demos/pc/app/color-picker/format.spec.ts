import { test, expect } from '@playwright/test'

test('rgb时应该为rgb(xx,xx,xx)', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#format')
  await expect(page.getByLabel('示例', { exact: true }).getByRole('paragraph')).toContainText(
    '颜色值: rgb(102,204,255)'
  )
})

test('hex时应该为#xxx', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#format')
  await page.locator('.tiny-color-picker__inner').click()
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByRole('list').getByText('hex').click()
  await page.getByRole('button', { name: '选择' }).click()
  await expect(page.getByLabel('示例', { exact: true }).getByRole('paragraph')).toContainText('颜色值: #66CCFF')
})

test('hsl时应该为hsl(xxx,xxx,xxx)', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#format')
  await page.locator('.tiny-color-picker__inner').click()
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByRole('list').getByText('hsl').click()
  await page.getByRole('button', { name: '选择' }).click()
  await expect(page.getByLabel('示例', { exact: true }).getByRole('paragraph')).toContainText('颜色值: hsl')
})

test('hsv时候应该为hsv(xx,xx,xx)', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#format')
  await page.locator('.tiny-color-picker__inner').click()
  await page.getByRole('textbox', { name: '请选择' }).click()
  await page.getByRole('list').getByText('hsv').click()
  await page.getByRole('button', { name: '选择' }).click()
  await expect(page.getByLabel('示例', { exact: true }).getByRole('paragraph')).toContainText('颜色值: hsv')
})
