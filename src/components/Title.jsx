import React from "react";
import styles from './Title.module.scss'

export const Title = (props) => {
    return (
        <h1 className={styles['title']}>{props.title}</h1>
    )
}