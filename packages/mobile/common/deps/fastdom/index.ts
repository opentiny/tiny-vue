/**
 * FastDom
 *
 * Eliminates layout thrashing
 * by batching DOM read/write
 * interactions.
 *
 * @author Wilson Page <wilsonpage@me.com>
 * @author Kornel Lesinski <kornel.lesinski@ft.com>
 */

import fastdom from './singleton'
import fastdomAsync from './async'
import fastdomSandbox from './sandbox'

export { fastdom, fastdomAsync, fastdomSandbox }
