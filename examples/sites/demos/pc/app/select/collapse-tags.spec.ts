import { test, expect } from '@playwright/test'

test('collapse-tags', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#collapse-tags')
  const wrap = page.locator('#collapse-tags')
  const select = wrap.locator('.tiny-select').nth(0)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const tag = select.locator('.tiny-tag')
  const option = dropdown.locator('.tiny-option')

  // 验证默认值的折叠标签显示
  await expect(tag).toHaveCount(2)
  await expect(tag.filter({ hasText: '黄金糕' })).toBeVisible()
  await expect(tag.filter({ hasText: '+ 1' })).toBeVisible()

  // 点击下拉后选中效果
  await tag.first().click()
  await expect(option.filter({ hasText: '黄金糕' })).toHaveClass(/selected/)
  await expect(option.filter({ hasText: '双皮奶' })).toHaveClass(/selected/)

  // 取消选中一个
  await option.filter({ hasText: '黄金糕' }).locator('span').nth(2).click()
  await expect(tag.filter({ hasText: '+ 1' })).toBeHidden()
  await expect(tag).toHaveCount(1)

  // 再选中2个
  await option.filter({ hasText: '蚵仔煎' }).locator('span').nth(2).click()
  await option.filter({ hasText: '北京烤鸭' }).locator('span').nth(2).click()
  await expect(tag.filter({ hasText: '+ 2' })).toBeVisible()
  await expect(tag).toHaveCount(2)
})
