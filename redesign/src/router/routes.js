
const routes = [
  {
    path: '/about',
    component: () => import('pages/About.vue')
  },
  {
    path: '/thoughts',
    component: () => import('pages/Thoughts.vue')
  },
  {
    path: '/languages',
    component: () => import('pages/Languages.vue')
  },
  {
    path: '/projects',
    component: () => import('pages/Projects.vue')
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
