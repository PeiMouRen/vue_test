import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"
import Home1 from "../pages/Home1"
import Home2 from "../pages/Home2"
import Detail from "../pages/Detail"

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
            meta:{title: 'about'}
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: {title: 'home'},
            children:[
                {
                    name: 'home1',
                    path: 'home1',
                    component: Home1,
                    meta: {isAuth: true, title: 'home1'},
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: {title: 'detail'},
                            props(route) {
                                return {
                                    id: route.params.id,
                                    title: route.params.title
                                }
                            }
                        }
                    ]
                },
                {
                    name: 'home2',
                    path: 'home2',
                    component: Home2,
                    meta: {isAuth: true, title: 'home2'},
                    // beforeEnter(to, from, next) {
                    //     console.log(to, from, next)
                    //     if (localStorage.getItem('school') === 'atguigu') {
                    //         next();
                    //     }
                    // }
                },
            ]
        },
        
    ]
})

// 配置全局前置路由守卫
// router.beforeEach((to, from, next) => {
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') !== 'atguigu') {
//            return;
//         }
//     }

//     next();

// })

// router.afterEach((to, from) => {
//     console.log(from)
//     document.title = to.meta.title || '硅谷系统'
// })

export default router;