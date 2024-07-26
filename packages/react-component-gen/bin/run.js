#!/usr/bin/env node

import { execute } from '@oclif/core'
import * as dotenv from 'dotenv'

dotenv.config()

await execute({ dir: import.meta.url })
