import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

 
function MyApp() {
  return (
    <div>
      <h1>Custom app</h1>
    </div>
  )
}

const anotheElement = (
  <a href="https://google.com" target='_blank'> vixit google </a>
)


const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Visit Google'

)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
