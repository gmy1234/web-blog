import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: resolve => require(["../views/home/home.vue"], resolve)
    },
    {
        path: "/articles/:articleId",
        component: resolve => require(["../views/article/article.vue"], resolve)
    },
]


const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router