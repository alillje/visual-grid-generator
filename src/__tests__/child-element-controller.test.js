import { ChildElementController } from '../classes/child-element-controller.js'
const childElementController = new ChildElementController()

describe('Validates if end rows position values can be get correctly', () => {
  test('Should be 3', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '1 / 3 / 3 / 5'
    expect(
      childElementController.getEndRowPosition(div)
    ).toBe(3)
  })
  test('Should be 6', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '2 / 6 / 6 / 7'
    expect(
      childElementController.getEndRowPosition(div)
    ).toBe(6)
  })
})

describe('Validates if end column position values can be get correctly', () => {
  test('Should be 5', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '1 / 3 / 3 / 5'
    expect(
      childElementController.getEndColumnPosition(div)
    ).toBe(5)
  })
  test('Should be 7', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '2 / 6 / 6 / 7'
    expect(
      childElementController.getEndColumnPosition(div)
    ).toBe(7)
  })
})

describe('Validates if start row position values can be get correctly', () => {
  test('Should be 1', () => {
    const div = document.createElement('div')
    div.style.gridArea = '1 / 3 / 3 / 5'
    expect(
      childElementController.getStartRowPosition(div)
    ).toBe(1)
  })
  test('Should be 2', () => {
    const div = document.createElement('div')
    div.style.gridArea = '2 / 6 / 6 / 7'
    expect(
      childElementController.getStartRowPosition(div)
    ).toBe(2)
  })
})

describe('Validates if start column position values can be get correctly', () => {
  test('Should be 3', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '1 / 3 / 3 / 5'
    expect(
      childElementController.getStartColumnPosition(div)
    ).toBe(3)
  })
  test('Should be 6', () => {
    const div = document.createElement('div')
    div.style.backgroundColor = 'rgb(153, 0, 153)'
    div.style.gridArea = '2 / 6 / 6 / 7'
    expect(
      childElementController.getStartColumnPosition(div)
    ).toBe(6)
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
      childElementController.getChildrenPositionsAsCssCode('.templateBox').length
    ).toBe(2)
  })
})

describe('Validates if an array of classnames can be generate from number of elements', () => {
  test('Should get an array of css code for each html element', () => {
    childElementController.setNumberOfChildElements(3)
    expect(
      childElementController.getClassNames().length
    ).toBe(3)
  })
})

describe('Validates if an array of classnames can be generate from number of elements', () => {
  test('Should get an array of css code for each html element', () => {
    childElementController.setNumberOfChildElements(50)
    expect(
      childElementController.getClassNames().length
    ).toBe(50)
  })
})

describe('Validates if child element coordinates are set correctly', () => {
  const body = document.querySelector('body')
  for (let i = 1; i <= 25; i++) {
    const div = document.createElement('div')
    div.setAttribute('class', `child${i}`)
    body.appendChild(div)
  }
  childElementController.setNumberOfChildElements(25)
  childElementController.setChildElementCoordinates(5, 5)
  test('Should position an html element', () => {
  })
  expect(
    document.querySelector('.child1').outerHTML
  ).toBe('<div class="child1" style="grid-row: 1 / 1; grid-column: 1 / 1;"></div>')
})

describe('Validates if html elements are removed from the DOM', () => {
  test('All child elements have been removed', () => {
    document.body.innerHTML = ''
    const body = document.querySelector('body')
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    body.appendChild(div)
    body.appendChild(div2)
    div.setAttribute('class', 'theTestingClass')
    div2.setAttribute('class', 'theTestingClass')
    childElementController.removeChildElements('.theTestingClass')
    expect(
      body.childElementCount
    ).toBe(0)
  })
})
