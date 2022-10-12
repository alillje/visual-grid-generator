import { ColumnCalculator } from '../src/classes/column-calculator.js'
const columnCalculator = new ColumnCalculator()

describe('Validates if columns are set and can be get correctly', () => {
  test('Should be 3', () => {
    columnCalculator.setColumns(
      3
    )
    expect(
      columnCalculator.getColumns().length
    ).toBe(3)
  })
  test('Should be 8', () => {
    columnCalculator.setColumns(
      8
    )
    expect(
      columnCalculator.getColumns().length
    ).toBe(8)
  })
  test('Should be 100', () => {
    columnCalculator.setColumns(
      100
    )
    expect(
      columnCalculator.getColumns().length
    ).toBe(100)
  })
})
