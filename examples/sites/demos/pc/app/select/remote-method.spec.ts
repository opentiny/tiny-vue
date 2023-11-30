import { expect, test } from '@playwright/test'

test('reserve-keyword', async ({ page }) => {
  await page.goto('select#remote-method')
  const tags = page.locator('#preview .tiny-select .tiny-tag')
  const searchInput = page.locator('#preview .tiny-select__input')

  await searchInput.focus()
  await searchInput.press('a')
  await page.waitForTimeout(1000)
  await page.getByRole('listitem').filter({ hasText: 'Alabama' }).click()
  await expect(searchInput).toHaveValue('a')
  await expect((await tags.all()).length).toEqual(1)
  await searchInput.press('l')
  await page.waitForTimeout(1000)

  const options = page.locator('.tiny-select-dropdown__list .tiny-option')

  await expect((await options.all()).length).toEqual(3)
  await options.filter({ hasText: 'Alaska' }).click()
  await page.waitForTimeout(1000)
  await expect((await tags.all()).length).toEqual(2)
  await expect(searchInput).toHaveValue('al')
})


test('focus-remote-method', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/focus-remote-method')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  const listitems = await page.locator('.tiny-select-dropdown').getByRole('listitem')
  await expect(listitems).toHaveCount(0)
  await page.waitForTimeout(1000)
  await expect(listitems).toHaveCount(50)
})
