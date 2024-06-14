import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <Link to="/walkthrough/page-1">Page 1</Link>
            <Link to="/walkthrough/page-2">Page 2</Link>
            <Link to="/walkthrough/page-3">Page 3</Link>
        </aside>
    );
}

export default Sidebar;
