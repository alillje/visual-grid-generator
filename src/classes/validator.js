/**
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

/**
 * Validator class, responsible for validating various values.
 */
export class Validator {
  #maxAmmount

  /**
   * Creates an instance of Validator.
   *
   * @param {number} maxAmmount *
   */
  constructor (maxAmmount) {
    this.#maxAmmount = maxAmmount
  }

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

  /**
   * Validates if a grid property value is parseable to an integer.
   *
   * @param {number} gridProperty - A property in as CSS grid layout.
   * @throws {Error} *
   */
  isParseableToNumber (gridProperty) {
    if (typeof gridProperty !== 'number' || Number.isNaN(gridProperty) || !Number.isInteger(gridProperty)) {
      throw new Error('Only integer values are allowed')
    }
  }

  /**
   * Validates if a grid property value is positive.
   *
   * @param {number} gridProperty - A property in as CSS grid layout.
   * @throws {Error} *
   */
  isPositive (gridProperty) {
    if (gridProperty < 1) {
      throw new Error('Only positve values are allowed')
    }
  }

  /**
   * Validates if a grid property value is not negative.
   *
   * @param {number} gridProperty - A property in as CSS grid layout.
   * @throws {Error} *
   */
  isNotNegative (gridProperty) {
    if (gridProperty < 0) {
      throw new Error('No negative values are allowed')
    }
  }

  /**
   * Validates if a value is greater that the maximun allowed ammount value.
   *
   * @param {number} numberOfRowsOrColumns - The ammount of rows or columns.
   * @throws {Error} *
   */
  isBiggerThanMaxAmmount (numberOfRowsOrColumns) {
    if (numberOfRowsOrColumns > this.#maxAmmount) {
      throw new Error(`Number of rows and columns can only be set to a maximum of ${this.#maxAmmount}`)
    }
  }

  /**
   * Validates if the area can be selected.
   *
   * @param {object} htmlElement *
   * @returns {boolean} - True if html element is a selectable area, other false.
   */
  isSelectableArea (htmlElement) {
    return htmlElement.getAttribute('class').substring(0, 7) === 'gridBox'
  }
}
