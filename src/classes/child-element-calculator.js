export class ChildElementCalculator {
  #numberOfChildElements

  /**
   *
   * @param numberOfChildElements
   */
  setNumberOfChildElements (numberOfChildElements) {
    this.#numberOfChildElements = numberOfChildElements
  }

  /**
   *
   */
  getClassNameArray () {
    const classNameArray = []
    for (let i = 1; i <= this.#numberOfChildElements; i++) {
      classNameArray.push(`child${i}`)
    }
    return classNameArray
  }

  /**
   * Responsible for looking at a collection of HTML elements and their
   * positions in a grid layout.
   *
   * @param {string} htmlIdentifier *
   * @returns {string[]} - All representations of the CSS code corresponding to the elements.
   */
  getChildrenPositionsAssCssCode (htmlIdentifier) {
    const childrenElementPositions = []
    for (const childrenElement of document.querySelectorAll(htmlIdentifier)) {
      const identifier = childrenElement.getAttribute('id')
      const styleAttributes = childrenElement.getAttribute('style')
      const positionCss = styleAttributes.substring(styleAttributes.length - 25)
      const childrenElementPosition = `${identifier} { ${positionCss} }; `
      childrenElementPositions.push(childrenElementPosition)
    }
    return childrenElementPositions
  }

  /**
   * Responsible for removing a collecntion of HTML elements.
   *
   * @param {string} htmlIdentifier *
   */
  removeChildElements (htmlIdentifier) {
    for (const htmlElement of document.querySelectorAll('.templateBox')) {
      htmlElement.remove()
    }
  }
}
