<template>
    <div class="mall">
      <div class="nav">
        <div class="tab book">
          <router-link to="/mall/book">书刊</router-link>
        </div>
        <div class="tab hardware">
          <router-link to="/mall/hardware">硬件</router-link>
        </div>
        <div class="tab software">
          <router-link to="/mall/software">软件</router-link>
        </div>
        <div class="tab rehabilitationGuide">
          <router-link to="/mall/rehabilitationGuide">康复指南</router-link>
        </div>
      </div>
      <div class="body">
        <router-view></router-view>
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
    float: left;
    width: 8%;
    border: 1px solid black;
  }
  .tab{
    line-height: 16px;
    width: 74px;
    height: 20px;
    margin:0px auto 10px;
    border: 1px solid black;
  }
  .body{
    width: 90%;
    float: right;
    border: 1px solid black;
  }
</style>
