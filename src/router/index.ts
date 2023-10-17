import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
	history: createWebHashHistory('/homPHPDisplay/'),
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'Home',
			component: () => import('../views/home.vue')
		}
	]
});

export default router;
