import { CssColors } from './enum/colors.js'

/**
 * RandomColorGenerator class, responsible for generating a random color.
 */
export class RandomColorGenerator {
  /**
   * Returns CSS code represnting a color.
   *
   * @returns {string} - The random color as CSS code.
   */
  getRandomColor () {
    return this.#randomizeColor()
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
