import { ChildElementCalculator } from '../classes/child-element-calculator.js'
const childElementCalculator = new ChildElementCalculator()

// const childElementCalculator = require('../src/classes/child-element-calculator')

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

describe('Validates if html elements are removed from the DOM', () => {
  test('All child elements have been removed', () => {
    const body = document.querySelector('body')
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    body.appendChild(div)
    body.appendChild(div2)
    div.setAttribute('class', 'theTestingClass')
    div2.setAttribute('class', 'theTestingClass')
    childElementCalculator.removeChildElements('.theTestingClass')
    expect(
      body.childElementCount
    ).toBe(0)
  })
})

describe('Validates if css code can be generated from a html identifier', () => {
  test('Should get an array of css code for each html element', () => {
    const body = document.querySelector('body')
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '1 / 3 / 3 / 5'
    div.setAttribute('id', 'abc1')
    div.setAttribute('class', 'templateBox')
    const div2 = document.createElement('div')
    div2.setAttribute('id', 'abc2')
    div2.style.backgroundColor = 'rgb(153, 0, 153)'
    div2.style.gridArea = '2 / 4 / 4 / 6'
    div2.setAttribute('class', 'templateBox')
    body.appendChild(div)
    body.appendChild(div2)
    expect(
      childElementCalculator.getChildrenPositionsAsCssCode('.templateBox').length
    ).toBe(2)
  })
})

describe('Validates if an array of classnames can be generate from number of elements', () => {
  test('Should get an array of css code for each html element', () => {
    childElementCalculator.setNumberOfChildElements(3)
    expect(
      childElementCalculator.getClassNames().length
    ).toBe(3)
  })
})

describe('Validates if an array of classnames can be generate from number of elements', () => {
  test('Should get an array of css code for each html element', () => {
    childElementCalculator.setNumberOfChildElements(50)
    expect(
      childElementCalculator.getClassNames().length
    ).toBe(50)
  })
})
