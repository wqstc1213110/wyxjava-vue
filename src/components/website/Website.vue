<template>
    <div class="website">
      我是website
      <div class="demo" @click="link()">
        测试
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Website.vue',
    methods:{
      link:function () {
        axios.get("demo/selectDemo.html")
          .then((data) => {
            console.log(data);
          })
      }
    }
  }
</script>

<style scoped>
.demo{
  width: 50px;
  height: 50px;
  border: 1px solid black;
}
</style>
