import React from 'react'
import styles from './NotFoundBlock.module.scss'
const NotFoundBlock = () => {
    console.log(styles);
    return (
      
        <div className={styles.root}>
            <h1 >
                Error 404!!! 
            </h1><br />
           <b className={styles.description}>Empty page!</b>
        </div>
    );
}

export default NotFoundBlock;
