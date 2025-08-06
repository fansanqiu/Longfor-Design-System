import * as React from 'react'
import { getBlockTitle } from 'notion-utils'

/**
 * 数学公式
 * @param {} param0
 * @returns
 */
export const Equation = ({ block, math, inline = false, className, ...rest }) => {
  math = math || getBlockTitle(block, null)
  if (!math) return null

  // 使用纯文本显示数学公式，避免依赖外部库
  return (
    <span
      role='button'
      tabIndex={0}
      className={`notion-equation ${inline ? 'notion-equation-inline' : 'notion-equation-block'} ${className || ''}`}
      {...rest}
    >
      {math}
    </span>
  )
}
