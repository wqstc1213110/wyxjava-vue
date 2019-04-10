<template>
    <div class="lesson">
      <div class="wrapper">
        <!--视频区域-->
        <div class="video">
          <video autoplay loop controls src="http://www.wyxjava.com/直接内存.mp4"></video>
        </div>

        <!--资源区域-->
        <div class="lessonResource">
          <div class="lesson html" @click="html"></div>
          <div class="lesson svg"></div>
          <div class="lesson markdown"></div>
          <div class="lesson xmind"></div>


          <div class="lessonCommont">
            <strong>本节课评论</strong>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
              url:""
            }
        },
        methods:{
          html(){
            window.open(this.url);
          }
        }
    }
</script>

<style scoped>
  .video{
    float: left;
    width: 900px;
    height: 70vh;
    margin-top: 10px;
    margin-left: 10px;
    border:1px solid black;
  }
  video{
    width: 100%;
    height:100%;

  }
  .lessonResource{
    float: right;
    width: 266px;
    margin-top: 10px;
  }
  .lessonResource .lesson{
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-left: 6px;
    margin-top: 6px;
    background-size: 100% 100%;
  }

  .lessonResource .html{
    background-image: url(../../assets/lesson/html.png);
  }
  .lessonResource .svg{
    background-image: url(../../assets/lesson/svg.png);
  }
  .lessonResource .markdown{
    background-image: url(../../assets/lesson/markdown.png);
  }
  .lessonResource .xmind{
    background-image: url(../../assets/lesson/xmind.png);
  }

  .lessonCommont{
    margin-top: 6px;
    width: 266px;
    height: 50vh;
    border: 1px solid black;
  }
</style>
