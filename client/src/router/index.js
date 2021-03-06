import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Auth/Login.vue'),
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Auth/Register.vue'),
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Auth/Profile.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/tests',
        name: 'Tests',
        component: () => import('../views/Auth/Tests.vue'),
        meta: {
            requiresAuth: true
        }
    },
];


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            next('/login')
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (store.getters.isLoggedIn) {
            next('/profile')
        } else {
            next();
        }
    } else {
        next()
    }
});

export default router
