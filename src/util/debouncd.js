/**
 * 1.定义一个延迟执行方法，如果在延迟时间内该方法被调用则重新计算时间
 * 2.将该方法绑定到事件上
 */

const debounce = {
  // 被绑定的元素插入到父节点时调用，仅保证父节点的存在，不一定已经被插入到文档中了
  inserted: function (el, binding) {
    let timer
    el.addEventListener('keyup', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      },500)
    })
  },
}

export default debounce