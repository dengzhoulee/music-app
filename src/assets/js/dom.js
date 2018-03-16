/**
 * 为元素 el 添加 className
 * @param el
 * @param className
 */
export function addClass (el, className) {
  el.classList.add(className)
}

/**
 * 判断元素 el 是否有 className
 * @param el
 * @param className
 * @returns {boolean}
 */
export function hasClass (el, className) {
  return el.classList.contains(className)
}
