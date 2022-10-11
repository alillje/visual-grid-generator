import './css-code-displayer.css'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { setViewCssCode } from '../../redux/reducers/css-code'
// import { useSelector } from 'react-redux'

/**
 * CssCodeDisplayer Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Layout Component.
 */
const CssCodeDisplayer = ({ children }) => {
  const dispatch = useDispatch()
  //   const parentCssCode = useSelector((state) => state.csscode.parentCssCode)

  /**
   * Closes the pop up by setting state to not viewing Css Code.
   */
  const closePopUp = () => {
    dispatch(
      setViewCssCode({
        viewCssCode: false
      })
    )
  }
  return (
            <div className="cssCodeDisplayerContainer">
                <div className="cssCodeDisplayerPopup">
                    <div onClick={closePopUp} className="closeCssContainerButton">X</div>
                    <div className="parentCssContainer"></div>
                    <div className="childrenCssContainer"></div>

                </div>
          </div>
  )
}

export default CssCodeDisplayer
