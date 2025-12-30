import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/index.css'
const Provider = React.lazy(() => import("hostapp/HostProvider"))

let root: ReactDOM.Root | null = null

function render(props: any = {}) {
  const { container } = props
  const dom = container ? container.querySelector('#root') : document.querySelector('#root')
  
  if (!root) {
    root = ReactDOM.createRoot(dom!)
  }
  
  root.render(
    <React.StrictMode>
      <React.Suspense>
        <Provider>
          <App />
        </Provider>
      </React.Suspense>
    </React.StrictMode>
  )
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('[subapp2] bootstrap')
}

export async function mount(props: any) {
  console.log('[subapp2] mount', props)
  render(props)
}

export async function unmount(props: any) {
  console.log('[subapp2] unmount', props)
  if (root) {
    root.unmount()
    root = null
  }
}
