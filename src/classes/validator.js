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
   * Validates if a start value is bigger than an end value.
   *
   * @param {number} gridProperty - A property in as CSS grid layout.
   * @returns {boolean} - True if the argument is a parseble value, otherwise false.
   */
  isParseableToNumber (gridProperty) {
    return (typeof gridProperty === 'number') && !Number.isNaN(gridProperty) && Number.isInteger(gridProperty)
  }

  /**
   * Validates if a value is greater that the maximun allowed ammount value.
   *
   * @param {number} numberOfRowsOrColumns - The ammount of rows or columns.
   * @returns {boolean} - True if the argument is a parseble value, otherwise false.
   */
  isBiggerThanMaxAmmount (numberOfRowsOrColumns) {
    return numberOfRowsOrColumns > this.#maxAmmount
  }
}
