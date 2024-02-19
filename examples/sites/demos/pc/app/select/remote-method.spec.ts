import { expect, test } from '@playwright/test'

test('远程搜索单选', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#remote-method')

  const wrap = page.locator('#remote-method')
  const select = wrap.locator('.tiny-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await input.focus()
  await expect(option).toHaveCount(0)
  await expect(dropdown).toBeHidden()

  await input.fill('al')
  await input.press('Enter')
  await page.waitForTimeout(800)
  await expect((await option.all()).length).toEqual(3)
  await option.filter({ hasText: 'Alaska' }).click()
  await expect(input).toHaveValue('Alaska')
})

test('远程搜索多选 + 保留搜索关键字', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#remote-method')

  const wrap = page.locator('#remote-method')
  const select = wrap.locator('.tiny-select').nth(1)
  const input = select.locator('.tiny-select__input')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')
  const tag = select.locator('.tiny-tag')

  await input.focus()
  await expect(option).toHaveCount(0)
  await input.press('a')
  await input.press('Enter')
  await page.waitForTimeout(300)
  await option.filter({ hasText: 'Alabama' }).click()
  await expect(input).toHaveValue('a')
  await expect((await tag.all()).length).toEqual(1)
  await input.press('l')
  await page.waitForTimeout(500)

  await expect((await option.all()).length).toEqual(3)
  await option.filter({ hasText: 'Alaska' }).click()
  await page.waitForTimeout(300)
  await expect((await tag.all()).length).toEqual(2)
  await expect(input).toHaveValue('al')
})

test('获焦时触发远程搜索', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#remote-method')

  const wrap = page.locator('#remote-method')
  const select = wrap.locator('.tiny-select').nth(2)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await input.click()
  await expect(option).toHaveCount(0)
  await page.waitForTimeout(300)
  await expect(option).toHaveCount(50)
})
