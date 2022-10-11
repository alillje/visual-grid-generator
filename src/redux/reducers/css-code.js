/**
 * Redux number of rows module.
 * Create a user slice with different actions
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { createSlice } from '@reduxjs/toolkit'
export const cssCodeSlice = createSlice({
  name: 'csscode',
  initialState: {
    viewCssCode: false,
    parentCss: null,
    childrenCss: []
  },
  reducers: {
    /**
     * Dispatched on user login and sets all state variables to values defined in the action object.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    setViewCssCode: (state, action) => {
      state.viewCssCode = action.payload.viewCssCode
    },
    /**
     * Dispatched on user login and sets all state variables to values defined in the action object.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    setParentCssCode: (state, action) => {
      state.parentCss = action.payload.parentCss
    },
    /**
     * Dispatched on user login and sets all state variables to values defined in the action object.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    setChildrenCssCode: (state, action) => {
      state.childrenCss = action.payload.childrenCss
    }

  }
})

export const { setViewCssCode, setParentCssCode, setChildrenCssCode } = cssCodeSlice.actions
export default cssCodeSlice.reducer
