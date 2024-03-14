import { test, expect } from '@playwright/test'

test('下拉禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#disabled')
  const wrap = page.locator('#disabled')
  const input = wrap.locator('.tiny-input__inner').first()

  const hasDisabled = await input.evaluate((input) => input.hasAttribute('disabled'))
  await expect(hasDisabled).toBe(true)
})

test('多选某项禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#disabled')
  const wrap = page.locator('#disabled')
  const select = wrap.locator('.tiny-select').nth(1)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const tag = select.locator('.tiny-tag')
  const option = dropdown.locator('.tiny-option')

  await expect(tag).toHaveCount(1)
  await select.click()
  await expect(option.filter({ hasText: '双皮奶' })).toHaveClass(/is-disabled/)

  await option.filter({ hasText: '双皮奶' }).click()
  await expect(tag).toHaveCount(1)

  await option.filter({ hasText: '黄金糕' }).click()
  await expect(tag).toHaveCount(2)
  await expect(tag.filter({ hasText: '黄金糕' })).toHaveCount(1)
})

test('单选某项禁用', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#disabled')
  const wrap = page.locator('#disabled')
  const select = wrap.locator('.tiny-select').nth(2)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const option = dropdown.locator('.tiny-option')

  await select.click()
  await expect(option.filter({ hasText: '全部' })).toHaveCount(0)
  await expect(option.filter({ hasText: '双皮奶' })).toHaveClass(/is-disabled/)

  await option.filter({ hasText: '双皮奶' }).click()
  await expect(dropdown).toBeVisible()
  await expect(input).toHaveValue('')

  await option.filter({ hasText: '黄金糕' }).click()
  await expect(dropdown).toBeHidden()
  await expect(input).toHaveValue('黄金糕')
})

test('多选，禁用项默认选中', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#disabled')
  const wrap = page.locator('#disabled')
  const select = wrap.locator('.tiny-select').nth(3)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const tag = select.locator('.tiny-tag')
  const option = dropdown.locator('.tiny-option')

  // 默认值显示tag数
  await expect(tag).toHaveCount(2)
  // 禁用项默认选中不显示关闭图标
  await expect(tag.filter({ hasText: '双皮奶' }).locator('svg')).toHaveCount(0)
  // 非禁用项显示关闭图标
  await expect(tag.filter({ hasText: '蚵仔煎' }).locator('svg')).toHaveCount(1)

  // 下拉禁用和默认选中的效果
  await select.click()
  await expect(option.filter({ hasText: '全部' })).toHaveCount(1)
  await expect(option.filter({ hasText: '双皮奶' })).toHaveClass(/is-disabled/)
  await expect(option.filter({ hasText: '双皮奶' })).toHaveClass(/selected/)
  await expect(option.filter({ hasText: '蚵仔煎' })).toHaveClass(/selected/)

  // 点击禁用项不取消选中
  await option.filter({ hasText: '双皮奶' }).click()
  await expect(dropdown).toBeVisible()
  await expect(tag).toHaveCount(2)

  // 选中其他项
  await option.filter({ hasText: '黄金糕' }).click()
  await expect(dropdown).toBeVisible()
  await expect(tag).toHaveCount(3)
})
