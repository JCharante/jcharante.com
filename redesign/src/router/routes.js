
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Home.vue')
      },
      {
        path: 'projects',
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
        path: 'thoughts',
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
            path: 'hello-talk',
            component: () => import('pages/Thoughts/HelloTalk.vue')
          },
          {
            path: 'hello-talk-du',
            component: () => import('pages/Thoughts/HelloTalkDu.vue')
          },
          {
            path: 'hello-talk-tri',
            component: () => import('pages/Thoughts/HelloTalkTri.vue')
          },
          {
            path: 'hello-talk-kvar',
            component: () => import('pages/Thoughts/HelloTalkKvar.vue')
          },
          {
            path: 'hello-talk-kvin',
            component: () => import('pages/Thoughts/HelloTalkKvin.vue')
          },
          { path: '190108', component: () => import('pages/Thoughts/190108.vue') },
          { path: '190110', component: () => import('pages/Thoughts/190110.vue') },
          { path: '190205', component: () => import('pages/Thoughts/190205.vue') },
          { path: '190206', component: () => import('pages/Thoughts/190206.vue') }
        ]
      },
      {
        path: 'about',
        component: () => import('pages/About.vue')
      }
    ]
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
