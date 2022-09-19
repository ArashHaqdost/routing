import Link from 'next/link';

import styles from './Button.module.css'
function Button(props) {
  return (
        <Link href={props.link}>
            <a className={styles.Button}>
                {props.children}
            </a></Link>
  )
}

export default Button