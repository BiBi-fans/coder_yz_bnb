import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */

const replaceFn = url => fileURLToPath(new URL(url, import.meta.url))

// https://vite.dev/config/ 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': replaceFn('./src'),
      'components': replaceFn('./src/components'),
      'utils': replaceFn('./src/utils'),
      'assets': replaceFn('./src/assets'),
      // 强制 MUI 使用 styled-components 适配器
      '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  },
  css: {
    // 这里是对 CSS 预处理器的配置
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 使用 additionalData 选项将全局变量注入到每个 Less 文件中
        // 如果有过多的公共样式或者混入样式建议添加mixins.less
        additionalData: `
          @import "@/assets/css/variables.less";
          @import "@/assets/css/reset.less";
        `,
      },
    },
  }
})
