/**
 * Redux store module
 * Contains the redux store reducers
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { configureStore } from '@reduxjs/toolkit'
import rows from './reducers/rows'
import columns from './reducers/columns'
import grid from './reducers/grid'
import csscode from './reducers/css-code'

// Create a new store that stores all reducers
const store = configureStore({
  reducer: {
    rows,
    columns,
    grid,
    csscode
  }
})

export default store
