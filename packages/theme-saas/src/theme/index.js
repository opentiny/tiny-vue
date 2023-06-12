/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { flattenObject } from './utils'
import { impressionTheme } from './impression-theme'
import { infinityTheme } from './infinity-theme'
import { deepTheme } from './deep-theme'
import { galaxyTheme } from './galaxy-theme'
import * as auroraTheme from './aurora-theme'
import * as smbTheme from './smb-theme'

export const tinyImpressionTheme = {
  id: 'tiny-impression-theme',
  name: 'Impression',
  cnName: '印象',
  data: impressionTheme
}

export const tinyInfinityTheme = {
  id: 'tiny-infinity-theme',
  name: 'Infinity',
  cnName: '无限',
  data: infinityTheme
}

export const tinyDeepTheme = {
  id: 'tiny-deep-theme',
  name: 'Deep',
  cnName: '深邃夜空',
  data: deepTheme
}

export const tinyGalaxyTheme = {
  id: 'tiny-galaxy-theme',
  name: 'Galaxy',
  cnName: '追光',
  data: galaxyTheme
}

export const tinyAuroraTheme = {
  id: 'tiny-aurora-theme',
  name: 'Aurora',
  cnName: 'Aurora',
  data: flattenObject(auroraTheme)
}

export const tinySmbTheme = {
  id: 'tiny-smb-theme',
  name: 'SMB',
  cnName: 'SMB',
  data: flattenObject(smbTheme)
}
