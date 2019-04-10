import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Admin from '@/components/admin/Admin'
// head
import Header from '@/components/header/Header'
import Mall from '@/components/mall/Mall'
// mall的二级路由
import Book from '@/components/mall/Book'
import Hardware from '@/components/mall/Hardware'
import Software from '@/components/mall/Software'
import RehabilitationGuide from '@/components/mall/RehabilitationGuide'

import Website from '@/components/website/Website'
import Login from '@/components/login/Login'
import News from '@/components/news/News'
import AboutUs from '@/components/aboutUs/AboutUs'
import Course from '@/components/course/Course'
import Lesson from '@/components/lesson/Lesson'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HomeLink', component: Home},
    {path: '/admin/root', name: 'AdminLink', component: Admin},
    {path: '/header', name: 'HeaderLink', component: Header},
    {path: '/mall', name: 'MallLink', component: Mall, redirect:"/mall/book",children:[
        {path: '/mall/book', name: 'BookLink', component: Book},
        {path: '/mall/hardware', name: 'HardwareLink', component: Hardware},
        {path: '/mall/software', name: 'SoftwareLink', component: Software},
        {path: '/mall/rehabilitationGuide', name: 'RehabilitationGuideLink', component: RehabilitationGuide},
      ]},
    {path: '/website', name: 'WebsiteLink', component: Website},
    {path: '/login', name: 'LoginLink', component: Login},
    {path: '/news', name: 'NewsLink', component: News},
    {path: '/aboutUs', name: 'AboutUsLink', component: AboutUs},
    {path: '/course', name: 'CourseLink', component: Course},
    {path: '/lesson', name: 'LessonLink', component: Lesson},
  ]
})
