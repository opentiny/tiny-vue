import { expect, test } from '@playwright/test'

test('searchable-multiple', async ({ page }) => {
  await page.goto('select#searchable')
  const select = page.locator('#preview .tiny-select').first()
  const dropdown = page.locator('.tiny-select-dropdown').nth(1)
  const options = dropdown.locator('.tiny-option')
  const searchInput = dropdown.locator('.tiny-input__inner')
  const tags = select.locator('.tiny-tag')

  await expect(searchInput).toBeHidden()
  await select.click()
  await page.waitForTimeout(500)
  await expect(searchInput).toBeVisible()
  await searchInput.fill('双皮奶')
  await searchInput.press('Enter')
  await page.waitForTimeout(500)
  const hiddenOptions = await options.filter({ hasNotText: /双皮奶|全部/ }).all()
  hiddenOptions.forEach(async (item) => {
    await expect(item).toHaveCSS('display', 'none')
  })
  await page.getByRole('listitem').filter({ hasText: '双皮奶' }).click()
  await page.waitForTimeout(500)
  await expect((await tags.all()).length).toEqual(1)
})

test('searchable-single', async ({ page }) => {
  await page.goto('select#searchable')
  const select = page.locator('#preview .tiny-select').nth(1)
  const input = page.locator('#preview .tiny-input__inner').nth(2)
  const dropdown = page.locator('.tiny-select-dropdown').nth(1)
  const options = dropdown.locator('.tiny-option')
  const searchInput = dropdown.locator('.tiny-input__inner')

  await expect(searchInput).toBeHidden()
  await select.click()
  await page.waitForTimeout(500)
  await expect(searchInput).toBeVisible()
  await searchInput.fill('双皮奶')
  await searchInput.press('Enter')
  await page.waitForTimeout(500)
  const hiddenOptions = await options.filter({ hasNotText: /双皮奶|全部/ }).all()
  hiddenOptions.forEach(async (item) => {
    await expect(item).toHaveCSS('display', 'none')
  })
  await page.getByRole('listitem').filter({ hasText: '双皮奶' }).click()
  await page.waitForTimeout(500)
  await expect(input).toHaveValue('双皮奶')
})
