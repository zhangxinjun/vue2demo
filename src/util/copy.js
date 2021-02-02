const copy = {
  bind(el,{value}){
    el.$value = value;
    el.hander = () => {
      if(!el.$value){
        console.log("无复制内容");
        return
      }
      const textarea = document.createElement("textarea");
      textarea.readOnly = "readOnly";
      textarea.style.position = "absoulte";
      textarea.style.left = "-9999999px";
      textarea.value = el.$value;
      document.body.appendChild(textarea);
      textarea.select();
      const result = document.execCommand("Copy");
      if(result){
        console.log("复制成功");
      }
      document.body.removeChild(textarea);
    }
    el.addEventListener("click",el.hander);
  },
  componentUpdated(el,{value}){
    el.$value = value
  },
  unbind(el){
    el.removeEventListener("click",el.hander)
  }
}
export default copy