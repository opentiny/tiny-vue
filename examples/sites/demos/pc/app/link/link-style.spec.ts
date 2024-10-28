import { test, expect } from '@playwright/test'

test('主题样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('link#link-style')

  const demo = page.locator('#link-style')
  let getAfter = async (index: number) =>
    await page.evaluate((index: number) => {
      const link = document.querySelector(`#link-style .tiny-link:nth-child(${index})`)
      if (link) {
        const { borderBottomColor } = window.getComputedStyle(link, '::after')
        return borderBottomColor
      } else {
        return ''
      }
    }, index)

  let anchor = demo.locator('a').filter({ hasText: '默认链接' })
  await expect(anchor).toHaveCSS('color', 'rgb(20, 118, 255)')
  await anchor.hover()
  await expect(await getAfter(1)).toBe('rgb(20, 118, 255)')
  await expect(anchor).toHaveCSS('color', 'rgb(20, 118, 255)')

  anchor = demo.locator('a').filter({ hasText: '主要链接' })
  await expect(anchor).toHaveCSS('color', 'rgb(25, 25, 25)')
  await anchor.hover()
  await expect(await getAfter(2)).toBe('rgb(25, 25, 25)')
  await expect(anchor).toHaveCSS('color', 'rgb(25, 25, 25)')

  anchor = demo.locator('a').filter({ hasText: '成功链接' })
  await expect(anchor).toHaveCSS('color', 'rgb(92, 179, 0)')
  await anchor.hover()
  await expect(await getAfter(3)).toBe('rgb(92, 179, 0)')
  await expect(anchor).toHaveCSS('color', 'rgb(92, 179, 0)')

  anchor = demo.locator('a').filter({ hasText: '警告链接' })
  await expect(anchor).toHaveCSS('color', 'rgb(255, 136, 0)')
  await anchor.hover()
  await expect(await getAfter(4)).toBe('rgb(255, 136, 0)')
  await expect(anchor).toHaveCSS('color', 'rgb(255, 136, 0)')

  anchor = demo.locator('a').filter({ hasText: '危险链接' })
  await expect(anchor).toHaveCSS('color', 'rgb(242, 48, 48)')
  await anchor.hover()
  await expect(await getAfter(5)).toBe('rgb(242, 48, 48)')
  await expect(anchor).toHaveCSS('color', 'rgb(242, 48, 48)')

  anchor = demo.locator('a').filter({ hasText: '信息链接' })
  await expect(anchor).toHaveCSS('color', 'rgb(20, 118, 255)')
  await anchor.hover()
  await expect(await getAfter(6)).toBe('rgb(20, 118, 255)')
  await expect(anchor).toHaveCSS('color', 'rgb(20, 118, 255)')
})
