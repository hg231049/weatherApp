import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 깃허브 레포지토리 이름을 여기에 적어주세요. 
  // 앞뒤로 슬래시(/)를 꼭 붙여야 합니다!
  base: '/weatherapp/', 
})