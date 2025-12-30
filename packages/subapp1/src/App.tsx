import React from 'react'
import styles from './App.module.less'
import { useTest } from "hostapp/HostProvider";
import { Button } from "./Button";

const Subapp2SharedComp = React.lazy(() => import("subapp2/Subapp2SharedComp"))
const HostAppComp = React.lazy(() => import("hostapp/HostSharedComp"))

function App() {
  const test = useTest();
  return (
    <div className={styles.container}>
      <h2>Welcome to SubApp1 {test.test}</h2>
      <Button />
      <React.Suspense>
        <Subapp2SharedComp />
      </React.Suspense>
      <React.Suspense>
        <HostAppComp />
      </React.Suspense>
      <p>
        This is the first micro-frontend application in the qiankun architecture.
        It is running independently and can be loaded by the host application.
      </p>
      <div className={styles.featureBox}>
        <h3>Features:</h3>
        <ul>
          <li>Independent development and deployment</li>
          <li>Technology stack freedom</li>
          <li>Isolated runtime environment</li>
          <li>Seamless integration with host app</li>
        </ul>
      </div>
    </div>
  )
}

export default App
