import { test, expect } from '@playwright/test'

test('Space wrap 切换', async ({ page }) => {
  await page.goto('space#space-wrap')

  const space = page.locator('#space-wrap .tiny-space')

  // 工具函数：获取当前 flex-wrap
  const getFlexWrap = async () => {
    return await space.evaluate((el) => getComputedStyle(el).flexWrap)
  }

  // 默认不换行
  expect(await getFlexWrap()).toBe('nowrap')

  // 点击“换行”按钮，使用 exact:true 避免严格模式报错
  const wrapButton = page.getByRole('button', { name: '换行', exact: true })
  await wrapButton.click()
  expect(await getFlexWrap()).toBe('wrap')

  // 点击“不换行”按钮
  const nowrapButton = page.getByRole('button', { name: '不换行', exact: true })
  await nowrapButton.click()
  expect(await getFlexWrap()).toBe('nowrap')
})
