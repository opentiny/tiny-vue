import { expect, test } from '@playwright/test'

test('filter-nothing', async ({ page }) => {
  await page.goto('select#filter-method')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  await input.press('1')
  await expect(input).toHaveValue('1')
  await input.press('Enter')

  const listitems = await page.locator('.tiny-select-dropdown').getByRole('listitem').all()
  listitems.forEach(async (item) => {
    await expect(item).toHaveAttribute('display', 'none')
  })
})

test('filter-something', async ({ page }) => {
  await page.goto('select#filter-method')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  await input.fill('双皮奶')
  await expect(input).toHaveValue('双皮奶')
  await input.press('Enter')

  const listitems = await page
    .locator('.tiny-select-dropdown')
    .getByRole('listitem')
    .filter({ hasNotText: '双皮奶' })
    .all()
  listitems.forEach(async (item) => {
    await expect(item).toHaveAttribute('display', 'none')
  })
  await expect(page.locator('.tiny-select-dropdown').getByRole('listitem').filter({ hasText: '双皮奶' })).toBeVisible()
  await page.locator('.tiny-select-dropdown').getByRole('listitem').filter({ hasText: '双皮奶' }).click()
  await expect(input).toHaveValue('双皮奶')
})

test('no-match-text', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/select/no-match-text')
  const input = page.locator('#preview .tiny-input__inner')
  await input.click()
  const listItems = page.locator('.tiny-select-dropdown__list').getByRole('listitem')
  await expect((await listItems.all()).length).toEqual(5)
  await expect(page.getByText('No Match')).toBeHidden()
  await input.fill('1')
  await input.press('Enter')
  await expect(page.getByText('No Match')).toBeVisible()
})
