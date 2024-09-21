// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/styles/normalize.css'
import '@/assets/styles/tailwind.css'
import '@/assets/styles/scroll.css'
import '@/assets/styles/font.css'
import App from './App.tsx'

export enum E_TrackerDetailType {
  点击 = 1,
  页面跳转,
  js运行错误,
  资源加载错误,
  xhr请求,
  xhr请求错误,
  fetch请求,
  fetch请求错误,
  未处理失败promise错误,
  vue错误,
  自定义行为,
}

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <App />
  // </StrictMode>,
)
