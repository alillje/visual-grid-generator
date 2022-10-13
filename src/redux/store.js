/**
 * Redux store module
 * Redux is used to store common state values shared by the different components in the application.
 * Contains the redux store reducers
 * https://redux-toolkit.js.org/usage/usage-guide
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { configureStore } from '@reduxjs/toolkit'
import rows from './reducers/rows'
import columns from './reducers/columns'
import gridReset from './reducers/grid'
import csscode from './reducers/css-code'

const store = configureStore({
  reducer: {
    rows,
    columns,
    gridReset,
    csscode
  }
})

export default store
