import { CssColors } from './enum/colors.js'

/**
 * RandomColorGenerator class, responsible for generating a random color.
 */
export class RandomColorGenerator {
  #color

  // /**
  //  * Creates an instance of RandomColorGenerator
  //  *
  //  * @memberof RandomColorGenerator
  //  */
  // constructor () {
  //   this.#color = this.#setColor(Object.values(CssColors)[this.#getRandomNumber()])
  // }

  // /**
  //  * Sets the current color.
  //  *
  //  * @param {string} newColor - The new color to set.
  //  */
  // #setColor (newColor) {
  //   while (newColor === this.#color) {
  //     this.#color = (Object.values(CssColors)[this.#getRandomNumber()])
  //   }
  // }

  /**
   * Returns CSS code represnting a color.
   *
   * @returns {string} - The random color as CSS code.
   */
  getRandomColor () {
    const newColor = this.#randomizeColor()
    this.#color = this.#randomizeColor()
    while (newColor === this.#color) {
      this.#color = this.#randomizeColor()
    }
    return this.#color
  }

  /**
   * Returns random color.
   *
   * @returns {string} - A random color as CSS code.
   */
  #randomizeColor () {
    return Object.values(CssColors)[this.#getRandomNumber()]
  }

  /**
   * Generates a random number.
   *
   * @returns {number} A random number based on a given length.
   */
  #getRandomNumber () {
    return Math.round(Math.random() * this.#getLengthOfObjectKeyValuePairs(CssColors))
  }

  /**
   * Calculates size/length of a color object.
   *
   * @param {object} colors *
   * @returns {number} - The ammount of key/value pairs in the color object.
   */
  #getLengthOfObjectKeyValuePairs (colors) {
    let numberOfKeyValuePairs = 0
    numberOfKeyValuePairs = Object.values(colors).map(() => {
      return numberOfKeyValuePairs++
    })
    return numberOfKeyValuePairs.length
  }
}
