import { Outlet } from 'react-router'

import styled from './layout.module.css'
import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'


export default function RootLayout() {

  return (
    <div className={styled.app}>
      <AppHeader />
      <main className={styled.content}>
        <Outlet />
      </main>
      <AppFooter />
    </div>
  )
}
