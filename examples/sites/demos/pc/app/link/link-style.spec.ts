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
  await expect(anchor).toHaveCSS('color', 'rgb(37, 43, 58)')
  await anchor.hover()
  await expect(await getAfter(1)).toBe('rgb(94, 124, 224)')
  await expect(anchor).toHaveCSS('color', 'rgb(82, 110, 204)')

  anchor = demo.locator('a').filter({ hasText: '主要链接' })
  await expect(anchor).toHaveCSS('color', 'rgb(94, 124, 224)')
  await anchor.hover()
  await expect(await getAfter(2)).toBe('rgb(94, 124, 224)')
  await expect(anchor).toHaveCSS('color', 'rgb(118, 147, 245)')

  anchor = demo.locator('a').filter({ hasText: '成功链接' })
  await expect(anchor).toHaveCSS('color', 'rgb(80, 212, 171)')
  await anchor.hover()
  await expect(await getAfter(3)).toBe('rgb(80, 212, 171)')
  await expect(anchor).toHaveCSS('color', 'rgb(172, 242, 220)')

  anchor = demo.locator('a').filter({ hasText: '警告链接' })
  await expect(anchor).toHaveCSS('color', 'rgb(250, 152, 65)')
  await anchor.hover()
  await expect(await getAfter(4)).toBe('rgb(250, 152, 65)')
  await expect(anchor).toHaveCSS('color', 'rgb(250, 194, 10)')

  anchor = demo.locator('a').filter({ hasText: '危险链接' })
  await expect(anchor).toHaveCSS('color', 'rgb(199, 0, 11)')
  await anchor.hover()
  await expect(await getAfter(5)).toBe('rgb(199, 0, 11)')
  await expect(anchor).toHaveCSS('color', 'rgb(214, 74, 82)')

  anchor = demo.locator('a').filter({ hasText: '信息链接' })
  await expect(anchor).toHaveCSS('color', 'rgb(37, 43, 58)')
  await anchor.hover()
  await expect(await getAfter(6)).toBe('rgb(37, 43, 58)')
  await expect(anchor).toHaveCSS('color', 'rgb(92, 97, 115)')
})
