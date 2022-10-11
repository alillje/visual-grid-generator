import './css-code-displayer.css'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setViewCssCode } from '../../redux/reducers/css-code'

/**
 * CssCodeDisplayer Component.
 *
 * @param {React.ReactElement} children - The React Element to insert into the component.
 * @returns {React.ReactElement} - Layout Component.
 */
const CssCodeDisplayer = ({ children }) => {
  const dispatch = useDispatch()
  const parentCssCode = useSelector((state) => state.csscode.parentCss)
  const childrenCssCode = useSelector((state) => state.csscode.childrenCss)

  /**
   * Closes the pop up by setting state to not viewing Css Code.
   */
  const closePopUp = () => {
    console.log(parentCssCode)
    console.log(childrenCssCode)
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
                    <div className="parentCssContainer">
                      {parentCssCode ? `parent${'\n'} ${parentCssCode.replace(';', ';\n')}` : null}
                    </div>
                    <div className="childrenCssContainer">
                      {childrenCssCode ? childrenCssCode.map((child) => {
                        return child
                      }) : null}
                    </div>
                </div>
          </div>
  )
}

export default CssCodeDisplayer
