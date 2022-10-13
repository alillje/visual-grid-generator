/**
 * ColumnCalculator class, responsible for calculate the rows.
 */
export class ColumnCalculator {
  #columns
  /**
   * Creates an instance of ColumnCalculator.
   *
   * @memberof RandomColorGenerator
   */
  constructor () {
    this.#columns = undefined
  }

  /**
   * Sets an array represetation of column values based on number of rows.
   *
   * @param {number} numberOfColumns *
   */
  setColumns (numberOfColumns) {
    if (numberOfColumns > 0) {
      this.#columns = this.#addColumns(numberOfColumns)
    }
  }

  /**
   * Creates a collection of column values fro a given number of rows.
   *
   * @param {number} ammountOfColumns *
   * @returns {string[]} - Collection of columns values.
   */
  #addColumns (ammountOfColumns) {
    const columns = []
    for (let i = 0; i < ammountOfColumns; i++) {
      columns.push('1fr')
    }
    return columns
  }

  /**
   * Returns column values based on number of columns.
   *
   * @returns {string[]} - representing column values.
   */
  getColumns () {
    return this.#columns
  }
}
