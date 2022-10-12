import { ChildElementCalculator } from '../src/classes/child-element-calculator.js'
const childElementCalculator = new ChildElementCalculator()

describe('Validates if end rows position values can be get correctly', () => {
  test('Should be 3', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '1 / 3 / 3 / 5'
    expect(
      childElementCalculator.getEndRowPosition(div)
    ).toBe(3)
  })
  test('Should be 6', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '2 / 6 / 6 / 7'
    expect(
      childElementCalculator.getEndRowPosition(div)
    ).toBe(6)
  })
})

describe('Validates if end column position values can be get correctly', () => {
  test('Should be 5', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '1 / 3 / 3 / 5'
    expect(
      childElementCalculator.getEndColumnPosition(div)
    ).toBe(5)
  })
  test('Should be 7', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '2 / 6 / 6 / 7'
    expect(
      childElementCalculator.getEndColumnPosition(div)
    ).toBe(7)
  })
})

describe('Validates if start row position values can be get correctly', () => {
  test('Should be 1', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '1 / 3 / 3 / 5'
    expect(
      childElementCalculator.getStartRowPosition(div)
    ).toBe(1)
  })
  test('Should be 2', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '2 / 6 / 6 / 7'
    expect(
      childElementCalculator.getStartRowPosition(div)
    ).toBe(2)
  })
})

describe('Validates if start column position values can be get correctly', () => {
  test('Should be 3', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '1 / 3 / 3 / 5'
    expect(
      childElementCalculator.getStartColumnPosition(div)
    ).toBe(3)
  })
  test('Should be 6', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '2 / 6 / 6 / 7'
    expect(
      childElementCalculator.getStartColumnPosition(div)
    ).toBe(6)
  })
})
