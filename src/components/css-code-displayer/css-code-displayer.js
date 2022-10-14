import './css-code-displayer.css'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setViewCssCode } from '../../redux/reducers/css-code'

/**
 * CssCodeDisplayer Component, displays a CssCodeDisplayer.
 *
 * @returns {React.ReactElement} - CssCodeDisplayer Component.
 */
const CssCodeDisplayer = () => {
  const dispatch = useDispatch()
  const parentCssCode = useSelector((state) => state.csscode.parentCss)
  const childrenCssCode = useSelector((state) => state.csscode.childrenCss)

  /**
   * Sets the global state to not viewing Css Code.
   */
  const sendUserIsNotViewingCssToGlobalState = () => {
    dispatch(
      setViewCssCode({
        viewCssCode: false
      })
    )
  }

  return (
            <div className="cssCodeDisplayerContainer">
                <div className="cssCodeDisplayerPopup">
                  <div className="cssCodeDisplayerParentInfo">Parent Element</div>
                    <div onClick={sendUserIsNotViewingCssToGlobalState} className="closeCssContainerButton">X</div>
                    <div className="parentCssContainer">
                    <code>.parentElement </code>
                      {parentCssCode ? parentCssCode.split('\n').map((line) => {
                        return <code key={line}>{line}<br></br></code>
                      }) : null}

                    </div>
                    <div className="cssCodeDisplayerChildInfo">Child Elements</div>

                    <div className="childrenCssContainer">
                      {childrenCssCode ? childrenCssCode.map((child) => {
                        return <code key={child}>{child}<br></br></code>
                      }) : null}
                    </div>
                </div>
          </div>
  )
}

export default CssCodeDisplayer
