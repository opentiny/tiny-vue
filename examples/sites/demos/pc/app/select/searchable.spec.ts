import { expect, test } from '@playwright/test'

test('searchable-single', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#searchable')

  const wrap = page.locator('#searchable')
  const select = wrap.locator('.tiny-select').nth(0)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const input = dropdown.locator('.tiny-input__inner')
  const option = dropdown.locator('.tiny-option')

  await expect(input).toBeHidden()
  await select.click()
  await page.waitForTimeout(500)
  await expect(input).toBeVisible()
  await input.fill('双皮奶')
  await input.press('Enter')
  await page.waitForTimeout(500)
  const list = await option.all()
  list.forEach(async (item) => {
    const text = await item.innerText()
    const isVisibleItem = text === '双皮奶' || text === '全部'
    if (isVisibleItem) {
      await expect(item).toHaveCSS('display', 'flex')
    } else {
      await expect(item).toHaveCSS('display', 'none')
    }
  })
  await option.filter({ hasText: '双皮奶' }).click()
  await page.waitForTimeout(500)
  await expect(input).toHaveValue('双皮奶')
})

test('searchable-multiple', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#searchable')

  const wrap = page.locator('#searchable')
  const select = wrap.locator('.tiny-select').nth(1)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const input = dropdown.locator('.tiny-input__inner')
  const option = dropdown.locator('.tiny-option')
  const tags = select.locator('.tiny-tag')

  await expect(input).toBeHidden()
  await select.click()
  await page.waitForTimeout(500)
  await expect(input).toBeVisible()
  await input.fill('双皮奶')
  await input.press('Enter')
  await page.waitForTimeout(500)
  const list = await option.all()
  list.forEach(async (item) => {
    const text = await item.innerText()
    const isVisibleItem = text === '双皮奶' || text === '全部'
    if (isVisibleItem) {
      await expect(item).toHaveCSS('display', 'flex')
    } else {
      await expect(item).toHaveCSS('display', 'none')
    }
  })
  await option.filter({ hasText: '双皮奶' }).click()
  await page.waitForTimeout(500)
  await expect((await tags.all()).length).toEqual(1)
})
