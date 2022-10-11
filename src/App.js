import * as React from 'react'
import './App.css'
import Layout from './components/layout/layout'
import GridContainer from './components/grid-container/grid-container'

/**
 * The starting point for the application.
 *
 * @returns {React.ReactElement} - App Component.
 */
function App () {
  return (
    <Layout><GridContainer /></Layout>
  )
}

export default App
