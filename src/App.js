import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import store from '@/store'
import { Provider } from 'react-redux'

import routes from './router'

import Header from '@/component/app-header'
import Footer from '@/component/app-footer'

import { HashRouter as Router } from 'react-router-dom'
export default memo(function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        {renderRoutes(routes)}
        <Footer />
      </Router>
    </Provider>
  )
})

