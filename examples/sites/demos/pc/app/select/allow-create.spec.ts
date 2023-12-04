import { test, expect } from '@playwright/test'

test('点击选中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.waitForTimeout(300)
  await page.goto('select#allow-create')

  const wrap = page.locator('#allow-create')
  const dropdown = page.locator('.tiny-select-dropdown')
  const input = wrap.locator('.tiny-input__inner').first()

  await input.click()
  await input.fill('测试allow-create')
  const KeyboardEvent = await page.evaluateHandle(() => new KeyboardEvent('keyup'))
  await input.dispatchEvent('keyup', { KeyboardEvent })

  await expect(input).toHaveValue('测试allow-create')
  await dropdown.getByRole('listitem').filter({ hasText: '测试allow-create' }).click()
  await expect(input).toHaveValue('测试allow-create')

  await input.click()
  await expect(input).toHaveValue('')
  await expect(dropdown.getByRole('listitem').filter({ hasText: '测试allow-create' })).toHaveClass(/selected/)
})

test('enter 选中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.waitForTimeout(300)
  await page.goto('select#allow-create')

  const wrap = page.locator('#allow-create')
  const dropdown = page.locator('.tiny-select-dropdown').nth(1)
  const input = wrap.locator('.tiny-input__inner').nth(1)

  await input.click()
  await input.press('a')
  await input.press('b')
  await page.waitForTimeout(300)
  await input.press('Enter')

  await expect(dropdown).toBeHidden()
  await expect(input).toHaveValue('ab')

  await input.click()

  await expect(input).toHaveValue('')
  await expect(dropdown.getByRole('listitem').filter({ hasText: 'ab' })).toHaveClass(/selected/)
})
