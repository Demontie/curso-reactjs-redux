import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import cfgStore from './store'
import { Provider } from 'react-redux'

//cfgStore Agrupa todos os reducers
const store = cfgStore()

//Provider responsavel por conectar todos os componentes

//container responsavel agrupa varios componentes se necessario

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))

registerServiceWorker();
