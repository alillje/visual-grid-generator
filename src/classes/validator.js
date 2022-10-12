export class Validator {
  /**
   * Validates if an html element has already been selected.
   *
   * @param {object} htmlElement *
   * @returns {boolean} - True if html element has already been selected, other false.
   */
  isAlreadySelected (htmlElement) {
    return htmlElement.getAttribute('class') === 'templateBox'
  }

  /**
   * Validates if a start value is bigger than an end value.
   *
   * @param {number} startPosistion *
   * @param {number} endPosition *
   * @returns {boolean} - True if start positin is bigger than end position.
   */
  endIsLessThanStartValue (startPosistion, endPosition) {
    return startPosistion > endPosition
  }
}
