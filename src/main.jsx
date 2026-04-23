import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
// 下面两个主题组件中的theme中的属性不要重复！
import { ThemeProvider } from 'styled-components'
import AppThemeProvider from './StyledEngineProvider'

import App from './App.jsx'
import 'normalize.css'
// 为了在styled-components中生效
import 'assets/css/index.less'
import theme from 'assets/theme/index.js'



createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div>Loading...</div>}>
    <AppThemeProvider >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AppThemeProvider>
  </Suspense>
)
