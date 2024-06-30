import { expect, test } from '@playwright/test'

test('默认搜索', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#filter-method')
  const wrap = page.locator('#filter-method')
  const select = wrap.locator('.tiny-base-select').first()
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  // 1.1 没有过滤到内容
  await input.click()
  // 1.1.1 验证 no-match-text
  await expect(page.getByText('No Match')).toBeHidden()
  await input.press('1')
  await expect(input).toHaveValue('1')
  await input.press('Enter')
  await expect(page.getByText('No Match')).toBeVisible()

  await page.waitForTimeout(500)
  let allListItems = await option.all()
  allListItems.forEach(async (item) => {
    await expect(item).toHaveCSS('display', 'none')
  })

  // 1.2 过滤到内容
  await input.fill('上海')
  await expect(input).toHaveValue('上海')
  await input.press('Enter')

  await page.waitForTimeout(200)

  allListItems.forEach(async (item) => {
    const isVisibleItem = (await item.innerText()) === '上海'
    if (isVisibleItem) {
      await expect(item).toHaveCSS('display', 'flex')
    } else {
      await expect(item).toHaveCSS('display', 'none')
    }
  })
  await expect(option.filter({ hasText: '上海' })).toBeVisible()
  await option.filter({ hasText: '上海' }).click()
  await expect(input).toHaveValue('上海')
})

test('自定义过滤', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('base-select#filter-method')
  const wrap = page.locator('#filter-method')
  const select = wrap.locator('.tiny-base-select').nth(1)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  // 1.1 没有过滤到内容
  await input.click()
  // 1.1.1 验证 no-match-text
  await expect(page.getByText('No Match')).toBeHidden()
  await input.press('1')
  await expect(input).toHaveValue('1')
  await input.press('Enter')
  await expect(page.getByText('No Match')).toBeVisible()

  await page.waitForTimeout(500)
  let allListItems = await option.all()
  allListItems.forEach(async (item) => {
    await expect(item).toHaveCSS('display', 'none')
  })

  // 1.2 过滤到内容
  await input.fill('上海')
  await expect(input).toHaveValue('上海')
  await input.press('Enter')

  await page.waitForTimeout(200)

  allListItems.forEach(async (item) => {
    const isVisibleItem = (await item.innerText()) === '上海'
    if (isVisibleItem) {
      await expect(item).toHaveCSS('display', 'flex')
    } else {
      await expect(item).toHaveCSS('display', 'none')
    }
  })
  await expect(option.filter({ hasText: '上海' })).toBeVisible()
  await option.filter({ hasText: '上海' }).click()
  await expect(input).toHaveValue('上海')
})
