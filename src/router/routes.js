import React from 'react'

import RootLayout from './layout'

const routes = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: React.lazy(() => import('@/views/home')),
      },
      {
        path: 'entire',
        Component: React.lazy(() => import('@/views/entire')),
      },
      {
        path: 'detail',
        Component: React.lazy(() => import('@/views/detail')),
        // loader: () => {
        //   return { meta: { toTop: true } }
        // }
      },
      {
        path: 'demo',
        Component: React.lazy(() => import('@/views/demo')),
      },
    ],
  },
]

export default routes