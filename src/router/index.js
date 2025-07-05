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
            path: '/checkout',
            component: () => import('../views/checkout.vue')
        },
        {
            path: '/search',
            component: () => import('../views/Search.vue')
        },
        {
            path: '/produk',
            component: () => import('../views/produk.vue')
        },
                {
            path: '/keranjang',
            component: () => import('../views/Keranjang.vue')
        },
                {
            path: '/login',
            component: () => import('../views/login.vue')
        },
                {
            path: '/register',
            component: () => import('../views/register.vue')
        },
                {
            path: '/riwayat-transaksi',
            component: () => import('../views/riwayat-transaksi.vue')
        },
        {
            path: '/settings',
            component: () => import('../views/settings.vue')
        },
        {
            path: '/contact',
            component: () => import('../views/contact.vue')
        },
         {
            path: '/konfirmasi-order',
            component: () => import('../views/konfirmasi-order.vue')
        },
	],
})

export default router