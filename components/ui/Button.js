import Link from 'next/link';

import styles from './Button.module.css'
function Button(props) {
  if(props.link){
    return (
      <Link href={props.link}>
          <a className={styles.Button}>
              {props.children}
          </a></Link>
)
  }
  return (
    <button className={styles.Button} onClick={props.onClick} >
            {props.children}
    </button >
)
}

export default Button