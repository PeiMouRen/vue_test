import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"
import Home1 from "../pages/Home1"
import Home2 from "../pages/Home2"
import Detail from "../pages/Detail"

const router = new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            children:[
                {
                    name: 'home1',
                    path: 'home1',
                    component: Home1,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:title',
                            component: Detail,
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
                    component: Home2
                },
            ]
        },
        
    ]
})

// 配置全局前置路由守卫
router.beforeEach((to, from, next) => {
    if (to.name === 'home1' || to.name === 'home2') {
        if (localStorage.getItem('school') !== 'atguigu') {
           return;
        }
    }

    next();

})

export default router;