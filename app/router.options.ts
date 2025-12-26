import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig> {
    routes: (_routes) => [
        {
            name: 'main',
            path: '/',
            component: () => import('~/app/pages/index.vue')
        },
        {
            name: 'estateList',
            path: '/estate/',
            component: () => import('~/features/estate/pages/index.vue'),
        },
        {
            name: 'estateItem',
            path: '/estate/:estateId',
            component: () => import('~/features/estate/pages/[estateId].vue'),
            props: true,
        },
    ],
};
