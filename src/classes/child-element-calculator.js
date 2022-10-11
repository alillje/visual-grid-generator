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
   * Creates a collection of unique class names.
   *
   * @returns {string[]} - An array of different css class names.
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
  getChildrenPositionsAsCssCode (htmlIdentifier) {
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
    for (const htmlElement of document.querySelectorAll(htmlIdentifier)) {
      htmlElement.remove()
    }
  }

  /**
   * Returns the end row position of an html element.
   *
   * @param {object} htmlElement *
   * @returns {number} - The end position of the element.
   */
  getEndRowPosition (htmlElement) {
    const endRow = htmlElement.getAttribute('style').substring(11, htmlElement.getAttribute('style').length - 1)
    return parseInt(endRow.substring(8, 9))
  }

  /**
   * Returns the end column position of an html element.
   *
   * @param {object} htmlElement *
   * @returns {number} - The end position of the element.
   */
  getEndColumnPosition (htmlElement) {
    const endColumn = htmlElement.getAttribute('style').substring(11, htmlElement.getAttribute('style').length - 1)
    console.log(endColumn.substring(12, 13))
    return parseInt(endColumn.substring(12, 13))
  }

  /**
   * Returns the start row position of an html element.
   *
   * @param {object} htmlElement *
   * @returns {number} - The start position of the element.
   */
  getStartRowPosition (htmlElement) {
    const startRow = htmlElement.getAttribute('style').substring(11, htmlElement.getAttribute('style').length - 1)
    return parseInt(startRow.substring(0, 1))
  }

  /**
   * Returns the start column position of an html element.
   *
   * @param {object} htmlElement *
   * @returns {number} - The start position of the element.
   */
  getStartColumnPosition (htmlElement) {
    const startColumn = htmlElement.getAttribute('style').substring(11, htmlElement.getAttribute('style').length - 1)
    return parseInt(startColumn.substring(4, 5))
  }
}
