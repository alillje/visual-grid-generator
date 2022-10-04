/**
 * Redux store module
 * Contains the redux store reducers
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { configureStore } from '@reduxjs/toolkit'
import rows from './reducers/rows'
import columns from './reducers/columns'


// Create a new store that stores all reducers
const store = configureStore({
  reducer: {
    rows: rows,
    columns: columns
  }
})

export default store
