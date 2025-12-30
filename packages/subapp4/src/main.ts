import { createApp } from 'vue';
import App from '@/App.vue';

let app: any = null;

// 渲染应用函数
function render(props: any = {}) {
  const { container } = props;
  // 如果是在qiankun环境下，容器是props.container，否则是document
  const dom = container ? container.querySelector('#app') : document.querySelector('#app');
  
  app = createApp(App);
  app.mount(dom);
}

// 如果不是在qiankun环境下，直接渲染
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

// 导出qiankun生命周期钩子
export async function bootstrap() {
  console.log('[subapp4] bootstrap');
}

export async function mount(props: any) {
  console.log('[subapp4] mount', props);
  render(props);
}

export async function unmount(props: any) {
  console.log('[subapp4] unmount', props);
  if (app) {
    app.unmount();
    app = null;
  }
}
