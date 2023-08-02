/**
 * MIT License
 *
 * Copyright (c) 2019 Xu Liangzhan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import helperCreateTreeFunc from './helperCreateTreeFunc'
import map from './map'

const mapTreeItem = ({ parent, obj, iterate, context, path, node, parseChildren, opts }) => {
  let mapChildren = opts.mapChildren || parseChildren

  return map(obj, (item, index) => {
    const paths = path.concat([`${index}`])
    const nodes = node.concat([item])
    const rest = iterate.call(context, item, index, obj, paths, parent, nodes)

    if (rest && item && parseChildren && item[parseChildren]) {
      rest[mapChildren] = mapTreeItem({
        item,
        obj: item[parseChildren],
        iterate,
        context,
        path: paths,
        node: nodes,
        parseChildren,
        opts
      })
    }

    return rest
  })
}

const mapTree = helperCreateTreeFunc(mapTreeItem)

export default mapTree
