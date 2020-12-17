import App from './components'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, AuthProvider } from 'context'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={{ tasks: [], filter: 'all', query: '' }}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
