// Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';
import AppLogo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const pages = [
        { name: 'Walkthrough', path: '/walkthrough' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav id='navBar' className={styles['navbar']}>
            <img id='applogo' className={styles.appLogo} src={AppLogo} alt='app_logo' />
            <div className={styles.navButtons}>
                {pages.map((page) => (
                    <Link
                        key={page.name}
                        to={page.path}
                        className={location.pathname === page.path ? styles['active'] : ''}
                    >
                        {page.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default React.memo(Navbar);
