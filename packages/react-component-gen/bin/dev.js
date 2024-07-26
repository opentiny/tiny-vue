#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning

import { execute } from '@oclif/core'
import * as dotenv from 'dotenv'

dotenv.config()

await execute({ development: true, dir: import.meta.url })
