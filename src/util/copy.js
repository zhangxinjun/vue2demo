
/**
 * 1.动态创建textarea标签，并设置readonly属性及移除可视区
 * 2.将要复制的值赋值给textarea标签的value属性，并插入到body中
 * 3.选中textarea的值并复制
 * 4.将body中插入的textarea标签移除
 * 5.在第一次调用时绑定事件，在移除元素时解绑事件
 */

const copy = {
  bind(el,{value}){
    el.$value = value;
    el.hander = () => {
      // 如果没有可复制的内容
      if(!el.$value){
        console.log("无复制内容");
        return
      }
      const textarea = document.createElement("textarea");
      // 设置readonly是为了防止在ios下自动唤起键盘
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
    // 绑定点击事件
    el.addEventListener("click",el.hander);
  },
  // 当传递过来的值更新的时候会触发
  componentUpdated(el,{value}){
    el.$value = value
  },
  // 指令与元素解绑时移除事件
  unbind(el){
    el.removeEventListener("click",el.hander)
  }
}
export default copy