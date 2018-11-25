
const routes = [
  {
    path: '/about',
    component: () => import('pages/About.vue')
  },
  {
    path: '/thoughts',
    component: () => import('pages/Thoughts.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Thoughts/Index.vue')
      },
      {
        path: 'simple-look',
        component: () => import('pages/Thoughts/SimpleLook.vue')
      },
      {
        path: 'drops-la-seta',
        component: () => import('pages/Thoughts/DropsLaSeta.vue')
      },
      {
        path: 'south-street-diner',
        component: () => import('pages/Thoughts/SouthStreetDiner.vue')
      },
      {
        path: 'veganism',
        component: () => import('pages/Thoughts/Veganism.vue')
      },
      {
        path: 'drops-500',
        component: () => import('pages/Thoughts/DropsAfterKvinCentWords.vue')
      },
      {
        path: 'texas-too-hot',
        component: () => import('pages/Thoughts/TexasTooHot.vue')
      },
      {
        path: 'breakup',
        component: () => import('pages/Thoughts/Breakup.vue')
      },
      {
        path: 'hello-talk',
        component: () => import('pages/Thoughts/HelloTalk.vue')
      }
    ]
  },
  {
    path: '/languages',
    component: () => import('pages/Languages.vue')
  },
  {
    path: '/projects',
    component: () => import('pages/Thoughts.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Projects/Index.vue')
      },
      {
        path: 'website',
        component: () => import('pages/Projects/Website.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('pages/Home.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
