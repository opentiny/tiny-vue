import { test, expect } from '@playwright/test'

test('测试自定义服务', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('area#custom-service')

  const preview = page.locator('#preview')
  const areaInput = preview.locator('.tiny-area input')
  const areaJCR = page.locator('.tiny-area-jcr')
  const areaRegion = page.locator('.tiny-area-region')
  const areaRep = page.locator('.tiny-area-rep')
  const areaOffice = page.locator('.tiny-area-office')
  const getSelectItem = (parent) => parent.locator('.tiny-option.tiny-select-dropdown__item')

  // 未选择一级片区，其他片区选项应该为空
  await areaInput.first().click()
  await expect(areaJCR).toBeVisible()
  await expect(getSelectItem(areaJCR)).toHaveCount(2)
  await areaInput.nth(1).click()
  await expect(areaRegion).toBeVisible()
  await expect(areaRegion).toContainText('暂无相关数据')
  await areaInput.nth(2).click()
  await expect(areaRep).toBeVisible()
  await expect(areaRep).toContainText('暂无相关数据')
  await areaInput.nth(3).click()
  await expect(areaOffice).toBeVisible()
  await expect(areaOffice).toContainText('暂无相关数据')

  // 依次选择，查看是否具有争取的值
  await areaInput.first().click()
  await getSelectItem(areaJCR).first().click()
  await areaInput.nth(1).click()
  await getSelectItem(areaRegion).first().click()
  await areaInput.nth(2).click()
  await getSelectItem(areaRep).first().click()
  await areaInput.nth(3).click()
  await getSelectItem(areaOffice).first().click()
  await expect(areaInput.first()).toHaveValue('A公司 Marketing与销售服务部')
  await expect(areaInput.nth(1)).toHaveValue('火星终端子公司')
  await expect(areaInput.nth(2)).toHaveValue('北京代表处')
  await expect(areaInput.nth(3)).toHaveValue('牙买加办事处')
})
