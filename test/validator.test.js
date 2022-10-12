import { Validator } from '../src/classes/validator.js'
const validator = new Validator(15)

describe('Validates if a given ammount is bigger than the given max value (15)', () => {
  test('Should return false', () => {
    expect(
      validator.isBiggerThanMaxAmmount(
        3
      )
    ).toBe(false)
  })
  test('Should return false', () => {
    expect(
      validator.isBiggerThanMaxAmmount(
        3
      )
    ).toBe(false)
  })
  test('Should return true', () => {
    expect(
      validator.isBiggerThanMaxAmmount(
        16
      )
    ).toBe(true)
  })
  test('Should return true', () => {
    expect(
      validator.isBiggerThanMaxAmmount(
        200
      )
    ).toBe(true)
  })
})

describe('Validates if input is parseable to an integer', () => {
  test('Should return true', () => {
    expect(
      validator.isParseableToNumber(
        3
      )
    ).toBe(true)
  })
  test('Should return true', () => {
    expect(
      validator.isParseableToNumber(
        3
      )
    ).toBe(true)
  })
  test('Should return false', () => {
    expect(
      validator.isParseableToNumber(
        NaN
      )
    ).toBe(false)
  })
  test('Should return false', () => {
    expect(
      validator.isParseableToNumber(
        'test'
      )
    ).toBe(false)
  })
})

describe('Validates if a start value is bigger than an end value', () => {
  test('Should return true', () => {
    expect(
      validator.endIsLessThanStartValue(
        5, 1
      )
    ).toBe(true)
  })
  test('Should return true', () => {
    expect(
      validator.endIsLessThanStartValue(
        61, 5
      )
    ).toBe(true)
  })
  test('Should return false', () => {
    expect(
      validator.endIsLessThanStartValue(
        1, 5
      )
    ).toBe(false)
  })
  test('Should return false', () => {
    expect(
      validator.endIsLessThanStartValue(
        4, 3012
      )
    ).toBe(false)
  })
})

describe('Validates if a html element is selected', () => {
  test('Should return true', () => {
    const div = document.createElement('div')
    div.setAttribute('class', 'templateBox')
    expect(
      validator.isAlreadySelected(
        div
      )
    ).toBe(true)
  })
  test('Should return false', () => {
    const div = document.createElement('div')
    expect(
      validator.isAlreadySelected(
        div
      )
    ).toBe(false)
  })
})
