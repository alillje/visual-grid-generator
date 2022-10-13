/**
 * Redux csscode module.
 * Create a user slice with different actions
 * https://redux-toolkit.js.org/api/createslice
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
     * Sets the global state for if the user has choosen to view the CSS code.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    setViewCssCode: (state, action) => {
      state.viewCssCode = action.payload.viewCssCode
    },
    /**
     * Sets the global state for the parent element CSS code.
     *
     * @param {object} state - Redux state object.
     * @param {object} action - Object containing the different state values to be set.
     */
    setParentCssCode: (state, action) => {
      state.parentCss = action.payload.parentCss
    },
    /**
     * Sets the global state for the children element CSS code.
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
