import { expect, test } from '@playwright/test'

test('默认搜索', async ({ page }) => {
  await page.goto('select#filter-method')
  const wrap = page.locator('#filter-method')
  const select = wrap.locator('.tiny-select').first()
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
  await input.fill('双皮奶')
  await expect(input).toHaveValue('双皮奶')
  await input.press('Enter')

  await page.waitForTimeout(200)

  allListItems.forEach(async (item) => {
    const isVisibleItem = (await item.innerText()) === '双皮奶'
    if (isVisibleItem) {
      await expect(item).toHaveCSS('display', 'flex')
    } else {
      await expect(item).toHaveCSS('display', 'none')
    }
  })
  await expect(option.filter({ hasText: '双皮奶' })).toBeVisible()
  await option.filter({ hasText: '双皮奶' }).click()
  await expect(input).toHaveValue('双皮奶')
})

test('自定义过滤', async ({ page }) => {
  await page.goto('select#filter-method')
  const wrap = page.locator('#filter-method')
  const select = wrap.locator('.tiny-select').nth(1)
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
  await input.fill('双皮奶')
  await expect(input).toHaveValue('双皮奶')
  await input.press('Enter')

  await page.waitForTimeout(200)

  allListItems.forEach(async (item) => {
    const isVisibleItem = (await item.innerText()) === '双皮奶'
    if (isVisibleItem) {
      await expect(item).toHaveCSS('display', 'flex')
    } else {
      await expect(item).toHaveCSS('display', 'none')
    }
  })
  await expect(option.filter({ hasText: '双皮奶' })).toBeVisible()
  await option.filter({ hasText: '双皮奶' }).click()
  await expect(input).toHaveValue('双皮奶')
})
