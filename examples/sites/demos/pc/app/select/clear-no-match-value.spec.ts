import { test, expect } from '@playwright/test'

test('单选找不到匹配值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#clear-no-match-value')
  const wrap = page.locator('#clear-no-match-value')
  const input = wrap.locator('.tiny-input__inner').nth(0)

  // 验证是否清空不匹配的值
  await expect(input).toHaveValue('')
  await expect(wrap.locator('.val')).toHaveText('')
})

test('多选找不到匹配值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#clear-no-match-value')
  const wrap = page.locator('#clear-no-match-value')
  const tag = wrap.locator('.tiny-select').nth(1).locator('.tiny-tag')

  // 验证是否清空不匹配的值
  await expect(tag).toHaveCount(1)
  await expect(tag).toHaveText('双皮奶')
  await expect(wrap.locator('.multi-val')).toHaveText('[ "选项2" ]')
})
