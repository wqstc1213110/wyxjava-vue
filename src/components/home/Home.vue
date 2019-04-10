<template>
    <!--主页-->
    <div class="home">
        <div class="rotationChart">
            我是轮播图
        </div>
        <div class="courseWrapper">
          <a href="http://www.wyxjava.com/course" v-for="data in courseList" :class="data.courseType" id="course" @click="jumpCourse(data.courseId,data.courseName)"></a>
            <!--<div ></div>-->
        </div>

        <div class="wrapper">
            <div class="wyxOther">
              <div class="seeTotal">
                浏览人次
                514264
              </div>
              <div class="wyxWebsite">
                <a href="http://www.aefjia.com">我要学python</a><br><br>
                <a href="http://www.aefjia.com">我要学web</a><br><br>
                <a href="http://www.aefjia.com">我要学前端</a><br><br>
                <a href="http://www.aefjia.com">我要学ui</a><br><br>
                <a href="http://www.aefjia.com">我要学大数据</a><br><br>
                <a href="http://www.aefjia.com">我要学人工智能</a><br><br>
              </div>
            </div>
            <div class="comment">
              评论<br>
              网站很好<br>
              网站很好1<br>
              网站很好2<br>
              网站很好3<br>
              网站很好4<br>
              网站很好5<br>
              网站很好6<br>
              网站很好7<br>
              网站很好8<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
              网站很好9<br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: '',
  data(){
    return{
      courseList:[]
    }
  },
  methods:{
    jumpCourse:function (courseId,courseName) {
      let course = this.$router.resolve({
        path:"/course",
        name: 'CourseLink',
        query:{
          courseId:courseId,
          courseName:courseName
        }
      });
      window.open(course.href);
    }
  }
  ,
  mounted(){
    this.axios.get("/course/selectCourseList.html")
      .then(data => {
        this.courseList = data.data.list;
      })
  }
}
</script>

<style scoped>
  .rotationChart{
    width: 100%;
    height: 150px;
    border: 1px solid red;
  }
  .courseWrapper{
    height: 150px;
    margin-top: 20px;
    margin-bottom: 20px;
    /*border: 1px solid black;*/
  }
  /*课程样式*/
  .home #course{
    width: 168px;
    height: 176px;
    float: left;
    margin-left: 2%;
    margin-bottom: 20px;
    border: 1px solid black;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .courseWrapper .javaSE{
    background-image: url("../../assets/home/javaSE.jpg");
  }
  .courseWrapper .dataBase{
    background-image: url("../../assets/home/dataBase.jpg");
  }
  .courseWrapper .web{
    background-image: url("../../assets/home/web.jpg");
  }
  .courseWrapper .javaEE{
    background-image: url("../../assets/home/javaEE.jpg");
  }
  .courseWrapper .project{
    background-image: url("../../assets/home/project.jpg");
  }
  .courseWrapper .payCourse{
    background-image: url("../../assets/home/payProject.jpg");
  }

  .wrapper .wyxOther{
    float: left;
    width: 20%;
    height: 100%;
    margin-left: 35px;
  }
  .wrapper .wyxOther .seeTotal{
    width: 80%;
    height: 40px;
    margin: 10px auto;
    background-color: #ff9c91;
  }
  .wrapper .comment{
    float: right;
    width: 60%;
    margin-right: 10%;
    background-color: #CCCCCC;
  }
</style>
