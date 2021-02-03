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