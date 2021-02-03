import copy from "./copy";
import longpress from "./longpress"
import debounce from "./debouncd"

const directives = {
  copy,
  longpress,
  debounce
}
export default {
  install(Vue){
    Object.keys(directives).forEach(key => {
      Vue.directive(key,directives[key])
    }) 
  }
}