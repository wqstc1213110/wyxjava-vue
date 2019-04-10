<template>
    <!--导航栏-->
    <div class="header">
        <!--导航栏-->
        <div class="nav">
          <div class="nav-left">
            <ul class="nav-left-ul">
              <li>
                <span class="bg-pic home"></span>
                <router-link to="/">主页</router-link>
              </li>
              <li>
                <span class="bg-pic mall"></span>
                <router-link to="/mall">商城</router-link>
              </li>
              <li>
                <span class="bg-pic website"></span>
                <router-link to="/website">网站</router-link>
              </li>
            </ul>
          </div>

          <!--搜索框-->
          <div class="search-box">
            <!--放大镜-->
            <!--<a href="magnifier"></a>-->
            <!--<form action="#" method="get">
              <div class="search-input">
                <input type="text" placeholder="我要学Java">
              </div>
              <div class="btn">
                <button type="submit">搜索</button>
              </div>
            </form>-->
            <!--<Input search enter-button placeholder="Enter something..." />-->
          </div>


          <div class="nav-right">
            <ul class="nav-right-ul">
              <li>
                <span class="bg-pic login"></span>
                <router-link to="/login">登录</router-link>
              </li>
              <li>
                <span class="bg-pic news"></span>
                <router-link to="/news">消息</router-link>
              </li>
              <li>
                <span class="bg-pic aboutUs"></span>
                <router-link to="/aboutUs">导航</router-link>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style scoped>
  .nav{
    position: relative;
    width: 1192px;
    height: 50px;
    line-height: 60px;
    margin: 0 auto;
  }
  /*左边的主页商城网站
  中间的搜索框
  右边的登录消息导航*/
  .nav-left,
  .search-box{
    float: left;
  }
  .nav-right{
    float: right;
  }
  .nav-left li,
  .nav-right li{
    float: left;
  }

  .nav-left ul li{
    margin-right: 20px;
  }
  .nav-right ul li{
    margin-left: 20px;
  }

  .nav .bg-pic{
    display: inline-block;
    width: 18px;
    height: 18px;
    background-size: 100% 100%;
    vertical-align: middle;
  }
  .nav .home{
    background-image: url(../../assets/header/home.png);
  }
  .nav .mall{
    background-image: url(../../assets/header/mall.png);
  }
  .nav .website{
    background-image: url(../../assets/header/website.png);
  }
  .nav .login{
    background-image: url(../../assets/header/login.png);
  }
  .nav .news{
    background-image: url(../../assets/header/news.png);
  }
  .nav .aboutUs{
    background-image: url(../../assets/header/aboutUs.png);
  }

  /*搜索框样式*/
  .nav .search-box{
    position: absolute;
    top: 10px;
    left: 20%;
    width:44%;
    height: 40px;
    margin-left:10%;
  }
  /*.search-input样式*/
  .search-box .search-input{
    position: absolute;
    top: 0px;
    width: 85%;
    height: 36px;
    border: 2px solid #165eb5;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    overflow: hidden;
  }
  /*input样式*/
  .search-box .search-input input{
    position: absolute;
    top: 6px;
    left: 22px;
    width: 100%;
    height: 24px;
    border: none;
    outline: 0;
    text-indent: 5px;
    text-align: left;
  }

  .search-box a{
    position: absolute;
    top: 11px;
    left: 6px;
    width: 18px;
    height: 18px;
    background-image: url(../../assets/header/放大镜.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  /*div btn样式*/
  .search-box .btn{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 80px;
    height: 40px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
  }
</style>
