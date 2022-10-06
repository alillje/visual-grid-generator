
export class ColumnCalculator {
  /**
   *
   */
  constructor () {
    this.columns = undefined
  }

  /**
   *
   * @param numberOfColumns
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
   *
   */
  getColumns () {
    return this.columns
  }
}
