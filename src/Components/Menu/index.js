import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles.module.css';

const Menu = () => {
  return (
    <>
        <h2 className={styles.homeContainer}> TEST </h2>
        <nav className={ styles.menu }>
            <Link to="/" className={ styles.menuItem }> Home </Link>
            <Link to="/add" className={styles.menuItem}> Add </Link>
            <Link to="/update" className={styles.menuItem}> Update </Link>
            <Link to="/delete" className={styles.menuItem}> Delete </Link>
        </nav>
    </>
  );
};

export default Menu;