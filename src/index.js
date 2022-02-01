import React from 'react'
import ReactDOM from 'react-dom'
import './reset.scss'
import {App} from './App'

document.addEventListener("DOMContentLoaded", () => {
    const appElement = document.getElementById('app');

    ReactDOM.render(<App />, appElement);
})
