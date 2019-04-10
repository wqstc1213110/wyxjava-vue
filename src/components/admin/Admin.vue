<template>
    <div class="admin">
      <div class="wrapper-left">
        <div class="selectCourseBox">
          <Select v-model="courseId"  class="selectCourse">
            <Option v-for="(data,i) in courseList" :value="data.courseId" :key="i">{{data.courseName}}</Option>
          </Select>
        </div>
        <div class="selectCourseBody">

        </div>
      </div>
      <div class="wrapper-right">
        <form action="http://localhost:8001/wyxjava/upload/uploadFiles.html" enctype="multipart/form-data">
                    <!--课程名-->
          <input class="courseTitle" type="text" placeholder="课程标题" :value="courseId"><br>

          <div class="video">视频</div>
          <input class="courseVideo" name="video" value="" type="file"><br>

          <div class="html">Html</div>
          <input class="courseHtml" name="html" value="" type="file"><br>

          <div class="svg">Svg</div>
          <input class="courseSvg" name="svg" value="" type="file"><br>

          <div class="markdown">Markdown</div>
          <input class="courseMarkdown" name="markdown" value="" type="file"><br>

          <div class="xmind">Xmind</div>
          <input class="courseXmind" name="xmind" value="" type="file"><br>

          <br>
          <br>
          <Upload
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>Click or drag files here to upload</p>
            </div>
          </Upload>

          <button @click.prevent="submit">提交</button>

          <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="1048576"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            multiple
            type="drag"
            action="//jsonplaceholder.typicode.com/posts/"
            style="display: inline-block;width:58px;">
            <div style="width: 58px;height:58px;line-height: 58px;">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
          <Modal title="View Image" v-model="visible">
            <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
          </Modal>
        </form>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Admin.vue',
    data(){
      return{
        courseId: '',
        courseList:[]
      }
    },
    //钩子函数，挂载前执行
    mounted:function(){
      this.axios.get("/course/selectCourseList.html")
        .then((data) => {
          this.courseList = data.data.list;
        })
    },
    watch:{
    },
    methods: {
    }
  }
</script>

<style scoped>
  /*左半边*/
  .wrapper-left{
    width: 30%;
    float: left;
    border: 1px solid black;
  }
  /*选择框的box*/
  .selectCourseBox{
    width: 200px;
  }
  /*课程body*/
  .selectCourseBody{
    width: 100%;
    height: 500px;
    border:2px solid green;
  }
  /*右半边*/
  .wrapper-right{
    float: right;
    width: 60%;
    height: 100%;
    border: 1px solid red;
  }

  ul li{
    height: 30px;
  }

  .courseTitle,
  .courseVideo,
  .courseHtml,
  .courseSvg,
  .courseMarkdown,
  .courseXmind{
    /*display: block;*/
    width: 300px;
    height: 30px;
    margin-left: 20px;
    margin-top: 20px;
    border: 1px solid black;
    text-align: left;
  }
  .courseTitle{

  }
  .courseVideo{

  }
  .video{
    display: inline-block;
  }
  .courseHtml{

  }
  .html{
    display: inline-block;
  }
  .courseSvg{

  }
  .svg{
    display: inline-block;
  }
  .courseMarkdown{

  }
  .markdown{
    display: inline-block;
  }
  .courseXmind{

  }
  .xmind{
    display: inline-block;
  }
</style>
