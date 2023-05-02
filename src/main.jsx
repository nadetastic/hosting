import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Amplify } from 'aws-amplify'
// import config from './aws-exports'
Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:70efeb97-3df8-4ecc-b1ec-e9cbcdeea891',
    region: 'us-east-1',
    userPoolId: `us-east-1_OgI9b3GOP`,
    userPoolWebClientId: '1g3rltbnh4f1pe457d2sfeff8s',
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
