import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Test  from "./test.jsx"

const reactElement = React.createElement(
    'a',
    { href: 'https://google.com' ,target:"_blank"},
    'click tis for google',
)
createRoot(document.getElementById('root')).render(
        reactElement
)
