import { gridlify } from '../../node_modules/gridlify/lib/index.js'

/**
 * ChildElementCalculator class, responsible for calculating child element properties.
 */
export class ChildElementCalculator {
  #numberOfChildElements
  /**
   * Sets the number of child elements.
   *
   * @param {number} numberOfChildElements - The number of child elements to use when calculating.
   */
  setNumberOfChildElements (numberOfChildElements) {
    this.#numberOfChildElements = numberOfChildElements
  }

  /**
   * Sets positions for children elemnts
   * based on the number of rows and cols in the parent element grid layout
   *
   * @param {number} numberOfRows *
   * @param {number} numberOfColumns *
   */
  setChildElementCoordinates (numberOfRows, numberOfColumns) {
    let count = 0
    for (let i = 0; i < numberOfRows; i++) {
      for (let j = 0; j < numberOfColumns; j++) {
        gridlify.setPosition({ startRow: i + 1, startColumn: j + 1 }, `.${this.getClassNames()[count]}`)
        count++
      }
    }
  }

  /**
   * Creates a collection of unique class names.
   *
   * @returns {string[]} - An array of different css class names.
   */
  getClassNames () {
    const classNames = []
    for (let i = 1; i <= this.#numberOfChildElements; i++) {
      classNames.push(`child${i}`)
    }
    return classNames
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
      const htmlId = childrenElement.getAttribute('id')
      const styleAttributes = childrenElement.getAttribute('style')
      const positionCss = styleAttributes.substring(styleAttributes.length - 25)
      const childrenElementPosition = `${htmlId} { ${positionCss} }; `
      childrenElementPositions.push(childrenElementPosition)
    }
    return childrenElementPositions
  }

  /**
   * Removes a collecntion of HTML elements.
   *
   * @param {string} htmlIdentifier *
   */
  removeChildElements (htmlIdentifier) {
    for (const htmlElement of document.querySelectorAll(htmlIdentifier)) {
      htmlElement.remove()
    }
  }

  /**
   * Returns the start row position of an html element.
   *
   * @param {object} htmlElement *
   * @returns {number} - The start position of the element.
   */
  getStartRowPosition (htmlElement) {
    const allPositionValues = htmlElement.getAttribute('style').substring(11, htmlElement.getAttribute('style').length - 1)
    const startRow = allPositionValues.split('/')[0]
    return parseInt(startRow.substring(startRow.length - 2))
  }

  /**
   * Returns the start column position of an html element.
   *
   * @param {object} htmlElement *
   * @returns {number} - The start position of the element.
   */
  getStartColumnPosition (htmlElement) {
    const allPositionValues = htmlElement.getAttribute('style').substring(11, htmlElement.getAttribute('style').length - 1)
    const startColumn = allPositionValues.split('/')[1]
    return parseInt(startColumn)
  }

  /**
   * Returns the end row position of an html element.
   *
   * @param {object} htmlElement *
   * @returns {number} - The end position of the element.
   */
  getEndRowPosition (htmlElement) {
    const allPositionValues = htmlElement.getAttribute('style').substring(11, htmlElement.getAttribute('style').length - 1)
    const endRow = allPositionValues.split('/')[2]
    return parseInt(endRow)
  }

  /**
   * Returns the end column position of an html element.
   *
   * @param {object} htmlElement *
   * @returns {number} - The end position of the element.
   */
  getEndColumnPosition (htmlElement) {
    const allPositionValues = htmlElement.getAttribute('style').substring(11, htmlElement.getAttribute('style').length - 1)
    const endColumn = allPositionValues.split('/')[3]
    return parseInt(endColumn)
  }
}
