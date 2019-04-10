<template>
    <div class="course">
      <!--课程简介-->
      <div class="courseWrapper">
        <!--背景图片-->
        <div class="pic">
          {{introduction.coursePic}}
        </div>
        <!--简介-->
        <div class="courseIntroduction">
          <div class="introduction">
            <strong>本章简介：</strong>
            {{introduction.introduction}}
          </div>
          <div class="teacher">
            <strong>本章讲师：</strong>
            {{introduction.teacher}}
          </div>
          <div class="courseTotal">
            <strong>课时总数：</strong>
            {{introduction.courseTotal}}
          </div>
          <div class="ggGroup">
            <strong>QQ交流群：</strong>
            {{introduction.qqGroup}}
          </div>
        </div>
      </div>
      <!--课程列表-->
      <div class="courseList">
        <Table stripe border :columns="columns" :data="courseList" @on-row-click="jumpLesson"></Table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
              courseId:this.$route.query.courseId,
              courseName:this.$route.query.courseName,
              introduction:{},
              columns:[
                {title:'序号',type:'index',align:'center',width:100},
                {title:'课程名',key:'courseName',align:'center'},
                {title:'课程时长',key:'courseTime',align:'center',width:150}
              ],
              courseList:[]
            }
        },
        methods:{
          jumpLesson:function (data) {
            let course = this.$router.resolve({
              path:"/lesson",
              name: 'LessonLink',
              query:{
                courseId:this.courseId,
                courseName:this.courseName,
                lessonId:data.id
              }
            });
            window.open(course.href);
          }
        },
        mounted:function () {
          /*获取课程简介*/
          this.axios.get("/course/selectCourseIntroduction.html",{
            params:{
              id:this.courseId
            }
          })
            .then(data => {
              this.introduction = data.data.msg;
            })
          /*获取课程详细信息*/
          this.axios.get("/course/selectCourseDetailsList.html",{
            params:{
              id:this.courseId
            }
          })
            .then(data => {
              this.courseList = data.data.list;
            })
        }
    }
</script>

<style scoped>
  .courseWrapper{
    width: 700px;
    height: 176px;
    /*border: 1px solid black;*/
  }
  .pic{
    float: left;
    width: 168px;
    height: 176px;
    background-image: url("../../assets/home/javaSE.jpg");
  }
  .courseIntroduction{
    float: right;
    width: 520px;
    height: 176px;
  }
  .introduction{
    text-align: left;
    height: 40%;
  }
  .teacher,
  .courseTotal,
  .ggGroup{
    text-align: left;
    height: 20%;
  }

  .courseList{
    border: 1px solid black;
  }
</style>
