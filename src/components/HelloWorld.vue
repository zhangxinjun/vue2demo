<template>
 <div>
   <button v-copy="copyText">复制</button>
   <hr>
   <button v-longpress="longpress">长按</button>
   <hr>
   <input type="text" v-debounce="debounce">
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
 data(){
   return {
     copyText:"这是复制的内容"
   }
 },
 methods:{
   longpress(){
     console.log("长按指令生效")
   },
   debounce(){
     console.log("防抖")
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
