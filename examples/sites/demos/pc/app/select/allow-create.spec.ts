import { test, expect } from '@playwright/test'

test('click', async ({ page }) => {
  await page.goto('select#allow-create')
  const input = page.locator('#preview .tiny-input__inner')
  await input.click()
  await input.fill('测试allow-create')
  const KeyboardEvent = await page.evaluateHandle(() => new KeyboardEvent('keyup'))
  await input.dispatchEvent('keyup', { KeyboardEvent })
  await expect(input).toHaveValue('测试allow-create')
  await page.getByRole('listitem').filter({ hasText: '测试allow-create' }).click()
  await expect(input).toHaveValue('测试allow-create')
  await input.click()
  await expect(input).toHaveValue('')
  await expect(page.getByRole('listitem').filter({ hasText: '测试allow-create' })).toHaveClass(/selected/)
})

test('press-enter', async ({ page }) => {
  await page.goto('select#allow-create')
  const input = page.locator('#preview .tiny-input__inner')
  await input.click()

  await input.press('a')
  await input.press('b')
  await input.press('Enter')

  await expect(page.locator('.tiny-select-dropdown__wrap')).toBeHidden()
  await expect(input).toHaveValue('ab')

  await input.click()

  await expect(input).toHaveValue('')
  await expect(page.getByRole('listitem').filter({ hasText: 'ab' })).toHaveClass(/selected/)
})
