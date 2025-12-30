import React from 'react'
import styles from './App.module.less'
import { useTest } from "hostapp/HostProvider";

const Subapp1SharedComp = React.lazy(() => import("subapp1/Subapp1SharedComp"))
const HostSharedComp = React.lazy(() => import("hostapp/HostSharedComp"))
const Subapp1Button = React.lazy(() => import("subapp1/Subapp1Button").then((module) => ({ default: module.Button })))

function App() {
  const test = useTest()
  return (
    <div className={styles.container}>
      <h2>Welcome to SubApp2 {test.test}</h2>
      <React.Suspense>
        <Subapp1SharedComp />
      </React.Suspense>
      <React.Suspense>
        <HostSharedComp />
      </React.Suspense>
      <React.Suspense>
        <Subapp1Button />
      </React.Suspense>
      <p>
        This is second micro-frontend application in the qiankun architecture.
        Like SubApp1, it runs independently and can be loaded by host application.
      </p>
      <div className={styles.featureBox}>
        <h3>Benefits:</h3>
        <ul>
          <li>Independent version management</li>
          <li>Team autonomy in development</li>
          <li>Reduced build time</li>
          <li>Easy to add or remove micro-apps</li>
        </ul>
      </div>
      <div className={styles.counterBox}>
        <h3>Counter Demo:</h3>
        <Counter />
      </div>
    </div>
  )
}

function Counter() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <p className={styles.countDisplay}>
        Current count: <strong>{count}</strong>
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className={`${styles.button} ${styles.increment}`}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(0)}
        className={`${styles.button} ${styles.reset}`}
      >
        Reset
      </button>
    </div>
  )
}

export default App
