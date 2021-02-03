import copy from "./copy";
import longpress from "./longpress"
const directives = {
  copy,
  longpress
}
export default {
  install(Vue){
    Object.keys(directives).forEach(key => {
      Vue.directive(key,directives[key])
    }) 
  }
}