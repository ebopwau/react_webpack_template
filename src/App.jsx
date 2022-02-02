import React from 'react'
import  styles from './App.module.scss'
import {Title} from './components/Title.jsx'

export function App () {
    return (
        <div className={styles['example']}>
            <Title
                title={`Welcome New ${new Date().toDateString()}`}
            />
        </div>
    )
}