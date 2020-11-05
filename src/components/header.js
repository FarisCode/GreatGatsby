import { Link } from 'gatsby'
import React from 'react'
import styles from "./header.module.scss"

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>
        <Link className={styles.title} to='/'>
          My Portfolio
        </Link>
      </h1>
      <ul className={styles.navList}>
        <li> <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/">Home</Link> </li>
        <li> <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/blog">Blog</Link> </li>
        <li> <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/about">About</Link> </li>
        <li> <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/contact">Contact</Link> </li>
      </ul>
    </div>
  )
}
