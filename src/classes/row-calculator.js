/**
 * RowCalculator class, responsible for calculate the rows.
 */
export class RowCalculator {
  /**
   * Creates an instance of RowCalculator.
   *
   * @memberof RandomColorGenerator
   */
  constructor () {
    this.rows = undefined
  }

  /**
   * Sets an array represetation of row values based on number of rows
   *
   * @param {number} numberOfRows - The number of rows to add.
   */
  setRows (numberOfRows) {
    if (numberOfRows > 0) {
      this.rows = []
      for (let i = 0; i < numberOfRows; i++) {
        this.rows.push('1fr')
      }
    }
  }

  /**
   * Returns row values based on number of columns.
   *
   * @returns {Array} - representing row values.
   */
  getRows () {
    return this.rows
  }
}
