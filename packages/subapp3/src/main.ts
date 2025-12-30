import { createApp } from 'vue'
import App from '@/App.vue'
import '@/index.css'

let app: any = null
let instance: any = null

function render(props: any = {}) {
  const { container } = props
  const dom = container ? container.querySelector('#root') : document.querySelector('#root')
  
  app = createApp(App)
  instance = app.mount(dom!)
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('[subapp3] bootstrap')
}

export async function mount(props: any) {
  console.log('[subapp3] mount', props)
  render(props)
}

export async function unmount(props: any) {
  console.log('[subapp3] unmount', props)
  if (app) {
    app.unmount()
    app = null
    instance = null
  }
}
