import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
        {
            path: '/akun',
            component: () => import('../views/Akun.vue')
        },
        {
            path: '/saldo',
            component: () => import('../views/Saldo.vue')
        },
        {
            path: '/search',
            component: () => import('../views/Search.vue')
        },
        {
            path: '/menu',
            component: () => import('../views/menu.vue')
        },
	],
})

export default router