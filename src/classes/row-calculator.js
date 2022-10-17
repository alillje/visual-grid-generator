/**
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

/**
 * RowCalculator class, responsible for calculate row values.
 */
export class RowCalculator {
  #rows
  /**
   * Creates an instance of RowCalculator.
   *
   * @memberof RandomColorGenerator
   */
  constructor () {
    this.#rows = undefined
  }

  /**
   * Sets an array represetation of row values based on number of rows.
   *
   * @param {number} numberOfRows - The number of rows to set.
   */
  setRows (numberOfRows) {
    if (numberOfRows > 0) {
      this.#rows = this.#addRows(numberOfRows)
    }
  }

  /**
   * Creates a collection of row values fro a given number of rows.
   *
   * @param {number} ammountOfRows - The number of rows to add.
   * @returns {string[]} - Collection of row values.
   */
  #addRows (ammountOfRows) {
    const rows = []
    for (let i = 0; i < ammountOfRows; i++) {
      rows.push('1fr')
    }
    return rows
  }

  /**
   * Returns row values based on number of columns.
   *
   * @returns {Array} - representing row values.
   */
  getRows () {
    return this.#rows
  }
}
