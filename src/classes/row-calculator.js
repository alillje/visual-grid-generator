

export class RowCalculator {
    constructor() {
        this.rows = undefined
    }

    setRows(numberOfRows) {
        if (numberOfRows > 0) {
            this.rows = []
        for (let i = 0; i < numberOfRows; i++) {
          this.rows.push('1fr')
        }
      }
      }

      getRows() {
        return this.rows;
      }
}