import { expect, test } from '@playwright/test'

test('user-custom-service', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/user/custom-service')
  const input = page.locator('#preview .tiny-input__inner')
  const value = page.locator('.user-value')
  const options = page.locator('.tiny-select-dropdown').locator('.tiny-option')

  await expect(input).toHaveValue('')
  await expect(value).toHaveText('441047913162396')
  await page.waitForTimeout(1000)
  await expect(input).toHaveValue('test3')

  await input.click()
  await input.fill('xiaoming')
  await input.press('Enter')
  await page.waitForTimeout(2000)
  await expect((await options.all()).length).toEqual(4)
  await page.getByRole('listitem', { name: 'test2' }).click()
  await expect(input).toHaveValue('test2')
})
