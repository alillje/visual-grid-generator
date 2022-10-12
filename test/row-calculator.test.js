import { RowCalculator } from '../src/classes/row-calculator.js'
const rowCalculator = new RowCalculator()

describe('Validates if rows are set and can be get correctly', () => {
  test('Should be 3', () => {
    rowCalculator.setRows(
      3
    )
    expect(
      rowCalculator.getRows().length
    ).toBe(3)
  })
  test('Should be 8', () => {
    rowCalculator.setRows(
      8
    )
    expect(
      rowCalculator.getRows().length
    ).toBe(8)
  })
  test('Should be 100', () => {
    rowCalculator.setRows(
      100
    )
    expect(
      rowCalculator.getRows().length
    ).toBe(100)
  })
})
