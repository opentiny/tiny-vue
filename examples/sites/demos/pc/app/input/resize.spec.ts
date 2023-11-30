import { test, expect } from '@playwright/test'

test('可缩放文本域', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#resize')
  const textarea = await page.locator('.demo-input .tiny-textarea > .tiny-textarea-display-only > textarea')
  await expect(textarea.nth(0)).toHaveCSS('resize', 'vertical')
  await expect(textarea.nth(1)).toHaveCSS('resize', 'none')
  await expect(textarea.nth(2)).toHaveCSS('resize', 'both')
  await expect(textarea.nth(3)).toHaveCSS('resize', 'horizontal')
  await expect(textarea.nth(4)).toHaveCSS('resize', 'vertical')



  const fillText = 'test1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'
  const textarea2 = page.locator('.demo-input .tiny-textarea .tiny-textarea-autosize-display-only > textarea')

  // autosize = { minRows: 2, maxRows: 3 } 检查高度
  let defaultHeight = await textarea2.nth(0).boundingBox().then(box => box?.height)
  await textarea2.nth(0).fill(fillText)
  let fill1Height = await textarea2.nth(0).boundingBox().then(box => box?.height)
  await textarea.nth(0).fill(fillText+ fillText)
  let fill2Height = await textarea2.nth(0).boundingBox().then(box => box?.height)
  await expect(fill1Height).not.toEqual(defaultHeight)
  await expect(fill1Height).toEqual(fill2Height)

  // autosize 检查高度
  await textarea2.nth(1).fill('')
  defaultHeight = await textarea2.nth(0).boundingBox().then(box => box?.height)
  await textarea2.nth(1).fill(fillText+ fillText)
  fill1Height = await textarea2.nth(0).boundingBox().then(box => box?.height)
  await expect(fill1Height).not.toBeNull()
  await expect(defaultHeight).toBeLessThan(fill1Height || 0)

})
