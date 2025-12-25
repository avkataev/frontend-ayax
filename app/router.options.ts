import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig> {
    routes: (_routes) => [
        {
            name: 'main',
            path: '/',
            component: () => import('~/app/pages/index.vue')
        },
        {
            name: 'Test',
            path: '/estate/',
            component: () => import('~/features/estate/pages/index.vue')
        }
    ],
};
