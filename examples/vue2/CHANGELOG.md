# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.6-mf.0](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/compare/vue2-example@0.1.5-mf.0...vue2-example@0.1.6-mf.0) (2023-02-08)

**Note:** Version bump only for package vue2-example





## [0.1.5-mf.0](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/compare/vue2-example@0.1.4-mf.0...vue2-example@0.1.5-mf.0) (2023-02-08)

**Note:** Version bump only for package vue2-example





## [0.1.4-mf.0](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/compare/vue2-example@0.1.3-mf.0...vue2-example@0.1.4-mf.0) (2023-02-08)

**Note:** Version bump only for package vue2-example





## [0.1.3-mf.0](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/compare/vue2-example@0.1.2-mf.0...vue2-example@0.1.3-mf.0) (2023-02-08)

**Note:** Version bump only for package vue2-example





## [0.1.2-mf.0](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/compare/vue2-example@0.1.1-beta.0...vue2-example@0.1.2-mf.0) (2023-02-08)

**Note:** Version bump only for package vue2-example





## 0.1.1-beta.0 (2023-02-08)


### Bug Fixes

* 固定 npm3 版本，增加 @vue/babel jsx 插件 ([afe772c](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/commits/afe772c1d779b9bae576e966bea9162bd6af4331))
* 让 dev:vue2 正常运行 ([3dd1dd1](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/commits/3dd1dd196dc0a7527860a4a04ca334ab8ebc27ac))
* 使得针对不同版本Vue的类型扩展能正常工作 ([9fb7946](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/commits/9fb79466ddc848385d4231bbee51c189a849868c))
* 使用了按需导入插件，就不能用import default 导入 ([606b141](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/commits/606b141690736753b20e12235e4e769187e044a5))
* 缩小 tailwindcss content 的扫描返回，避免干扰 ([3012d46](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/commits/3012d462c5adb29d3957d5f3b5c11f9adf71a55c))
* 修复 loading 组件由于文件改名导致引用错误问题，同时删除无用文件 ([d63c084](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/commits/d63c084595f3e9ba6845cf374bf4bee70949e90f))
* 修正 inline-chunks 插件的逻辑，vite 插件改为从vue2/3工程加载 ([72b0926](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/commits/72b0926998c5eefef4adbe01ecb881f888607145))
* 修正 tailwindcss-vite-plugin 根据 windows 斜杠路径找不到入口模块而报错的问题 ([4b37f4f](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/commits/4b37f4f43f64588b223957fe362d29d59af98ba1))
* 修正 vue2 和 vue2.7 下扩展 ([ad71cc0](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/commits/ad71cc096bdbb02b1070917e11bc5e48bab4ca19))


### Features

* 搭建了基于 vitest 的单元测试和基于 playwright 的 E2E 测试 ([fdeddaf](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/commits/fdeddaf6c753c737caf5434cea2c86cc4292a311))
* 使用 unocss 代替 tailwindcss 以获得更快的开发预览 ([585c7bc](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/commits/585c7bc26b50203fdea7241f9e9b7f94cd785bac))
* 增加 vue2.7 的支持 ([ea71624](https://codehub-dg-g.huawei.com/AIF/TINY/opentiny-vue/commits/ea71624e33eef95536ad3adb66d5e646cf734cbe))
