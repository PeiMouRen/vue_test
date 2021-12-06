import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})