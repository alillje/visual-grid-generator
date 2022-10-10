import { Colors } from '../enum/colors.js'

/**
 * RandomColorGenerator class, responsible for generating a random color.
 */
export class RandomColorGenerator {
  /**
   * Returns CSS code, represning a color.
   *
   * @returns {string} - The random color as CSS code.
   */
  getRandomColor () {
    return Colors[this.getRandomNumber()]
  }

  /**
   * Generates a random number.
   *
   * @returns {number} A random number based on a given length.
   */
  getRandomNumber () {
    return Math.random() * Colors.length
  }
}
