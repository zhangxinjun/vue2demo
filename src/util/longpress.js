
/**
 * 1.创建一个定时器，2s后执行
 * 2.当用户按下按钮时出发mousedown事件，启动定时器；用户松开按钮时调用mouseout事件
 * 3.如果mouseup事件2s内触发就清除定时器，当作一次普通点击事件
 * 4.如果定时器没有在2s内被清除，则判定为一次长按，可以执行相关联的函数
 * 5.移动端要考虑toushstart，touchend事件
 */

const longpress = {
  bind:function(el,binding) {
    if(typeof binding.value !== "function"){
      throw "callback must is a function";
    }
    let pressTime = null;
    let start = (e) => {
      console.log(e,"start")
      if(e.type === "click" && e.button !== 0){
        return;
      }
      if(pressTime === null){
        pressTime = setTimeout(() => {
          hander()
        },2000)
      }
    }
    let canel = (e) => {
      console.log(e,"canel")
      if(pressTime !== null){
        clearTimeout(pressTime)
        pressTime = null
      }
    }
    let hander = (e) => {
      console.log(e,"hander")
      binding.value(e)
    }
    el.addEventListener("mousedown",start)
    el.addEventListener("touchstart",start)
    el.addEventListener("click",canel)
    el.addEventListener("mouseout",canel)
    el.addEventListener("touchend",canel)
    el.addEventListener("touchcancel",canel)
  },
  componentUpdated(el,{value}){
    el.$value = value
  },
  unbind(el){
    el.removeEventListener("click",el.hander)
  }
}

export default longpress