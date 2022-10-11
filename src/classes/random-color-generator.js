import { CssColors } from './enum/colors.js'

/**
 * RandomColorGenerator class, responsible for generating a random color.
 */
export class RandomColorGenerator {
  #color

  /**
   * Creates an instance of RandomColorGenerator
   *
   * @memberof RandomColorGenerator
   */
  constructor () {
    this.#color = this.#setColor(Object.values(CssColors)[this.#getRandomNumber()])
  }

  /**
   * Returns CSS code, represning a color.
   *
   * @returns {string} - The random color as CSS code.
   */
  getRandomColor () {
    this.#setColor(Object.values(CssColors)[this.#getRandomNumber()])
    return this.#color
  }

  /**
   * Sets the current color.
   *
   * @param {*} newColor - The new color to set.
   */
  #setColor (newColor) {
    while (this.#color !== newColor) {
      this.#color = newColor
    }
  }

  /**
   * Generates a random number.
   *
   * @returns {number} A random number based on a given length.
   */
  #getRandomNumber () {
    return Math.round(Math.random() * this.#getLengthOfObjectKeyAndValues(CssColors))
  }

  /**
   * Calculates size/length of a Javascript object.
   *
   * @param {object} object - Javascript object to calculate size/length of
   * @returns {number} - The ammount of key/value pairs in object.
   */
  #getLengthOfObjectKeyAndValues (object) {
    let numberOfKeyValuePairs = 0
    numberOfKeyValuePairs = Object.values(object).map(() => {
      return numberOfKeyValuePairs++
    })
    return numberOfKeyValuePairs.length
  }
}
