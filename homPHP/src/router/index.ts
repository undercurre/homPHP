import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/home.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		}
	]
});

export default router;
