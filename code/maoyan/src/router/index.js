//配置路由

//vue2的?
// import vue from 'vue'
// import VueRouter from 'vue-router'

//vue3的
import { createRouter,createWebHashHistory,createWebHistory } from "vue-router";


//引入组件（还没实现）

// changku那边的引入组件，引入home，index有什么用？
// import Home from '../views/HomeView.vue'
// import Index from '../views/IndexView.vue'

//路由映射对象
const routes=[
    {
        // 路由路径
        path:'/',
        redirect: '/home',
        component:()=>import('../pages/HomePage.vue')
    },
   {
         path:'/films',
        //路由懒加载
        component:()=>import('../pages/FilmsPage.vue')
    }, {
        // 路由路径
        path:'/cinemas',
        component:()=>import('../pages/CinemasPage.vue')
    }, {
        // 路由路径
        path:'/board',
        component:()=>import('../pages/BoardPage.vue')
    }, {
        // 路由路径
        path:'/news',
        component:()=>import('../pages/NewsPage.vue')
    }, {
        // 路由路径
        path:'/edimall',
        component:()=>import('../pages/EdimallPage.vue')
    },
]

// 创建路由实例对象
const router=createRouter({
    routes,
    history:createWebHashHistory()
})

export default router