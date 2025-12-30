import { useEffect, useState } from 'react'
import { registerMicroApps, start } from 'qiankun'
import styles from './App.module.less'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    registerMicroApps([
      {
        name: 'subapp1',
        entry: '//localhost:3001',
        container: '#subapp-container',
        activeRule: '/subapp1',
      },
      {
        name: 'subapp2',
        entry: '//localhost:3002',
        container: '#subapp-container',
        activeRule: '/subapp2',
      },
      {
        name: 'subapp3',
        entry: '//localhost:3003',
        container: '#subapp-container',
        activeRule: '/subapp3',
      },
      {
        name: 'subapp4',
        entry: '//localhost:3004',
        container: '#subapp-container',
        activeRule: '/subapp4',
      },
    ])

    start({
      prefetch: false,
      sandbox: {
        strictStyleIsolation: true,
      },
    })

    setLoading(false)
  }, [])

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Micro Frontend Host</h1>
        <nav className={styles.nav}>
          <a 
            onClick={() => window.history.pushState({}, '', '/')}
            className={`${styles.navLink} ${loading ? styles.loading : ''}`}
          >
            Home
          </a>
          <a
            onClick={() => window.history.pushState({}, '', '/subapp1')}
            className={`${styles.navLink} ${loading ? styles.loading : ''}`}
          >
            SubApp1
          </a>
          <a 
            onClick={() => window.history.pushState({}, '', '/subapp2')}
            className={`${styles.navLink} ${loading ? styles.loading : ''}`}
          >
            SubApp2
          </a>
          <a 
            onClick={() => window.history.pushState({}, '', '/subapp3')}
            className={`${styles.navLink} ${loading ? styles.loading : ''}`}
          >
            SubApp3 (Vue3)
          </a>
          <a 
            onClick={() => window.history.pushState({}, '', '/subapp4')}
            className={`${styles.navLink} ${loading ? styles.loading : ''}`}
          >
            SubApp4 (Vue3)
          </a>
        </nav>
      </header>
      <main className={styles.main}>
        {loading ? (
          <div className={styles.loadingContainer}>
            <p>Loading...</p>
          </div>
        ) : (
          <div id="subapp-container" className={styles.subappContainer} />
        )}
      </main>
    </div>
  )
}

export default App
