import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'
import { system } from './theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)