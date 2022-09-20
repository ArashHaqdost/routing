import Link from 'next/link';

import classes from './Main-header.module.css';

function MainHeader() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">Pista Academy</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href="/events">Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;