<template>
  <div>
    <button v-copy="copyText">复制</button>
    <hr />
    <button v-longpress="longpress">长按</button>
    <hr />
    <input type="text" v-debounce="debounce" />
    <hr>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <img style="width:100%;height:auto;" v-lazy="item.middleURL">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      copyText: "这是复制的内容",
      list:[]
    };
  },
  created() {
    this.getImg()
  },
  methods: {
    longpress() {
      console.log("长按指令生效");
    },
    debounce() {
      console.log("防抖");
    },
    getImg() {
      this.$axios.get("search/acjson?tn=resultjson_com&logid=9534619242690004395&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E7%A6%8F&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word=%E7%A6%8F&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=&fr=&expermode=&force=&pn=30&rn=30&gsm=1e000000001e&1612337494341=").then(res => {
        console.log(res.data)
        this.list = res.data.data;
        
      })
      
    },
  },
};
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
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
