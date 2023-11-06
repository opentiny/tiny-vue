import { test, expect } from '@playwright/test'

test('动态加载且父子级不相关联 lazyload & checkStrictly', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#auto-load-checkStrictly')
  await page.locator('.tiny-cascader').click()
  const svg = page.locator('.tiny-cascader-node__postfix > .st0')
  await expect(svg).toBeVisible()
  await page.locator('li[role="menuitem"]').click()
  const loadingSvg = page.getByRole('menuitem', { name: '选项1' }).locator('path')
  await expect(loadingSvg).toHaveAttribute(
    'd',
    'M511.883 287.998h-.362a31.999 31.999 0 0 1-31.66-31.977v-.361c0-.105.117-11.723.117-63.659v-96a31.999 31.999 0 1 1 64.001 0v96c0 52.586-.112 63.882-.12 64.338a32.003 32.003 0 0 1-31.976 31.66zm.115 672A31.999 31.999 0 0 1 480 928v-96.38c0-51.61-.112-63.174-.115-63.286s0-.242 0-.361a31.999 31.999 0 0 1 63.998-.314c0 .455.119 11.711.119 64.034v96.307a31.999 31.999 0 0 1-32.003 32zM330.9 363.021a31.898 31.898 0 0 1-22.866-9.612c-.076-.076-8.208-8.37-44.932-45.095l-67.903-67.885a31.999 31.999 0 0 1 45.257-45.253l67.881 67.882c37.183 37.183 45.09 45.253 45.412 45.578A31.999 31.999 0 0 1 330.9 363.02zm475.238 475.094a31.901 31.901 0 0 1-22.628-9.375l-67.885-67.88c-36.724-36.725-45.018-44.86-45.098-44.94a31.999 31.999 0 0 1 44.777-45.73c.325.318 8.395 8.23 45.578 45.412l67.881 67.882a31.999 31.999 0 0 1-22.625 54.63zm-582.137 0a31.901 31.901 0 0 0 22.628-9.375l67.882-67.88c36.724-36.725 45.022-44.86 45.097-44.94a31.999 31.999 0 0 0-44.776-45.73c-.325.318-8.395 8.23-45.578 45.412l-67.881 67.885A31.999 31.999 0 0 0 224 838.115zm31.949-294.056h-.362c-.104 0-11.722-.116-63.658-.116H95.943a31.999 31.999 0 1 1 0-64.002h95.997c52.586 0 63.882.112 64.337.12a31.999 31.999 0 0 1 31.66 31.977v.361a32.003 32.003 0 0 1-31.988 31.66zm511.99 0a32.003 32.003 0 0 1-31.995-31.667v-.361a31.999 31.999 0 0 1 31.66-31.97c.455 0 11.754-.12 64.34-.12h96.001a31.999 31.999 0 0 1 0 64.002h-96c-51.936 0-63.554.112-63.666.116h-.336zM693 363.018a31.999 31.999 0 0 1-22.863-54.382c.318-.325 8.23-8.395 45.412-45.578l67.882-67.885a31.999 31.999 0 1 1 45.263 45.256l-67.892 67.882c-31.02 31.023-41.644 41.76-44.241 44.393l-.697.723a31.909 31.909 0 0 1-22.864 9.59z'
  )
  await page.waitForTimeout(1000)
  await page.getByRole('menuitem', { name: '选项2' }).getByRole('radio').click()
  await page.getByRole('textbox', { name: '请选择' }).click()
  const light = page.getByRole('menuitem', { name: '选项2' }).getByRole('radio')
  await expect(light).toHaveClass('tiny-radio is-checked')
})
