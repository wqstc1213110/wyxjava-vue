<template>
  <div id="app">
      <!--网站内容布局-->
      <!--头-->
      <div class="nav">
        <myHeader></myHeader>
      </div>
      <div class="wyxjava">
          <!--具体内容-->
          <div class="body">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>
import Header from './components/header/Header'
export default {
  name: 'App',
  components:{
    'myHeader' : Header
  }
}
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
    text-decoration: none;  /*下划线*/
    list-style: none;       /* ul li 的小圆点*/
    font-family: Arial;     /*字体*/
    font-size: 16px;        /*文字大小*/
    text-align: center;     /*文字居中*/
  }
  .nav{
    background-color: #DDDDDD;
    padding-bottom: 10px;
  }
  .wyxjava{
    width: 1190px;
    margin: 0 auto;
  }
  .body{
    width: 100%;
    height: 100%;
  }
</style>
