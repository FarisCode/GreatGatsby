import React from 'react'
import Footer from './footer'
import Header from './header'
import '../styles/index.scss'
import styles from './layout.module.scss'

export default function layout(Component) {
  //have to return a component
  return () => (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <Component />
      </div>
      <Footer />
    </div>
  )
}
