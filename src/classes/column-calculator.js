/**
 * ColumnCalculator class, responsible for calculate the rows.
 */
export class ColumnCalculator {
  /**
   * Creates an instance of ColumnCalculator.
   *
   * @memberof RandomColorGenerator
   */
  constructor () {
    this.columns = undefined
  }

  /**
   * Sets an array represetation of column values based on number of rows.
   *
   * @param {number} numberOfColumns - The number of rows to add.
   */
  setColumns (numberOfColumns) {
    if (numberOfColumns > 0) {
      this.columns = []
      for (let i = 0; i < numberOfColumns; i++) {
        this.columns.push('1fr')
      }
    }
  }

  /**
   * Returns column values based on number of columns.
   *
   * @returns {Array} - representing column values.
   */
  getColumns () {
    return this.columns
  }
}
