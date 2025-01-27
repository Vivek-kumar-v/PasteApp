import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  { Toaster } from 'react-hot-toast';
import './index.css'
import { store } from './store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Toaster />
      <App />
    </Provider>
  </StrictMode>,
)
